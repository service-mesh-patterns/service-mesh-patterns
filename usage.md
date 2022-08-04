# Features in patterns and how to use them efficiently-
---

## *Pre-requisites and Purpose*
Each pattern/design in this repository has a comment on top defining the `Pre-requisites` in your infrastructure for a successful deployment along with the `Description` of the design, which is the expected result of deploying that specific design. If you wish to contribute in this repository with your designs, it will be recommended to follow the below convention to make your designs readable to other people. 
```
#Pre-requisite: ...
#Description: ...
```
## *DependsOn* 
Each service inside a pattern file has a dependsOn field which is an array of all the services that the current service depends on. This field should be used when the deployment of one of the service depends on some other set of services to be deployed once. Pattern engine creates a directed acyclic graphs of your services and does a concurrent graph processing to avoid unnecessary wait time. A good example of this would be when you want to deploy your app in a service but the prerequisite of your app is that the istio control plane should be running. You can create IstioInstallation as a service and add this service in the dependsOn array of your app's service. This way, first the istio control plane will be deployed and then you app. Refer to /samples/minimalistiobookinfo.yaml

---

## *References*  
While writing your pattern file, you might not want to hardcode some variables or you might want to reuse some existing variable written in some other service. Patterns allow you to refer to key-val of any service from any other service. 

Syntax is: **$(#ref.services.<service-name>.<key1>.<key2>)**  after .services you can recursively go inside and refer any field from within.

---
## *Importing pattern from service* : 
As your app configurations get bigger and bigger, the pattern file gets larger and larger. This can make managing and changing a pattern file a painful task. Patterns work on the principle that each pattern should declaratively do one thing and do it efficiently. So you can break your app configuration into multiple pattern files and call each of them from a single pattern file. This allows seperation of concerns and easier management. Any pattern that is imported can be configured depending on what all fields that pattern exposes externally. These exposed or externalized fields are present under *vars* field at the root level of pattern file. All the key-values present under *vars* can be configured by the calling service by passing the overriden key-values inside *settings* field of the calling service. Refer to samples/istiobookinfo.yaml for more context.
This feature also allows recursively wrapping patterns inside of patterns inside of patterns and so on.

syntax:
```yaml
type: $(#use <url of the called pattern>)
settings:
    key1: val1
    key2: val2
```
Note- If key-values are not overriden by the calling pattern then the default key-values in the vars field of called pattern will be used instead 