[1. 导入 SDK 包](#jump1)<br>
[2. 工程配置](#jump2)<br>
[3. Demo 工程](#jump3)<br>


------------

# <span id="jump1">1. 导入 SDK 包</span>

> 仅以 Xcode 工程作示例讲解。

## 1.1 获取 SDK 包 
从 [github](https://github.com/Avid-ly/Avidly-AASAccount-Demo "github") 获取工程：在目录`AvidlyAccountSdk_IOS/AvidlyAccountDemo/AvidlyAccountDemo/`中获取`AccountSDK`和`FacebookSDK`

|  目录名 |  包含文件 |
| ------------ | ------------ |
| AccountSDK  |  &bull;&ensp;AASAccount.framework<br>&bull;&ensp;AASAccount.bundle</br> |
| FacebookSDK  | &bull;&ensp;FBSDKLoginKit.framework<br>&bull;&ensp;FBSDKCoreKit.framework</br>&bull;&ensp;Bolts.framework  |

## 1.2 添加 SDK 包
1）添加 AccountSDK 和 Facebook SDK

请将`AASAccount.framework`和`AASAccountSDK.bundle`文件同时添加至 Xcode 工程目录下。

如需登录 Facebook，请将下载的 Facebook SDK 添加至 Xcode 工程目录下。

2）添加第三方依赖库

在`TARGETS > General > Link Binary With Libraries`中添加依赖库`AdSupport.framework`。

# <span id="jump2">2. 导入 SDK 包</span>
1）添加分类编译符

在`TARGETS > Build Setting > Linking > Other Linker Flags`中添加`-ObjC`。

2）在`info.plist`中添加以下节点，以兼容 http 模式。
```
&lt;key>NSAppTransportSecurity&lt;/key>
&lt;dict>
&lt;key>NSAllowsArbitraryLoads&lt;/key>
&lt;true/>
&lt;/dict>
```
3）在`info.plist`中添加以下节点，以使用 Facebook 的登录和对话框

> 需在 Facebook 后台注册应用信息后复制粘贴，以下参数仅供参考。

```json
&lt;key>CFBundleURLTypes&lt;/key>
&lt;array>
 &lt;dict>
  &lt;key>CFBundleURLSchemes&lt;/key>
  &lt;array>
   &lt;string>FB 应用信息&lt;/string>
  &lt;/array>
 &lt;/dict>
&lt;/array>
&lt;key>CFBundleVersion&lt;/key>
&lt;string>1&lt;/string>
&lt;key>FacebookAppID&lt;/key>
&lt;string>FBAppID&lt;/string>
&lt;key>FacebookDisplayName&lt;/key>
&lt;string>FB 应用名称&lt;/string>
```

FB 对话框：
```
&lt;key>LSApplicationQueriesSchemes&lt;/key>
&lt;array>
&lt;string>fbapi&lt;/string>
&lt;string>fb-messenger-share-api&lt;/string>
&lt;string>fbauth2&lt;/string>
&lt;string>fbshareextension&lt;/string>
&lt;/array>
```
4）在 Xcode 的`PROJECT > Info > Localizations`中，点击"+"添加语言。

> 目前支持：
>
> `简体中文（zh）`
>
> `英文（en）`
>
> `繁体中文（zh_Hant）`
>
> `繁体中文-中国台湾（zh_Hant_TW）`
>
> `繁体中文-中国香港(zh_Hant_HK)`
>
> `德语(de)`
>
> `泰语(th)`

# <span id="jump3">3. Demo工程</span>
为更好的了解 AASDK 的导入和使用，请参考 [Demo工程](https://github.com/Avid-ly/Avidly-AASAccount-Demo)。

# 4. 常见接入问题

如果接入完成之后编译不通过，可以查询[常见问题](http://doc.gamehaus.com/docs/show/440)来解决
