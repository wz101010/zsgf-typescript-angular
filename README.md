# zsgf-ng-client@2.0.1

## 使用方式

在你的 Angular 项目中，运行以下命令

```console
npm install zsgf-ng-client@2.0.1 --save
```

# ZSGF Angular 客户端 SDK

![NPM Version](https://img.shields.io/npm/v/zsgf-ng-client)

ZSGF Angular SDK 是一个为 Angular 应用程序设计的客户端库，让您能够轻松集成和使用 ZSGF API 服务。

## 📦 安装

使用 npm 安装：

```bash
npm install zsgf-ng-client
```

使用 yarn 安装：

```bash
yarn add zsgf-ng-client
```

## 🚀 快速开始

### 版本要求

- Angular 19.1.0+
- TypeScript 5.7.3+
- RxJS 7.8.0+
- Zone.js 0.15.0+

### 基本集成

最简单的集成方式，适用于不需要特殊配置的场景：

```typescript
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from 'zsgf-ng-client';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // 导入 SDK 模块
    ApiModule,
    // 确保 HttpClientModule 只在 AppModule 中导入一次
    // 详见：https://github.com/angular/angular/issues/20575
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 自定义配置

如果您需要自定义 API 基础路径、超时时间等配置：

```typescript
import { NgModule } from '@angular/core';
import { ApiModule, Configuration, ConfigurationParameters } from 'zsgf-ng-client';
import { AppComponent } from './app.component';

// 配置工厂函数
export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // API 服务器地址
    basePath: 'https://api.yourserver.com',
    // 请求超时时间（毫秒）
    timeout: 10000,
    // 默认请求头
    defaultHeaders: {
      'Content-Type': 'application/json'
    }
  };
  return new Configuration(params);
}

@NgModule({
  imports: [
    // 使用自定义配置初始化 SDK
    ApiModule.forRoot(apiConfigFactory)
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 配置访问令牌（推荐用于生产环境）

如果您的 API 需要身份验证，可以配置动态访问令牌：

```typescript
import { NgModule } from '@angular/core';
import { ApiModule, Configuration } from 'zsgf-ng-client';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';

@NgModule({
  imports: [ApiModule],
  declarations: [AppComponent],
  providers: [
    {
      provide: Configuration,
      useFactory: (authService: AuthService) => new Configuration({
        // 从环境配置中获取 API 地址
        basePath: environment.apiUrl,
        // 动态获取访问令牌
        accessToken: () => authService.getAccessToken(),
        // 或者如果令牌是异步获取的
        // accessToken: authService.getAccessToken.bind(authService)
      }),
      deps: [AuthService],
      multi: false
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## 💡 使用服务

配置完成后，您可以在组件或服务中注入并使用 API 服务：

```typescript
import { Component, OnInit } from '@angular/core';
import { AppService } from 'zsgf-ng-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <h2>API 数据</h2>
      <div *ngIf="loading">加载中...</div>
      <div *ngIf="data">{{ data | json }}</div>
      <div *ngIf="error" class="error">错误：{{ error }}</div>
    </div>
  `
})
export class ExampleComponent implements OnInit {
  data: any;
  loading = false;
  error: string | null = null;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.error = null;

    this.appService.getData().subscribe({
      next: (response) => {
        this.data = response;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || '请求失败';
        this.loading = false;
        console.error('API 错误:', err);
      }
    });
  }
}
```

### 处理响应和错误

```typescript
import { Component } from '@angular/core';
import { AppService } from 'zsgf-ng-client';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-advanced-example',
  template: '...'
})
export class AdvancedExampleComponent {
  constructor(private appService: AppService) {}

  async fetchDataWithErrorHandling() {
    try {
      this.loading = true;
      
      const result = await this.appService.getData()
        .pipe(
          catchError(error => {
            // 统一错误处理
            console.error('API 调用失败:', error);
            this.handleApiError(error);
            return of(null); // 返回默认值
          }),
          finalize(() => {
            this.loading = false;
          })
        )
        .toPromise();

      if (result) {
        this.data = result;
      }
    } catch (error) {
      console.error('意外错误:', error);
    }
  }

  private handleApiError(error: any) {
    if (error.status === 401) {
      // 未授权，跳转到登录页
      this.router.navigate(['/login']);
    } else if (error.status >= 500) {
      // 服务器错误
      this.showMessage('服务器暂时无法响应，请稍后重试');
    } else {
      // 其他错误
      this.showMessage(error.message || '请求失败');
    }
  }
}
```

## 🔧 环境配置

建议在不同环境中使用不同的配置：

**src/environments/environment.ts** (开发环境)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  timeout: 30000
};
```

**src/environments/environment.prod.ts** (生产环境)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yourserver.com',
  timeout: 10000
};
```

## 📋 配置选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `basePath` | string | - | API 服务器基础路径 |
| `accessToken` | string \| (() => string) | - | 访问令牌或获取令牌的函数 |
| `username` | string | - | HTTP 基础认证用户名 |
| `password` | string | - | HTTP 基础认证密码 |
| `apiKeys` | object | - | API 密钥配置 |
| `defaultHeaders` | object | - | 默认请求头 |
| `timeout` | number | - | 请求超时时间（毫秒） |

## ⚠️ 注意事项

1. **HttpClientModule 导入**：确保 `HttpClientModule` 只在应用的根模块（通常是 `AppModule`）中导入一次。

2. **令牌刷新**：如果使用动态令牌，确保您的 `AuthService` 能够正确处理令牌过期和刷新。

3. **错误处理**：建议实现全局错误处理器来统一处理 API 错误。

4. **类型安全**：SDK 提供完整的 TypeScript 类型定义，充分利用类型检查来避免运行时错误。

## 🔗 相关链接

- [Angular 官方文档](https://angular.io/)
- [RxJS 文档](https://rxjs.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/)