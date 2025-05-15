# zsgf-ng-client@1.0.25

## 使用方式

在你的 Angular 项目中，运行以下命令

```console
npm install zsgf-ng-client@1.0.25 --save
```

![NPM Version](https://img.shields.io/npm/v/zsgf-ng-client)

无初始化配置

```typescript
import { ApiModule } from 'zsgf-ng-client';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ApiModule,
       //确保只在AppModule中导入HttpClientModule，
       //看https://github.com/angular/angular/issues/2057
        HttpClientModule
    ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

需要初始化配置

```typescript
import { ApiModule, Configuration, ConfigurationParameters } from 'zsgf-ng-client';

export function apiConfigFactory (): Configuration {
  const params: ConfigurationParameters = {
   //在此处设置配置参数。
  }
  return new Configuration(params);
}

@NgModule({
    imports: [ ApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

配置访问令牌

```typescript
import { ApiModule, Configuration } from 'zsgf-ng-client';

@NgModule({
    imports: [ ApiModule ],
    declarations: [ AppComponent ],
    providers: [
      {
        provide: Configuration,
        useFactory: (authService: AuthService) => new Configuration(
          {
            basePath: environment.apiUrl,
            accessToken: authService.getAccessToken.bind(authService)
          }
        ),
        deps: [AuthService],
        multi: false
      }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

使用服务

```typescript
import { AppService } from 'zsgf-ng-client';

export class AppComponent {
    constructor(private appService: AppService) { }
}
```