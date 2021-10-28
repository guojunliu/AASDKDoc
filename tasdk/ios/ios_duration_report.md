[1. 概述](#jump1)<br>
[2. 添加引用](#jump2)<br>
[3. 初始化上报信息](#jump3)<br>
[4. 生命周期回调](#jump4)<br>
[5. 最佳实践](#jump5)<br>

------------
# <span id="jump1">1. 概述</span>

如游戏需要上报游戏时长，请使用以下 API 完成相应在线时长的上报。

使用前需要先初始化SDK
&ensp;
# <span id="jump2">2. 添加引用</span>

在需使用的类中导入`TraceAnalysis.h`：

```Objective-C
#import  &lt;TraceAnalysisSDK/TraceAnalysis.h>
```
&ensp;
# <span id="jump3">3. 初始化上报信息</span>

```Objective-C
+ (void)initDurationReportWithServerName:(NSString *)serverName serverZone:(NSString *)serverZone uid:(NSString *)uid ggid:(NSString *)ggid;
```

参数说明

|参数名|说明|
|:----  |-----   |
|serverName |游戏服务器,可以为空  |
|serverZone |玩家所在区服，可以为空 |
|uid |游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）,不可为空  |
|ggid |登录sdk中的用户ID,可以为空 |

调用示例：

```Objective-C
[TraceAnalysis initDurationReportWithServerName:@"server01" serverZone:@"zone01" uid:@"uid001" ggid:@"ggid001"];
```
&ensp;
# <span id="jump4">4. 生命周期回调</span>

请在游戏主activity或AppDelegate中对应的生命周期回调方法中调用。

```Objective-C
+ (void)becomeActive;

+ (void)resignActive;
```

调用示例：

```Objective-C
- (void)applicationDidBecomeActive:(UIApplication *)application {
    [TraceAnalysis becomeActive];
}

- (void)applicationWillResignActive:(UIApplication *)application {
    [TraceAnalysis resignActive];
}
```

&ensp;
# <span id="jump5">5. 最佳实践</span>

```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    [TraceAnalysis initWithProductId:@" product id" ChannelId:@"your channel id" AppID:@"id + your app id"];
    [TraceAnalysis initDurationReportWithServerName:@"your server name" serverZone:@"your server zone" uid:@"your uid" ggid:@"your ggid"];
    return YES;
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    [TraceAnalysis becomeActive];
}

- (void)applicationWillResignActive:(UIApplication *)application {
    [TraceAnalysis resignActive];
}
```