|API名称|描述|使用场景|API|
|:--------------|--------------------|-----------------|-------------------|
|SDK初始化|通过该API，初始化SDK|在app启动的时候调用|`+(void)initWithProductId:(NSString*)productIdChannelId:(NSString*)channelIdAppID:(NSString*)appId;`|
|禁止使用隐私信息|将用户拒绝隐私授权同步给SDK|当用户明确拒绝授权使用隐私时调用|`+(void)disableAccessPrivacyInformation;`|
|keyValue打点|通过该API，可以实现事件打点|当需要事件打点时调用|`+(void)logWithKey:(NSString*)keyvalue:(id)value;+(void)logWithKey:(NSString*)keyvalue:(id)value;`|
|计数打点|累积事件计算打点|当需要统计某个事件发生的次数时使用|`+(void)countWithKey:(NSString*)key;`|
|游客登录上报|统计游客登录事件|游客登录成功后调用|`+(void)guestLoginWithGameId:(NSString*)playerId;`|
|Facebook登录上报|统计Facebook登录事件|Facebook登录成功后调用|`+(void)facebookLoginWithGameId:(NSString*)playerIdOpenId:(NSString*)openIdOpenToken:(NSString*)openToken;`|
|通用登录上报|通用的统计登录事件方法|登录成功后调用|`+(void)logCommonLoginWithType:(NSString*)loginTypeplayerId:(NSString*)playerIdloginToken:(NSString*)loginTokenextension:(NSDictionary<NSString*,NSString*>*)extension;`|
|AAS登录上报|统计AASDK登录事件|AASDK返回登录成功后调用|`+(void)logAASLoginWithType:(NSString*)loginTypeplayerId:(NSString*)playerIdloginToken:(NSString*)loginTokenggid:(NSString*)ggidextension:(NSDictionary<NSString*,NSString*>*)extension;`|
|内购支付上报|统计内购事件|内购支付成功后调用|`+(void)LogZFWithPlayerId:(NSString*)playerIdreceiptDataString:(NSString*)receiptDataString;`|
|内购支付上报|统计内购事件（带区服参数）|内购支付成功后调用|`+(void)LogZFWithPlayerId:(NSString*)playerIdgameAccountServer:(NSString*)gameAccountServerreceiptDataString:(NSString*)receiptDataString;`|
|在线时长上报|初始化在线时长上报功能|在需要统计在线时长的时候调用|`+(void)initDurationReportWithServerName:(NSString*)serverNameserverZone:(NSString*)serverZoneuid:(NSString*)uidggid:(NSString*)ggid;`|
|在线时长上报-回到前台|在线时长上报回调前台事件|在初始化在线时长上报功能后，当app回到前台时调用|`+(void)becomeActive;`|
|在线时长上报-回到后台|在线时长上报回调后台事件|在初始化在线时长上报功能后，当app回到后台时调用|`+(void)resignActive;`|
|推广用户标签|获取推广用户的标签|在需要推广用户的标签时调用|`+(void)getConversionData:(NSDictionary*)conversionInfocompletion:(void(^)(NSError*error,NSString*campaign))completionBlock;`|
|设置appsFlyerId|将appsFlyerId同步给SDK|在AppsFlyerSDK初始化后，当能获取到appsFlyerId值时调用|`+(void)setAppsFlyerId:(NSString*)appsFlyerId;`|
|付费用户标签|获取付费用户的标签|在需要付费用户的标签时调用|`+(void)getPayUserLayerWithCmpletion:(void(^)(NSError*error,NSString*payUserLayer))completionBlock;`|
|广告用户标签|获取广告用户的标签|在需要广告用户的标签时调用|`+(void)getAdUserLayerWithCmpletion:(void(^)(NSError*error,NSString*adUserLayer))completionBlock;`|