[1. 引用 SDK ](#jump1)<br>
[2. 初始化 SDK](#jump2)<br>
[3. 设置登陆回调](#jump3)<br>
[4. 调用登陆方法](#jump4)<br>
[5. 进入用户中心](#jump5)<br>
[6. 获取 Facebook 的 token 值](#jump6)<br>

------------

<br>

# <span id="jump1">一、 引用 SDK</span>

1）在 AppDelegate.m 添加如下引用

```
#import &lt;AASAccount/AASAccountSDK.h>
```

2）在 App 启动入口方法中初始化 SDK

```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

	[AASAccountSDK application:application didFinishLaunchingWithOptions:launchOptions];  
	return YES;
}
```

3）在 AppDelegate.m 中添加唤醒第三方 App

```
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {

	[AASAccountSDK application:application openURL:url sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey] annotation:options[UIApplicationOpenURLOptionsAnnotationKey]];

	return YES;
}
```

<br>

# <span id="jump2">二、 初始化 SDK</span>

```
/**
* @ param productId：产品 ID
**/
+ (void)initSDK:(NSString *)productId
```

示例：

```
/* 
初始化 AccountSDK
@param productId 产品 ID，需联系项目经理获取
*/
[AASAccountSDK initSDK:@"123456"];
```

<br>

# <span id="jump3">三、 设置登陆回调</span>

```
/*
@param model 登录类型
model.gameGuestId 获取 gameGuestId
model.signedRequest 获取 token
*/
+ (void)setLoginCallback:(void (^)(AASAccountLoginModel *model))succeedCallback errorCallback:(void (^)(NSError *error))errorCallback;
```

回调中`AASAccountLoginModel`的属性列表如下

|参数名|说明|
|:----  |-----   |
|gameGuestId |AASDK中用户唯一标识   |
|signedRequest | 校验标识（非必有）  |
|loginMode |  登录方式  |


其中`loginMode`字段为登录方式，对照如下

```
/*
 loginMode 字段解释，可参见AASEnumDefine.h中枚举
 1  -->  GUEST
 2  -->  AAS
 3  -->  FACEBOOK
 4  -->  GOOGLEPLAY
 6  -->  TWITTER
 8  -->  INSTAGRAM
 9  -->  GAMECENTER
 10 -->  ULT
 11 -->  APPLE
 */
```

- 当接收到此回调时，说明发生了登录行为。
- 如本次回调中的gameGuestId与上次回调中的gameGuestId有变化，说明用户切换了账号

示例：
```
[AASAccountSDK setLoginCallback:^(AASAccountLoginModel * _Nonnull model) {

 	dispatch_async(dispatch_get_main_queue(), ^{
 		[self ->_loginButton setTitle:[NSString stringWithFormat:@"ID:%@",model.signedRequest] forState:UIControlStateNormal];
	});
	
} errorCallback:^(NSError * _Nonnull error) {

 	dispatch_async(dispatch_get_main_queue(), ^{
 		[self ->_loginButton setTitle:[NSString stringWithFormat:@"error:%i",(int)error.code] forState:UIControlStateNormal];
	});
	
}];
```

<br>

# <span id="jump4">四、 调用登陆方法</span>

```
+ (void)login;
```

示例：
```
[AASAccountSDK login];
```

<br>

# <span id="jump5">五、 进入用户中心</span>

```
-(void)showUserCenter:(UIViewController *)vc;
```

示例：

```
[AASAccountSDK showUserCenter:self];
```

<br>

# <span id="jump6">六、 获取 Facebook 的 token 值</span>

```
+ (NSString *)getFacebookLoginedToken;
```
示例：
```
NSString *string = [AASAccountSDK getFacebookLoginedToken];
```