window.AZURE_DB = {
  "meta": {
    "version": "12.0",
    "note": "v12: drops, chests, item effects, themes, admin guide"
  },
  "bank": {
    "easy": [
      {
        "id": "easy_0",
        "category": "Cloud concepts",
        "q": "A company wants to stop buying its own servers and instead pay only for what it actually uses over the internet. What is this model generally called?",
        "a": [
          "Cloud computing",
          "On-premises hosting",
          "Edge computing",
          "Virtualization"
        ],
        "c": 0,
        "e": "Cloud computing is the delivery of computing resources (servers, storage, networking, software) over the internet with pay-as-you-go billing. Edge computing processes data close to its source, not necessarily in the cloud. On-premises is the opposite of cloud — your own hardware in your own building. Virtualization is one of the technologies the cloud runs on, but it isn't the same thing as the cloud itself."
      },
      {
        "id": "easy_1",
        "category": "Cloud models",
        "q": "A team needs to rent virtual servers and disks but wants to manage the operating system and applications themselves. Which service model does this describe?",
        "a": [
          "FaaS",
          "IaaS",
          "PaaS",
          "SaaS"
        ],
        "c": 1,
        "e": "IaaS (Infrastructure as a Service) provides basic building blocks like VMs and disks, while the customer manages the OS, runtime, and applications. PaaS would also manage the runtime environment, so you wouldn't have direct control over the OS. SaaS is a finished application with no infrastructure management at all. FaaS (Functions as a Service) runs without any servers whatsoever."
      },
      {
        "id": "easy_2",
        "category": "Cloud models",
        "q": "A development team wants to deploy code without worrying about the operating system, patching, or server scaling. Which model lets them do that?",
        "a": [
          "On-premises",
          "Colocation",
          "PaaS",
          "IaaS"
        ],
        "c": 2,
        "e": "PaaS (Platform as a Service) like Azure App Service manages the runtime environment, OS, and scaling for you, so the team can focus purely on code. IaaS would still require managing the OS and patches. On-premises means owning physical infrastructure. Colocation is placing your own hardware in someone else's datacenter, which solves none of these concerns."
      },
      {
        "id": "easy_3",
        "category": "Cloud models",
        "q": "A company wants to use a ready-made email application through a browser without installing anything locally. What model is this?",
        "a": [
          "PaaS",
          "Hybrid cloud",
          "IaaS",
          "SaaS"
        ],
        "c": 3,
        "e": "SaaS (Software as a Service) like Microsoft 365 is a complete application available over the internet, where the provider manages absolutely everything. IaaS and PaaS require the customer to deploy or manage part of the solution themselves. Hybrid cloud describes a combination of environments, not a type of software service."
      },
      {
        "id": "easy_4",
        "category": "Cloud concepts",
        "q": "Microsoft operates datacenters that anyone with a subscription can access, sharing resources among many customers. What type of cloud is this?",
        "a": [
          "Public cloud",
          "Community cloud",
          "Private cloud",
          "On-premises"
        ],
        "c": 0,
        "e": "Public cloud is operated by a provider like Microsoft and shares infrastructure among multiple customers who are logically isolated from each other. Private cloud is dedicated to a single organization. Community cloud is shared by a group of organizations with common requirements. On-premises means owning infrastructure entirely outside the cloud."
      },
      {
        "id": "easy_5",
        "category": "Cloud concepts",
        "q": "Due to regulations, a bank must operate infrastructure dedicated exclusively to itself, not shared with other companies. What type of cloud is this?",
        "a": [
          "Public cloud",
          "Private cloud",
          "Multi-cloud",
          "Community cloud"
        ],
        "c": 1,
        "e": "Private cloud is infrastructure dedicated to a single organization, whether run locally or hosted by a provider. Public cloud shares resources among multiple customers. Multi-cloud means using several different providers at once. Community cloud is shared by several organizations with the same needs, not just one company."
      },
      {
        "id": "easy_6",
        "category": "Cloud concepts",
        "q": "A company keeps sensitive data locally for regulatory reasons but runs its customer-facing web app on public Azure. What approach is this?",
        "a": [
          "Private cloud only",
          "Multi-tenant cloud",
          "Hybrid cloud",
          "Public cloud only"
        ],
        "c": 2,
        "e": "Hybrid cloud combines public cloud with on-premises or private infrastructure, typically during a gradual migration or due to data residency requirements. Purely public or private cloud would mean using only one of these environments. Multi-tenant describes resource sharing among customers inside a public cloud, not a combination of environments."
      },
      {
        "id": "easy_7",
        "category": "Cost",
        "q": "A company buys servers for its own datacenter and pays the full amount upfront. What is this type of expense called?",
        "a": [
          "Total cost of ownership",
          "Contractual availability guarantee",
          "Operating expense (OpEx)",
          "Capital expense (CapEx)"
        ],
        "c": 3,
        "e": "CapEx (Capital Expenditure) is a one-time investment in long-term assets, like owned servers. OpEx, by contrast, is ongoing operational cost spread over time. TCO is a total cost calculation over a period, not a type of expense itself. SLA is a service level agreement and has nothing to do with the type of cost."
      },
      {
        "id": "easy_8",
        "category": "Cost",
        "q": "A company pays every month only for the Azure resources it actually used, with no upfront investment. What is this cost model called?",
        "a": [
          "OpEx",
          "Fixed budget",
          "Amortization",
          "CapEx"
        ],
        "c": 0,
        "e": "OpEx (Operational Expenditure) is ongoing operational cost that rises or falls based on actual usage — exactly how the cloud works. CapEx, in contrast, is a one-time upfront investment. A fixed budget would mean paying the same amount regardless of usage, which contradicts the cloud principle. Amortization is an accounting method for spreading the cost of an asset, not a cloud payment model."
      },
      {
        "id": "easy_9",
        "category": "Cost",
        "q": "The price of an Azure service changes based on how much compute power, storage, or data transfer a company actually consumes. What principle is this?",
        "a": [
          "A prepaid annual license paid once",
          "A consumption-based model tied to actual usage",
          "A flat rate regardless of usage",
          "A fixed monthly fee independent of usage"
        ],
        "c": 1,
        "e": "A consumption-based model means the price directly tracks actual resource usage — the more you use, the more you pay, and vice versa. A flat rate or fixed monthly fee would mean the same price regardless of usage. A prepaid license is payment upfront for a set period, which works against the pay-for-what-you-use principle."
      },
      {
        "id": "easy_10",
        "category": "Cloud concepts",
        "q": "An online store expects a tenfold spike in traffic during the holidays and wants server capacity to adjust automatically. Which cloud trait makes this possible?",
        "a": [
          "Data redundancy",
          "Cross-region replication",
          "Automatic scalability",
          "Hardware virtualization"
        ],
        "c": 2,
        "e": "Scalability is the ability to increase or decrease resource capacity based on current need, whether manually or automatically. Redundancy means duplicate resources for resilience against failure, not a response to load. Replication copies data between locations for availability. Virtualization is a technology enabling multiple virtual machines on one piece of hardware, but on its own it doesn't address capacity adjustment."
      },
      {
        "id": "easy_11",
        "category": "Cloud concepts",
        "q": "An application automatically adds servers under increased load and removes them once the load drops, without administrator intervention. What is this trait called?",
        "a": [
          "Geo-replication",
          "High availability",
          "Scalability",
          "Elasticity"
        ],
        "c": 3,
        "e": "Elasticity is a specific type of scalability where capacity automatically and rapidly adjusts in real time in both directions — up and down. Scalability is the broader term that also includes manual capacity increases. High availability concerns resilience against outages, not reacting to load. Geo-replication copies data between regions and has nothing to do with adjusting performance."
      },
      {
        "id": "easy_12",
        "category": "Reliability",
        "q": "An e-commerce site wants its web app to stay available to customers even during planned maintenance or a minor outage of one server. What does it need to ensure?",
        "a": [
          "High availability of the service",
          "A disaster recovery plan",
          "The ability to scale quickly",
          "Lower operating costs"
        ],
        "c": 0,
        "e": "High availability ensures a service stays functional even during minor outages or maintenance, typically through redundancy within a region. Disaster recovery addresses recovery after a major catastrophe, not routine operational resilience. Scalability concerns capacity in response to load, not availability during an outage. Lower costs have no direct connection to service availability."
      },
      {
        "id": "easy_13",
        "category": "Reliability",
        "q": "After a complete datacenter outage due to a fire, a company needs to restore its services in a different location with minimal data loss. What process does this describe?",
        "a": [
          "Scalability",
          "Disaster recovery",
          "Load balancing",
          "High availability"
        ],
        "c": 1,
        "e": "Disaster recovery is the process and plan for restoring services after a major catastrophe, typically including replication to another region and defined RTO/RPO targets. High availability handles routine minor outages, not the catastrophic loss of an entire datacenter. Scalability concerns capacity, not recovery after a disaster. Load balancing spreads traffic across servers but on its own doesn't provide disaster recovery."
      },
      {
        "id": "easy_14",
        "category": "Architecture",
        "q": "A company wants to deploy an application as close as possible to its European customers for low latency. What in Azure determines the geographic location of its resources?",
        "a": [
          "Resource group",
          "Subscription",
          "Region",
          "Management group"
        ],
        "c": 2,
        "e": "A region is a geographic area containing one or more Azure datacenters, and choosing a region determines where resources physically run. A resource group is a logical container for organizing resources, not a physical location. A subscription is a billing and access boundary. A management group organizes multiple subscriptions and has nothing directly to do with physical location."
      },
      {
        "id": "easy_15",
        "category": "Architecture",
        "q": "To prevent an outage in one datacenter from affecting the whole application, a company spreads its servers across three physically separate datacenters in the same region. What did it just use?",
        "a": [
          "Multiple geographic regions",
          "Multiple company subscriptions",
          "Multiple resource groups",
          "Availability zones within a region"
        ],
        "c": 3,
        "e": "Availability zones are physically separate datacenters with their own power and cooling within a single region, designed exactly for this type of resilience. Multiple regions would mean geographically distant locations, not zones within one region. Resource groups are just a logical organization of resources. Subscriptions handle billing and access, not physical placement."
      },
      {
        "id": "easy_16",
        "category": "Management",
        "q": "A team wants to group a web app and its database into a single unit that can be managed and deleted together. What will it use for this?",
        "a": [
          "Resource group",
          "Management group",
          "Tenant",
          "Subscription"
        ],
        "c": 0,
        "e": "A resource group is a logical container for resources that share a lifecycle — they can be managed, cost-tracked, and deleted together as a unit. A subscription is a wider billing boundary that contains multiple resource groups. A management group organizes multiple subscriptions at once. A tenant represents a Microsoft Entra ID instance for the whole organization, not a container for specific resources."
      },
      {
        "id": "easy_17",
        "category": "Management",
        "q": "A company needs a billing and access boundary that contains all of its resource groups and resources. What plays this role in Azure?",
        "a": [
          "Availability zone",
          "Subscription",
          "Resource group",
          "Tag"
        ],
        "c": 1,
        "e": "A subscription is the boundary for billing, quotas, and access to Azure resources, and it contains one or more resource groups. A resource group is a smaller logical unit inside a subscription. A tag is a metadata label for organizing resources, not a billing boundary. An availability zone is a physical location, not an administrative or billing boundary."
      },
      {
        "id": "easy_18",
        "category": "Management",
        "q": "A corporation with three divisions wants to apply the same security rules across all its subscriptions at once, instead of configuring them separately for each. What will it use for this?",
        "a": [
          "A protective resource lock",
          "A set of descriptive tags",
          "A hierarchy of management groups",
          "One shared resource group"
        ],
        "c": 2,
        "e": "A management group organizes multiple subscriptions into a hierarchy and lets you centrally apply governance policies, like RBAC or Azure Policy, to the whole group at once. A resource group only works within a single subscription. A tag just labels resources with metadata and doesn't enforce rules. A resource lock protects an individual resource from deletion or change, but doesn't apply rules across subscriptions."
      },
      {
        "id": "easy_19",
        "category": "Identity",
        "q": "A company wants to centrally manage employee identities, their sign-ins, and access to cloud applications. Which Azure service provides this?",
        "a": [
          "The Resource Manager layer",
          "The Azure Policy tool",
          "The Azure Monitor tool",
          "The Microsoft Entra ID service"
        ],
        "c": 3,
        "e": "Microsoft Entra ID (formerly Azure Active Directory) is a cloud identity and access management service for managing users, groups, sign-ins, and applications. Azure Monitor collects performance metrics and logs and has nothing to do with identities. Azure Policy enforces configuration rules on resources. Resource Manager is the layer for deploying and managing resources, not identities."
      },
      {
        "id": "easy_20",
        "category": "Identity",
        "q": "A user enters their name and password so the system can verify they really are who they claim to be. What is this process called?",
        "a": [
          "Authentication",
          "Authorization",
          "Delegation",
          "Federation"
        ],
        "c": 0,
        "e": "Authentication is the process of verifying identity — who you are. Authorization, by contrast, determines what you're allowed to do once your identity has been verified. Federation links identities across different systems or organizations. Delegation means transferring permissions to another person or service, not verifying identity itself."
      },
      {
        "id": "easy_21",
        "category": "Identity",
        "q": "After a user successfully signs in, the system still decides whether they're allowed to delete files in a shared folder. What is this step called?",
        "a": [
          "Tokenization",
          "Authorization",
          "Single sign-on",
          "Authentication"
        ],
        "c": 1,
        "e": "Authorization determines what actions a verified identity is allowed to perform, typically through assigned roles or permissions. Authentication already happened earlier when the password was verified. Single sign-on enables one login across multiple apps, but on its own doesn't address specific permissions. Tokenization is a technique for replacing sensitive data with tokens and has nothing directly to do with permissions."
      },
      {
        "id": "easy_22",
        "category": "Identity",
        "q": "A bank wants employees to verify with a code from their phone in addition to their password. What mechanism provides this?",
        "a": [
          "Conditional Access",
          "Single sign-on (SSO)",
          "Multi-factor authentication (MFA)",
          "Role-based access control"
        ],
        "c": 2,
        "e": "Multi-factor authentication (MFA) requires more than one verification factor at sign-in, typically a password plus a phone code or biometrics. Single sign-on addresses signing into multiple apps at once, not the number of verification factors. Conditional Access can require MFA based on conditions, but on its own isn't a second factor. RBAC handles permissions, not the method of verifying identity."
      },
      {
        "id": "easy_23",
        "category": "Identity",
        "q": "A company wants to automatically require MFA only when an employee signs in from an unfamiliar country or an unrecognized device. Which service enables this?",
        "a": [
          "Resource lock",
          "Multi-factor authentication",
          "Microsoft Entra ID alone",
          "Conditional Access"
        ],
        "c": 3,
        "e": "Conditional Access evaluates conditions like location, device, or risk level and dynamically decides whether to allow access, require MFA, or block it. MFA alone is just the verification mechanism, not the conditional logic for when to require it. Entra ID by itself without Conditional Access doesn't offer this kind of conditional behavior. A resource lock protects resources from deletion and has nothing to do with sign-in."
      },
      {
        "id": "easy_24",
        "category": "Governance",
        "q": "A manager needs to grant an employee permission to read data in a specific resource group, but not delete it or change other people's permissions. What will they use for this?",
        "a": [
          "A role assignment via RBAC at that scope",
          "A set of rules defined in Azure Policy",
          "A protective resource lock",
          "A descriptive tag assigned to the resource"
        ],
        "c": 0,
        "e": "RBAC assigns specific roles (such as Reader) at a given scope, like a resource group, precisely controlling what that identity is allowed to do. Azure Policy enforces configuration rules on resources, not who has what access. A resource lock prevents deletion or modification for everyone, not selectively by role. A tag just labels a resource with metadata and has no effect on permissions."
      },
      {
        "id": "easy_25",
        "category": "Governance",
        "q": "A company wants to enforce that all newly created storage accounts are automatically encrypted, otherwise they can't be created. Which tool ensures this?",
        "a": [
          "RBAC",
          "Azure Policy",
          "Resource group",
          "Azure Advisor"
        ],
        "c": 1,
        "e": "Azure Policy lets you define rules that are enforced on resources, including blocking the creation of a resource that doesn't meet the rule. RBAC handles who has what permissions, not what properties a resource must have. A resource group is just an organizational container. Azure Advisor gives recommendations, but doesn't actively enforce or block anything."
      },
      {
        "id": "easy_26",
        "category": "Governance",
        "q": "An administrator wants to protect a critical production database from being accidentally deleted by anyone who otherwise has sufficient permissions. What will they use?",
        "a": [
          "A role assignment via RBAC",
          "A rule in Azure Policy",
          "A resource lock",
          "A descriptive tag on the resource"
        ],
        "c": 2,
        "e": "A resource lock (CanNotDelete or ReadOnly) adds a protective layer to a specific resource regardless of what RBAC permissions a user has. Azure Policy enforces configuration standards, but isn't primarily meant to protect a single specific resource from deletion. RBAC determines permissions, but even a user with full access could still delete the resource without a lock. A tag is just a metadata label with no protective function."
      },
      {
        "id": "easy_27",
        "category": "Governance",
        "q": "The finance department wants to easily distinguish in billing which costs belong to Project Alpha versus Project Beta. What will they best use for this?",
        "a": [
          "Management group",
          "Resource lock",
          "Azure Policy",
          "Tag"
        ],
        "c": 3,
        "e": "Tags are paired metadata (key-value) assigned to resources, which can be used to filter billing by project, department, or environment. A resource lock protects a resource from deletion and has nothing to do with billing. A management group organizes subscriptions and is too coarse-grained for distinguishing individual projects. Azure Policy enforces rules but doesn't itself generate a cost breakdown."
      },
      {
        "id": "easy_28",
        "category": "Monitoring",
        "q": "An operations team wants to get alerted when CPU usage on a production server exceeds 90%. Which service provides this kind of monitoring and alerting?",
        "a": [
          "Azure Monitor",
          "Azure Policy",
          "Resource group",
          "Azure Advisor"
        ],
        "c": 0,
        "e": "Azure Monitor collects metrics and logs from resources in real time and lets you set alerts based on them, exactly for this purpose. Azure Advisor gives one-time optimization recommendations, not ongoing real-time monitoring. Azure Policy enforces configuration rules and doesn't track performance metrics. A resource group is an organizational container with no monitoring function."
      },
      {
        "id": "easy_29",
        "category": "Monitoring",
        "q": "A security team needs to search through a large volume of logs from multiple sources using a query language to find suspicious sign-in attempts. What will they use for this?",
        "a": [
          "Azure Policy",
          "Log Analytics",
          "Azure Advisor",
          "Resource lock"
        ],
        "c": 1,
        "e": "Log Analytics is part of Azure Monitor designed for storing and querying large volumes of logs using the KQL query language, ideal for finding patterns like suspicious sign-ins. Azure Advisor provides general recommendations, not a log analysis tool. A resource lock protects resources from deletion. Azure Policy enforces configuration standards and isn't used for searching logs."
      },
      {
        "id": "easy_30",
        "category": "Management",
        "q": "A finance manager wants personalized recommendations on how to reduce costs, improve security, and increase the reliability of their Azure environment. What will they use?",
        "a": [
          "Azure Policy",
          "Cost Management",
          "Azure Advisor",
          "Azure Monitor"
        ],
        "c": 2,
        "e": "Azure Advisor analyzes the environment's configuration and gives specific recommendations across four areas: cost, security, reliability, and performance. Azure Monitor collects metrics and logs, but doesn't itself actively recommend specific actions across these areas. Azure Policy enforces already-decided rules. Cost Management focuses only on cost, not all four areas at once."
      },
      {
        "id": "easy_31",
        "category": "Cost",
        "q": "An IT lead wants visibility into current monthly spend across all projects and to set up alerts when the budget is exceeded. Which service will they use?",
        "a": [
          "Azure Advisor",
          "Azure Policy",
          "Pricing calculator",
          "Cost Management"
        ],
        "c": 3,
        "e": "Cost Management tracks actual spend in real time, lets you set budgets with alerts, and analyze costs by various criteria. Azure Advisor gives recommendations but doesn't offer ongoing tracking of actual spend. The pricing calculator is for estimating cost before deployment, not tracking costs already incurred. Azure Policy enforces configuration rules, not budget tracking."
      },
      {
        "id": "easy_32",
        "category": "Cost",
        "q": "Before deploying a new solution, an architect wants to estimate the monthly cost of a specific combination of VMs, storage, and networking. What will they use for this?",
        "a": [
          "Pricing calculator",
          "Cost Management",
          "TCO calculator",
          "Azure Advisor"
        ],
        "c": 0,
        "e": "The pricing calculator is built exactly for estimating the cost of a specific service configuration before it's deployed. Cost Management tracks costs that have already been incurred, not a hypothetical estimate beforehand. Azure Advisor gives recommendations for an already-existing environment. The TCO calculator compares on-premises costs with the cloud over a longer horizon, not the price of a specific configuration."
      },
      {
        "id": "easy_33",
        "category": "Compute",
        "q": "A company needs full control over a server's operating system, including installing custom software and OS-level configuration. Which Azure service will they use?",
        "a": [
          "Azure Container Instances",
          "Azure Virtual Machines",
          "Azure App Service",
          "Azure Functions"
        ],
        "c": 1,
        "e": "Azure Virtual Machines provide full control over the OS, similar to a physical server, including installing any software you want. Azure Functions runs without servers and you don't manage the OS at all. Azure App Service manages the OS and runtime for you, so you don't have direct OS access. Azure Container Instances runs containers without needing to manage the host machine's OS."
      },
      {
        "id": "easy_34",
        "category": "Compute",
        "q": "A developer wants to deploy a Python web app without having to manage a server, OS, or scaling — just upload the code. Which service will they choose?",
        "a": [
          "Azure Bastion",
          "Azure Virtual Machines",
          "Azure App Service",
          "Azure Virtual Network"
        ],
        "c": 2,
        "e": "Azure App Service is a fully managed PaaS platform for web apps, where Azure handles the OS, runtime, and scaling for the developer. Azure Virtual Machines would still require manually managing the entire OS. Azure Virtual Network is for connecting and isolating resources on a network, not hosting applications. Azure Bastion provides secure access to VMs and has nothing to do with hosting a web app."
      },
      {
        "id": "easy_35",
        "category": "Compute",
        "q": "An application has a short function that should run only when a new file is uploaded to storage, and shouldn't run at all the rest of the time. What will they choose?",
        "a": [
          "Azure Virtual Machines",
          "Azure Kubernetes Service",
          "Azure App Service",
          "Azure Functions"
        ],
        "c": 3,
        "e": "Azure Functions is a serverless service designed exactly for short tasks triggered by an event, like a file upload, and you only pay for the actual runtime. Azure Virtual Machines run continuously and need to be managed even outside actual usage. Azure Kubernetes Service is meant for orchestrating larger numbers of containers, unnecessarily complex for one short function. Azure App Service suits continuously running web apps, not one-off short tasks."
      },
      {
        "id": "easy_36",
        "category": "Compute",
        "q": "A team wants to quickly spin up a single isolated container for testing without building an entire cluster. Which service will they use?",
        "a": [
          "Azure Container Instances",
          "Azure Virtual Machines",
          "Azure Kubernetes Service",
          "Azure Functions"
        ],
        "c": 0,
        "e": "Azure Container Instances lets you quickly run a single container without managing a cluster or orchestration, ideal for simple or test scenarios. Azure Kubernetes Service, by contrast, is meant for orchestrating large numbers of containers and requires more complex setup. Azure Virtual Machines would require manually installing and managing a container engine. Azure Functions is for short event-driven functions, not running arbitrary containers."
      },
      {
        "id": "easy_37",
        "category": "Compute",
        "q": "A company runs dozens of microservices in containers and needs automatic scaling, self-healing, and orchestration between them. What will they use?",
        "a": [
          "Azure Functions",
          "Azure Kubernetes Service",
          "Azure Container Instances",
          "Azure Virtual Machines"
        ],
        "c": 1,
        "e": "Azure Kubernetes Service (AKS) is a managed platform for orchestrating containers at scale, including automatic scaling and recovery from failure. Azure Container Instances suits only individual or loosely connected containers, not complex orchestration of dozens of services. Azure Functions handles individual short functions, not orchestrating microservices. Azure Virtual Machines would require manually setting up an entire orchestration layer from scratch."
      },
      {
        "id": "easy_38",
        "category": "Networking",
        "q": "A company needs an isolated private network space in Azure where its virtual machines can communicate securely with each other. What will they create for this?",
        "a": [
          "A network security group",
          "A separate resource group",
          "A dedicated virtual network (VNet)",
          "A load balancer for traffic"
        ],
        "c": 2,
        "e": "A Virtual Network is the fundamental building block of a private network in Azure, where resources can communicate securely and be isolated from the public internet. A resource group is just an organizational container for resources, not a networking construct. A Network Security Group filters traffic inside an already-existing network, it doesn't create the network itself. A Load Balancer spreads traffic across servers, it doesn't create an isolated network space."
      },
      {
        "id": "easy_39",
        "category": "Networking",
        "q": "An administrator wants to split one large virtual network into smaller logical parts, for example separating web servers and databases. What will they use?",
        "a": [
          "Network Security Group",
          "Availability zone",
          "Resource group",
          "Subnet"
        ],
        "c": 3,
        "e": "A subnet divides a VNet into smaller segments, letting you logically separate different application layers and apply different rules to them. A resource group organizes resources administratively, not on the network. An availability zone is a physical datacenter location, not a network segment. A Network Security Group filters traffic, but doesn't itself segment a network into subnets."
      },
      {
        "id": "easy_40",
        "category": "Networking",
        "q": "A team wants to allow inbound traffic on port 443 only from a specific range of IP addresses and block everything else at the subnet level. What will they use for this?",
        "a": [
          "Network security group rules",
          "A VPN Gateway connection",
          "A private ExpressRoute circuit",
          "Records in the Azure DNS service"
        ],
        "c": 0,
        "e": "A Network Security Group (NSG) contains rules for filtering inbound and outbound traffic based on ports, protocols, and source IP addresses. A VPN Gateway creates an encrypted connection between networks and doesn't handle rule-based traffic filtering. Azure DNS translates domain names to IP addresses and has nothing to do with traffic filtering. ExpressRoute provides private connectivity outside the public internet, but on its own doesn't filter traffic by rules."
      },
      {
        "id": "easy_41",
        "category": "Networking",
        "q": "A company wants to securely connect its local office network to Azure over an encrypted tunnel through the public internet. What will they use for this?",
        "a": [
          "Azure Bastion",
          "VPN Gateway",
          "ExpressRoute",
          "Network Security Group"
        ],
        "c": 1,
        "e": "A VPN Gateway creates an encrypted (site-to-site VPN) connection between an on-premises network and Azure over the public internet. ExpressRoute, by contrast, bypasses the public internet entirely and creates a private physical connection. Azure Bastion provides secure browser-based access to individual VMs, it doesn't connect entire networks. A Network Security Group filters traffic inside an already-existing connection, it doesn't create the connection itself."
      },
      {
        "id": "easy_42",
        "category": "Networking",
        "q": "A large corporation needs dedicated private connectivity to Azure with high bandwidth and low latency, outside the public internet. What will they choose?",
        "a": [
          "VPN Gateway",
          "Azure DNS",
          "ExpressRoute",
          "Virtual Network peering"
        ],
        "c": 2,
        "e": "ExpressRoute provides a dedicated private physical connection to Azure outside the public internet, with higher reliability and lower latency than VPN. A VPN Gateway, by contrast, routes its encrypted tunnel through the public internet, which may not be enough for extremely low latency. Azure DNS only handles domain name resolution. Virtual Network peering connects two VNets to each other, not an on-premises network to Azure."
      },
      {
        "id": "easy_43",
        "category": "Networking",
        "q": "An administrator needs to securely connect to a virtual machine's remote desktop through a browser, without the VM having a public IP address. What will they use?",
        "a": [
          "ExpressRoute",
          "Network Security Group",
          "VPN Gateway",
          "Azure Bastion"
        ],
        "c": 3,
        "e": "Azure Bastion provides secure RDP or SSH access to a VM directly in the browser, without the VM ever needing a public IP address or open ports to the internet. A VPN Gateway connects entire networks, which is a broader and more complex solution for this specific purpose. ExpressRoute addresses private connectivity to Azure overall, not access to a single VM. A Network Security Group only filters traffic, it doesn't enable access on its own."
      },
      {
        "id": "easy_44",
        "category": "Networking",
        "q": "A company wants their application's domain name (such as app.company.com) to resolve to the right IP address in Azure. Which service will they use?",
        "a": [
          "Azure DNS",
          "VPN Gateway",
          "Network Security Group",
          "Azure Bastion"
        ],
        "c": 0,
        "e": "Azure DNS manages DNS records and handles resolving domain names to the IP addresses of resources. Azure Bastion addresses secure access to VMs, it has nothing to do with domain name resolution. A Network Security Group filters network traffic by rules, it doesn't resolve names to addresses. A VPN Gateway creates an encrypted connection between networks, on its own it doesn't handle DNS."
      },
      {
        "id": "easy_45",
        "category": "Storage",
        "q": "An application needs to store large amounts of unstructured data, such as photos and videos uploaded by users. Which Azure service will it use?",
        "a": [
          "Azure Files",
          "Blob Storage",
          "Queue Storage",
          "Table Storage"
        ],
        "c": 1,
        "e": "Blob Storage is optimized for storing large amounts of unstructured binary data, such as images, videos, or backups. Azure Files provides shared network folders over the SMB protocol, better suited for sharing documents between servers. Table Storage stores structured NoSQL data in key-value form. Queue Storage is used for storing messages between application components, not for storing files."
      },
      {
        "id": "easy_46",
        "category": "Storage",
        "q": "A company is migrating an old application that requires access to a shared network folder over the SMB protocol, just like on the old server. What will it use?",
        "a": [
          "Disk Storage",
          "Table Storage",
          "Azure Files",
          "Blob Storage"
        ],
        "c": 2,
        "e": "Azure Files provides fully managed shared network folders accessible over the standard SMB or NFS protocol, so the application works just like it did with a shared folder on a physical server. Blob Storage is meant for object storage, not emulating a network folder. Disk Storage provides virtual disks for individual VMs, not shared network storage. Table Storage stores structured NoSQL data, not files accessible as a network folder."
      },
      {
        "id": "easy_47",
        "category": "Storage",
        "q": "Two parts of an application need to communicate asynchronously, where one sends messages and the other processes them in order over time. What will they use for this?",
        "a": [
          "Blob Storage",
          "Disk Storage",
          "Azure Files",
          "Queue Storage"
        ],
        "c": 3,
        "e": "Queue Storage stores messages in a queue that one component fills and another processes over time, enabling asynchronous communication between parts of an application. Blob Storage is for storing files, not message queues. Disk Storage provides virtual disks for VMs and has nothing to do with inter-component communication. Azure Files is a shared network folder for files, not a message queue mechanism."
      },
      {
        "id": "easy_48",
        "category": "Storage",
        "q": "An application stores millions of simple key-value records, such as user settings, and needs fast access to them without a SQL schema. What will it choose?",
        "a": [
          "Table Storage",
          "Disk Storage",
          "Azure SQL Database",
          "Blob Storage"
        ],
        "c": 0,
        "e": "Table Storage is a NoSQL store for structured key-value data, optimized for fast access to large numbers of simple records without a fixed schema. Blob Storage is meant for binary objects like files, not structured records. Azure SQL Database requires a defined relational schema, which goes against the requirement for a simple schema-less store. Disk Storage provides virtual disks for VMs, not storage for individual data records."
      },
      {
        "id": "easy_49",
        "category": "Storage",
        "q": "A virtual machine needs attached storage that functions as its system or data disk. What does Azure provide for this?",
        "a": [
          "Blob Storage",
          "Disk Storage",
          "Table Storage",
          "Queue Storage"
        ],
        "c": 1,
        "e": "Disk Storage provides virtual (managed) disks that function as the system or data disks attached to a virtual machine. Blob Storage is object storage accessible via API, not a disk directly attachable to a VM. Queue Storage stores messages between components, it isn't a disk. Table Storage stores structured data, also not a disk format for a VM."
      },
      {
        "id": "easy_50",
        "category": "Storage",
        "q": "Data is stored in three copies within a single datacenter, which protects against a single disk failure but not against an outage of the whole datacenter. What type of redundancy is this?",
        "a": [
          "RA-GRS",
          "ZRS",
          "LRS",
          "GRS"
        ],
        "c": 2,
        "e": "LRS (Locally Redundant Storage) replicates data three times within a single datacenter, so it protects against a disk or server failure, but not an outage of the entire datacenter. GRS also replicates data to a remote region, which protects against an entire region outage too. ZRS spreads copies across multiple availability zones within a region, not just within one datacenter. RA-GRS is an extension of GRS with readable access to the secondary region, making it even more robust than the scenario described."
      },
      {
        "id": "easy_51",
        "category": "Storage",
        "q": "A company wants its data to survive an outage of an entire datacenter within a region, so it spreads copies across multiple physically separate datacenters in the same region. What will it use?",
        "a": [
          "GRS",
          "Hot tier",
          "LRS",
          "ZRS"
        ],
        "c": 3,
        "e": "ZRS (Zone-Redundant Storage) replicates data synchronously across multiple availability zones within a single region, so it survives an outage of an entire datacenter. LRS only replicates within one datacenter, so an outage of that datacenter would threaten the data. GRS replicates to another region, which is more than the requirement asks for but describes a different architecture. Hot tier is a data access frequency level, not a type of geographic redundancy."
      },
      {
        "id": "easy_52",
        "category": "Storage",
        "q": "A company needs its data to survive a catastrophe that destroys an entire region, so it replicates it hundreds of kilometers away to another Azure region. What will it use?",
        "a": [
          "GRS",
          "LRS",
          "ZRS",
          "Premium SSD"
        ],
        "c": 0,
        "e": "GRS (Geo-Redundant Storage) asynchronously replicates data to a distant paired region, which protects against a catastrophe affecting an entire region. LRS only protects against failure within a single datacenter. ZRS protects against a datacenter outage within a region, but not a catastrophe affecting the whole region. Premium SSD is a disk performance tier, not a geographic redundancy mechanism."
      },
      {
        "id": "easy_53",
        "category": "Storage",
        "q": "An application frequently and immediately accesses current user data, so it needs the fastest and most expensive data access tier in Blob Storage. What will it choose?",
        "a": [
          "Archive tier",
          "Hot tier",
          "Cool tier",
          "Cold tier"
        ],
        "c": 1,
        "e": "Hot tier is optimized for data accessed frequently, with the highest storage cost but the lowest cost for accessing the data. Archive tier is the cheapest for storage, but retrieving data takes hours and is expensive, unsuited for frequent use. Cool tier suits less frequently accessed data, not immediate and frequent access. Cold tier as a separate level doesn't exist in Azure Storage's core offering the same way Hot, Cool, and Archive do."
      },
      {
        "id": "easy_54",
        "category": "Storage",
        "q": "A company archives old data it accesses once every few years and wants the lowest possible storage cost, even at the price of slow access. What will it choose?",
        "a": [
          "Hot tier",
          "Cool tier",
          "Archive tier",
          "Premium SSD"
        ],
        "c": 2,
        "e": "Archive tier offers the lowest storage cost of all the tiers, but recovering the data takes hours, which is acceptable for very rarely accessed archival data. Hot tier is optimized for frequent access and has the highest storage cost. Cool tier is a compromise for moderately frequently accessed data, but is still more expensive than Archive. Premium SSD is a high-performance disk type for VMs, not an archival tier of Blob Storage."
      },
      {
        "id": "easy_55",
        "category": "Storage",
        "q": "A marketing team stores reports it accesses once a month and wants a reasonable balance between storage cost and access speed. What will it choose?",
        "a": [
          "LRS",
          "Hot tier",
          "Archive tier",
          "Cool tier"
        ],
        "c": 3,
        "e": "Cool tier is designed for less frequently accessed data (roughly once a month), with lower storage cost than Hot tier but faster access than Archive tier. Hot tier has a higher storage cost, better suited to daily access. Archive tier is the cheapest, but access takes hours, which may not suit monthly reports. LRS is a type of data redundancy, not an access frequency tier."
      },
      {
        "id": "easy_56",
        "category": "Databases",
        "q": "A company is migrating an existing relational database with tables, relationships, and SQL queries and wants a managed service without having to manage the database server itself. What will it choose?",
        "a": [
          "A managed relational Azure SQL Database",
          "An object-based Blob Storage store",
          "A simple Table Storage store",
          "A globally distributed Cosmos DB database"
        ],
        "c": 0,
        "e": "Azure SQL Database is a fully managed relational database service supporting standard SQL, tables, and relationships, ideal for migrating an existing relational database. Cosmos DB is primarily a NoSQL database with a different data model, not a direct replacement for a relational database. Table Storage is a simple NoSQL key-value store that doesn't support relational queries or relationships between tables. Blob Storage is for storing files, not structured database data."
      },
      {
        "id": "easy_57",
        "category": "Databases",
        "q": "A global application needs a database with very low latency and automatic data replication across multiple regions worldwide. What will it choose?",
        "a": [
          "Azure Files",
          "Cosmos DB",
          "Disk Storage",
          "Azure SQL Database"
        ],
        "c": 1,
        "e": "Cosmos DB is a globally distributed NoSQL database designed for low latency and automatic replication across regions worldwide. Azure SQL Database can also be geo-replicated, but it isn't primarily designed for this kind of global low latency as a default trait. Azure Files provides shared network folders, it isn't a database. Disk Storage provides virtual disks for VMs and has nothing to do with global database distribution."
      },
      {
        "id": "easy_58",
        "category": "Security",
        "q": "An application needs to securely store and manage API keys and passwords that it accesses at runtime, instead of having them written directly in the code. What will it use?",
        "a": [
          "Resource group",
          "Azure Advisor",
          "Azure Key Vault",
          "Azure Monitor"
        ],
        "c": 2,
        "e": "Azure Key Vault securely stores sensitive data like keys, passwords, and certificates, which the application accesses at runtime instead of storing them directly in the code. Azure Monitor collects metrics and logs and has nothing to do with storing secrets. A resource group is just an organizational container for resources. Azure Advisor gives optimization recommendations, it isn't a secure store for secrets."
      },
      {
        "id": "easy_59",
        "category": "Security",
        "q": "A security team wants to receive recommendations and a Secure Score across the entire Azure environment, and to detect threats. What will it use?",
        "a": [
          "Azure Key Vault",
          "Microsoft Sentinel",
          "Resource lock",
          "Defender for Cloud"
        ],
        "c": 3,
        "e": "Defender for Cloud provides a Secure Score, recommendations for improving security, and threat detection across an Azure environment. Microsoft Sentinel is a SIEM and SOAR tool for deeper security data analysis and incident response, not primarily for scoring configuration. Azure Key Vault stores secrets, it doesn't provide a security score. A resource lock protects a single resource from deletion and has nothing to do with overall security posture."
      },
      {
        "id": "easy_60",
        "category": "Security",
        "q": "A security analyst needs to centrally collect security data from many sources and investigate incidents using queries and automated playbooks. What will they use?",
        "a": [
          "Microsoft Sentinel",
          "Defender for Cloud",
          "Azure Policy",
          "Azure Advisor"
        ],
        "c": 0,
        "e": "Microsoft Sentinel is a cloud SIEM and SOAR tool for collecting, correlating, and investigating security data across sources, including automated responses. Defender for Cloud focuses on posture and protecting specific resources, not extensive incident analysis across an organization. Azure Policy enforces configuration rules, it isn't used for investigating incidents. Azure Advisor gives general recommendations, it isn't a security analytics tool."
      },
      {
        "id": "easy_61",
        "category": "Security",
        "q": "A company wants to design its security so that it automatically trusts nobody and nothing, verifying every request regardless of where it comes from. What approach is this?",
        "a": [
          "Least privilege",
          "Zero Trust",
          "Defense in depth",
          "Single sign-on"
        ],
        "c": 1,
        "e": "Zero Trust is a security model based on the principle of \"never trust, always verify,\" where every request is verified regardless of origin, even inside the corporate network. Defense in depth means layering multiple security measures on top of each other, a broader concept than just the principle of distrust. Least privilege concerns granting minimal necessary permissions; it's one of the principles Zero Trust uses, but isn't the same thing. Single sign-on addresses one login across applications and isn't directly related to the overall security model."
      },
      {
        "id": "easy_62",
        "category": "Security",
        "q": "An administrator grants a user only the permissions strictly necessary for their job, and nothing more. What principle is being followed here?",
        "a": [
          "The Zero Trust principle",
          "Conditional Access",
          "The principle of least privilege",
          "Layered defense (defense in depth)"
        ],
        "c": 2,
        "e": "Least privilege is the principle of granting only the minimum permissions necessary for a given job, reducing the risk of abuse if an account is compromised. Zero Trust is the broader security philosophy of verifying every request; least privilege is one of its components. Defense in depth means layering multiple defense mechanisms, not specifically minimizing permissions. Conditional Access conditions access on circumstances like location or device, and doesn't directly address the scope of granted permissions."
      },
      {
        "id": "easy_63",
        "category": "DevOps",
        "q": "A team wants to define infrastructure (VMs, networks, storage) as code in a declarative JSON file that can be deployed repeatedly and consistently. What will it use?",
        "a": [
          "Azure CLI",
          "Cloud Shell",
          "Azure PowerShell",
          "ARM template"
        ],
        "c": 3,
        "e": "An ARM template is a declarative JSON file describing infrastructure, which Azure Resource Manager uses to deploy resources repeatably and consistently. Azure CLI is a command-line tool for interactive or scripted management, not a declarative format for describing infrastructure. Cloud Shell is a browser-based environment for running CLI or PowerShell commands, on its own it isn't an infrastructure-as-code format. Azure PowerShell is another scripting tool, functionally similar to CLI, not a declarative template."
      },
      {
        "id": "easy_64",
        "category": "DevOps",
        "q": "A developer wants to write infrastructure as code in a more concise and readable syntax than JSON, which then automatically compiles into an ARM template. What will they use?",
        "a": [
          "Bicep",
          "Azure CLI",
          "Cloud Shell",
          "Azure Functions"
        ],
        "c": 0,
        "e": "Bicep is a declarative language with more concise syntax than JSON, which compiles into an ARM template and makes writing infrastructure as code easier. Azure CLI is an imperative command-line tool for executing actions, not a declarative language for describing infrastructure. Cloud Shell is an environment for running commands, it isn't a language for defining infrastructure. Azure Functions is a compute service for running code, unrelated to defining infrastructure as code."
      },
      {
        "id": "easy_65",
        "category": "Management",
        "q": "An administrator wants to manage Azure resources via the command line using scriptable commands that work on Windows, macOS, and Linux. What will they use?",
        "a": [
          "Resource lock",
          "Azure CLI",
          "Azure Portal",
          "Azure Advisor"
        ],
        "c": 1,
        "e": "Azure CLI is a cross-platform command-line tool for scriptable management of Azure resources on Windows, macOS, and Linux. Azure Portal is a graphical web interface, not a command-line tool. A resource lock is a resource protection feature, not a general management tool. Azure Advisor provides recommendations in the portal, it isn't a command-line tool."
      },
      {
        "id": "easy_66",
        "category": "Management",
        "q": "An administrator wants to manage Azure using a scripting language that uses an object-oriented approach and cmdlets in a Verb-Noun format. What will they use?",
        "a": [
          "The declarative ARM template format",
          "The cross-platform Azure CLI tool",
          "The Azure PowerShell scripting tool with cmdlets",
          "The more concise Bicep infrastructure language"
        ],
        "c": 2,
        "e": "Azure PowerShell uses cmdlets in a Verb-Noun format (such as Get-AzVM) and the object-oriented approach typical of PowerShell. Azure CLI has a different syntax based on commands and text output, not PowerShell-style cmdlets. An ARM template is a declarative format for describing infrastructure, not a scripting language with cmdlets. Bicep is also a declarative infrastructure language, it doesn't include cmdlets or scripting logic like PowerShell."
      },
      {
        "id": "easy_67",
        "category": "Management",
        "q": "An administrator wants to manage Azure directly from a browser without having to install CLI or PowerShell locally on their computer. What will they use?",
        "a": [
          "Azure CLI",
          "ARM template",
          "Resource group",
          "Cloud Shell"
        ],
        "c": 3,
        "e": "Cloud Shell is a browser-based environment available directly in the Azure Portal, where you can run both Azure CLI and PowerShell commands without local installation. Azure CLI by itself is a tool that would otherwise need to be installed locally. An ARM template is a format for describing infrastructure, not an interactive environment. A resource group is an organizational container for resources, not a tool for running commands."
      },
      {
        "id": "easy_68",
        "category": "Migration",
        "q": "A company is planning to move dozens of on-premises servers to Azure and first needs to find out how utilized those servers are and what the migration will cost. What will it use?",
        "a": [
          "Azure Migrate",
          "Azure Arc",
          "Azure Bastion",
          "Azure Advisor"
        ],
        "c": 0,
        "e": "Azure Migrate provides tools for assessing on-premises servers, their utilization, and estimating the cost and steps needed to migrate to Azure. Azure Arc extends Azure management to resources outside Azure, but doesn't primarily address migration assessment and planning. Azure Bastion provides secure access to VMs and has nothing to do with migration. Azure Advisor gives general recommendations for an already-existing Azure environment, not planning a migration from outside."
      },
      {
        "id": "easy_69",
        "category": "Hybrid",
        "q": "A company wants to manage its on-premises servers and servers in other clouds from the same Azure interface, as if they were Azure resources. What will it use?",
        "a": [
          "ExpressRoute",
          "Azure Arc",
          "Azure Bastion",
          "Azure Migrate"
        ],
        "c": 1,
        "e": "Azure Arc extends Azure's management, governance, and tooling to resources outside Azure, including on-premises servers and other clouds, as if they were a native part of Azure. Azure Migrate is for assessing and actually migrating servers to Azure, not for ongoing management if they remain outside Azure. Azure Bastion provides secure access to VMs in Azure, it doesn't address managing external resources. ExpressRoute creates private network connectivity, on its own it doesn't enable unified management across environments."
      },
      {
        "id": "easy_70",
        "category": "Cloud concepts",
        "q": "A company wants to quickly try out a new idea without having to buy hardware, and can end the project at any time without losing the investment in equipment. Which cloud trait enables this?",
        "a": [
          "Dependence on a single service provider",
          "Guaranteed high service availability",
          "Low upfront investment and rapid elasticity",
          "Automatic geographic data replication"
        ],
        "c": 2,
        "e": "The cloud lets you start with minimal or no upfront investment and end a project at any time without losing the value of physical hardware, because you only pay for resources actually used. High availability concerns resilience against outages, not a low entry barrier. Geo-replication copies data between regions and has nothing to do with the investment barrier. Vendor lock-in, by contrast, is the risk of depending on a single provider, not the advantage described in the scenario."
      },
      {
        "id": "easy_71",
        "category": "Cloud concepts",
        "q": "Several companies in the same industry with shared regulatory requirements share one dedicated cloud infrastructure that nobody outside the group uses. What type of cloud is this?",
        "a": [
          "Hybrid cloud",
          "Public cloud",
          "Private cloud",
          "Community cloud"
        ],
        "c": 3,
        "e": "Community cloud shares infrastructure among multiple organizations with common needs or regulatory requirements, unlike private cloud, which is dedicated to a single company. Public cloud is shared among any customers without being restricted to a specific group. Private cloud is dedicated to a single organization, not a group of companies. Hybrid cloud combines different environments, but doesn't describe sharing among multiple companies with the same requirements."
      },
      {
        "id": "easy_72",
        "category": "Cloud models",
        "q": "A development team wants to run its own code as a simple function without worrying about servers, the OS, or the runtime environment at all. Which service model best describes this?",
        "a": [
          "The serverless model, with no infrastructure management",
          "The IaaS model, with full control over the OS",
          "The PaaS model, with a fully managed runtime",
          "The traditional on-premises deployment model"
        ],
        "c": 0,
        "e": "The serverless model (Functions as a Service) goes even further than classic PaaS — the developer doesn't even handle scaling or running instances, paying only for the actual code execution time. IaaS requires managing the OS, which contradicts the scenario. PaaS does manage the runtime, but typically still runs continuously like an app, not as a one-off function on demand. On-premises means owning physical infrastructure, the opposite of what's described."
      },
      {
        "id": "easy_73",
        "category": "Reliability",
        "q": "After a disaster, a company must restore operations with a maximum data loss of 15 minutes and a maximum outage duration of 1 hour. What are these two targets generally called?",
        "a": [
          "CapEx and OpEx",
          "RPO and RTO",
          "SLA and TCO",
          "LRS and GRS"
        ],
        "c": 1,
        "e": "RPO (Recovery Point Objective) defines the maximum acceptable data loss over time, RTO (Recovery Time Objective) defines the maximum time to restore operations — exactly these two disaster recovery planning targets. SLA is a service level agreement from the provider, TCO is a total cost calculation, neither defines disaster recovery targets. CapEx and OpEx are types of cost, not recovery metrics. LRS and GRS are types of storage redundancy, not targets for overall recovery."
      },
      {
        "id": "easy_74",
        "category": "Identity",
        "q": "A team wants a user to enter their password just once and then have access to multiple connected applications without signing in repeatedly. What is this feature called?",
        "a": [
          "Conditional Access",
          "Multi-factor authentication",
          "Single sign-on (SSO)",
          "Identity federation"
        ],
        "c": 2,
        "e": "Single sign-on lets a user sign in once and gain access to multiple connected applications without needing to re-enter their password. Multi-factor authentication addresses the number of verification factors at a single sign-in, not access to multiple apps at once. Conditional Access conditions access on circumstances like location or device. Identity federation links identities across different organizations or systems, a broader concept than just convenient single sign-on within one organization's apps."
      },
      {
        "id": "easy_75",
        "category": "Identity",
        "q": "An organization wants an external vendor to be able to use their own company account to sign into the organization's application, instead of creating a new account. What concept enables this?",
        "a": [
          "The resource lock protection mechanism",
          "A set of rules in Azure Policy",
          "A descriptive tag assigned to a resource",
          "Identity federation between organizations"
        ],
        "c": 3,
        "e": "Identity federation enables trusted linking between identity providers of different organizations, so a user can sign in with their existing account across organizational boundaries. A resource lock protects resources from deletion and has nothing to do with sign-in. Azure Policy enforces configuration rules on resources. A tag is a metadata label for organizing resources and has nothing to do with a user's identity."
      },
      {
        "id": "easy_76",
        "category": "Monitoring",
        "q": "An auditor needs to find out exactly what actions were performed by whom on Azure resources over the past month, including configuration changes. What will they review?",
        "a": [
          "Activity log",
          "Resource lock",
          "Azure Advisor",
          "Pricing calculator"
        ],
        "c": 0,
        "e": "The Activity log records control-plane operations performed on resources (who changed what and when), exactly matching the audit need. Azure Advisor gives optimization recommendations, it doesn't record a history of user actions. A resource lock protects a resource against change or deletion, on its own it doesn't provide a record of action history. The pricing calculator is for estimating costs in advance and has nothing to do with auditing actions taken."
      },
      {
        "id": "easy_77",
        "category": "Governance",
        "q": "A company wants to ensure nobody can change production network settings, while reading the configuration remains allowed for everyone. What type of resource lock will it use?",
        "a": [
          "RBAC Reader role",
          "ReadOnly",
          "Deny policy",
          "CanNotDelete"
        ],
        "c": 1,
        "e": "A ReadOnly lock prevents any changes to a resource (not just deletion), while reading remains possible for everyone with appropriate access. A CanNotDelete lock would only prevent deletion, configuration changes would still be possible. A Deny policy in Azure Policy blocks creating resources that don't meet a rule, but doesn't directly address protecting an existing resource from changes this way. An RBAC Reader role would restrict specific users to read-only, but wouldn't protect the resource as a whole against changes from users with higher permissions."
      },
      {
        "id": "easy_78",
        "category": "Governance",
        "q": "A company wants Azure Policy not only to detect non-compliant resources, but to actively remediate missing settings, such as installing a monitoring agent. Which policy effect enables this?",
        "a": [
          "The Deny effect, which blocks creation",
          "The Append effect, used for adding fields",
          "DeployIfNotExists, with automatic remediation",
          "The Audit effect, used only for reporting"
        ],
        "c": 2,
        "e": "The DeployIfNotExists effect automatically deploys missing configuration or a resource if the policy finds that a given resource lacks that property. The Audit effect only flags the non-compliance in a report but doesn't actively fix anything. The Deny effect blocks the creation of a non-compliant resource, but doesn't remediate anything on existing resources. The Append effect adds specific fields to a resource creation request, but doesn't address remediating missing configuration on existing resources the way DeployIfNotExists does."
      },
      {
        "id": "easy_79",
        "category": "Security",
        "q": "A security team wants to be alerted to suspicious behavior, such as an unusual sign-in from a foreign country, and automatically trigger a response. What will it best use for this?",
        "a": [
          "A set of rules defined in Azure Policy",
          "A protective resource lock",
          "A descriptive tag assigned to a resource",
          "Sentinel with automated playbooks"
        ],
        "c": 3,
        "e": "Microsoft Sentinel enables detection of suspicious behavior using analytics rules and an automated response via playbooks (connected to Azure Logic Apps). Azure Policy enforces configuration standards on resources, it doesn't detect user behavior in real time. A resource lock protects a resource from deletion or change and doesn't react to suspicious sign-ins. A tag is just a metadata label with no detection or response function whatsoever."
      },
      {
        "id": "easy_80",
        "category": "DevOps",
        "q": "A DevOps team wants infrastructure to deploy automatically every time a change in the repository is approved, with no manual intervention. What concept describes this?",
        "a": [
          "CI/CD pipeline",
          "Pricing calculator",
          "Manual deployment",
          "Resource lock"
        ],
        "c": 0,
        "e": "A CI/CD (Continuous Integration/Continuous Deployment) pipeline automates the deployment process after a code or infrastructure change is approved, with no need for manual intervention. Manual deployment is the exact opposite of the automated process described. A resource lock protects a resource from deletion or modification and has nothing to do with deployment automation. The pricing calculator is for estimating costs and has nothing to do with the deployment process."
      },
      {
        "id": "easy_81",
        "category": "Management",
        "q": "A manager wants to see a consolidated overview of recommendations across cost, security, reliability, performance, and operational excellence in one place. What will they use?",
        "a": [
          "Azure DNS",
          "Azure Advisor",
          "Resource group",
          "Azure Monitor"
        ],
        "c": 1,
        "e": "Azure Advisor provides a consolidated overview of recommendations across five pillars: cost, security, reliability, performance, and operational excellence. Azure Monitor collects metrics and logs, but doesn't provide the same kind of consolidated recommendations across all these areas. A resource group is an organizational container for resources. Azure DNS only handles domain name resolution and has nothing to do with overall recommendations."
      },
      {
        "id": "easy_82",
        "category": "Reliability",
        "q": "A company wants to back up its virtual machines regularly according to a defined schedule and be able to restore them if data is corrupted. What will it use?",
        "a": [
          "Resource lock",
          "Azure Bastion",
          "Azure Backup",
          "Azure DNS"
        ],
        "c": 2,
        "e": "Azure Backup creates scheduled backups of VMs and other resources and allows you to restore them in case of data loss or corruption. Azure Bastion provides secure access to VMs and has nothing directly to do with backups. Azure DNS handles domain name resolution. A resource lock protects a resource from deletion, but doesn't create data backups or allow you to restore them."
      },
      {
        "id": "easy_83",
        "category": "Networking",
        "q": "A global application needs to route users to the nearest or most available instance of the app across multiple regions using DNS. What will it use?",
        "a": [
          "Network Security Group",
          "VPN Gateway",
          "Azure Load Balancer",
          "Azure Traffic Manager"
        ],
        "c": 3,
        "e": "Azure Traffic Manager is a DNS-based service that routes traffic between application instances across multiple regions according to a chosen strategy, such as geographic proximity or availability. Azure Load Balancer spreads traffic across resources within a single region at the network layer, not between regions using DNS. A Network Security Group filters traffic by rules and doesn't address routing between regions. A VPN Gateway creates encrypted connections between networks, it doesn't route user traffic to the nearest instance."
      },
      {
        "id": "easy_84",
        "category": "Networking",
        "q": "A company wants traffic within a single region to be spread across multiple instances of a web app at the network layer for higher performance and resilience. What will it use?",
        "a": [
          "Azure Load Balancer",
          "Azure DNS",
          "Azure Traffic Manager",
          "Azure Bastion"
        ],
        "c": 0,
        "e": "Azure Load Balancer spreads inbound network traffic across multiple instances within a single region, increasing performance and resilience against the failure of one instance. Azure Traffic Manager works at the DNS level and routes between regions, not within a single region at the network layer. Azure DNS only resolves domain names, on its own it doesn't spread traffic. Azure Bastion provides secure access to VMs and has nothing to do with spreading traffic across instances."
      },
      {
        "id": "easy_85",
        "category": "Networking",
        "q": "A team wants to connect two virtual networks in Azure so they can communicate with each other as if they were one network, without needing a VPN. What will it use?",
        "a": [
          "Network security group rules",
          "Mutual VNet connection (peering)",
          "A private ExpressRoute circuit",
          "A VPN Gateway connection"
        ],
        "c": 1,
        "e": "Virtual Network peering connects two VNets directly over the Azure backbone network, so they can communicate without needing a VPN or the public internet. A VPN Gateway creates an encrypted tunnel, typically between on-premises and Azure, not primarily between two VNets in Azure. ExpressRoute addresses private connectivity between on-premises and Azure, not connecting two VNets to each other. A Network Security Group filters traffic by rules, it doesn't connect networks to each other."
      },
      {
        "id": "easy_86",
        "category": "Storage",
        "q": "A developer needs storage optimized for storing and streaming large video files accessible via an HTTP/HTTPS link. What will they choose?",
        "a": [
          "Queue Storage",
          "Disk Storage",
          "Blob Storage",
          "Table Storage"
        ],
        "c": 2,
        "e": "Blob Storage lets you store large binary files like videos and access them directly via an HTTP/HTTPS URL, ideal for streaming. Table Storage stores structured key-value data, not large binary files. Queue Storage is for message queues between components, not for storing media. Disk Storage provides virtual disks attached to VMs, which aren't directly accessible via a web link like Blob."
      },
      {
        "id": "easy_87",
        "category": "Storage",
        "q": "A company wants assurance that even if the entire primary region failed, it could still read its data from a secondary region without waiting for the primary to recover. What will it choose?",
        "a": [
          "Hot tier",
          "ZRS",
          "LRS",
          "RA-GRS"
        ],
        "c": 3,
        "e": "RA-GRS (Read-Access Geo-Redundant Storage) lets you read data from the secondary region even during an outage of the primary region, unlike standard GRS, where the secondary copy is only readable after an official failover. LRS only replicates within a single datacenter and doesn't protect against a regional outage. ZRS protects against a datacenter outage within a region, not an outage of the entire region. Hot tier is a data access frequency level, not a type of geographic redundancy."
      },
      {
        "id": "easy_88",
        "category": "Compute",
        "q": "A company wants to store and manage container images, from which it then deploys applications to Azure Kubernetes Service. What will it use?",
        "a": [
          "A container image registry",
          "Shared Azure Files storage",
          "Object-based Blob Storage",
          "Table Storage"
        ],
        "c": 0,
        "e": "Azure Container Registry is a managed service for storing and managing Docker and OCI container images, from which containers are then deployed to, say, AKS. Blob Storage is general-purpose object storage, not optimized for versioning container images the same way. Azure Files provides shared network folders, not a container image registry. Table Storage stores simple structured data and has nothing to do with managing container images."
      },
      {
        "id": "easy_89",
        "category": "Databases",
        "q": "A team runs a database and wants Azure to automatically handle backups, patching, and high availability without having to install SQL Server on a VM. What will it choose?",
        "a": [
          "SQL Server on an Azure VM",
          "Azure SQL Database",
          "Azure Files",
          "Disk Storage"
        ],
        "c": 1,
        "e": "Azure SQL Database is a fully managed PaaS database where Azure automatically handles backups, patching, and high availability without administrator intervention. SQL Server on an Azure VM would still require manually managing the OS, patches, and high availability configuration, which contradicts the scenario. Disk Storage only provides virtual disks, it isn't a database service. Azure Files is shared file storage, not a database."
      },
      {
        "id": "easy_90",
        "category": "Security",
        "q": "A security engineer wants certificates used for encrypting communication to be automatically renewed and centrally managed. What will they use?",
        "a": [
          "Network Security Group",
          "Tag",
          "Azure Key Vault",
          "Resource lock"
        ],
        "c": 2,
        "e": "Azure Key Vault manages not just keys and secrets but also certificates, including their automatic renewal and centralized management. A resource lock protects a resource from deletion and doesn't address certificate management. A Network Security Group filters network traffic and has nothing to do with certificate management. A tag is just a metadata label with no certificate management function."
      },
      {
        "id": "easy_91",
        "category": "DevOps",
        "q": "A team wants to use the same Bicep or ARM code to deploy both test and production environments, differing only in parameters like VM size. What concept enables this?",
        "a": [
          "The resource lock protection mechanism",
          "A descriptive tag assigned to a resource",
          "A recommendation from Azure Advisor",
          "Parameterizing reusable templates"
        ],
        "c": 3,
        "e": "Template parameterization lets you reuse the same infrastructure definition with different input values for different environments, avoiding code duplication. A resource lock protects a resource from deletion and has nothing to do with reusing templates. A tag just labels resources with metadata and doesn't address template structure. Azure Advisor gives recommendations for an already-existing environment, it doesn't help with deployment template structure."
      },
      {
        "id": "easy_92",
        "category": "Hybrid",
        "q": "After migrating servers to Azure, the IT department wants to keep managing the servers that, for technical reasons, remained on-premises, from the same interface as Azure resources. What will it use?",
        "a": [
          "Azure Arc",
          "Azure Migrate",
          "Azure Bastion",
          "ExpressRoute"
        ],
        "c": 0,
        "e": "Azure Arc extends Azure management and governance to servers outside Azure too, so they can be managed from the same interface as native Azure resources. Azure Migrate is for assessing and carrying out the migration process itself, not for ongoing management of servers that will never be in Azure. ExpressRoute creates private network connectivity, on its own it doesn't enable unified management across environments. Azure Bastion provides secure access to VMs in Azure, it doesn't address managing external on-premises servers."
      },
      {
        "id": "easy_93",
        "category": "Migration",
        "q": "A team is planning a migration and needs to find out what savings migrating to Azure would bring compared to maintaining its own infrastructure over five years. What will it use?",
        "a": [
          "Pricing calculator",
          "TCO calculator",
          "Cost Management",
          "Azure Advisor"
        ],
        "c": 1,
        "e": "The TCO (Total Cost of Ownership) calculator compares the total cost of running on-premises infrastructure with the cost of an equivalent solution in Azure over a longer time horizon. The pricing calculator estimates the cost of a specific Azure configuration, but doesn't directly compare it to on-premises infrastructure costs. Azure Advisor gives recommendations for an already-existing Azure environment, not a comparison with an on-premises alternative. Cost Management tracks costs already incurred in Azure, not a hypothetical comparison before a migration."
      },
      {
        "id": "easy_94",
        "category": "Reliability",
        "q": "A company wants assurance that if Azure fails to meet a service's guaranteed availability, it will receive financial compensation. What defines this guarantee and compensation?",
        "a": [
          "Role-based access control",
          "A resource lock",
          "A Service Level Agreement (SLA)",
          "Total cost of ownership"
        ],
        "c": 2,
        "e": "An SLA defines the guaranteed level of service availability and the terms for financial compensation (service credits) if Microsoft fails to meet that level. TCO is a calculation of total ownership costs, not an availability guarantee. RBAC addresses granting permissions and has nothing to do with a service's availability guarantee. A resource lock protects a resource from deletion, it doesn't address contractual availability guarantees."
      },
      {
        "id": "easy_95",
        "category": "Management",
        "q": "A team wants to create a test environment that can be quickly deleted as a whole once testing is finished, without affecting production resources elsewhere. What will it best use for this?",
        "a": [
          "A protective resource lock",
          "A rule in Azure Policy",
          "A descriptive tag on the resources",
          "A separate resource group"
        ],
        "c": 3,
        "e": "A separate resource group for test resources lets you delete the entire test environment with a single command, without affecting resources in other resource groups. A tag just labels resources with metadata and doesn't enable bulk deletion as directly. A resource lock, by contrast, protects resources against deletion, the opposite of the desired behavior for an easily deletable test environment. Azure Policy enforces rules, but on its own doesn't make it easier to bulk-delete test resources."
      },
      {
        "id": "easy_96",
        "category": "Architecture",
        "q": "A company is choosing an Azure region for a new application and, besides latency to customers, must also consider where it's legally allowed to store European citizens' personal data. What does this requirement affect?",
        "a": [
          "The choice of region due to data residency",
          "Only the choice of availability zone",
          "Only the final price of services",
          "Only the level of disk redundancy"
        ],
        "c": 0,
        "e": "The choice of region affects where data physically resides (data residency), which is key to meeting regulations like GDPR that require keeping data within a certain geographic area. Prices do vary between regions, but that isn't the primary reason mentioned in the scenario. The storage redundancy type is configured independently of the region choice for regulatory purposes. Availability zone addresses resilience within an already-chosen region, not the question of which country data is legally allowed to reside in."
      },
      {
        "id": "easy_97",
        "category": "Architecture",
        "q": "An architect is designing a solution and wants the application to keep working even if an entire Azure region becomes unavailable. What strategy will they choose?",
        "a": [
          "Relying only on basic LRS redundancy",
          "Deploying across several regions with replication",
          "Deploying to just one availability zone",
          "Deploying on a single virtual machine"
        ],
        "c": 1,
        "e": "Deploying across multiple regions with data replication ensures that even if an entire region goes down, the application remains available from another region. Deploying to just one availability zone protects against a datacenter outage, but not against an outage of the entire region where that zone is located. LRS only replicates data within a single datacenter, which is the lowest level of protection and won't provide resilience against a regional outage. Deploying on a single VM provides no redundancy at all, not even within a single datacenter."
      },
      {
        "id": "easy_98",
        "category": "Migration",
        "q": "Before the real migration, a team wants to verify that the application works correctly in Azure, so it first migrates only a test copy with non-production data. What phase of the migration process is this?",
        "a": [
          "The post-migration optimization phase",
          "The assessment phase",
          "A pilot test migration",
          "The post-migration security phase"
        ],
        "c": 2,
        "e": "A pilot or test migration verifies that a solution works in Azure before a full production migration, typically using test data on a limited sample of the system. Assessment happens earlier and focuses on analyzing the current state and planning, not the test deployment itself. Post-migration optimization happens only after the production data transition is complete. Post-migration security is also a later step, not a phase preceding the functional verification."
      },
      {
        "id": "easy_99",
        "category": "Migration",
        "q": "After successfully migrating production data to Azure, the team still wants to fine-tune VM sizes and storage tiers based on actual usage. What phase of the migration process is this?",
        "a": [
          "The data migration step itself",
          "The initial planning phase",
          "The assessment phase before migration",
          "The post-migration optimization phase"
        ],
        "c": 3,
        "e": "Post-migration optimization happens after the transition is complete, when resource sizes and settings are fine-tuned based on real metrics for a better performance-to-cost ratio. Assessment happens before the migration, during analysis of the current state. Data migration is the transfer itself, which has already happened by this point. Planning precedes the entire process and isn't about fine-tuning an environment that's already been migrated."
      },
      {
        "id": "easy_100",
        "category": "Cloud concepts",
        "q": "A company avoids spending money upfront on physical servers and instead pays a monthly bill based on usage. This spending model is called:",
        "a": [
          "Operational expenditure (OpEx)",
          "Capital expenditure (CapEx)",
          "Fixed asset depreciation",
          "One-time licensing fee"
        ],
        "c": 0,
        "e": "OpEx means paying for resources as an ongoing operating cost, which matches the pay-as-you-go cloud billing model. CapEx means buying assets upfront, the opposite of what's described. Depreciation is an accounting method for owned assets, not a billing model. A one-time licensing fee is also an upfront cost, not recurring usage-based billing."
      },
      {
        "id": "easy_101",
        "category": "Cloud concepts",
        "q": "Because Microsoft buys hardware and datacenter capacity in massive volume across millions of customers, it can offer lower prices than a single company buying its own servers. What is this principle called?",
        "a": [
          "Elasticity",
          "Economies of scale",
          "Fault tolerance",
          "Colocation"
        ],
        "c": 1,
        "e": "Economies of scale describes how buying in bulk reduces the per-unit cost, which is how large cloud providers offer lower prices than individual companies could achieve on their own. Elasticity is about automatically adjusting capacity to demand, not pricing from bulk purchasing. Fault tolerance is about surviving component failures. Colocation means renting rack space for your own hardware in someone else's datacenter."
      },
      {
        "id": "easy_102",
        "category": "Cloud concepts",
        "q": "An application is designed so that if one server fails, the workload keeps running on other servers without the user noticing any interruption. What property does this describe?",
        "a": [
          "Elasticity",
          "Economies of scale",
          "Fault tolerance",
          "Vertical scaling"
        ],
        "c": 2,
        "e": "Fault tolerance means a system keeps operating correctly even when one or more of its components fail. Elasticity is about automatically scaling resources up or down with demand, not about surviving failures. Economies of scale is a pricing concept. Vertical scaling means increasing the resources of a single server, which does not by itself protect against that server failing."
      },
      {
        "id": "easy_103",
        "category": "Cloud concepts",
        "q": "A company measures the percentage of time its application is up and reachable, aiming for 99.9% or higher. What is this measurement generally called?",
        "a": [
          "Elasticity",
          "Economies of scale",
          "Total cost of ownership",
          "High availability"
        ],
        "c": 3,
        "e": "High availability refers to keeping a system running and accessible for as close to 100% of the time as possible, usually expressed as a percentage uptime target. Elasticity is about scaling resources with demand. Economies of scale is a cost concept. Total cost of ownership estimates overall spending, not uptime."
      },
      {
        "id": "easy_104",
        "category": "Cloud concepts",
        "q": "A company sets up a secondary copy of its application in another Azure region so that if the primary region goes down, it can switch over and keep running. What is this strategy called?",
        "a": [
          "Disaster recovery",
          "Vertical scaling",
          "Economies of scale",
          "Colocation"
        ],
        "c": 0,
        "e": "Disaster recovery is the practice of preparing for and recovering from a major outage, often by failing over to a secondary region. Vertical scaling means resizing a single resource, not failing over to another location. Economies of scale is a pricing concept. Colocation means hosting your own hardware in a shared facility."
      },
      {
        "id": "easy_105",
        "category": "Cloud concepts",
        "q": "A team increases the CPU and memory of a single virtual machine to handle more load, rather than adding more virtual machines. What is this called?",
        "a": [
          "Horizontal scaling",
          "Vertical scaling",
          "Elasticity",
          "Fault tolerance"
        ],
        "c": 1,
        "e": "Vertical scaling (scaling up) means increasing the resources of an existing single machine, such as more CPU or RAM. Horizontal scaling (scaling out) means adding more machines instead. Elasticity is the automatic version of scaling in or out with demand. Fault tolerance is about surviving failures, not increasing capacity."
      },
      {
        "id": "easy_106",
        "category": "Cloud concepts",
        "q": "A team adds more virtual machines behind a load balancer to handle more load, instead of upgrading the size of any single machine. What is this called?",
        "a": [
          "Vertical scaling",
          "High availability",
          "Horizontal scaling",
          "Economies of scale"
        ],
        "c": 2,
        "e": "Horizontal scaling (scaling out) means adding more instances of a resource to share the load. Vertical scaling (scaling up) means making one machine bigger instead. High availability is about uptime, and economies of scale is about pricing from bulk purchasing — neither describes adding more instances."
      },
      {
        "id": "easy_107",
        "category": "Cloud models",
        "q": "A team writes a small piece of code that runs automatically when triggered, and is billed only for the seconds it actually executes, with no server to manage at all. What is this model called?",
        "a": [
          "Infrastructure as a Service (IaaS)",
          "Platform as a Service (PaaS)",
          "Colocation",
          "Serverless / Functions as a Service (FaaS)"
        ],
        "c": 3,
        "e": "Serverless computing (FaaS) runs individual pieces of code on demand and bills only for actual execution time, with the provider fully managing any underlying servers. IaaS still requires managing virtual machines. PaaS manages the runtime but usually bills for allocated capacity, not just execution seconds. Colocation involves the customer's own physical hardware."
      }
    ],
    "normal": [
      {
        "id": "normal_0",
        "category": "Compute",
        "q": "A developer wants to deploy a simple web app and doesn't want to deal with servers or scaling manually. Which service will they choose?",
        "a": [
          "Azure App Service, for automatic platform management",
          "An on-premises server, for lower costs",
          "Azure Virtual Machine, for full OS control",
          "Azure Bastion, for secure access"
        ],
        "c": 0,
        "e": "Azure App Service is a PaaS platform that automatically manages the OS, runtime, and scaling of a web app. A Virtual Machine would require manually managing the OS, which goes against the scenario. An on-premises server requires owning hardware and managing it yourself. Azure Bastion addresses secure access to VMs, not hosting web apps."
      },
      {
        "id": "normal_1",
        "category": "Compute",
        "q": "A team needs full control over a server's operating system because of specific older software. Which service will they choose?",
        "a": [
          "Azure Functions, for serverless execution",
          "Azure Virtual Machine, for full OS control",
          "Azure CDN, for faster content delivery",
          "Azure App Service, for a managed runtime"
        ],
        "c": 1,
        "e": "An Azure Virtual Machine gives full control over the OS, which is necessary for older specific software requiring particular configuration. App Service manages the OS for you, so you lack direct access. Azure Functions is serverless and you don't manage the OS at all. Azure CDN is for distributing content, not hosting applications."
      },
      {
        "id": "normal_2",
        "category": "Compute",
        "q": "An application has a small function that should run only when a file is uploaded, and not run at all the rest of the day. Which service will they choose?",
        "a": [
          "An on-premises server started manually",
          "Azure Kubernetes Service with a persistent pod",
          "Azure Functions with an event-driven trigger",
          "An Azure Virtual Machine running continuously"
        ],
        "c": 2,
        "e": "Azure Functions is a serverless service designed for short tasks triggered by an event, and you only pay for actual runtime. A continuously running VM would be needlessly costly for such short tasks. AKS with a persistent pod would also consume resources continuously. An on-premises server requires manual startup, contradicting an automated trigger."
      },
      {
        "id": "normal_3",
        "category": "Compute",
        "q": "A team wants to quickly spin up a single isolated container for testing without building an entire cluster. Which service will they choose?",
        "a": [
          "An Azure Virtual Machine with Docker manually installed",
          "Azure Functions, for short event-driven runs",
          "Azure Kubernetes Service, for full container orchestration",
          "Azure Container Instances, for fast startup"
        ],
        "c": 3,
        "e": "Azure Container Instances lets you quickly run a single container without managing a cluster, ideal for testing. AKS is meant for orchestrating many containers, needlessly complex for a single test. A VM with manually installed Docker requires more setup and management. Azure Functions is for short functions, not for running arbitrary containers."
      },
      {
        "id": "normal_4",
        "category": "Compute",
        "q": "A company runs dozens of microservices in containers and needs automatic scaling and recovery from failure. Which service will they choose?",
        "a": [
          "Azure Kubernetes Service, for orchestration at scale",
          "Azure Container Instances, for simple deployment",
          "An Azure Virtual Machine with no built-in orchestration",
          "Azure Functions, for short isolated tasks"
        ],
        "c": 0,
        "e": "Azure Kubernetes Service is a managed platform for orchestrating large numbers of containers, including automatic scaling and self-healing. Container Instances suits only individual or loosely connected containers. Azure Functions handles short functions, not complex orchestration of microservices. A VM without orchestration would require manually managing scaling and recovery."
      },
      {
        "id": "normal_5",
        "category": "Networking",
        "q": "A company needs an isolated private network environment where virtual machines can communicate with each other securely. What will it create?",
        "a": [
          "A Network Security Group, as a traffic filter",
          "A Virtual Network, as a private network space",
          "A Load Balancer, for spreading load",
          "A resource group, as an organizational container"
        ],
        "c": 1,
        "e": "A Virtual Network is the fundamental building block of a private network in Azure, where resources communicate securely. A resource group is an administrative container, not a networking construct. A Network Security Group filters traffic inside an already-existing network, it doesn't create the network itself. A Load Balancer spreads traffic, it doesn't create an isolated network environment."
      },
      {
        "id": "normal_6",
        "category": "Networking",
        "q": "An administrator wants to split one large virtual network into smaller logical parts for different application layers. What will they use?",
        "a": [
          "A resource group, to organize resources",
          "An availability zone, for physical location",
          "A subnet, for network segmentation",
          "A tag, to describe resources"
        ],
        "c": 2,
        "e": "A subnet splits a VNet into smaller segments, letting you logically separate different application layers. A resource group organizes resources administratively, not on the network. An availability zone is a physical datacenter location, not a network segment. A tag just describes resources with metadata, it doesn't segment the network."
      },
      {
        "id": "normal_7",
        "category": "Networking",
        "q": "A team wants to allow traffic only on port 443 from a specific range of IP addresses and block everything else. What will they use?",
        "a": [
          "ExpressRoute, for private connectivity",
          "Azure DNS, for name resolution",
          "A VPN Gateway, for an encrypted connection",
          "A Network Security Group, with filtering rules"
        ],
        "c": 3,
        "e": "A Network Security Group contains rules for filtering traffic by ports, protocols, and source IP addresses, exactly matching the scenario. A VPN Gateway creates an encrypted connection but doesn't handle rule-based filtering. Azure DNS resolves domain names into IP addresses. ExpressRoute provides private connectivity, on its own it doesn't filter traffic."
      },
      {
        "id": "normal_8",
        "category": "Networking",
        "q": "A company wants to securely connect its local network to Azure over an encrypted tunnel through the public internet. What will it use?",
        "a": [
          "VPN Gateway, as an encrypted tunnel over the internet",
          "Network Security Group, for filtering traffic",
          "ExpressRoute, as a dedicated connection",
          "Azure Bastion, for accessing VMs"
        ],
        "c": 0,
        "e": "A VPN Gateway creates an encrypted site-to-site connection between an on-premises network and Azure over the public internet. ExpressRoute, by contrast, bypasses the public internet and creates a private physical connection. Azure Bastion provides access to individual VMs, it doesn't connect entire networks. A Network Security Group filters traffic, it doesn't create the connection itself."
      },
      {
        "id": "normal_9",
        "category": "Networking",
        "q": "A large company needs dedicated private connectivity to Azure with high bandwidth, outside the public internet. What will it choose?",
        "a": [
          "Azure DNS, for managing domain names",
          "ExpressRoute, as dedicated private connectivity",
          "Virtual Network peering between two VNets",
          "A VPN Gateway routed over the public internet"
        ],
        "c": 1,
        "e": "ExpressRoute provides dedicated private connectivity to Azure outside the public internet, with higher reliability and bandwidth. A VPN Gateway, by contrast, routes its encrypted tunnel over the public internet. Azure DNS only handles name resolution. Virtual Network peering connects two VNets, not an on-premises network to Azure."
      },
      {
        "id": "normal_10",
        "category": "Networking",
        "q": "An administrator needs to securely connect to a VM's remote desktop through a browser without a public IP on the VM. What will they use?",
        "a": [
          "A VPN Gateway, to connect networks",
          "ExpressRoute, for private connectivity",
          "Azure Bastion, for browser-based access",
          "Network Security Group, for filtering"
        ],
        "c": 2,
        "e": "Azure Bastion provides secure RDP/SSH access to a VM directly in the browser, without the VM needing a public IP address. A VPN Gateway connects entire networks, a broader solution for this specific purpose. ExpressRoute addresses private connectivity to Azure overall, not access to a single VM. A Network Security Group just filters traffic, it doesn't enable access on its own."
      },
      {
        "id": "normal_11",
        "category": "Networking",
        "q": "A company wants its application's domain name to resolve to the correct IP address in Azure. What will it use?",
        "a": [
          "Azure Bastion, for VM access",
          "VPN Gateway, to connect networks",
          "Network Security Group, for filtering",
          "Azure DNS, for managing and resolving names"
        ],
        "c": 3,
        "e": "Azure DNS manages DNS records and handles resolving domain names to resource IP addresses. Azure Bastion addresses secure VM access. A Network Security Group filters network traffic by rules, it doesn't resolve names. A VPN Gateway creates an encrypted connection between networks, it doesn't address DNS."
      },
      {
        "id": "normal_12",
        "category": "Networking",
        "q": "A global application needs to route users to the nearest or most available instance across multiple regions using DNS. What will it choose?",
        "a": [
          "Azure Traffic Manager, for DNS routing between regions",
          "Azure Load Balancer, for spreading load within a region",
          "VPN Gateway, for an encrypted network connection",
          "Network Security Group, for filtering traffic"
        ],
        "c": 0,
        "e": "Azure Traffic Manager is a DNS-based service that routes traffic between instances across multiple regions according to a chosen strategy. Azure Load Balancer spreads traffic within a single region at the network layer, not between regions using DNS. A Network Security Group filters traffic by rules. A VPN Gateway creates an encrypted connection, it doesn't route users between regions."
      },
      {
        "id": "normal_13",
        "category": "Networking",
        "q": "A company wants to spread traffic within a single region across multiple instances of a web app at the network layer. What will it choose?",
        "a": [
          "Azure DNS, only for domain name resolution",
          "Azure Load Balancer, for spreading traffic within a region",
          "Azure Traffic Manager, for DNS routing between regions",
          "Azure Bastion, for secure VM access"
        ],
        "c": 1,
        "e": "Azure Load Balancer spreads inbound traffic across multiple instances within a single region at the network layer. Azure Traffic Manager works at the DNS level and routes between regions, not within a single region at the network layer. Azure DNS just resolves domain names. Azure Bastion provides access to VMs and has nothing to do with spreading traffic."
      },
      {
        "id": "normal_14",
        "category": "Networking",
        "q": "A team wants to connect two virtual networks in Azure so they communicate without needing a VPN. What will it use?",
        "a": [
          "ExpressRoute, for private connectivity",
          "A VPN Gateway between networks",
          "Virtual Network peering between VNets",
          "Network Security Group, for filtering"
        ],
        "c": 2,
        "e": "Virtual Network peering connects two VNets directly over the Azure backbone network without needing a VPN or the public internet. A VPN Gateway creates an encrypted tunnel, typically between on-premises and Azure. ExpressRoute addresses private connectivity between on-premises and Azure, not connecting two VNets. A Network Security Group filters traffic by rules, it doesn't connect networks."
      },
      {
        "id": "normal_15",
        "category": "Networking",
        "q": "Besides filtering by port, a team wants to add protection for a web app against SQL injection and XSS attacks. What will it add?",
        "a": [
          "Azure DNS, only for managing domain names",
          "A VPN Gateway, for an encrypted network connection",
          "A Network Security Group, for filtering traffic by port",
          "A Web Application Firewall, for application-layer protection"
        ],
        "c": 3,
        "e": "A Web Application Firewall works at the application layer and protects against specific attacks like SQL injection or XSS. A Network Security Group filters traffic at the network layer by port, it doesn't understand HTTP request content. A VPN Gateway encrypts the connection between networks, it doesn't analyze request content. Azure DNS only handles name resolution, it has no security function."
      },
      {
        "id": "normal_16",
        "category": "Networking",
        "q": "A company wants DNS queries for internal private resources to work from an on-premises network connected to Azure, but not be publicly visible. What will it use?",
        "a": [
          "An Azure Private DNS zone connected to the VNet",
          "A public Azure DNS zone",
          "Manually editing the hosts file on clients",
          "A public third-party DNS server"
        ],
        "c": 0,
        "e": "An Azure Private DNS zone resolves names for private resources inside a VNet, and when connected to an on-premises network, it works from there too without being visible from the internet. A public DNS zone would expose internal records to anyone. Manually editing the hosts file doesn't scale and is error-prone. A public third-party DNS server would also mean exposing internal records."
      },
      {
        "id": "normal_17",
        "category": "Networking",
        "q": "A company has an app in one VNet and a database in another VNet in the same region and wants low latency between them without a VPN. What will it choose?",
        "a": [
          "Public IP addresses with NSG rules",
          "Virtual Network peering between the VNets",
          "ExpressRoute between the networks",
          "A VPN Gateway between the networks"
        ],
        "c": 1,
        "e": "Virtual Network peering connects two VNets directly over the Azure backbone network with low latency and no VPN. A VPN Gateway would introduce unnecessary overhead for connecting two networks in the same region. Public IP addresses with NSG rules would route traffic over the public internet. ExpressRoute is meant for connecting on-premises to Azure, not two VNets within Azure."
      },
      {
        "id": "normal_18",
        "category": "Networking",
        "q": "A company wants to centralize and simplify managing network rules across dozens of VNets in the organization. What will it use?",
        "a": [
          "Deleting the rules and relying on default settings",
          "Independent rules for each subnet with no coordination",
          "Azure Firewall or Azure Policy, for centralized rules",
          "Manually syncing NSG rules on each subnet"
        ],
        "c": 2,
        "e": "Azure Firewall provides a centralized gateway for managing rules, and Azure Policy enforces consistent configuration across VNets. Manually syncing dozens of subnets is inefficient and error-prone. Deleting rules and relying on defaults would reduce security. Independent rules with no coordination would only deepen the inconsistency problem."
      },
      {
        "id": "normal_19",
        "category": "Networking",
        "q": "A team wants firewall rules and a VPN Gateway shared across multiple subscriptions instead of duplicating them in each one. What topology will it choose?",
        "a": [
          "A separate firewall in each individual subscription",
          "Leaving out both the firewall and VPN Gateway entirely",
          "Isolated networks per department with no connectivity",
          "A hub-and-spoke topology with shared network resources"
        ],
        "c": 3,
        "e": "A hub-and-spoke topology with central network resources in a hub VNet connected to spoke VNets via peering lets you share costly resources. A separate firewall in each subscription would mean unnecessary duplication. Leaving out the firewall and VPN Gateway would reduce security and connectivity. Isolated networks with no connectivity would prevent sharing resources."
      },
      {
        "id": "normal_20",
        "category": "Networking",
        "q": "An application needs to route all outbound traffic through a central control point with logging, due to a security policy. What will it use?",
        "a": [
          "Azure Firewall, with rules and central logging",
          "Relying on logging by an external party",
          "A complete ban on all outbound traffic",
          "Direct outbound connections from each VM"
        ],
        "c": 0,
        "e": "Azure Firewall as a central point for outbound traffic lets you define rules and log all communication centrally. Direct outbound connections from each VM don't provide unified logging. A complete ban on outbound traffic would prevent the app from functioning. Relying on an external party's logging doesn't give the company its own control and visibility."
      },
      {
        "id": "normal_21",
        "category": "Networking",
        "q": "A company wants to protect a publicly accessible application against DDoS attacks while keeping access for legitimate users. What will it deploy?",
        "a": [
          "Shutting down the entire app during a suspected attack",
          "Azure DDoS Protection with Application Gateway or Front Door",
          "Only NSG rules for filtering network ports",
          "A preventive block on all inbound traffic"
        ],
        "c": 1,
        "e": "Azure DDoS Protection detects and mitigates volumetric attacks in real time, while Application Gateway or Front Door add another layer of protection while keeping access for legitimate users. Blocking all traffic would prevent access for legitimate users too. NSG rules aren't designed to detect volumetric DDoS attacks. Shutting down the app would cause a complete outage for everyone."
      },
      {
        "id": "normal_22",
        "category": "Networking",
        "q": "A team wants traffic between a PaaS web app and a PaaS database to stay inside Azure's private network. What will it use?",
        "a": [
          "Relying on PaaS's built-in automatic security",
          "The default public endpoints of both services",
          "VNet integration and Private Endpoints for both",
          "The public internet, with SSL encryption"
        ],
        "c": 2,
        "e": "VNet integration for App Service together with a Private Endpoint for the database connects both PaaS services over a private network. The default public endpoints would mean traffic passes through a public interface. SSL encryption protects the content, but doesn't address whether traffic passes through public or private endpoints. PaaS services aren't automatically fully isolated without deliberate configuration."
      },
      {
        "id": "normal_23",
        "category": "Networking",
        "q": "A branch office needs to connect to Azure quickly over its existing internet connection without waiting weeks for a dedicated line. What will it choose?",
        "a": [
          "Physically transporting data on disks",
          "Public IP addresses with no encryption",
          "ExpressRoute, for its guaranteed bandwidth",
          "VPN Gateway, with an encrypted internet tunnel"
        ],
        "c": 3,
        "e": "A VPN Gateway can be set up quickly because it uses the existing internet connection and creates an encrypted tunnel. ExpressRoute offers better performance, but setting it up takes weeks to months. Unencrypted public IP addresses would be a security risk. Physically transporting data doesn't address ongoing network connectivity, just a one-time transfer."
      },
      {
        "id": "normal_24",
        "category": "Compute",
        "q": "A company has traffic with bursty load and wants automatic VM scaling without manual administration. What compute model will it choose?",
        "a": [
          "App Service or Container Apps, with automatic scaling",
          "Manually adding VMs by an administrator as needed",
          "A fixed number of VMs set once and never changed",
          "One powerful VM sized for the worst-case scenario"
        ],
        "c": 0,
        "e": "Azure App Service or Container Apps with automatic scaling respond to current load without manual intervention. A fixed number of VMs would either fall short at peak or waste capacity off-peak. Manually adding VMs is exactly the burden the team wants to avoid. One powerful VM sized for the worst case would be needlessly expensive off-peak."
      },
      {
        "id": "normal_25",
        "category": "Compute",
        "q": "A development team wants to test a new app version with a small percentage of traffic before a full rollout, with the ability to roll back quickly. What will it use?",
        "a": [
          "Testing only locally, without real production data",
          "Deployment slots in App Service, for gradual rollout",
          "Deleting the old version immediately after the new deployment",
          "Deploying the new version straight to everyone"
        ],
        "c": 1,
        "e": "Deployment slots let you deploy a new version into a separate slot, gradually shift a small percentage of traffic to it, and quickly switch back if there's a problem. Deploying straight to everyone would risk a bug affecting the entire user base. Testing only locally won't reveal issues specific to the production environment. Deleting the old version immediately would prevent a quick rollback."
      },
      {
        "id": "normal_26",
        "category": "Storage",
        "q": "An application stores large amounts of unstructured data, like photos uploaded by users. Which service will it choose?",
        "a": [
          "Table Storage, for structured records",
          "Queue Storage, for message queues",
          "Blob Storage, for unstructured binary data",
          "Azure Files, for shared network folders"
        ],
        "c": 2,
        "e": "Blob Storage is optimized for storing large amounts of unstructured binary data like images. Azure Files provides shared network folders, better suited for documents shared between servers. Table Storage stores structured NoSQL key-value data. Queue Storage is used for storing messages between application components."
      },
      {
        "id": "normal_27",
        "category": "Storage",
        "q": "A company is migrating an app that needs access to a shared network folder over the SMB protocol, just like on the old server. What will it use?",
        "a": [
          "Table Storage, for structured data",
          "Disk Storage, for VM virtual disks",
          "Blob Storage, for binary objects",
          "Azure Files, for shared SMB network folders"
        ],
        "c": 3,
        "e": "Azure Files provides fully managed shared network folders over the standard SMB protocol, so the app works just like it did with a shared folder on a physical server. Blob Storage is meant for object storage, not emulating a network folder. Disk Storage provides virtual disks for VMs. Table Storage stores structured data, not access like a network folder."
      },
      {
        "id": "normal_28",
        "category": "Storage",
        "q": "Two parts of an application communicate asynchronously, where one sends messages and the other processes them over time. What will they use?",
        "a": [
          "Queue Storage, for a message queue",
          "Blob Storage, for storing files",
          "Azure Files, for a network folder",
          "Disk Storage, for virtual disks"
        ],
        "c": 0,
        "e": "Queue Storage stores messages in a queue that one component fills and another processes over time, enabling asynchronous communication. Blob Storage is for storing files, not message queues. Disk Storage provides virtual disks for VMs. Azure Files is a shared network folder for files, not a message queue mechanism."
      },
      {
        "id": "normal_29",
        "category": "Storage",
        "q": "An application stores millions of simple key-value records and needs fast access without a SQL schema. What will it choose?",
        "a": [
          "Disk Storage, for virtual disks",
          "Table Storage, for NoSQL key-value records",
          "Azure SQL Database, for a relational schema",
          "Blob Storage, for binary objects"
        ],
        "c": 1,
        "e": "Table Storage is a NoSQL store for structured key-value data, optimized for fast access without a fixed schema. Blob Storage is meant for binary objects like files. Azure SQL Database requires a defined relational schema, which goes against the requirement for a schema-less store. Disk Storage provides disks for VMs, not storage for data records."
      },
      {
        "id": "normal_30",
        "category": "Storage",
        "q": "A virtual machine needs attached storage functioning as its system or data disk. What does Azure provide for this?",
        "a": [
          "Queue Storage, for message queues",
          "Table Storage, for structured data",
          "Disk Storage, for VM virtual disks",
          "Blob Storage, for object data"
        ],
        "c": 2,
        "e": "Disk Storage provides virtual disks that function as the system or data disks attached to a virtual machine. Blob Storage is object storage accessible via API, not a directly attachable disk. Queue Storage stores messages between components, it isn't a disk. Table Storage stores structured data, also not a disk format for a VM."
      },
      {
        "id": "normal_31",
        "category": "Storage",
        "q": "Data is replicated three times within a single datacenter, which protects against a disk failure but not against an outage of the whole datacenter. What is this?",
        "a": [
          "RA-GRS, with read access to a secondary region",
          "GRS, replicating to a remote region",
          "ZRS, replicating across zones in a region",
          "LRS, replicating only within one datacenter"
        ],
        "c": 3,
        "e": "LRS (Locally Redundant Storage) replicates data three times within a single datacenter, protecting against a disk failure but not an outage of the whole datacenter. GRS also replicates to a remote region, which protects against more than the scenario describes. ZRS spreads copies across zones within a region, not just within one datacenter. RA-GRS is an extension of GRS, even more robust than the LRS described in the scenario."
      },
      {
        "id": "normal_32",
        "category": "Storage",
        "q": "A company wants its data to survive an outage of an entire datacenter within a region, without needing geographic distance. What will it use?",
        "a": [
          "ZRS, replicating across zones within a region",
          "LRS, replicating only within one datacenter",
          "Hot tier, as an access level",
          "GRS, replicating to a remote region"
        ],
        "c": 0,
        "e": "ZRS replicates data synchronously across multiple availability zones within a single region, surviving an outage of an entire datacenter. LRS only replicates within one datacenter, so a full datacenter outage would threaten the data. GRS replicates to another region, going beyond the requirement. Hot tier is an access frequency level, not a type of geographic redundancy."
      },
      {
        "id": "normal_33",
        "category": "Storage",
        "q": "A company wants its data to survive even a catastrophe that destroys an entire region, by replicating to a distant Azure region. What will it use?",
        "a": [
          "LRS, replicating within one datacenter",
          "GRS, replicating to a remote region",
          "Premium SSD, as a disk type",
          "ZRS, replicating across zones within a region"
        ],
        "c": 1,
        "e": "GRS asynchronously replicates data to a distant paired region, protecting against a catastrophe affecting an entire region. LRS only protects against failure within a single datacenter. ZRS protects against a datacenter outage within a region, not a catastrophe affecting the whole region. Premium SSD is a disk performance tier, not a geographic redundancy mechanism."
      },
      {
        "id": "normal_34",
        "category": "Storage",
        "q": "An application frequently accesses current data and needs the fastest access tier in Blob Storage. What will it choose?",
        "a": [
          "Archive tier, for the cheapest storage",
          "Cold tier, as a separate level",
          "Hot tier, for frequent and fast access",
          "Cool tier, for less frequent access"
        ],
        "c": 2,
        "e": "Hot tier is optimized for frequently accessed data, with the highest storage cost but the lowest access cost. Archive tier is the cheapest for storage, but access takes hours, unsuited for frequent use. Cool tier suits less frequent access. Cold tier as a separate level doesn't exist in Azure Storage's core offering the same way Hot, Cool, and Archive do."
      },
      {
        "id": "normal_35",
        "category": "Storage",
        "q": "A company archives data it accesses once every few years and wants the lowest possible storage cost. What will it choose?",
        "a": [
          "Cool tier, for moderately frequent access",
          "Premium SSD, for high performance",
          "Hot tier, for frequent access",
          "Archive tier, for the lowest storage cost"
        ],
        "c": 3,
        "e": "Archive tier offers the lowest storage cost of all the tiers, suited for very rarely accessed data. Hot tier is optimized for frequent access and has the highest storage cost. Cool tier is a compromise for moderately frequent access, more expensive than Archive. Premium SSD is a high-performance disk for VMs, not an archival tier of Blob Storage."
      },
      {
        "id": "normal_36",
        "category": "Storage",
        "q": "Marketing stores reports it accesses once a month and wants a balance between cost and speed. What will it choose?",
        "a": [
          "Cool tier, as a balance between cost and speed",
          "LRS, as a type of data redundancy",
          "Hot tier, for the highest access speed",
          "Archive tier, for the lowest cost"
        ],
        "c": 0,
        "e": "Cool tier is designed for less frequently accessed data, with lower storage cost than Hot tier but faster access than Archive tier. Hot tier has a higher storage cost, optimal for daily access. Archive tier is the cheapest, but access takes hours. LRS is a type of data redundancy, not an access frequency tier."
      },
      {
        "id": "normal_37",
        "category": "Database",
        "q": "A company is migrating a relational database with tables and SQL queries and wants a managed service without owning a database server. What will it choose?",
        "a": [
          "Table Storage, a key-value store",
          "Azure SQL Database, a managed relational DB",
          "Blob Storage, for binary file storage",
          "Cosmos DB, a NoSQL engine option"
        ],
        "c": 1,
        "e": "Azure SQL Database is a fully managed relational database service supporting SQL, tables, and relationships, ideal for migrating a relational database. Cosmos DB is primarily a NoSQL database with a different data model. Table Storage is a simple NoSQL store, it doesn't support relational queries. Blob Storage is for storing files, not structured data."
      },
      {
        "id": "normal_38",
        "category": "Database",
        "q": "A global application needs a database with low latency and automatic replication across multiple regions worldwide. What will it choose?",
        "a": [
          "Azure SQL Database, with manual replication",
          "Azure Files, for shared storage",
          "Cosmos DB, with global distribution",
          "Disk Storage, for VM disks"
        ],
        "c": 2,
        "e": "Cosmos DB is a globally distributed NoSQL database designed for low latency and automatic replication across regions. Azure SQL Database can also be geo-replicated, but it isn't primarily designed for this kind of global low latency as a default trait. Azure Files provides shared network folders, it isn't a database. Disk Storage provides disks for VMs, not a global database."
      },
      {
        "id": "normal_39",
        "category": "Database",
        "q": "A team wants a database with a flexible schema for storing JSON documents with a variable structure. What will it choose?",
        "a": [
          "Disk Storage, for virtual disks",
          "Queue Storage, for message queues",
          "Azure SQL Database, with a fixed schema",
          "Cosmos DB, with document model support"
        ],
        "c": 3,
        "e": "Cosmos DB supports a document data model for JSON with a flexible schema, ideal for data with a variable structure. Azure SQL Database requires a strictly defined relational schema, which goes against the requirement for flexibility. Disk Storage provides disks for VMs, it isn't a database. Queue Storage stores messages between components, not documents."
      },
      {
        "id": "normal_40",
        "category": "Database",
        "q": "A company wants to automatically back up a database and be able to restore it to any point in the last 7 days. What feature will it use?",
        "a": [
          "Automated backups with point-in-time restore",
          "A manual database export by an administrator",
          "A resource lock, to protect the database",
          "A tag, to label the database"
        ],
        "c": 0,
        "e": "Azure SQL Database offers automated backups with point-in-time restore, recovering to any moment within the retention period. A manual export would require regular manual intervention by an administrator. A resource lock protects a resource from deletion, it doesn't address backup and restore to a specific point in time. A tag just describes a resource with metadata, it has no backup function."
      },
      {
        "id": "normal_41",
        "category": "Database",
        "q": "A team needs a database engine compatible with MySQL for an existing application without major code changes. What will it choose?",
        "a": [
          "Table Storage, for simple key-value data",
          "Azure Database for MySQL, as a managed service",
          "Cosmos DB, as a global NoSQL database",
          "Blob Storage, for storing binary files"
        ],
        "c": 1,
        "e": "Azure Database for MySQL is a managed service fully compatible with MySQL, enabling migration of an existing app without major changes. Cosmos DB is a NoSQL database with a different data model and would require rewriting the app. Table Storage can't handle MySQL queries. Blob Storage is for storing files, not for running a relational database."
      },
      {
        "id": "normal_42",
        "category": "Security",
        "q": "An application needs to securely store API keys and passwords it accesses at runtime instead of writing them in the code. What will it use?",
        "a": [
          "Resource group, as an organizational container",
          "Azure Advisor, for recommendations",
          "Azure Key Vault, for managing secrets",
          "Azure Monitor, for tracking metrics"
        ],
        "c": 2,
        "e": "Azure Key Vault securely stores sensitive data like keys and passwords, which the application accesses at runtime instead of storing them in the code. Azure Monitor collects metrics and logs and has nothing to do with storing secrets. A resource group is an organizational container for resources. Azure Advisor gives optimization recommendations, it isn't a store for secrets."
      },
      {
        "id": "normal_43",
        "category": "Security",
        "q": "A security team wants a security score and recommendations across the Azure environment, plus threat detection. What will it use?",
        "a": [
          "Azure Key Vault, for secrets",
          "Resource lock, for protecting resources",
          "Microsoft Sentinel, for incident analysis",
          "Defender for Cloud, for scoring and recommendations"
        ],
        "c": 3,
        "e": "Defender for Cloud provides a Secure Score, recommendations for improving security, and threat detection across the environment. Microsoft Sentinel is a SIEM tool for deeper incident analysis, not primarily for scoring configuration. Azure Key Vault stores secrets, it doesn't provide a security score. A resource lock protects a single resource from deletion."
      },
      {
        "id": "normal_44",
        "category": "Security",
        "q": "An analyst needs to centrally collect security data from many sources and investigate incidents using queries. What will they use?",
        "a": [
          "Microsoft Sentinel, for correlation work",
          "Azure Policy, for configuration rules",
          "Defender for Cloud, a security score tool",
          "Azure Advisor, for general recommendations"
        ],
        "c": 0,
        "e": "Microsoft Sentinel is a SIEM and SOAR tool for collecting, correlating, and investigating security data across sources, including automated responses. Defender for Cloud focuses on posture and protecting resources, not extensive incident analysis. Azure Policy enforces configuration rules, it isn't used for investigating incidents. Azure Advisor gives general recommendations, it isn't a security analytics tool."
      },
      {
        "id": "normal_45",
        "category": "Security",
        "q": "A company designs its security so that it automatically trusts nobody and verifies every request. What approach is this?",
        "a": [
          "Least privilege, as the principle of minimal permissions",
          "Zero Trust, as the principle of never automatically trusting",
          "Defense in depth, as layering multiple defenses",
          "Single sign-on, as one shared login"
        ],
        "c": 1,
        "e": "Zero Trust is a security model based on the principle of never trust, always verify, where every request is verified regardless of origin. Defense in depth means layering multiple security measures, a broader concept. Least privilege concerns minimal permissions; it's one of Zero Trust's principles, but isn't the same thing. Single sign-on addresses one login and has nothing to do with the overall security model."
      },
      {
        "id": "normal_46",
        "category": "Security",
        "q": "An administrator grants a user only the permissions strictly necessary for their job, nothing more. What principle is being followed?",
        "a": [
          "Conditional Access, conditioning access on context",
          "Zero Trust, a broader security philosophy",
          "Least privilege, granting minimal permissions",
          "Defense in depth, layering multiple defenses"
        ],
        "c": 2,
        "e": "Least privilege is the principle of granting only the minimal necessary permissions, reducing the risk of abuse if an account is compromised. Zero Trust is the broader security philosophy; least privilege is one of its components. Defense in depth means layering defenses, not specifically minimizing permissions. Conditional Access conditions access on circumstances, it doesn't address the scope of granted permissions."
      },
      {
        "id": "normal_47",
        "category": "Security",
        "q": "A team wants encryption certificates to be automatically renewed and centrally managed. What will it use?",
        "a": [
          "Network Security Group, for filtering",
          "A resource lock, to protect a resource",
          "A tag, to describe a resource",
          "Azure Key Vault, for certificate management"
        ],
        "c": 3,
        "e": "Azure Key Vault manages not just keys and secrets but also certificates, including their automatic renewal and centralized management. A resource lock protects a resource from deletion, it doesn't address certificate management. A Network Security Group filters network traffic, unrelated to certificate management. A tag is just a metadata label with no certificate management function."
      },
      {
        "id": "normal_48",
        "category": "Security",
        "q": "A security team wants alerts on suspicious behavior and an automatic response, like blocking an account. What will it use?",
        "a": [
          "Sentinel with playbooks, for automatic response",
          "A resource lock, protecting one specific resource",
          "Azure Policy, enforcing configuration rules",
          "A tag, a descriptive label on a resource"
        ],
        "c": 0,
        "e": "Microsoft Sentinel enables detecting suspicious behavior via analytics rules and an automatic response through playbooks. Azure Policy enforces configuration standards on resources, it doesn't detect user behavior in real time. A resource lock protects a resource from deletion, it doesn't react to suspicious sign-ins. A tag is just a metadata label with no detection function."
      },
      {
        "id": "normal_49",
        "category": "Security",
        "q": "An application accesses a database and the team wants authentication without storing a password anywhere in the code. What will it use?",
        "a": [
          "Sharing one common password between applications",
          "A managed identity, for authentication",
          "A connection string with the password in an environment variable",
          "Encoding the password into a binary file"
        ],
        "c": 1,
        "e": "A managed identity lets an application authenticate to a database without any password stored anywhere, Azure handles the verification automatically. A connection string in an environment variable is better than a hardcoded password, but it's still a secret that can be exposed. Sharing one common password is a security risk. Encoding a password into a binary file is just another form of storing a secret."
      },
      {
        "id": "normal_50",
        "category": "Security",
        "q": "A company wants encryption keys to never leave a certified hardware security module (HSM). What will it use?",
        "a": [
          "The standard Key Vault tier with software protection",
          "Sharing keys over encrypted email",
          "Key Vault Premium tier or Managed HSM",
          "Storing keys directly in the application's code"
        ],
        "c": 2,
        "e": "Key Vault Premium tier or Managed HSM ensures keys are generated and stored directly in a certified HSM and never leave it. The standard tier uses software-protected keys, not a dedicated HSM. Storing keys in code is a major security risk. Sharing over email creates unnecessary copies of the key outside a secure environment."
      },
      {
        "id": "normal_51",
        "category": "Governance",
        "q": "A manager grants an employee permission to read data in a resource group, but not delete it. What will they use for this?",
        "a": [
          "A tag, to describe the resource",
          "Azure Policy, for configuration rules",
          "A resource lock, to protect the resource",
          "RBAC, with a Reader role at that scope"
        ],
        "c": 3,
        "e": "RBAC assigns a specific role like Reader at a given scope, precisely controlling what that identity is allowed to do. Azure Policy enforces configuration rules on resources, not who has what access. A resource lock prevents deletion for everyone regardless of role. A tag just labels a resource with metadata, with no effect on permissions."
      },
      {
        "id": "normal_52",
        "category": "Governance",
        "q": "A company wants to enforce that all new storage accounts are automatically encrypted. What will ensure this?",
        "a": [
          "Azure Policy, for enforcing configuration rules",
          "RBAC, for granting permissions",
          "Resource group, as an organizational container",
          "Azure Advisor, for recommendations"
        ],
        "c": 0,
        "e": "Azure Policy lets you define rules that are enforced on resources, including blocking the creation of a resource that doesn't meet the rule. RBAC handles who has what permissions, not what properties a resource must have. A resource group is an organizational container. Azure Advisor gives recommendations, it doesn't actively enforce anything."
      },
      {
        "id": "normal_53",
        "category": "Governance",
        "q": "An administrator wants to protect a critical database from accidental deletion by anyone with sufficient permissions. What will they use?",
        "a": [
          "A tag, to describe the resource",
          "A resource lock, against deletion",
          "RBAC, for assigning roles",
          "Azure Policy, for configuration rules"
        ],
        "c": 1,
        "e": "A resource lock adds a protective layer to a resource regardless of a user's RBAC permissions. Azure Policy enforces configuration standards, but isn't primarily meant to protect a single resource from deletion. RBAC determines permissions, but even a user with full access could still delete the resource without a lock. A tag is just a metadata label with no protective function."
      },
      {
        "id": "normal_54",
        "category": "Governance",
        "q": "The finance department wants to recognize costs by project in billing. What will it best use for this?",
        "a": [
          "Azure Policy, for enforcing rules",
          "A resource lock, to protect a resource",
          "A tag, for describing and filtering resources",
          "A management group, for organizing subscriptions"
        ],
        "c": 2,
        "e": "Tags are paired metadata assigned to resources, which can be used to filter billing costs by project. A resource lock protects a resource from deletion and has nothing to do with billing. A management group organizes subscriptions, too coarse-grained for distinguishing projects. Azure Policy enforces rules, it doesn't generate a cost breakdown."
      },
      {
        "id": "normal_55",
        "category": "Governance",
        "q": "A large company with dozens of subscriptions wants to apply the same rules across all of them at once. What will it use?",
        "a": [
          "A resource group in each subscription separately",
          "A tag on individual resources",
          "A resource lock on critical resources",
          "A management group over all the subscriptions"
        ],
        "c": 3,
        "e": "A management group organizes multiple subscriptions into a hierarchy, letting you centrally apply policies to the whole group at once. A resource group only works within a single subscription. A tag just labels resources with metadata, it doesn't enforce rules. A resource lock protects an individual resource, it doesn't apply rules across subscriptions."
      },
      {
        "id": "normal_56",
        "category": "Governance",
        "q": "An external vendor needs to temporarily view the logs of one application, but not change anything else. What permission will you grant them?",
        "a": [
          "The Reader role scoped to that resource group",
          "The Owner role at subscription level",
          "Anonymous public access for everyone",
          "The Global Administrator role"
        ],
        "c": 0,
        "e": "The Reader role at the scope of that resource group gives the vendor the ability to view relevant resources without the right to change anything elsewhere — least privilege in practice. Owner at the subscription level would give much broader access than needed. Global Administrator is an extremely powerful role, disproportionate to the need. Anonymous access would mean anyone could access the logs."
      },
      {
        "id": "normal_57",
        "category": "Governance",
        "q": "A team wants to create a test environment that can be quickly deleted as a whole without affecting production. What will it use?",
        "a": [
          "A resource lock, as protection for resources",
          "A separate resource group just for tests",
          "Azure Policy, as a set of rules",
          "A tag, as a descriptive label for resources"
        ],
        "c": 1,
        "e": "A separate resource group for test resources lets you delete the entire test environment with a single command without affecting resources elsewhere. A tag just labels resources with metadata, it doesn't enable bulk deletion as a whole. A resource lock, by contrast, protects resources from deletion, the opposite of the desired behavior. Azure Policy enforces rules, it doesn't make bulk deletion easier."
      },
      {
        "id": "normal_58",
        "category": "Governance",
        "q": "An auditor wants to find out who made a configuration change on a resource and when, over the past month. What will they review?",
        "a": [
          "Pricing calculator, for cost estimates",
          "Azure Advisor, for recommendations",
          "Activity log, the history of resource actions",
          "A resource lock, protecting a resource"
        ],
        "c": 2,
        "e": "The Activity log records control-plane operations performed on resources, who changed what and when, exactly matching the audit need. Azure Advisor gives optimization recommendations, it doesn't record a history of actions. A resource lock protects a resource, on its own it doesn't provide a history record. The pricing calculator is for estimating costs in advance."
      },
      {
        "id": "normal_59",
        "category": "Governance",
        "q": "A company wants Azure Policy not only to detect non-compliant resources, but to actively remediate missing settings. What will enable this?",
        "a": [
          "The Deny effect, blocking creation",
          "The Append effect, adding fields",
          "The Audit effect, reporting only",
          "DeployIfNotExists, for automatic remediation"
        ],
        "c": 3,
        "e": "The DeployIfNotExists effect automatically deploys missing configuration if the policy finds that a resource lacks that property. The Audit effect only flags the non-compliance in a report, it doesn't actively fix anything. The Deny effect blocks the creation of a non-compliant resource, but doesn't remediate anything on existing resources. The Append effect adds fields to a creation request, it doesn't address remediating existing resources the way DeployIfNotExists does."
      },
      {
        "id": "normal_60",
        "category": "Governance",
        "q": "A company wants to prevent deploying a resource in the wrong region due to regulatory requirements. What best eliminates this risk?",
        "a": [
          "Azure Policy with a Deny effect for disallowed regions",
          "Training administrators and relying on their attention",
          "An email with a list of allowed regions",
          "A weekly manual check after creation"
        ],
        "c": 0,
        "e": "Azure Policy with a Deny effect technically blocks creating a resource outside the allowed regions, eliminating the risk of human error. Training reduces risk, but doesn't guarantee one hundred percent prevention. An email is just informational, with no technical enforcement. A weekly check addresses the problem only after the mistake has happened, not preventively."
      },
      {
        "id": "normal_61",
        "category": "Governance",
        "q": "A company wants to ensure a production network can't be changed, while reading the configuration remains allowed. What type of resource lock will it use?",
        "a": [
          "An RBAC Reader role for a specific user",
          "A ReadOnly lock, against any change",
          "A Deny policy, for blocking creation",
          "A CanNotDelete lock, against deletion"
        ],
        "c": 1,
        "e": "A ReadOnly lock prevents any changes to a resource, while reading remains possible for everyone. A CanNotDelete lock would only prevent deletion, changes would still be possible. A Deny policy blocks creating new resources by rule, it doesn't address protecting an existing resource this way. An RBAC Reader role would restrict specific users, but wouldn't protect the resource as a whole against changes from other users."
      },
      {
        "id": "normal_62",
        "category": "Compute",
        "q": "A company wants a VM with guaranteed performance and uninterrupted operation for a critical production database. What will it choose?",
        "a": [
          "A VM with no backup, for simplicity",
          "An on-premises server outside the cloud",
          "A standard or Reserved VM, guaranteed performance",
          "A Spot VM, for its lowest price"
        ],
        "c": 2,
        "e": "A standard or Reserved VM provides guaranteed performance and uninterrupted operation suited to a critical database. A Spot VM can be evicted at any time, unsuited for critical operation. A VM with no backup would risk data loss on failure. An on-premises server lacks the benefits of cloud elasticity and being managed."
      },
      {
        "id": "normal_63",
        "category": "Compute",
        "q": "A developer wants to host a static website (HTML, CSS, JS) with no backend logic as cheaply as possible. What will they choose?",
        "a": [
          "An Azure Virtual Machine with a web server",
          "Azure SQL Database, for data",
          "Azure Kubernetes Service, for orchestration",
          "Static Web Apps or Blob Storage static website"
        ],
        "c": 3,
        "e": "Static Web Apps or static website hosting in Blob Storage are designed exactly for static content with no backend logic, at low cost. A Virtual Machine would require managing an entire server just for static files. AKS is needlessly complex orchestration for a static site. Azure SQL Database is a database, not website hosting."
      },
      {
        "id": "normal_64",
        "category": "Compute",
        "q": "A team wants to run batch processing of a large volume of data in parallel across many compute nodes. What will it choose?",
        "a": [
          "Azure Batch, for parallel batch processing",
          "Resource lock, to protect resources",
          "Azure DNS, for managing names",
          "Azure Bastion, for remote access"
        ],
        "c": 0,
        "e": "Azure Batch is designed for running parallel batch jobs across large numbers of compute nodes. Azure Bastion addresses secure VM access and has nothing to do with batch processing. Azure DNS manages domain names. A resource lock protects resources from deletion, it doesn't address compute processing."
      },
      {
        "id": "normal_65",
        "category": "Compute",
        "q": "A company wants to deploy virtual desktops for remote employees with access to corporate applications. What will it choose?",
        "a": [
          "Azure Functions, for short functions",
          "Azure Virtual Desktop, for remote desktops",
          "Blob Storage, for storing files",
          "Azure DNS, for managing names"
        ],
        "c": 1,
        "e": "Azure Virtual Desktop provides virtualized desktops and applications accessible remotely, ideal for remote employees. Azure Functions is for short event-driven functions, not user desktops. Blob Storage stores files, it isn't a virtual desktop. Azure DNS only manages domain names."
      },
      {
        "id": "normal_66",
        "category": "Compute",
        "q": "A team wants to deploy a containerized app without having to manage a Kubernetes cluster, but with automatic scaling. What will it choose?",
        "a": [
          "An Azure Virtual Machine, with manual Docker",
          "Azure Kubernetes Service, with full cluster management",
          "Azure Container Apps, with serverless container scaling",
          "Azure Bastion, for VM access"
        ],
        "c": 2,
        "e": "Azure Container Apps lets you deploy containers with serverless automatic scaling without having to manage the Kubernetes cluster itself. AKS requires managing the entire cluster, more than the scenario wants. A VM with manual Docker requires managing the OS and container engine yourself. Azure Bastion addresses VM access, not hosting containers."
      },
      {
        "id": "normal_67",
        "category": "Compute",
        "q": "A company wants to process data streamed in real time from thousands of IoT devices. What will it choose?",
        "a": [
          "Azure Files, for classic shared storage",
          "Resource lock, to protect resources from deletion",
          "Azure DNS, for managing domain names",
          "Azure Event Hubs, for receiving streamed data"
        ],
        "c": 3,
        "e": "Azure Event Hubs is designed for receiving and processing large volumes of streamed data in real time from many sources like IoT devices. Azure Files provides shared network folders, unsuited for streaming data. A resource lock protects resources from deletion. Azure DNS only manages domain names."
      },
      {
        "id": "normal_68",
        "category": "Compute",
        "q": "A developer wants to deploy an API with automatic documentation generation and version management without owning the infrastructure. What will they choose?",
        "a": [
          "Azure API Management, for managing and publishing APIs",
          "Blob Storage, for storing API definitions",
          "An Azure Virtual Machine, with a custom API server",
          "Resource lock, to protect resources"
        ],
        "c": 0,
        "e": "Azure API Management provides publishing, documentation, versioning, and management of APIs without having to build your own infrastructure. A Virtual Machine would require manually managing an entire API server. Blob Storage just stores files, it doesn't provide API management features. A resource lock protects resources from deletion and has nothing to do with API management."
      },
      {
        "id": "normal_69",
        "category": "Compute",
        "q": "A company wants to run a short, compute-intensive machine learning job just once and then release the resource. What will it choose?",
        "a": [
          "Azure Bastion, for secure remote access",
          "An on-demand VM or cluster, deleted after completion",
          "An on-premises server with fixed capacity",
          "A continuously running VM with very high performance"
        ],
        "c": 1,
        "e": "A VM or compute cluster created on demand and deleted after the job finishes minimizes the cost of a one-off compute-intensive task. A continuously running VM would be needlessly costly for one-time use. An on-premises server with fixed capacity lacks cloud flexibility. Azure Bastion addresses VM access, it doesn't address compute processing."
      },
      {
        "id": "normal_70",
        "category": "Compute",
        "q": "A team wants to host the backend of a mobile app with push notifications and offline data sync. What will it choose?",
        "a": [
          "Resource lock, to protect resources",
          "Azure DNS, for managing names",
          "Azure Mobile Apps, part of App Service",
          "Azure Bastion, for remote access"
        ],
        "c": 2,
        "e": "Azure Mobile Apps, part of App Service, provides features like push notifications and offline data sync specifically for mobile backends. Azure Bastion addresses secure VM access, unrelated to a mobile backend. A resource lock protects resources from deletion. Azure DNS only manages domain names."
      },
      {
        "id": "normal_71",
        "category": "Compute",
        "q": "A company wants to deploy an application consistently across multiple cloud environments or on-premises using containers. What will it choose?",
        "a": [
          "Resource lock, to protect resources from deletion",
          "Azure Bastion, for secure VM access",
          "A tag, as a descriptive label for resources",
          "Azure Arc-enabled Kubernetes, for consistent management"
        ],
        "c": 3,
        "e": "Azure Arc-enabled Kubernetes lets you consistently manage and deploy containerized apps across Azure, other clouds, and on-premises. Azure Bastion addresses secure VM access, unrelated to multi-cloud deployment. A resource lock protects resources from deletion. A tag just describes resources with metadata."
      },
      {
        "id": "normal_72",
        "category": "Compute",
        "q": "A team wants to host long-running backend processes and workers that process message queues. What will it choose?",
        "a": [
          "Azure WebJobs, part of App Service",
          "Resource lock, to protect resources",
          "Azure DNS, for managing names",
          "A tag, to describe resources"
        ],
        "c": 0,
        "e": "Azure WebJobs, part of App Service, lets you run long-running backend processes and workers that process message queues in the same environment as the web app. A resource lock protects resources from deletion, unrelated to running processes. A tag just describes resources. Azure DNS manages domain names."
      },
      {
        "id": "normal_73",
        "category": "Monitoring",
        "q": "A company wants to track performance metrics and logs across all its resources in one central place. What will it use?",
        "a": [
          "Resource group, for organizing resources",
          "Azure Monitor, for collecting metrics and logs",
          "Azure Advisor, for recommendations",
          "A tag, to describe resources"
        ],
        "c": 1,
        "e": "Azure Monitor collects metrics and logs from resources in real time and provides a central view of performance across the environment. Azure Advisor gives one-time optimization recommendations, not ongoing real-time monitoring. A resource group is an organizational container, not a monitoring tool. A tag just describes resources with metadata."
      },
      {
        "id": "normal_74",
        "category": "Monitoring",
        "q": "A security team wants to search through a large volume of logs using a query language and find patterns in the data. What will it use?",
        "a": [
          "Azure Advisor, for recommendations",
          "Resource lock, to protect resources",
          "Log Analytics, with the KQL query language",
          "Azure Policy, for rules"
        ],
        "c": 2,
        "e": "Log Analytics is part of Azure Monitor, designed for storing and querying large volumes of logs using the KQL query language. Azure Advisor provides general recommendations, not a log analysis tool. A resource lock protects resources from deletion. Azure Policy enforces configuration standards, it isn't used for searching logs."
      },
      {
        "id": "normal_75",
        "category": "Monitoring",
        "q": "A team wants an alert when CPU usage on a production server exceeds 90%. What will it set up?",
        "a": [
          "A tag, to describe a resource",
          "A resource lock, to protect a resource",
          "Azure Policy, for configuration rules",
          "An alert in Azure Monitor on that metric"
        ],
        "c": 3,
        "e": "Azure Monitor lets you set alerts on specific metrics like CPU usage, exactly for this real-time monitoring purpose. Azure Policy enforces configuration rules, it doesn't continuously track performance metrics. A resource lock protects a resource from deletion. A tag just describes a resource, it doesn't react to metrics."
      },
      {
        "id": "normal_76",
        "category": "Monitoring",
        "q": "A company wants to visualize metrics and logs from multiple sources on one dashboard for its operations team. What will it use?",
        "a": [
          "An Azure Monitor workbook or dashboard",
          "A resource lock, to protect resources",
          "Azure Policy, for rules",
          "A tag, to describe resources"
        ],
        "c": 0,
        "e": "An Azure Monitor workbook or dashboard aggregates and visualizes metrics and logs from multiple sources on one screen. A resource lock protects resources from deletion, it doesn't provide data visualization. Azure Policy enforces rules, it isn't used for visualizing metrics. A tag just describes resources with metadata."
      },
      {
        "id": "normal_77",
        "category": "Monitoring",
        "q": "A team wants an automatic response to an alert, like restarting a service, without waiting for a human to act manually. What will it use?",
        "a": [
          "A tag, describing resources",
          "An alert wired to an Automation runbook",
          "Only an email notification to the team",
          "A resource lock, protecting resources"
        ],
        "c": 1,
        "e": "An alert connected to an Azure Automation runbook lets you trigger an automated action like restarting a service as soon as the condition is met. An email notification alone informs the team, but still requires manual action. A resource lock protects resources from deletion, it doesn't react to alerts. A tag just describes resources with metadata."
      },
      {
        "id": "normal_78",
        "category": "Monitoring",
        "q": "An administrator wants to find the history of all actions taken on a specific resource over the past week. What will they review?",
        "a": [
          "Resource lock settings",
          "A pricing calculator estimate",
          "That resource's Activity log",
          "Azure Advisor recommendations"
        ],
        "c": 2,
        "e": "The Activity log records the history of operations performed on a resource, who changed what and when. Azure Advisor gives optimization recommendations, it doesn't contain a history of actions. The pricing calculator estimates future costs, unrelated to a history of actions. Resource lock settings show the protection status, they don't provide a history of actions."
      },
      {
        "id": "normal_79",
        "category": "Management",
        "q": "A manager wants consolidated recommendations across cost, security, reliability, and performance in one place. What will they use?",
        "a": [
          "Azure DNS, for managing names",
          "Azure Monitor, for collecting metrics",
          "Resource group, for organizing resources",
          "Azure Advisor, for consolidated recommendations"
        ],
        "c": 3,
        "e": "Azure Advisor provides a consolidated overview of recommendations across cost, security, reliability, and performance. Azure Monitor collects metrics and logs, but doesn't provide the same kind of consolidated recommendations. A resource group is an organizational container. Azure DNS only handles domain name resolution."
      },
      {
        "id": "normal_80",
        "category": "Management",
        "q": "An administrator wants to manage Azure via the command line using scriptable commands that work cross-platform. What will they use?",
        "a": [
          "Azure CLI, as a cross-platform command-line tool",
          "A tag, as a descriptive label for resources",
          "A resource lock, to protect resources from deletion",
          "Azure Portal, as a graphical web interface"
        ],
        "c": 0,
        "e": "Azure CLI is a cross-platform command-line tool for scriptable management of Azure resources on Windows, macOS, and Linux. Azure Portal is a graphical web interface, not a command-line tool. A resource lock is a resource protection feature, not a general management tool. A tag just describes resources with metadata."
      },
      {
        "id": "normal_81",
        "category": "Management",
        "q": "A team wants to define infrastructure as code in a declarative JSON file for repeatable deployment. What will it use?",
        "a": [
          "Resource lock, to protect resources",
          "ARM template, as a declarative JSON format",
          "Cloud Shell, as a browser-based environment",
          "Azure CLI, as a command-line tool"
        ],
        "c": 1,
        "e": "An ARM template is a declarative JSON file describing infrastructure, which Azure Resource Manager uses for repeatable deployment. Azure CLI is an imperative tool for interactive management, not a declarative format. Cloud Shell is an environment for running commands, not an infrastructure format. A resource lock protects resources, it doesn't define infrastructure as code."
      },
      {
        "id": "normal_82",
        "category": "Cost",
        "q": "A finance manager wants to track current monthly spend and set up alerts when the budget is exceeded. What will they use?",
        "a": [
          "Azure Policy, for configuration rules",
          "Pricing calculator, for estimating before deployment",
          "Cost Management, for tracking spend and budgets",
          "Azure Advisor, for recommendations"
        ],
        "c": 2,
        "e": "Cost Management tracks actual spend in real time and lets you set budgets with alerts when the limit is exceeded. Azure Advisor gives recommendations, but doesn't offer ongoing tracking of actual spend. The pricing calculator is for estimating cost before deployment, not tracking costs already incurred. Azure Policy enforces configuration rules, not budget tracking."
      },
      {
        "id": "normal_83",
        "category": "Cost",
        "q": "An architect wants to estimate the monthly cost of a specific combination of VMs, storage, and networking before deployment. What will they use?",
        "a": [
          "Cost Management, for tracking incurred costs",
          "Azure Advisor, for recommendations",
          "TCO calculator, for comparing with on-premises",
          "Pricing calculator, for estimating before deployment"
        ],
        "c": 3,
        "e": "The pricing calculator is built exactly for estimating the cost of a specific service configuration before it's deployed. Cost Management tracks actual costs already incurred, not a hypothetical estimate beforehand. Azure Advisor gives recommendations for an existing environment. The TCO calculator compares on-premises costs with the cloud over a longer horizon, not the price of a specific configuration."
      },
      {
        "id": "normal_84",
        "category": "Cost",
        "q": "A team is planning a migration and wants to find out the savings versus maintaining its own infrastructure over a longer horizon. What will it use?",
        "a": [
          "TCO calculator, for comparing with on-premises costs",
          "Azure Advisor, for recommendations on an existing environment",
          "Pricing calculator, for estimating a configuration",
          "Cost Management, for tracking spend"
        ],
        "c": 0,
        "e": "The TCO calculator compares the total cost of running on-premises infrastructure with the cost of an equivalent solution in Azure over a longer horizon. The pricing calculator estimates the cost of a specific Azure configuration, but doesn't compare it with on-premises costs. Azure Advisor gives recommendations for an already-existing Azure environment. Cost Management tracks costs already incurred in Azure."
      },
      {
        "id": "normal_85",
        "category": "Storage",
        "q": "A company wants to store and version container images, from which it deploys applications to AKS. What will it use?",
        "a": [
          "Azure Files, for shared storage",
          "Container Registry, for managing images",
          "Table Storage, for structured data",
          "Blob Storage, for object data"
        ],
        "c": 1,
        "e": "Azure Container Registry is a managed service for storing and managing Docker and OCI container images. Blob Storage is general-purpose object storage, not optimized for versioning images the same way. Azure Files provides shared network folders, not an image registry. Table Storage stores simple structured data and has nothing to do with managing images."
      },
      {
        "id": "normal_86",
        "category": "Storage",
        "q": "A company wants older versions of a file to be automatically preserved for 30 days in case of a user mistake. What will it use?",
        "a": [
          "Higher redundancy like GRS",
          "Lifecycle management, for deleting old data",
          "Blob versioning and soft delete with retention",
          "Switching to Archive tier"
        ],
        "c": 2,
        "e": "Blob versioning preserves prior versions of an object with every change, and soft delete lets you restore deleted objects for a defined period. Lifecycle management is for automatically moving or deleting data by age, not preserving version history. Higher redundancy like GRS protects against infrastructure outages, not accidental file overwrites. Archive tier just changes the price and speed of access."
      },
      {
        "id": "normal_87",
        "category": "Storage",
        "q": "A team wants to securely share a specific file with an external partner for a limited 24-hour window without creating an account. What will it use?",
        "a": [
          "Sharing the account's primary access key",
          "Public access to the entire storage account, permanently",
          "Creating a full account for the partner",
          "A Shared Access Signature (SAS) token with a time limit"
        ],
        "c": 3,
        "e": "A SAS token lets you grant time- and scope-limited access to a specific resource without creating an account. Permanent public access to the entire account would expose all data to anyone. Sharing the primary key would give unlimited access to all data. Creating a full account is administratively heavier for one-off sharing."
      },
      {
        "id": "normal_88",
        "category": "Storage",
        "q": "A company wants to automatically move data older than 90 days to a cheaper tier without manual intervention. What will it use?",
        "a": [
          "A lifecycle management policy, for automatic transfer",
          "Switching the whole account to a more expensive Premium tier",
          "A manual monthly transfer by an administrator",
          "Deleting old data without creating a backup"
        ],
        "c": 0,
        "e": "A lifecycle management policy automatically moves data to a cheaper tier based on defined rules tied to data age. A manual monthly check is time-consuming and prone to being forgotten. Deleting data without a backup could cause data loss. Switching to Premium tier would actually increase costs."
      },
      {
        "id": "normal_89",
        "category": "Compute",
        "q": "A team wants to deploy an application that automatically restarts on failure, without manual administrator intervention. What will provide this?",
        "a": [
          "A manual restart after a user reports it",
          "A self-healing orchestration mechanism like AKS",
          "Manual monitoring by an administrator",
          "Shutting down the application on any problem"
        ],
        "c": 1,
        "e": "A self-healing mechanism, like in Azure Kubernetes Service, automatically detects failure and restarts the application without manual intervention. Manual monitoring requires an administrator to notice the problem and react themselves. Shutting down the app on any problem would worsen availability, not fix it. A manual restart after a user report is a slow, reactive approach."
      },
      {
        "id": "normal_90",
        "category": "Compute",
        "q": "A company wants to host a backend for smart devices sending telemetry and wants central management of connected devices. What will it choose?",
        "a": [
          "Azure Bastion, for secure VM access",
          "Network Security Group, for filtering traffic",
          "Azure DNS, only for domain name resolution",
          "Microsoft Entra Connect, for identity synchronization"
        ],
        "c": 2,
        "e": "Azure IoT Hub is designed exactly for two-way communication and central management of large numbers of connected devices. Blob Storage just stores files and doesn't address device communication. A resource lock protects resources from deletion. Azure DNS only manages domain names and has nothing to do with managing IoT devices."
      },
      {
        "id": "normal_91",
        "category": "Networking",
        "q": "A company wants to connect its local Active Directory with a cloud identity for unified employee sign-in. What will it use?",
        "a": [
          "A tag, as a descriptive label for resources",
          "Azure Firewall, with rules for allowed sources",
          "A resource lock, to protect resources from deletion",
          "Azure DNS, only for managing domain names"
        ],
        "c": 3,
        "e": "Microsoft Entra Connect synchronizes identities between a local Active Directory and Microsoft Entra ID, enabling unified sign-in across environments. Azure DNS only handles domain name resolution. A Network Security Group filters network traffic, unrelated to identity synchronization. Azure Bastion provides VM access, it doesn't address linking identities."
      },
      {
        "id": "normal_92",
        "category": "Networking",
        "q": "A team wants to restrict which public IP addresses can communicate with their Azure environment at all, at the network level. What will it use?",
        "a": [
          "Application Gateway or Front Door, with HTTPS support",
          "A VPN Gateway, with an encrypted tunnel between networks",
          "A Network Security Group, with a redirection rule",
          "Azure DNS, with a regular CNAME record"
        ],
        "c": 0,
        "e": "Azure Firewall lets you define rules that restrict communication to only allowed source IP addresses at the whole-network level. Azure DNS only handles domain name resolution. A resource lock protects resources from deletion, it doesn't address network traffic filtering. A tag just describes resources with metadata."
      },
      {
        "id": "normal_93",
        "category": "Networking",
        "q": "A company wants a web app to automatically redirect HTTP requests to encrypted HTTPS. What will it set up?",
        "a": [
          "Azure DNS, only with a CNAME record",
          "Application Gateway or Front Door, with redirect support",
          "A Network Security Group, with a custom routing rule",
          "A VPN Gateway, only with an encrypted tunnel"
        ],
        "c": 1,
        "e": "Application Gateway or Front Door offer a built-in feature for automatically redirecting HTTP requests to encrypted HTTPS. A Network Security Group filters traffic by rules, it doesn't redirect protocols. Azure DNS just resolves names, it doesn't redirect a protocol. A VPN Gateway creates an encrypted connection between networks, it doesn't address redirecting web traffic."
      },
      {
        "id": "normal_94",
        "category": "Networking",
        "q": "A team wants to find out exactly where network traffic into their VNet is coming from, and log all communication for auditing. What will it use?",
        "a": [
          "Just Azure DNS alone, with no other services",
          "Region autoscaling with Traffic Manager for routing",
          "Just the Network Security Group alone, nothing else",
          "Just a VPN Gateway alone, with nothing else"
        ],
        "c": 2,
        "e": "NSG Flow Logs record information about network traffic passing through a Network Security Group, enabling auditing and analysis of where communication originates. A resource lock protects resources from deletion, it doesn't provide traffic logging. A tag just describes resources with metadata. The pricing calculator is for estimating costs, unrelated to network logging."
      },
      {
        "id": "normal_95",
        "category": "Networking",
        "q": "A company wants to automatically scale the number of instances of a web app according to network load across multiple regions. What will it combine?",
        "a": [
          "A public IP with absolutely no restriction",
          "Relying only on a strong admin password",
          "Sharing a link with a few trusted people",
          "Autoscaling per region plus Traffic Manager"
        ],
        "c": 3,
        "e": "Combining per-region autoscaling with Traffic Manager for routing lets you scale capacity according to load while also routing users to the appropriate region. A Network Security Group alone just filters traffic, it doesn't address scaling or routing between regions. Azure DNS alone, with no other services, won't provide scaling. A VPN Gateway alone only addresses connecting networks, not scaling or routing between regions."
      },
      {
        "id": "normal_96",
        "category": "Networking",
        "q": "A team wants to ensure an application's internal admin interface is reachable only from the corporate network, not the public internet. What will it use?",
        "a": [
          "A Private Endpoint or NSG rules restricting source IPs",
          "Sharing a link only with trusted people",
          "A public IP address with no restriction",
          "Relying only on a complex administrator password"
        ],
        "c": 0,
        "e": "A Private Endpoint or NSG rules restricting access to just the corporate IP range technically ensure the interface isn't reachable from the public internet. An unrestricted public IP address would expose the interface to anyone on the internet. Sharing a link only with trusted people doesn't address technical security, the link could leak. Relying on a complex password doesn't prevent the connection attempt itself from outside."
      },
      {
        "id": "normal_97",
        "category": "Database",
        "q": "A company wants to migrate an application using specific PostgreSQL features without major code changes. What will it choose?",
        "a": [
          "Table Storage, for simple key-value data",
          "Database for PostgreSQL, a compatible service",
          "Blob Storage, for storing binary files",
          "Cosmos DB, a global NoSQL database"
        ],
        "c": 1,
        "e": "Azure Database for PostgreSQL is a managed service fully compatible with PostgreSQL, enabling migration with minimal code changes. Cosmos DB is a NoSQL database with a different data model and would require rewriting the app. Table Storage can't handle PostgreSQL-specific queries. Blob Storage is for storing files, not running a relational database."
      },
      {
        "id": "normal_98",
        "category": "Governance",
        "q": "A company wants every newly created resource to automatically require a department-name tag, otherwise the resource can't be created. What will it use?",
        "a": [
          "Activity log, as a record of actions taken",
          "A resource lock, protecting a resource from deletion",
          "Azure Policy, with a Deny effect enforcing a required tag",
          "RBAC, for granting specific permissions"
        ],
        "c": 2,
        "e": "Azure Policy with a Deny effect can enforce that a resource without the required tag is never created at all, guaranteeing consistent tagging from the start. RBAC handles who has what permissions, not what properties a resource must have. A resource lock protects an existing resource from deletion, it doesn't address rules for creating new resources. The Activity log just records actions already taken, it doesn't enforce anything in advance."
      },
      {
        "id": "normal_99",
        "category": "Networking",
        "q": "A company has traffic with bursty load across multiple Azure regions and wants a load balancer that works across regions, not just within one. What does it actually need?",
        "a": [
          "Network Security Group, for filtering network traffic",
          "Azure Bastion, for secure VM access",
          "Azure Load Balancer, said to work across regions too",
          "Traffic Manager or Front Door, for routing between regions"
        ],
        "c": 3,
        "e": "Azure Traffic Manager or Front Door are designed for routing traffic across multiple regions, unlike Load Balancer, which only works within a single region at the network layer. A Network Security Group just filters traffic by rules, it doesn't address routing between regions. Azure Bastion provides VM access and has nothing to do with routing traffic between regions."
      },
      {
        "id": "normal_100",
        "category": "Cloud concepts",
        "q": "A retailer's finance team wants to shift Azure spending from a large upfront purchase to a recurring monthly operating cost that scales with actual usage, so it doesn't tie up capital in hardware. Which cloud pricing characteristic are they taking advantage of?",
        "a": [
          "Consumption-based pricing (OpEx)",
          "Economies of scale",
          "Vertical scaling",
          "Community cloud"
        ],
        "c": 0,
        "e": "Cloud consumption-based pricing shifts spending from CapEx (buying hardware) to OpEx (paying for what you use as you go), which is exactly what avoids tying up capital. Economies of scale explains why the provider's prices are lower, not why the company's own spending pattern changed. Vertical scaling is about resource sizing. Community cloud is a deployment model shared among similar organizations."
      },
      {
        "id": "normal_101",
        "category": "Cloud concepts",
        "q": "A budgeting team compares hosting an application on-premises versus in Azure and wants to include not just server cost but also power, cooling, staff time, and maintenance over several years in the comparison. What are they calculating?",
        "a": [
          "Return on investment (ROI)",
          "Total cost of ownership (TCO)",
          "Economies of scale",
          "Capital expenditure (CapEx)"
        ],
        "c": 1,
        "e": "Total cost of ownership captures the full cost of running infrastructure over its lifetime, including indirect costs like power, cooling, and staff — not just the sticker price of hardware. ROI measures the financial return on an investment, not the full cost. Economies of scale explains provider pricing, not the customer's own cost comparison. CapEx is only the upfront hardware cost, a subset of TCO."
      },
      {
        "id": "normal_102",
        "category": "Cloud concepts",
        "q": "An e-commerce app automatically adds web server instances during a flash sale and automatically removes them a few hours later once traffic drops, without anyone manually intervening. Which cloud characteristic is being demonstrated?",
        "a": [
          "Scalability",
          "High availability",
          "Elasticity",
          "Fault tolerance"
        ],
        "c": 2,
        "e": "Elasticity specifically refers to resources being added and removed automatically in response to real-time demand. Scalability is the broader, more general ability of a system to grow (which can be manual), so it's less precise here than elasticity. High availability is about uptime, not resource adjustment. Fault tolerance is about surviving component failures."
      },
      {
        "id": "normal_103",
        "category": "Cloud concepts",
        "q": "A SaaS company wants to guarantee that customers can keep using its application even if an entire Azure region experiences a major outage, by having the application ready to run from a second region within minutes. Which practice does this describe?",
        "a": [
          "Vertical scaling",
          "Economies of scale",
          "Colocation",
          "Disaster recovery"
        ],
        "c": 3,
        "e": "Disaster recovery planning includes being able to fail over to a secondary region to keep the application running through a major outage. Vertical scaling addresses capacity on a single machine, not regional failover. Economies of scale is a pricing benefit. Colocation refers to hosting owned hardware in a third-party facility."
      },
      {
        "id": "normal_104",
        "category": "Cloud concepts",
        "q": "A gaming company notices its VM-based backend is maxed out on CPU during peak hours. Rather than replacing the VM with a bigger one, it puts several identical VMs behind a load balancer to spread the traffic. What scaling approach did it choose?",
        "a": [
          "Horizontal scaling",
          "Vertical scaling",
          "Elasticity",
          "High availability"
        ],
        "c": 0,
        "e": "Adding more machines of the same size to share load is horizontal scaling (scaling out). Vertical scaling would mean resizing the existing VM to be bigger instead. Elasticity refers specifically to automatic scaling in response to demand, which isn't stated here since the company made a manual architectural choice. High availability is about uptime, not how capacity is added."
      },
      {
        "id": "normal_105",
        "category": "Cloud models",
        "q": "A finance department wants to move its accounting software to the cloud but doesn't want to manage any servers, operating systems, or even the application code — it just wants to log in and use the finished product. Which service model fits best?",
        "a": [
          "PaaS",
          "SaaS",
          "IaaS",
          "Hybrid cloud"
        ],
        "c": 1,
        "e": "SaaS delivers a complete, ready-to-use application, with the provider managing everything underneath, matching a department that only wants to log in and use it. PaaS still requires deploying and managing an application. IaaS requires managing the OS and more. Hybrid cloud describes mixing environments, not a service tier."
      },
      {
        "id": "normal_106",
        "category": "Cloud models",
        "q": "A startup wants full control over the operating system and installed software for its custom application, but doesn't want to buy or maintain physical servers. Which service model should it choose?",
        "a": [
          "SaaS",
          "PaaS",
          "IaaS",
          "FaaS"
        ],
        "c": 2,
        "e": "IaaS provides virtual machines and storage while letting the customer fully control the OS and installed software, which matches wanting OS-level control without owning hardware. SaaS gives no control over the underlying software at all. PaaS abstracts away the OS, which conflicts with wanting full OS control. FaaS runs isolated functions, not a customer-managed OS."
      },
      {
        "id": "normal_107",
        "category": "Cloud concepts",
        "q": "A hospital network is required by regulation to keep patient records on infrastructure it physically controls, but wants to run its public patient-facing appointment website in Azure. Which deployment approach fits this requirement?",
        "a": [
          "Public cloud only",
          "Private cloud only",
          "Community cloud",
          "Hybrid cloud"
        ],
        "c": 3,
        "e": "Hybrid cloud combines on-premises or private infrastructure with public cloud, which lets the hospital keep regulated records under its own control while still using Azure for the public-facing site. Public cloud only wouldn't satisfy the requirement to keep records on infrastructure it controls. Private cloud only would mean not using Azure at all for the website. Community cloud is shared by multiple organizations with common needs, not a mix of on-prem and public."
      },
      {
        "id": "normal_108",
        "category": "Cloud concepts",
        "q": "A logistics company runs workloads on both Azure and another cloud provider at the same time, partly to avoid depending entirely on a single vendor. What is this strategy called?",
        "a": [
          "Multi-cloud",
          "Hybrid cloud",
          "Private cloud",
          "Colocation"
        ],
        "c": 0,
        "e": "Multi-cloud means using more than one public cloud provider, often specifically to reduce dependence on any single vendor. Hybrid cloud refers to combining on-premises/private infrastructure with public cloud, not two public clouds. Private cloud is dedicated infrastructure for one organization. Colocation means placing owned hardware in a third-party facility."
      },
      {
        "id": "normal_109",
        "category": "Cloud concepts",
        "q": "A startup wants to launch a new product idea, test it with real customers, and be able to shut the whole thing down within days if it doesn't succeed, without having wasted money on hardware it now has to sell off. Which cloud benefit does this best illustrate?",
        "a": [
          "Economies of scale",
          "Agility",
          "Fault tolerance",
          "High availability"
        ],
        "c": 1,
        "e": "Agility refers to the speed and low commitment with which cloud resources can be provisioned and deprovisioned, letting teams experiment and change direction quickly without being stuck with unwanted hardware. Economies of scale is about the provider's bulk-purchasing cost advantage. Fault tolerance and high availability both concern uptime and reliability, not speed of change."
      },
      {
        "id": "normal_110",
        "category": "Cloud concepts",
        "q": "A company runs a virtual machine in Azure. Under the shared responsibility model, who is responsible for patching the guest operating system running inside that VM?",
        "a": [
          "Microsoft",
          "Both equally, with no distinction",
          "The customer",
          "Neither — patching is automatic in all cases"
        ],
        "c": 2,
        "e": "In IaaS, the customer controls and is responsible for the guest operating system, including patching it. Microsoft is responsible for the underlying physical infrastructure and virtualization layer, not the OS inside a customer's VM. It isn't a shared 50/50 task, and patching is not automatic by default for IaaS VMs."
      },
      {
        "id": "normal_111",
        "category": "Cloud concepts",
        "q": "A company moves its email system from an on-premises server to Microsoft 365 (SaaS). Under the shared responsibility model, what does the company still remain responsible for?",
        "a": [
          "Patching the operating system",
          "Maintaining the physical servers",
          "Managing the application code",
          "Managing its own data and user access"
        ],
        "c": 3,
        "e": "Even in SaaS, the customer always retains responsibility for its own data and controlling who has access to it. Microsoft handles the OS, physical servers, and application code entirely in a SaaS model like Microsoft 365 — the customer has no server or code to manage at all."
      },
      {
        "id": "normal_112",
        "category": "Cloud concepts",
        "q": "A media company wants its video streaming service to keep working smoothly even during a scheduled maintenance update to one of the servers behind it. Which characteristic should its architecture prioritize?",
        "a": [
          "High availability",
          "Economies of scale",
          "Vertical scaling",
          "Total cost of ownership"
        ],
        "c": 0,
        "e": "High availability design (such as running multiple redundant instances) keeps a service accessible even while individual components are being updated or maintained. Economies of scale and total cost of ownership are cost concepts unrelated to uptime during maintenance. Vertical scaling addresses capacity of a single resource, not continuity during updates."
      },
      {
        "id": "normal_113",
        "category": "Cloud concepts",
        "q": "An analytics team needs a burst of 200 virtual machines for a six-hour overnight data processing job, then needs zero the rest of the day. Which cloud characteristic makes this practical and cost-effective?",
        "a": [
          "Economies of scale alone",
          "Elasticity and consumption-based pricing",
          "Vertical scaling alone",
          "High availability alone"
        ],
        "c": 1,
        "e": "Elasticity lets the team spin up 200 VMs on demand and remove them right after, and consumption-based pricing means they only pay for those six hours rather than owning that capacity permanently. Economies of scale explains why prices are lower overall but not why a short burst is affordable. Vertical scaling only resizes a single machine, not launching 200 at once. High availability concerns uptime, not short-term capacity bursts."
      }
    ],
    "heroic": [
      {
        "id": "heroic_0",
        "category": "Cloud",
        "q": "An e-commerce site sees ten times more traffic in November and December than the rest of the year, but for the rest of the year the same capacity would mostly sit idle and expensive. Which solution best fits this pattern?",
        "a": [
          "Using autoscaling in the public cloud with a consumption-based payment model",
          "Buying physical servers powerful enough for peak load and leaving them running all year",
          "Reserving a fixed VM capacity for 3 years with a Reserved Instances discount",
          "Running the app in a private cloud with fixed capacity sized for average load"
        ],
        "c": 0,
        "e": "Autoscaling with a consumption-based (pay-as-you-go) model exactly matches irregular, seasonal load — capacity automatically rises at peak and drops outside it, so the company only pays for actual usage. Physical servers sized for peak would be expensive and idle most of the year. Reserved Instances are good for stable, predictable load, not extreme seasonal swings. Fixed capacity sized for the average wouldn't be enough at peak, costing the company revenue."
      },
      {
        "id": "heroic_1",
        "category": "Cloud",
        "q": "A company has an old internal system that, due to licensing and hardware dependencies, can't be migrated to the cloud, but it wants to build all new customer-facing applications in Azure. What architectural approach does this require?",
        "a": [
          "Migrating the old system to a SaaS solution from a different provider",
          "Choosing a hybrid architecture connecting the on-premises system with Azure",
          "Running everything purely in the public cloud and rewriting the old system from scratch before launch",
          "Running everything purely on-premises, including new apps, for consistency"
        ],
        "c": 1,
        "e": "A hybrid architecture lets you keep the non-migratable system on-premises while building new apps in Azure, connected via something like a VPN or ExpressRoute. Rewriting the old system from scratch would be costly and outside the scenario, which explicitly says migration isn't possible. Running everything on-premises would contradict the requirement to build new apps in Azure. Migrating to a third-party SaaS solution doesn't address the licensing and hardware dependencies described."
      },
      {
        "id": "heroic_2",
        "category": "Reliability",
        "q": "A critical application must stay available even in the unlikely event that an entire Azure region becomes unavailable due to a large-scale regional disaster. What architecture covers this risk?",
        "a": [
          "Increasing backup frequency within the same single region",
          "Deploying across multiple availability zones in one geographic region",
          "Deploying across two or more distant Azure regions with replication",
          "Deploying on a significantly larger VM with more performance in one region"
        ],
        "c": 2,
        "e": "Only deploying across multiple regions (multi-region) with data replication protects against a full regional outage, because the application keeps running elsewhere, beyond the reach of the disaster. Availability zones protect against a datacenter outage, but they're still part of one region, and a disaster affecting the whole region would impact them all at once. A larger VM increases performance, but doesn't address geographic resilience. More frequent backups within the same region would also be unavailable during a regional outage."
      },
      {
        "id": "heroic_3",
        "category": "Governance",
        "q": "A large company with dozens of subscriptions wants to prevent any team from creating extremely expensive VM sizes across the whole organization, not just one subscription. What's the most effective solution?",
        "a": [
          "Send an internal memo banning expensive VM sizes via email",
          "Set Azure Policy at the level of individual resource groups in each subscription separately",
          "Set up an Azure Monitor alert when a cost limit is exceeded",
          "Set Azure Policy at the management group level over all subscriptions"
        ],
        "c": 3,
        "e": "Azure Policy applied at the management group level is enforced across all subscriptions beneath it at once, so there's no need to set the rule separately in each subscription. Setting it at the level of individual resource groups would require repeating the configuration dozens of times and risk gaps in coverage. An internal memo is just a recommendation with no technical enforcement, teams can ignore it. A Monitor alert only warns after a cost has already been incurred, it won't prevent the expensive VM from being created in the first place."
      },
      {
        "id": "heroic_4",
        "category": "Governance",
        "q": "An external vendor needs temporary access to view the logs of one specific application to resolve an incident, but must not have access to any other resources or be able to change them. What permission will you grant them?",
        "a": [
          "A Reader role scoped only to the resource group where the app runs",
          "Allow anonymous public access to the logs via a link",
          "Assign the Owner role at the level of the whole subscription",
          "Assign the Global Administrator role in Microsoft Entra ID"
        ],
        "c": 0,
        "e": "A Reader role assigned exactly at the scope of that resource group lets the vendor view only relevant resources without the right to change anything or see resources elsewhere — least privilege in practice. Owner at the subscription level would give the vendor far broader access and the right to change resources, more than needed. Global Administrator is an extremely powerful role for managing the entire tenant, wildly disproportionate to the need. Anonymous public access would additionally mean anyone could access the logs, not just the vendor."
      },
      {
        "id": "heroic_5",
        "category": "Cost",
        "q": "The finance department needs to see an exact monthly cost breakdown by individual internal projects every month, where those projects share the same subscription and often the same resource groups. What approach enables this?",
        "a": [
          "Relying on the resource group name to clearly identify the project",
          "Tagging resources by project and filtering costs in Cost Management",
          "Creating a separate subscription for each individual internal project",
          "Using Azure Advisor to estimate the cost of individual projects"
        ],
        "c": 1,
        "e": "Consistently tagging resources by project together with Cost Management lets you filter and report costs exactly by tag, even when projects share the same subscription or resource group. Creating a separate subscription per project would work, but it's a much heavier administrative change than the scenario calls for, and the question assumes a shared environment. Azure Advisor gives optimization recommendations, it doesn't provide a cost breakdown by custom project categories. Relying on the resource group name is unreliable if projects share the same resource groups, as the scenario describes."
      },
      {
        "id": "heroic_6",
        "category": "Storage",
        "q": "A photo-sharing app expects millions of images of varying sizes to be uploaded monthly, which will be accessed via web URLs. Which storage is designed for this purpose?",
        "a": [
          "Azure SQL Database, for storing binary data in table columns",
          "Azure Queue Storage, for processing asynchronous message queues",
          "Azure Blob Storage, for scalable object storage with URL access",
          "Azure Table Storage, for fast structured access"
        ],
        "c": 2,
        "e": "Blob Storage is designed exactly for massively scalable storage of unstructured binary objects like images, with direct access via HTTP/HTTPS URL. Table Storage stores structured key-value data, not binary files like photos. Queue Storage is for message queues between application components, not for storing files for end users. Storing millions of binary images directly in a SQL database is an inefficient and expensive solution compared to object storage built exactly for this purpose."
      },
      {
        "id": "heroic_7",
        "category": "Storage",
        "q": "Microservice A generates orders and microservice B processes them over time, but B can be temporarily slower or unavailable without losing orders created in the meantime. What mechanism ensures this?",
        "a": [
          "A direct synchronous HTTP call between A and B with no intermediary",
          "A shared database table that both services read from and write to simultaneously",
          "A shared Blob Storage location where both services write the same file",
          "A message queue (Queue Storage) between A and B for asynchronous processing"
        ],
        "c": 3,
        "e": "A message queue lets service A insert orders independently of whether B is currently available, and B processes them whenever it's ready, with no data loss. A direct synchronous call would fail or block A if B were temporarily unavailable. A shared file in Blob Storage isn't designed for safe concurrent writes and reads in a queue pattern. A shared database table with concurrent access from both services introduces conflict risks and isn't a standard solution for asynchronous communication."
      },
      {
        "id": "heroic_8",
        "category": "Networking",
        "q": "Administrators occasionally need RDP access to production VMs, but security policy prohibits assigning public IP addresses to those VMs. Which solution satisfies this requirement?",
        "a": [
          "Azure Bastion, for browser-based access with no public IP",
          "Open port 3389 on the NSG for any source IP",
          "Install a VPN client directly on that VM",
          "A temporary public IP assigned only during access"
        ],
        "c": 0,
        "e": "Azure Bastion provides secure RDP/SSH access to a VM directly through the browser, without the VM ever needing a public IP address, exactly satisfying the security policy. Temporarily assigning a public IP would still violate the policy banning public IPs on production VMs. Opening port 3389 for any source IP would expose the VM to attack risk from the entire internet, contradicting the security requirements. Installing a VPN client directly on the VM is a nonstandard and needlessly complex solution compared to the purpose-built Bastion service."
      },
      {
        "id": "heroic_9",
        "category": "Compute",
        "q": "A development team wants to deploy a Node.js web app often and quickly, without having to handle OS patching or server scaling manually. Which deployment model best fits this?",
        "a": [
          "An on-premises server fully managed by the internal IT department",
          "PaaS like Azure App Service, with a managed runtime and scaling",
          "A physical server located in a third-party colocation datacenter",
          "IaaS with virtual machines managed manually by the whole team"
        ],
        "c": 1,
        "e": "Azure App Service (PaaS) manages the OS, patches, and runtime environment for the developer and offers automatic scaling, so the team can focus purely on deploying code often. IaaS with VMs would still require manually managing the OS and patches, exactly what the team wants to avoid. An on-premises server would additionally require managing physical hardware. Colocation means placing your own hardware in someone else's datacenter, which solves none of the OS management concerns."
      },
      {
        "id": "heroic_10",
        "category": "Security",
        "q": "An application connects to a database using an access key that should never be written directly in code or configuration files in the repository. Which solution eliminates this risk?",
        "a": [
          "Storing the key directly as a comment in the application's code",
          "Sharing the key between developers over unencrypted email or chat",
          "Storing the key in Key Vault, accessed via a managed identity",
          "Storing the key in a publicly accessible README in the repository"
        ],
        "c": 2,
        "e": "Azure Key Vault securely stores sensitive data like access keys, which the application accesses at runtime via a managed identity, so the key never appears in the code or the repository. Storing the key as a code comment would expose it to anyone with repository access, including the version history. A public README is an even worse option, since the key would be accessible to anyone on the internet. Sharing it over email or chat is an unencrypted channel prone to leaks, and it doesn't address the application's automatic runtime access either."
      },
      {
        "id": "heroic_11",
        "category": "Networking",
        "q": "A bank needs extremely low latency and high bandwidth to connect its datacenter to Azure, outside the public internet, due to regulatory requirements on transfer privacy. What solution will it choose?",
        "a": [
          "Public IP addresses with strict NSG rules",
          "A VPN Gateway over the public internet with encryption",
          "Azure Bastion, for remote access",
          "ExpressRoute, with a dedicated private connection"
        ],
        "c": 3,
        "e": "ExpressRoute provides a dedicated private physical connection outside the public internet with high bandwidth and low, predictable latency — exactly what the transfer privacy regulation requires. A VPN Gateway encrypts traffic, but still routes it over the public internet, which fails to meet the regulatory requirement to exclude the public internet. Azure Bastion addresses access to individual VMs, not connecting entire datacenters. Public IP addresses with NSG rules still use the public internet and don't meet the requirement for a private connection."
      },
      {
        "id": "heroic_12",
        "category": "Networking",
        "q": "A company's branch office needs to connect to Azure quickly and securely over its existing internet connection, without waiting weeks to set up a dedicated line. Which solution is more suitable?",
        "a": [
          "VPN Gateway, with an encrypted tunnel over the public internet",
          "ExpressRoute, for its guaranteed bandwidth",
          "Physically transporting data on disks to the datacenter",
          "Public IP addresses without encryption, for speed"
        ],
        "c": 0,
        "e": "A VPN Gateway can be set up quickly because it uses the existing internet connection and creates an encrypted tunnel, ideal when there's no time to wait for a dedicated line to be physically provisioned. ExpressRoute offers better performance and privacy, but setting it up takes weeks to months due to the physical infrastructure involved, contradicting the requirement for speed. Unencrypted public IP addresses would be a security risk, and the scenario explicitly calls for a secure connection. Physically transporting data on disks doesn't address ongoing network connectivity, just a one-time transfer."
      },
      {
        "id": "heroic_13",
        "category": "Storage",
        "q": "A company wants data in its Storage account to survive an outage of an entire datacenter within a region, but geographic distance and replication to another region aren't required. Which redundancy level will it choose?",
        "a": [
          "LRS, since it's the cheapest option available",
          "ZRS, replicating synchronously across zones",
          "GRS, replicating data to a distant paired region",
          "Archive tier, the cheapest storage option overall"
        ],
        "c": 1,
        "e": "ZRS (Zone-Redundant Storage) replicates data synchronously across multiple availability zones within a single region, exactly matching the requirement to survive a datacenter outage without needing geographic distance. LRS only replicates within a single datacenter and wouldn't protect the data if that datacenter went down. GRS would meet the requirement too, but it goes beyond the scenario, which explicitly says geographic replication isn't needed, and it's more expensive than necessary. Archive tier is a data access frequency level, not a geographic or zonal redundancy mechanism."
      },
      {
        "id": "heroic_14",
        "category": "Storage",
        "q": "A company is legally required to retain accounting documents for 10 years, but accesses them on average once every few years during an audit, and wants to minimize storage costs the whole time. Which tier will it choose?",
        "a": [
          "Hot tier, for guaranteed fast access at any time",
          "Cool tier, for a reasonable balance between cost and access",
          "Archive tier, for the lowest storage cost given rare access",
          "Premium SSD, for very high disk performance"
        ],
        "c": 2,
        "e": "Archive tier has the lowest storage cost of all the tiers, and even though restoring data takes hours, that's consistent with the very rare access — once every few years — described in the scenario. Hot tier has the highest storage cost, unsuited for data accessed this rarely. Cool tier suits moderately frequent access, on the order of once a month, not once every few years. Premium SSD is a high-performance disk for VMs with high speed requirements, completely unsuited and needlessly expensive for archival data with minimal access."
      },
      {
        "id": "heroic_15",
        "category": "Identity",
        "q": "Employees complain they have to re-enter their password every time they switch between corporate apps like email, the intranet, and the CRM, even though all of them are connected to Microsoft Entra ID. What solution removes this problem?",
        "a": [
          "Disable MFA so sign-in is faster",
          "Create multiple accounts per user, one for each application",
          "Manually set the same password for every application",
          "Turn on Single sign-on (SSO) across the connected applications"
        ],
        "c": 3,
        "e": "Single sign-on enables one sign-in that's valid across all the connected applications, exactly solving the repeated password entry problem. Manually setting the same password is a security risk and isn't real SSO, just a shared password. Disabling MFA would reduce security and doesn't address the frequency of signing in between apps at all. Creating multiple accounts per user would make the problem worse, since they'd need to sign in even more often and into more accounts."
      },
      {
        "id": "heroic_16",
        "category": "Identity",
        "q": "The security team wants employees signing in from risky locations or unrecognized devices to verify with an additional factor, while routine sign-in from the corporate network stays simpler. What solution enables this distinction?",
        "a": [
          "Set up a Conditional Access policy reacting to location and risk",
          "Use only a simple password for absolutely every scenario",
          "Require MFA for absolutely every employee, no exceptions",
          "Completely block access outside the corporate network, no exceptions"
        ],
        "c": 0,
        "e": "Conditional Access evaluates contextual signals like location, device type, or risk level and dynamically decides when to require additional verification, exactly matching the scenario described. Requiring MFA for absolutely everyone, with no distinction, doesn't differentiate between risky and routine situations the way the scenario requires. Fully blocking access outside the corporate network would prevent legitimate remote work. A simple password for every scenario would reduce security exactly in the risky situations that should be more protected."
      },
      {
        "id": "heroic_17",
        "category": "Identity",
        "q": "A new foreign branch needs its own administrators managing only its local resources, but headquarters wants to retain the ability to audit and, in extreme cases, take control of the whole tenant. How will you best arrange this?",
        "a": [
          "Create a completely separate, unconnected tenant for the branch",
          "A restricted role for local admins, Global Admin for headquarters",
          "Assign the Global Administrator role to every employee at the branch",
          "Grant no administrative permissions to the branch at all"
        ],
        "c": 1,
        "e": "Assigning local administrators a restricted role scoped to their resource group gives them control over their resources, while headquarters retains a Global Administrator role for auditing and, if necessary, taking control of the whole tenant. A separate, unconnected tenant would lose the central oversight the scenario requires. A Global Administrator role for every branch employee would give disproportionately broad access to the whole tenant, not just local resources. Granting no administrative permissions at all would prevent the branch from independently managing its local resources, as the scenario describes."
      },
      {
        "id": "heroic_18",
        "category": "Governance",
        "q": "An audit finds that dozens of storage accounts lack mandatory encryption at rest, even though internal policy requires it for all new and existing resources. Which solution ensures ongoing compliance for future resources too?",
        "a": [
          "Sending a one-time email asking administrators to remediate it",
          "Deleting all non-compliant storage accounts with no replacement",
          "Set Azure Policy with a DeployIfNotExists or Deny effect for encryption",
          "Manually checking and fixing only the existing non-compliant accounts, once"
        ],
        "c": 2,
        "e": "Azure Policy with the right effect ensures new non-compliant resources are either never created (Deny) or have the missing setting automatically remediated (DeployIfNotExists), and the report can also be used to fix existing accounts — this addresses compliance permanently, not just as a one-off. A manual one-time fix doesn't address future newly created resources, which can violate the policy again. An email is just a recommendation with no technical enforcement and doesn't guarantee future compliance. Deleting non-compliant accounts with no replacement would cause data loss and service disruption, not a sensible solution to a configuration problem."
      },
      {
        "id": "heroic_19",
        "category": "DevOps",
        "q": "A DevOps team wants the same infrastructure (network, VMs, database) to be reliably and repeatedly deployable to both test and production environments with minimal risk of human error. What approach will it choose?",
        "a": [
          "Manually creating resources via the Azure Portal over and over again",
          "Copying resources via Azure CLI command by command, with no versioning",
          "Relying on an administrator to remember the exact steps",
          "Infrastructure as Code via ARM templates or Bicep with parameterization"
        ],
        "c": 3,
        "e": "Infrastructure as Code via ARM templates or Bicep with parameterization enables repeatable, consistent, versioned deployment across environments, minimizing the risk of human error. Manually creating resources through the portal is prone to errors and inconsistencies between environments. CLI commands with no versioning or structure lack the repeatability and auditability that IaC offers. Relying on an administrator's memory is extremely risky and doesn't scale with a growing number of deployments or changes in team membership."
      },
      {
        "id": "heroic_20",
        "category": "Monitoring",
        "q": "A production application occasionally experiences outages, but the team only notices once customers start complaining, not proactively. What solution lets them detect a problem before customers notice it?",
        "a": [
          "Proactive alerts in Azure Monitor on key performance indicators",
          "Relying on customer feedback as the primary source of information",
          "Relying on a monthly manual log review by an administrator",
          "Increasing customer support capacity for faster response"
        ],
        "c": 0,
        "e": "Azure Monitor with alerts configured on key metrics (availability, error rate, response time) lets the team get notified of a problem in real time, before customers notice it. Waiting for customer feedback is the reactive approach the scenario specifically wants to remove. Increasing support capacity only addresses the speed of responding to already-reported problems, not detecting them early. A monthly manual log review is far too slow to catch outages in real time."
      },
      {
        "id": "heroic_21",
        "category": "Security",
        "q": "A security team needs to correlate suspicious events across dozens of different sources (firewalls, identities, applications) and automatically trigger a response, like temporarily blocking an account. What will they best use for this?",
        "a": [
          "Regularly reviewing logs manually, one source at a time",
          "Microsoft Sentinel with analytics rules and automated playbooks",
          "Just Azure Monitor on its own, with no other tools at all",
          "Just a resource lock set on critical resources"
        ],
        "c": 1,
        "e": "Microsoft Sentinel is designed exactly for correlating security data across many sources, and playbooks (connected to Logic Apps) enable an automated response like blocking an account. Azure Monitor alone collects metrics and logs, but lacks built-in security correlation and automated playbooks of the same caliber. A resource lock protects a resource from deletion or modification and has nothing to do with detecting and responding to security incidents. Manually reviewing logs one source at a time would be extremely slow and impractical across dozens of sources."
      },
      {
        "id": "heroic_22",
        "category": "Migration",
        "q": "A company is planning to migrate hundreds of servers to Azure and first needs to find out their current utilization, dependencies between them, and an estimate of monthly costs after migration. What tool will it use as the first step?",
        "a": [
          "Launching the migration directly with no prior analysis at all",
          "Azure Backup, to immediately back up absolutely all the servers",
          "Azure Migrate, to assess the servers before migration",
          "Azure Bastion, for remote access to individual servers"
        ],
        "c": 2,
        "e": "Azure Migrate provides tools for assessing existing infrastructure, its utilization, dependencies between servers, and an estimate of post-migration costs — exactly what's needed as the first step before a large-scale migration. Azure Backup addresses backups, not assessing migration readiness. Azure Bastion provides secure VM access and has nothing to do with migration planning. Launching the migration directly with no analysis would be highly risky due to unknown dependencies and unpredictable costs."
      },
      {
        "id": "heroic_23",
        "category": "Hybrid",
        "q": "An IT department manages servers in Azure, on-premises, and in another cloud, and wants a unified view of status, policies, and compliance across all three environments from one place. What solution enables this?",
        "a": [
          "Ignoring resources outside Azure and managing only those in Azure",
          "Three separate tools, one for each environment individually",
          "Azure Migrate, to migrate everything into Azure",
          "Azure Arc, to extend Azure management to resources outside Azure"
        ],
        "c": 3,
        "e": "Azure Arc extends Azure's management, policy, and monitoring tools to resources outside Azure, including on-premises and other clouds, so everything can be managed from one place. Three separate tools would mean a fragmented view with no unified picture, contradicting the scenario. Azure Migrate addresses moving servers into Azure, not unified management across environments that will never be in Azure. Ignoring resources outside Azure would mean losing visibility into part of the infrastructure that the scenario explicitly wants tracked."
      },
      {
        "id": "heroic_24",
        "category": "Governance",
        "q": "A team wants to ensure a production database can't be accidentally deleted, even by an administrator with full RBAC permissions, until someone deliberately removes the protection. What solution ensures this?",
        "a": [
          "Set a CanNotDelete resource lock on the database",
          "Assign the administrator a lower RBAC role",
          "Rely on the administrator being careful",
          "Use only a tag with a \"Do not delete\" warning"
        ],
        "c": 0,
        "e": "A CanNotDelete resource lock adds a protective layer independent of RBAC permissions — even an administrator with full access must deliberately remove the lock first before they can delete the resource. Lowering the administrator's RBAC role would also restrict their legitimate work with the database, not just protect against accidental deletion. Relying on human carefulness isn't a technical solution and won't prevent a mistake. A tag is just a visual warning with no technical enforcement at all, the administrator could still accidentally delete the database."
      },
      {
        "id": "heroic_25",
        "category": "Security",
        "q": "An application running in Azure App Service needs access to Azure SQL Database without storing credentials anywhere in code or configuration. Which solution enables this most securely?",
        "a": [
          "Sharing one common password across all applications",
          "Use App Service's managed identity to authenticate to the database",
          "Encoding the password directly into the application's binary",
          "Storing the connection string with a password in an environment variable"
        ],
        "c": 1,
        "e": "A managed identity lets App Service authenticate to Azure SQL Database without any password or secret stored anywhere — Azure manages the identity verification automatically. An environment variable with a password is better than a hardcoded password, but it's still a secret that could be exposed, and the question is looking for a solution that stores no credentials at all. Sharing one password across applications is a security risk and doesn't let you distinguish which application accesses what. Encoding the password into the binary is still just another form of storing a secret that can be reverse-engineered and exposed."
      },
      {
        "id": "heroic_26",
        "category": "Networking",
        "q": "A global application has users in Europe, Asia, and the Americas, and the company wants each user automatically routed to the geographically nearest, currently available instance of the app. What solution will they use?",
        "a": [
          "A single application instance in one region for absolutely everyone",
          "Manually redirecting users based on their email domain",
          "Multiple instances across regions with Traffic Manager for routing",
          "Azure Load Balancer in just one region, for spreading load"
        ],
        "c": 2,
        "e": "Multiple application instances across regions, together with Azure Traffic Manager, enable DNS-based routing of users to the geographically nearest, available instance. A single instance in one region would mean high latency for distant users and no resilience during a regional outage. Azure Load Balancer works at the network layer within a single region, it can't route between multiple geographic regions like Traffic Manager. Manually redirecting based on email domain has nothing to do with a user's geographic location and isn't a scalable or reliable solution."
      },
      {
        "id": "heroic_27",
        "category": "Reliability",
        "q": "A company wants to ensure that even if an entire VM running a web server failed, users would immediately and automatically switch to another working instance with no manual intervention. What solution ensures this?",
        "a": [
          "Backing up the VM once a day, nothing else",
          "Relying on a fast administrator reaction to outages",
          "Running just a single VM with very high performance",
          "Load Balancer with multiple VMs and health probes"
        ],
        "c": 3,
        "e": "Azure Load Balancer with multiple VMs in a backend pool and health probes automatically detects the failure of one instance and redirects traffic to healthy instances with no manual intervention. A single VM with high performance is a single point of failure — if it fails, the application would become completely unavailable. Relying on a fast administrator response is slower and less reliable than an automated mechanism. Daily backups address restoring data after a longer period, not immediately and automatically redirecting traffic during a current outage."
      },
      {
        "id": "heroic_28",
        "category": "DevOps",
        "q": "A development team wants tests to run automatically and the app to deploy to a test environment every time a pull request is approved, with no manual intervention. What approach enables this?",
        "a": [
          "An automated CI/CD pipeline running tests and deployment",
          "Manual deployment by an administrator after every approved change",
          "An email notification telling developers to deploy the code themselves",
          "Deploying once a week regardless of how many changes there are"
        ],
        "c": 0,
        "e": "A CI/CD pipeline connected to the repository automatically runs tests and deployment every time a change is approved, exactly matching the requirement for automation with no manual intervention. Manual deployment by an administrator is the exact opposite of the requested automation and introduces risk of human error and delay. An email notification to developers still requires manual action, so it doesn't provide automation. Deploying once a week regardless of approved changes would slow down delivery and doesn't match the requirement to deploy after every approval."
      },
      {
        "id": "heroic_29",
        "category": "Storage",
        "q": "An application requires that older versions of every file be automatically preserved for 30 days, in case a user accidentally overwrites or deletes one. Which Blob Storage feature enables this?",
        "a": [
          "Only higher storage redundancy, like GRS",
          "Blob versioning and soft delete with a retention policy",
          "A lifecycle management policy, for automatically deleting old data",
          "Only switching the whole account to Archive tier"
        ],
        "c": 1,
        "e": "Blob versioning automatically preserves prior versions of an object with every change, and soft delete lets you restore deleted objects for a defined period, together exactly meeting the requirement described. Lifecycle management is for automatically moving or deleting data based on age, not preserving version history. Higher redundancy like GRS protects against infrastructure outages, not a user's accidental overwrite or deletion of a file. Archive tier only changes the price and speed of access, it doesn't address preserving version history."
      },
      {
        "id": "heroic_30",
        "category": "Storage",
        "q": "A company streams video content to users worldwide and wants to minimize latency by caching content close to end users, not just in one datacenter. Which service will it add in front of Blob Storage?",
        "a": [
          "Azure Bastion, for secure access",
          "Network Security Group, for filtering",
          "Azure Content Delivery Network (CDN)",
          "Azure Key Vault, for managing keys"
        ],
        "c": 2,
        "e": "Azure CDN caches content on edge nodes worldwide close to end users, significantly reducing the latency of content streamed from central Blob Storage. Azure Bastion addresses secure VM access and has nothing to do with distributing content to users. A Network Security Group filters network traffic by rules and doesn't address caching or speeding up content delivery. Azure Key Vault manages secrets and certificates and has nothing to do with distributing video content."
      },
      {
        "id": "heroic_31",
        "category": "Storage",
        "q": "A team needs an application to securely share a specific file in Blob Storage with an external partner for a limited 24-hour window, without creating an account for the partner. What solution will they use?",
        "a": [
          "Set the entire storage account as permanently publicly accessible",
          "Send the partner the access key for the entire storage account",
          "Create a full user account for the partner in Microsoft Entra ID",
          "Generate a Shared Access Signature (SAS) token valid for 24 hours"
        ],
        "c": 3,
        "e": "A SAS token lets you grant time-limited and scope-limited access to a specific resource (file) without creating an account or sharing the primary access keys. Permanently making the whole account publicly accessible would expose all data to anyone on the internet, far more than the scenario calls for. Sharing the primary access key would give the partner unlimited access to all data in the account, not just one file for 24 hours. Creating a full account is administratively heavier than needed for a one-off, temporary sharing of a single file."
      },
      {
        "id": "heroic_32",
        "category": "Storage",
        "q": "An application stores sensitive customer data, and regulation requires it to be encrypted both in transit and at rest, with the company itself managing the encryption keys. Which solution satisfies this?",
        "a": [
          "Encryption at rest with custom keys stored in Key Vault",
          "Relying only on default encryption managed by Microsoft",
          "Completely disabling encryption for higher system performance",
          "Encrypting data only in transit, not at rest"
        ],
        "c": 0,
        "e": "Encryption at rest with customer-managed keys stored in Key Vault gives the company full control over the encryption keys while keeping data encrypted at rest, exactly matching the regulatory requirement. Default Microsoft-managed encryption does encrypt the data, but doesn't let the company manage its own keys, as the scenario requires. Disabling encryption would directly violate the regulatory requirement to protect sensitive data. Encrypting only in transit would leave data unencrypted at rest, which the regulation also requires covering."
      },
      {
        "id": "heroic_33",
        "category": "Storage",
        "q": "A data team needs to migrate 50 TB of data into Azure Storage, but over the company's internet connection, the transfer would take over a month. Which solution significantly speeds up the migration?",
        "a": [
          "Start the transfer over the slow connection and wait a month",
          "Use Azure Data Box for a physical transfer of data on a mailed device",
          "Increase the speed of employees' home internet",
          "Split the data into smaller files and transfer them gradually over the same connection"
        ],
        "c": 1,
        "e": "Azure Data Box is a physical device that Microsoft ships to the company, onto which data is loaded locally over a fast network, and the device is shipped back for upload into Azure, which is significantly faster than transferring large volumes over a slow connection. Waiting a month over the slow connection doesn't meet the implicit requirement to speed up the process. Splitting into smaller files doesn't change the overall connection bandwidth, the total transfer time stays similar. The speed of employees' home internet has nothing to do with the company's datacenter connection used for the migration."
      },
      {
        "id": "heroic_34",
        "category": "Storage",
        "q": "A company needs a specific subnet to access an Azure Storage account only over the private Azure network, never over the public internet, even if someone knew the access keys. What solution will they use?",
        "a": [
          "Setting only a strong password on the entire storage account",
          "Relying on the storage account's default settings",
          "Use a Private Endpoint for the storage account in that VNet",
          "Using a public IP address with NSG rules for the account"
        ],
        "c": 2,
        "e": "A Private Endpoint creates a private network interface for the storage account inside the VNet, so communication happens exclusively over the private Azure network and isn't reachable over the public internet, even with knowledge of the access keys. A strong password would protect access, but communication could still pass over the public internet. The storage account's default settings typically allow access via public endpoints. A public IP address with NSG rules still means the storage account has a publicly reachable endpoint, contradicting the requirement for exclusively private access."
      },
      {
        "id": "heroic_35",
        "category": "Networking",
        "q": "A team manages three Azure regions connected in a star topology with a central hub VNet, to which the spoke VNets of individual departments connect. What architectural pattern does this describe?",
        "a": [
          "One large flat network with no segmentation",
          "A full mesh topology with every VNet directly connected to every other",
          "Isolated VNets with no connectivity at all",
          "Hub-and-spoke topology with centralized network management"
        ],
        "c": 3,
        "e": "Hub-and-spoke topology has a central hub VNet (typically with shared services like a firewall or VPN Gateway), to which individual spoke VNets connect, enabling centralized network management and security. A full mesh topology would mean every network directly connected to every other, which is significantly more complex and doesn't match the star structure described. One flat network with no segmentation wouldn't match the multi-region setup with departments described in the scenario. Isolated VNets with no connectivity would prevent the centralized management that a hub-and-spoke solution enables."
      },
      {
        "id": "heroic_36",
        "category": "Networking",
        "q": "An application receives traffic from the internet, and besides basic port filtering, the team wants protection against application-layer attacks like SQL injection or cross-site scripting. What solution will they add?",
        "a": [
          "A Web Application Firewall (WAF) at the application layer",
          "Only Azure DNS, for managing domain names",
          "Only a VPN Gateway, for encrypting network traffic",
          "Only a Network Security Group with port-based rules"
        ],
        "c": 0,
        "e": "A Web Application Firewall works at the application layer and protects against specific attacks like SQL injection or cross-site scripting, unlike basic port filtering. A Network Security Group filters traffic at the network layer by ports and IP addresses, but doesn't understand HTTP request content, so it won't catch application-layer attacks. A VPN Gateway encrypts connections between networks, it doesn't analyze request content for application attacks. Azure DNS only handles domain name resolution and has no security filtering function whatsoever."
      },
      {
        "id": "heroic_37",
        "category": "Networking",
        "q": "A company has an app in one VNet and a database in another VNet in the same region, and wants low latency between them without routing traffic over the public internet or a VPN. What solution will it choose?",
        "a": [
          "Creating a VPN Gateway between the two virtual networks",
          "Virtual Network peering between the two VNets",
          "Using public IP addresses with NSG rules",
          "Setting up ExpressRoute between the two virtual networks"
        ],
        "c": 1,
        "e": "Virtual Network peering connects two VNets directly over the Azure backbone network with low latency, with no need for a VPN or the public internet. A VPN Gateway would introduce unnecessary encryption overhead and complexity for connecting two networks in the same region. Public IP addresses with NSG rules would route traffic over the public internet, which the scenario wants to avoid. ExpressRoute is meant for connecting on-premises to Azure, not connecting two VNets to each other inside Azure."
      },
      {
        "id": "heroic_38",
        "category": "Networking",
        "q": "A security audit found that NSG rules across different subnets are inconsistent and hard to manage across dozens of VNets in the organization. Which solution centralizes and simplifies managing the rules?",
        "a": [
          "Deleting all NSG rules and relying on default settings",
          "Manually checking and syncing rules on each subnet",
          "Azure Firewall or Azure Policy, for centralized rules",
          "Creating independent rules for each subnet with no coordination"
        ],
        "c": 2,
        "e": "Azure Firewall provides a centralized gateway for managing network rules, and Azure Policy can enforce consistent NSG configurations across all VNets, addressing the problem of inconsistent manual management. Manually checking and syncing dozens of subnets is exactly the inefficient process the scenario describes as the problem. Deleting all rules and relying on default settings would reduce security, since the defaults may not match the organization's needs. Creating independent rules with no coordination would only deepen the inconsistency problem."
      },
      {
        "id": "heroic_39",
        "category": "Networking",
        "q": "A company needs DNS queries for internal private resources (like an internal database server) to work from an on-premises network connected to Azure too, but they must not be visible from the public internet. What solution will they use?",
        "a": [
          "A public Azure DNS zone for every single record",
          "Manually editing the hosts file on every client",
          "Using a public third-party DNS server",
          "A Private DNS zone connected to the VNet and on-premises"
        ],
        "c": 3,
        "e": "An Azure Private DNS zone resolves names for private resources inside a VNet, and when connected to an on-premises network (via VPN or ExpressRoute), it works from there too without the records being visible from the public internet. A public DNS zone would expose internal records to anyone on the internet, a security risk. Manually editing the hosts file on every client doesn't scale and is extremely error-prone with a larger number of devices. A public third-party DNS server would also mean exposing internal records outside the company's control."
      },
      {
        "id": "heroic_40",
        "category": "Compute",
        "q": "An application running in a Kubernetes cluster (AKS) needs to automatically add more pods and nodes under increased load, and remove them again when load drops, so the company doesn't pay for unused capacity. Which AKS feature enables this?",
        "a": [
          "Horizontal Pod Autoscaler together with Cluster Autoscaler",
          "Shutting down the cluster outside business hours",
          "Manual scaling by an administrator based on a daily check",
          "A fixed number of pods set once and never changed"
        ],
        "c": 0,
        "e": "Horizontal Pod Autoscaler scales the number of pods according to load, and Cluster Autoscaler scales the number of cluster nodes so there's enough capacity for the pods, together automating the whole process up and down with no manual intervention. Manual scaling by an administrator based on a daily check is slow and doesn't react to sudden real-time load swings. A fixed number of pods would either waste capacity at low load or fall short at high load. Shutting down the cluster outside business hours could disrupt operations if the app is needed continuously, and it doesn't address scaling during load within business hours."
      },
      {
        "id": "heroic_41",
        "category": "Compute",
        "q": "A company runs dozens of microservices in containers and needs a failed container to be automatically restarted with no loss of availability for the whole application. What orchestration feature ensures this?",
        "a": [
          "Manually restarting containers by an administrator after a report",
          "The Kubernetes self-healing mechanism, with automatic pod restart",
          "Running just a single container with no redundancy at all",
          "Relying on containers never failing"
        ],
        "c": 1,
        "e": "Self-healing in Kubernetes automatically detects a pod's failure and restarts it or replaces it with a new instance with no manual intervention, preserving the application's availability. Manually restarting by an administrator is slow and doesn't react immediately to failure in production. Relying on containers never failing is an unrealistic assumption in real-world operation with dozens of services. Running just a single container with no redundancy would mean its failure immediately affects the availability of that entire service."
      },
      {
        "id": "heroic_42",
        "category": "Compute",
        "q": "A team wants to deploy a function that runs just once a day at a precisely defined time to process a batch report, with no need to keep a server running the rest of the day. What solution will it choose?",
        "a": [
          "An on-premises server started manually by an administrator",
          "Azure Kubernetes Service, with a permanently running pod",
          "Azure Functions, with a timer trigger",
          "An Azure Virtual Machine running continuously, 24/7"
        ],
        "c": 2,
        "e": "Azure Functions with a timer trigger runs code exactly on a defined schedule (such as once a day) and doesn't run at all outside that time, so you only pay for the actual execution time. An Azure VM running continuously would be needlessly costly, since it would sit idle most of the day. AKS with a permanently running pod would also consume resources continuously, even though the function is only needed once a day. An on-premises server started manually by an administrator requires human intervention and risks the start being forgotten at the right time."
      },
      {
        "id": "heroic_43",
        "category": "Cloud",
        "q": "A startup isn't sure whether its new product will succeed in the market and doesn't want to lock up capital in its own datacenter if the project ends after a few months. Which cloud trait helps it most?",
        "a": [
          "Higher hardware performance compared to on-premises servers",
          "Better security compared to on-premises solutions in general",
          "Greater control over the physical location of servers",
          "Low upfront investment and the ability to end the project anytime"
        ],
        "c": 3,
        "e": "The cloud lets you start with minimal upfront investment and end a project at any time without locking up capital in your own hardware, exactly matching a startup's situation with an uncertain outcome. Higher hardware performance isn't the primary reason in this scenario, where financial flexibility is the main concern. Better security is a possible general advantage of the cloud, but it isn't directly related to uncertainty about the project's future. Greater control over physical location is, by contrast, a trait of on-premises solutions, not an advantage of the cloud in this context."
      },
      {
        "id": "heroic_44",
        "category": "Cloud",
        "q": "An international company wants part of its infrastructure under full control because of sensitive data, but also wants to use the public cloud's scalability for routine customer-facing apps with variable load. Which strategy will it choose?",
        "a": [
          "A hybrid strategy combining private and public cloud",
          "Running everything exclusively in a private cloud, for consistency",
          "Moving all data, including sensitive data, to an external SaaS",
          "Running everything exclusively in the public cloud, with no exceptions"
        ],
        "c": 0,
        "e": "A hybrid strategy lets you keep sensitive data in an environment under the company's full control while also using the public cloud's elasticity for apps with variable load, exactly matching both requirements in the scenario. A purely private cloud wouldn't let you fully leverage the public cloud's scalability for customer-facing apps, as required. A purely public cloud with no distinction wouldn't provide the required full control over sensitive data. Moving all data to an external SaaS provider, including sensitive data, would go directly against the requirement to keep it fully under control."
      },
      {
        "id": "heroic_45",
        "category": "Cost",
        "q": "A company running multiple projects in a shared subscription wants individual project managers to see only their own project's costs, not the whole organization's. What solution enables this without major restructuring?",
        "a": [
          "Creating a new subscription for each project separately",
          "Consistent project-based resource tagging with filtered reports",
          "Cost Management access for all managers at the subscription level",
          "Sending a monthly summary report for the whole subscription"
        ],
        "c": 1,
        "e": "Consistent project-based resource tagging together with filtered reports and restricted access lets managers see only their project's costs without needing to change the subscription structure. Cost Management access at the whole subscription level would expose all projects' costs to managers, not just their own, contradicting the scenario. Sending a summary report with no breakdown doesn't address the requirement for visibility into just one's own project. Creating a new subscription per project would work, but the scenario explicitly wants a solution without major restructuring."
      },
      {
        "id": "heroic_46",
        "category": "Cost",
        "q": "A company has stable, well-predictable production load all year and wants to minimize compute costs with no risk of disrupting operations. Which purchasing model will it choose?",
        "a": [
          "Spot VMs, for their lowest possible price",
          "Pay-as-you-go, with no long-term commitment at all",
          "Reserved Instances, for stable predictable load",
          "Buying its own physical servers for the datacenter"
        ],
        "c": 2,
        "e": "Reserved Instances offer a substantial discount in exchange for a 1- or 3-year commitment, ideal for stable, predictable load with no risk of disruption. Spot VMs are the cheapest, but Microsoft can evict them at any time, contradicting the requirement for zero risk of disrupting production. Pay-as-you-go with no commitment is flexible, but more expensive than Reserved Instances for stable long-term load. Buying physical servers would mean reverting to a CapEx model and losing cloud benefits like scaling flexibility."
      },
      {
        "id": "heroic_47",
        "category": "Cost",
        "q": "A company wants to process large batch machine learning jobs that can be interrupted at any time and resumed later, and wants to pay as little as possible for compute. Which purchasing model will it choose?",
        "a": [
          "An on-demand VM with no discount or commitment at all",
          "Reserved Instances, for their stable fixed price",
          "A Premium VM with guaranteed continuous availability",
          "Spot VMs, for a lower price with tolerance for interruption"
        ],
        "c": 3,
        "e": "Spot VMs use unused Azure capacity at a significantly lower price, with a risk of interruption, which is acceptable for batch jobs that can be resumed at any time, exactly as the scenario describes. Reserved Instances are good for stable, uninterrupted load, not primarily for the lowest possible price on interruption-tolerant jobs. An on-demand VM with no discount would cost significantly more than Spot VMs for the same type of job. A Premium VM with guaranteed availability addresses a different problem — high availability, not minimizing cost — contradicting the scenario's goal."
      },
      {
        "id": "heroic_48",
        "category": "Reliability",
        "q": "An architecture team is designing a critical system and wants not only to survive a datacenter outage, but also to minimize data loss to a maximum of a few seconds in the event of a regional catastrophe. Which solution best satisfies both requirements?",
        "a": [
          "Multi-region deployment with synchronous replication",
          "Daily backups within the company's own region",
          "LRS storage, one copy in a single datacenter",
          "A single high-performance VM with zero replication"
        ],
        "c": 0,
        "e": "Multi-region deployment with synchronous or near-synchronous replication minimizes both the outage (RTO) and data loss (RPO) to seconds, even in the event of a regional catastrophe. LRS only protects within a single datacenter and doesn't address an outage of the entire region at all. Daily backups would mean up to 24 hours of data loss in a catastrophe, far short of the requirement for a maximum of a few seconds. A single VM with no replication is a single point of failure and doesn't even meet the basic requirement to survive a datacenter outage."
      },
      {
        "id": "heroic_49",
        "category": "Reliability",
        "q": "After defining a disaster recovery plan, a team wants to verify it actually works in practice before a real disaster occurs. What step is necessary for this?",
        "a": [
          "Relying on the plan's documentation being enough alone",
          "Regularly testing failover to the secondary region",
          "Setting up the plan once and never updating it",
          "Waiting for the first real disaster to improvise"
        ],
        "c": 1,
        "e": "Regular test failovers verify that the disaster recovery plan actually works in practice, reveal weaknesses before a real disaster happens, and let the plan be gradually improved. Relying only on documentation with no real-world verification is risky, since a theoretical plan may not work as designed. Waiting for a real disaster with no prior testing increases the risk that the plan fails exactly when it's most needed. Setting up the plan once with no updates ignores changes in infrastructure and applications over time that can invalidate the plan."
      },
      {
        "id": "heroic_50",
        "category": "Governance",
        "q": "A large organization with many teams wants to ensure nobody can bypass central security standards, while also letting individual teams quickly experiment within their own resource groups. What Azure Policy approach will it choose?",
        "a": [
          "Having no central rules at all for teams",
          "Banning all new resources without central IT approval",
          "Baseline rules at management group level, plus local additions",
          "Strictly applying all rules at resource group level"
        ],
        "c": 2,
        "e": "A layered approach with mandatory rules at the management group level ensures baseline security standards can't be bypassed, while additional rules at the resource group level give teams room to quickly experiment within set boundaries. Strictly applying all rules only at the resource group level would risk gaps if some team forgot to set a rule. Having no central rules at all wouldn't ensure standards can't be bypassed, as the scenario requires. Banning any resource creation without approval would completely prevent the rapid experimentation the scenario also requires."
      },
      {
        "id": "heroic_51",
        "category": "Governance",
        "q": "An auditor needs to prove that nobody made an unauthorized configuration change to a critical network resource over the past 90 days. Where will they find this information?",
        "a": [
          "In the Cost Management report for the relevant period",
          "In Azure Advisor's recommendations",
          "In the resource's description directly in the Azure Portal",
          "In that resource's Activity log, filtered to the past 90 days"
        ],
        "c": 3,
        "e": "The Activity log records all control-plane operations performed on a resource, including who made what change and when, exactly the source for an audit verification over any period. A Cost Management report shows costs, not a history of configuration changes. Azure Advisor gives optimization recommendations, it doesn't contain a historical record of actions taken. A resource's description in the portal shows the current configuration state, not a history of changes over recent months."
      },
      {
        "id": "heroic_52",
        "category": "Governance",
        "q": "A company wants to prevent a situation where an administrator accidentally deploys a resource in the wrong region, given regulatory requirements on data location. Which solution best eliminates this risk?",
        "a": [
          "Azure Policy with Deny for disallowed regions",
          "Sending an email listing the allowed regions",
          "A weekly manual check of regions after creation",
          "Relying on administrator training and attentiveness"
        ],
        "c": 0,
        "e": "Azure Policy with a Deny effect technically blocks the creation of any resource outside the allowed regions, eliminating the risk of human error entirely, unlike relying on a person's attentiveness. Training and administrator attentiveness reduce risk, but don't guarantee one hundred percent prevention of human error. An email with a list of allowed regions is just informational, with no technical enforcement it can be ignored or forgotten. A weekly manual check after resource creation addresses the problem only after the mistake has already happened, rather than preventing it."
      },
      {
        "id": "heroic_53",
        "category": "Security",
        "q": "A security team found that several developers have the Owner role on a production subscription, even though their work only requires deploying applications, not managing others' access. Which solution best reduces the risk?",
        "a": [
          "Raising every developer's permissions to Global Administrator",
          "Reassessing roles by least privilege, using the Contributor role",
          "Removing all access to the production subscription entirely",
          "Leaving the current state as is, since the work gets done"
        ],
        "c": 1,
        "e": "Reassessing roles according to the principle of least privilege and granting a role like Contributor (which allows deployment without managing access) reduces the risk of misuse or accidental mistakes, without restricting the work developers actually need to do. Leaving the current state as is preserves needlessly high risk tied to excessive permissions. Raising permissions to Global Administrator would significantly worsen the risk, going exactly the opposite direction from the security recommendation. Removing all access entirely would prevent developers from doing their legitimate work of deploying applications."
      },
      {
        "id": "heroic_54",
        "category": "Security",
        "q": "A company wants encryption keys used for sensitive data to never leave hardware security modules (HSMs) and to meet strict FIPS 140-2 Level 3 regulatory certification. Which Azure service will they use for this?",
        "a": [
          "Storing keys directly in the application's code",
          "Sharing keys between developers over encrypted email",
          "Azure Key Vault Managed HSM or Premium tier, with HSM support",
          "The standard Azure Key Vault tier, with no HSM support"
        ],
        "c": 2,
        "e": "Azure Key Vault Managed HSM or Premium tier with hardware security module support ensures keys are generated and stored directly in a certified HSM and never leave it, meeting strict regulatory requirements. The standard Key Vault tier uses software-protected keys, not a dedicated HSM certified to FIPS 140-2 Level 3, as the scenario requires. Storing keys directly in application code is a major security risk and the exact opposite of secure key management. Sharing keys over email, even encrypted, creates unnecessary copies of the key outside a secure environment and doesn't match the requirement for HSM protection."
      },
      {
        "id": "heroic_55",
        "category": "Security",
        "q": "After a security incident, a company wants to determine the exact timeline of events across firewalls, servers, and applications to understand how the attacker proceeded. What tool will they best use for this?",
        "a": [
          "A Cost Management report for that period",
          "Azure Advisor, for general optimization tips",
          "A resource lock set on the affected resources",
          "Microsoft Sentinel, for correlation across sources"
        ],
        "c": 3,
        "e": "Microsoft Sentinel lets you correlate and analyze logs from many different sources (firewalls, servers, applications) and reconstruct an exact event timeline during an incident investigation. Azure Advisor gives general optimization recommendations, it isn't a tool for forensic incident investigation. A resource lock protects resources from deletion or modification, it provides no data about the course of an attack. A Cost Management report shows financial costs and has no connection to reconstructing a security incident."
      },
      {
        "id": "heroic_56",
        "category": "Reliability",
        "q": "A team found that an application has good response time under normal load, but outages occur during a stress test at ten times the usual load. What architectural approach would reduce the risk of a similar situation in production?",
        "a": [
          "Auto-scaling architecture, verified by repeated tests",
          "Ignoring the test results as an unlikely case",
          "Assuming users will never generate that load",
          "A one-time VM size bump with no further testing"
        ],
        "c": 0,
        "e": "An architecture with automatic scaling, verified through repeated load testing at various levels, prepares the application for unexpected spikes and reduces the risk of an outage in production. Ignoring the test results would leave the risk uncovered, even though the test already revealed the problem. A one-time VM size increase with no further testing doesn't address scalability under even higher or variable load in the future. Relying on users never generating that kind of load is a risky assumption that the load test has already shown to be uncertain."
      },
      {
        "id": "heroic_57",
        "category": "Cost",
        "q": "A company is planning next year's budget and wants to know exactly how much running a new application in Azure will cost before deploying anything, so it can compare architecture alternatives. What tool will they use?",
        "a": [
          "Azure Advisor, for recommendations on an already-running environment",
          "Pricing calculator, for estimating costs before deployment",
          "Cost Management, since it tracks costs already incurred",
          "Activity log, for the history of actions already taken"
        ],
        "c": 1,
        "e": "The pricing calculator lets you estimate the cost of different service configurations before they're deployed, exactly matching the need to compare architecture alternatives during budget planning. Cost Management tracks actual costs incurred by already-running resources, not a hypothetical estimate before deployment. Azure Advisor gives optimization recommendations for an existing environment, not a cost estimate for something that doesn't exist yet. The Activity log records the history of actions taken on resources and has no connection to estimating future costs."
      },
      {
        "id": "heroic_58",
        "category": "Storage",
        "q": "A team found that most of the cost on a Storage account comes from data that hasn't been accessed in over 90 days, but nobody manually moves it to a cheaper tier. Which solution automates this process?",
        "a": [
          "A manual monthly check and transfer by an administrator",
          "Deleting all the old data with no backup at all",
          "A lifecycle management policy, for automatic transfer over time",
          "Switching the entire account to a more expensive Premium tier"
        ],
        "c": 2,
        "e": "A lifecycle management policy automatically moves data to a cheaper tier (Cool or Archive) according to defined rules based on age or last activity, with no manual intervention. A manual monthly check is time-consuming and prone to being forgotten, exactly the problem automation solves. Deleting data with no backup could cause irreversible loss of information that might still be needed. Switching to Premium tier would actually increase costs, the opposite of the desired reduction for rarely accessed data."
      },
      {
        "id": "heroic_59",
        "category": "Storage",
        "q": "A company is migrating a 5 TB database and needs to minimize production downtime to the shortest possible time, ideally on the order of minutes. What migration approach will it choose?",
        "a": [
          "Shutting down the production database for the whole weekend to copy it",
          "Migrating with no plan at all and handling problems as they arise",
          "Exporting the data to a CSV file and importing it manually",
          "An online migration tool with ongoing synchronization and a cutover"
        ],
        "c": 3,
        "e": "An online migration with ongoing synchronization lets you copy most of the data while the source database keeps running, and only synchronize the final small delta during a brief cutover, minimizing downtime to minutes. Shutting down the database for the whole weekend would cause a much longer outage than the scenario requires. Exporting to CSV and importing manually is a slow process unsuited to 5 TB of data and risks a longer outage as well as errors during manual processing. Migrating with no plan would be highly risky and could lead to a longer outage than acceptable."
      },
      {
        "id": "heroic_60",
        "category": "Storage",
        "q": "A company has an application storing a large volume of structured data (billions of records) needing very fast key-based reads and writes of individual records, with no complex relational queries. Which storage will it choose?",
        "a": [
          "Table Storage or Cosmos DB, for key-value access",
          "Blob Storage, for its very low storage cost",
          "A local disk attached directly to the virtual machine",
          "Azure SQL Database, for its strict relational relationships"
        ],
        "c": 0,
        "e": "Table Storage or Cosmos DB are designed for massively scalable, fast key-based data access with no need for complex relational queries, exactly matching the scenario described. Azure SQL Database is optimized for relational data with relationships and complex queries, which the scenario explicitly doesn't require, and the relational model would be unnecessary overhead here. Blob Storage is meant for binary objects like files, not billions of structured records with fast key-based access. A local disk on a VM wouldn't provide the scalability or reliability needed for that volume of data."
      },
      {
        "id": "heroic_61",
        "category": "Storage",
        "q": "A security team wants to prevent anyone outside the corporate VNet from even attempting to connect to an Azure SQL Database, even with valid credentials. What solution ensures this?",
        "a": [
          "Use firewall rules allowing all IP addresses, for simplicity",
          "Set up a Private Endpoint for the database and disable public access",
          "Relying only on a strong database password",
          "Share the credentials only with trusted people"
        ],
        "c": 1,
        "e": "A Private Endpoint combined with disabling public access ensures the database is reachable exclusively from the private Azure network, so a connection attempt from outside fails at the network level before credentials are even checked. A strong password protects against guessing it, but doesn't prevent the connection attempt itself from outside the internet. Firewall rules allowing all IP addresses would, on the contrary, open the database to anyone on the internet, the exact opposite of the desired security. Sharing credentials only with trusted people doesn't address network-level protection, the credentials could still leak through other channels."
      },
      {
        "id": "heroic_62",
        "category": "Storage",
        "q": "A company wants traffic between its web app and database to stay inside the Azure backbone network, even though both services are PaaS and don't have their own VNet by default. What solution will they use?",
        "a": [
          "Assuming PaaS services are automatically secure",
          "The public internet with SSL encryption as sufficient protection",
          "VNet integration and Private Endpoints for both PaaS services",
          "Relying on the default public endpoints of both services"
        ],
        "c": 2,
        "e": "VNet integration for App Service together with a Private Endpoint for the database lets you connect both PaaS services over a private network, so traffic never leaves the Azure backbone network. Relying on the default public endpoints would mean traffic passes through a public interface, even if it physically stays within the Azure network. SSL encryption protects the content of the traffic, but doesn't address whether the traffic goes through public or private endpoints. The claim that PaaS services are automatically secure with no configuration is mistaken — default settings often include public endpoints that need to be deliberately secured."
      },
      {
        "id": "heroic_63",
        "category": "Networking",
        "q": "A company wants to prevent DDoS attacks on its publicly accessible web application while keeping legitimate user traffic flowing with no delay. What solution will it deploy?",
        "a": [
          "Relying only on NSG rules for filtering ports",
          "Shutting down the application during suspected activity",
          "Preventively blocking all inbound traffic",
          "Azure DDoS Protection combined with Application Gateway"
        ],
        "c": 3,
        "e": "Azure DDoS Protection detects and automatically mitigates volumetric attacks in real time, while Application Gateway or Front Door add another layer of protection and routing, together keeping the app available for legitimate users even during an attack. Preventively blocking all traffic would prevent access for legitimate users too, contradicting the requirement to keep their access. NSG rules filter by ports and IP addresses, but aren't designed to detect and mitigate volumetric DDoS attacks the way a specialized service is. Shutting down the application during an attack would cause a complete outage for all users, a worse outcome than targeted protection."
      },
      {
        "id": "heroic_64",
        "category": "Networking",
        "q": "A company has multiple Azure subscriptions for different departments and wants all of them to share a central firewall and VPN Gateway instead of duplicating these costly resources in each subscription. What architecture will it choose?",
        "a": [
          "A hub-and-spoke topology with shared network resources via peering",
          "A separate firewall and VPN Gateway in each subscription",
          "Completely leaving out both the firewall and VPN Gateway, to save money",
          "Isolated networks per department with no central management"
        ],
        "c": 0,
        "e": "A hub-and-spoke topology with central network resources in a hub VNet, connected to the individual departments' spoke VNets via peering, lets you share costly resources like a firewall and VPN Gateway instead of duplicating them. A separate firewall and VPN Gateway in each subscription would mean unnecessary cost duplication and more complex management, exactly what the company wants to avoid. Completely leaving out the firewall and VPN Gateway would reduce security and connectivity, not a sensible solution to a cost problem. Isolated networks with no central management would prevent resource sharing and complicate management across departments."
      },
      {
        "id": "heroic_65",
        "category": "Networking",
        "q": "An application needs to connect to an external third-party payment gateway outside Azure, but security policy requires all outbound traffic to go through a central control point with logging. What solution ensures this?",
        "a": [
          "Banning all outbound traffic entirely, which would break the application",
          "Routing all outbound traffic through Azure Firewall, with rules and logging",
          "Relying on the payment gateway itself to log all communication",
          "Allowing direct outbound connections from every VM with no central control"
        ],
        "c": 1,
        "e": "Azure Firewall as a central point for outbound traffic lets you define rules and log all outgoing communication centrally, exactly matching a security policy requiring central control. Direct outbound connections from every VM with no central control wouldn't provide unified logging or the ability to centrally enforce rules. Banning all outbound traffic would prevent the application from functioning at all, since it couldn't connect to the payment gateway. Relying on the third-party payment gateway's own logging doesn't give the company control or visibility over its own outbound traffic, as the policy requires."
      },
      {
        "id": "heroic_66",
        "category": "Compute",
        "q": "A team runs a web app with bursty traffic where it's hard to predict the required VM capacity in advance, and wants to minimize the administrative burden of manually managing scaling. Which compute model will it choose?",
        "a": [
          "One extremely powerful VM sized for the worst-case scenario",
          "Manually adding VMs by an administrator as traffic increases",
          "App Service or Container Apps, with automatic scaling",
          "A fixed number of VMs set once and never changed"
        ],
        "c": 2,
        "e": "Azure App Service or Container Apps with automatic scaling respond to current load with no manual intervention, minimizing both administrative burden and the risk of insufficient or excess capacity. A fixed number of VMs would either fall short at peak or waste capacity off-peak, and would additionally require manual adjustment whenever traffic patterns changed. Manually adding VMs is exactly the administrative burden the team wants to avoid. One extremely powerful VM sized for the worst case would be needlessly expensive most of the time, when load doesn't reach peak."
      },
      {
        "id": "heroic_67",
        "category": "DevOps",
        "q": "A development team wants to test a new app version with a small percentage of real production traffic before rolling it out to all users, with the ability to roll back immediately if there's a problem. What deployment pattern will they use?",
        "a": [
          "Deploying the new version and immediately deleting the old one",
          "Testing only locally, with no real production data",
          "Deploying the new version straight to all users at once",
          "Deployment slots in App Service, for a gradual rollout"
        ],
        "c": 3,
        "e": "Deployment slots in Azure App Service let you deploy a new version into a separate slot, gradually shift a small percentage of traffic to it, and immediately switch back to the stable version if there's a problem. Deploying straight to all users would risk a bug's impact hitting the entire user base at once, with no chance for gradual verification. Testing only locally won't reveal problems specific to the production environment and real traffic. Immediately deleting the old version would prevent a quick rollback if the new version had a problem."
      },
      {
        "id": "heroic_68",
        "category": "DevOps",
        "q": "A team wants the whole process to stop and prevent buggy code from reaching production if an automated deployment step fails (such as a failed test). What CI/CD pipeline principle ensures this?",
        "a": [
          "A pipeline that halts on the failure of a step like tests",
          "Ignoring test results and deploying even when they fail",
          "Running deployment in parallel with tests with no waiting",
          "Continuing deployment regardless of the result of any step"
        ],
        "c": 0,
        "e": "A pipeline designed so that the failure of a step (such as failed tests) halts further progress prevents buggy code from reaching production, and is a standard principle of safe CI/CD. Ignoring test results would allow buggy code to be deployed, exactly what we want to avoid. Running deployment in parallel with tests with no waiting could deploy code before discovering it contains a bug. Continuing regardless of the result of any step completely defeats the purpose of automated quality checks in the pipeline."
      },
      {
        "id": "heroic_69",
        "category": "Monitoring",
        "q": "An operations team wants a high-CPU-usage alert to trigger not just an email notification, but also an automatic action like restarting a service or adding instances, with no waiting for a human to act manually. What solution enables this?",
        "a": [
          "Only an email notification, with no further action",
          "A Monitor alert connected to an automated runbook",
          "Ignoring high CPU as long as the application is still running",
          "A manual metrics check by an administrator once an hour"
        ],
        "c": 1,
        "e": "An Azure Monitor alert connected to an Azure Automation runbook or Logic App lets you trigger an automated action, like restarting a service or adding instances, immediately once the alert condition is met, with no waiting for a person. Only an email notification informs the team, but still requires manual intervention, which the scenario wants to automate. A manual metrics check once an hour is too slow a response to an acute high-CPU problem. Ignoring high CPU usage just because the application is still running risks a future outage if the trend gets worse."
      },
      {
        "id": "heroic_70",
        "category": "Monitoring",
        "q": "A company has dozens of applications with their own monitoring dashboards, but wants one central view of the health of the whole infrastructure across all applications and environments. What solution enables this?",
        "a": [
          "Maintaining dozens of separate, unconnected dashboards",
          "Relying on each team to monitor only its own application",
          "A centralized Monitor workbook aggregating data across sources",
          "Disabling monitoring for less critical applications"
        ],
        "c": 2,
        "e": "A centralized Azure Monitor workbook or dashboard can aggregate metrics and logs across many sources and applications into one clear view of the whole infrastructure's health. Maintaining dozens of separate, unconnected dashboards doesn't provide the desired central overview and makes it harder to quickly identify problems across the system. Relying on each team to monitor only its own application creates a risk that broader systemic problems go unnoticed. Disabling monitoring for less critical applications would reduce visibility and could mean a problem originating there shows up only later, elsewhere."
      },
      {
        "id": "heroic_71",
        "category": "Migration",
        "q": "After migrating hundreds of servers to Azure, a team finds that some VMs are significantly oversized and the company is paying needlessly for unused performance. What tool will help them systematically identify this problem?",
        "a": [
          "Resource lock, protecting resources from deletion",
          "Azure DNS, for company domain name management",
          "Azure Bastion, for secure remote VM access",
          "Azure Advisor, with usage-based sizing tips"
        ],
        "c": 3,
        "e": "Azure Advisor analyzes actual resource usage and provides specific right-sizing recommendations for oversized VMs, systematically identifying opportunities to save costs after migration. Azure Bastion addresses secure VM access, it has no function for analyzing usage or recommending sizing. Azure DNS manages domain name resolution and has nothing to do with optimizing compute resource sizing. A resource lock protects resources from deletion or modification, it provides no usage analysis or cost optimization recommendations."
      },
      {
        "id": "heroic_72",
        "category": "Hybrid",
        "q": "A company with thousands of IoT devices in the field, outside Azure, wants to manage them centrally, monitor their security posture, and apply consistent policies to them as if they were native Azure resources. What solution enables this?",
        "a": [
          "Azure Arc, to extend Azure management to devices outside Azure",
          "Manually managing each device individually, with no tool at all",
          "Ignoring devices outside Azure and managing only those in the cloud",
          "Migrating all the physical devices into Azure as VMs"
        ],
        "c": 0,
        "e": "Azure Arc extends Azure's management, policy, and monitoring tools to resources outside Azure, including physical devices in the field, so they can be managed consistently like native Azure resources. Manually managing thousands of devices individually would be extremely inefficient and wouldn't scale. Migrating physical IoT devices into Azure as VMs isn't technically possible, since they're physical devices in the field, not virtualizable servers. Ignoring devices outside Azure would mean losing visibility and control over a significant part of the infrastructure that the scenario specifically wants addressed."
      },
      {
        "id": "heroic_73",
        "category": "Identity",
        "q": "A company wants to ensure that even administrators with the highest permissions must go through an additional approval process to access the most sensitive production resources, rather than having standing access. What solution enables this?",
        "a": [
          "Completely banning administrator access to production resources",
          "Privileged Identity Management, for time-limited access",
          "Relying on administrators being careful",
          "A permanent Owner role for administrators with no restrictions"
        ],
        "c": 1,
        "e": "Privileged Identity Management (PIM) lets you configure highly privileged roles to activate only temporarily and after approval, instead of being permanently assigned, reducing the risk of misuse or accidental mistakes affecting sensitive resources. A permanent, unrestricted Owner role would mean an administrator has standing access with no additional check at all, exactly the opposite of the desired solution. Relying on administrators being careful isn't a technical measure and guarantees no real access control. Completely banning access would prevent administrators from carrying out the necessary management of production resources when it's genuinely needed."
      },
      {
        "id": "heroic_74",
        "category": "Governance",
        "q": "A company with branches in ten countries wants employees to see a localized Azure portal interface, and wants its compliance team to be able to prove exactly where each country's employee data is stored. What design aspect does this primarily affect?",
        "a": [
          "Only the choice of pricing tier for individual Azure services",
          "Only the language setting in the user profile",
          "The choice of regions, based on data location requirements",
          "Only the redundancy type of the chosen storage"
        ],
        "c": 2,
        "e": "Choosing Azure regions according to each country's data residency requirements ensures that employee data from that country is stored in compliance with local regulations, and the compliance team can document this based on the actual location of resources. Service pricing tiers do vary between regions, but that doesn't primarily address the regulatory requirement on data location. The language setting in the user profile only affects how the interface is displayed, not the physical location of stored data. The storage redundancy type addresses resilience against an outage, not the question of which country or region the data is legally allowed to reside in."
      },
      {
        "id": "heroic_75",
        "category": "Cloud",
        "q": "A company's application must stay online during a full regional Azure outage, not just survive a single server crash. Which combination of properties is most directly responsible for that specific capability, as opposed to merely tolerating one failed component?",
        "a": [
          "Fault tolerance within a single datacenter",
          "Vertical scaling of the primary VM",
          "Disaster recovery with a secondary region",
          "Horizontal scaling within one region"
        ],
        "c": 2,
        "e": "Surviving the loss of an entire region specifically requires disaster recovery architecture with a ready secondary region, since fault tolerance and horizontal scaling within one region don't help if that whole region goes down. Fault tolerance protects against individual component failures, not a full regional outage. Vertical scaling only changes the size of one VM and offers no redundancy at all."
      },
      {
        "id": "heroic_76",
        "category": "Cloud",
        "q": "A team says their system is 'elastic' because it can handle ten times the normal load. A colleague points out this alone doesn't prove elasticity. What additional behavior would actually confirm elasticity rather than just scalability?",
        "a": [
          "The system can be manually resized to handle ten times the load",
          "The system uses larger virtual machines instead of more machines",
          "The system has passed a one-time load test at ten times capacity",
          "The system automatically scales back down once demand drops, without manual action"
        ],
        "c": 3,
        "e": "Elasticity specifically requires automatic scaling in both directions — up under load and back down once demand falls — done without manual intervention. Being able to handle high load through manual resizing demonstrates scalability, not elasticity, since a human is still involved. Using bigger machines describes vertical scaling, a method, not proof of elasticity. Passing a one-time load test shows capacity exists, not that it adjusts automatically over time."
      },
      {
        "id": "heroic_77",
        "category": "Cloud",
        "q": "A CFO wants to reduce upfront capital spending and instead pay based on usage, but is also told that at very high, constant usage levels, reserved capacity purchased upfront can sometimes be cheaper overall than pure pay-as-you-go. Which statement best reconciles both points?",
        "a": [
          "Consumption-based pricing reduces upfront risk, but reserved/upfront commitments can lower long-term cost for predictable, steady workloads",
          "Consumption-based pricing is always cheaper than any upfront commitment, without exception",
          "Reserved capacity eliminates the benefits of moving to the cloud entirely",
          "CapEx and OpEx produce identical costs regardless of usage pattern"
        ],
        "c": 0,
        "e": "Cloud pricing flexibility means a company can choose pure consumption-based pricing to avoid upfront risk, or commit to reserved capacity for predictable workloads to get a lower rate — both options can coexist and be chosen per workload. It's not true that pay-as-you-go is always cheaper; reserved pricing exists precisely because it can beat it for steady usage. Reserved capacity is still a cloud commitment, not a step back to owning hardware, so it doesn't eliminate cloud benefits. CapEx and OpEx are different cost structures with different cash-flow and risk implications, not identical outcomes."
      },
      {
        "id": "heroic_78",
        "category": "Cloud",
        "q": "A company uses AWS for one application and Azure for another, purely for cost-optimization reasons, with no need to keep any on-premises infrastructure. A separate team keeps some servers physically on-site while also using Azure. How should these two situations be classified?",
        "a": [
          "Both are hybrid cloud",
          "Multi-cloud, and hybrid cloud, respectively",
          "Both are multi-cloud",
          "Hybrid cloud, and multi-cloud, respectively"
        ],
        "c": 1,
        "e": "Using two different public cloud providers with no on-premises component is multi-cloud, while combining on-premises infrastructure with a public cloud is hybrid cloud — these are distinct concepts describing different combinations. Calling both hybrid cloud ignores that the first team has no on-premises servers at all. Calling both multi-cloud ignores that the second team is combining on-prem with one cloud, not two clouds. Reversing the order swaps the two correctly-matched definitions."
      },
      {
        "id": "heroic_79",
        "category": "Cloud models",
        "q": "A team wants to run individual pieces of backend logic that execute only in response to specific events, scale to zero when idle, and require no server or runtime management at all. A colleague suggests PaaS instead. What is the key distinction that makes serverless (FaaS) the better fit here?",
        "a": [
          "FaaS and PaaS are functionally identical, so either works equally well",
          "PaaS cannot run backend code at all",
          "FaaS scales to zero and bills per execution, while typical PaaS still expects a running, provisioned app even when idle",
          "FaaS requires managing the underlying virtual machines, while PaaS does not"
        ],
        "c": 2,
        "e": "The defining difference is that FaaS can scale all the way down to zero instances and bill only for actual execution, while a typical PaaS-hosted app remains provisioned and billed even during idle periods. They are not identical — that's exactly why the distinction matters here. PaaS absolutely can run backend code; that's its core purpose. It's FaaS, not PaaS, that hides virtual machines entirely from the customer."
      },
      {
        "id": "heroic_80",
        "category": "Cloud",
        "q": "An application is described as having 99.99% uptime. A reviewer argues this number alone doesn't prove the system is fault tolerant. What is the strongest justification for that argument?",
        "a": [
          "99.99% uptime is mathematically impossible without fault tolerance",
          "Uptime percentage and fault tolerance always measure exactly the same thing",
          "Fault tolerance is only relevant to on-premises systems, not cloud-hosted ones",
          "A high uptime percentage could be achieved with quick manual recovery after failures, rather than the system continuing to run through a failure automatically"
        ],
        "c": 3,
        "e": "A system could hit a high uptime percentage through very fast detection and manual or automated restart after each failure, without ever having redundant components that let it keep running uninterrupted through the failure itself — that's the distinction between recovering quickly and being fault tolerant. High uptime is achievable through several different strategies, not exclusively fault tolerance, so it isn't mathematically tied to it. The two concepts measure related but different things: one is an outcome (uptime), the other is an architectural property (surviving failure without interruption). Fault tolerance is just as relevant to cloud-hosted systems as on-premises ones."
      }
    ]
  },
  "labs": [
    {
      "id": "lab_0",
      "t": "IaaS, PaaS and SaaS",
      "d": "Explain the difference between IaaS, PaaS, and SaaS and give an example service for each.",
      "keywords": [
        [
          "iaas",
          "infrastructure"
        ],
        [
          "paas",
          "platform"
        ],
        [
          "saas",
          "software"
        ],
        [
          "example",
          "vm",
          "app service",
          "365"
        ]
      ],
      "model": "IaaS rents infrastructure like VMs, where you manage the OS and the application. PaaS is a platform like Azure App Service, where Azure manages the runtime environment and you just deploy your code. SaaS is finished software, such as Microsoft 365, where you don't manage anything technical at all."
    },
    {
      "id": "lab_1",
      "t": "RBAC vs Azure Policy",
      "d": "Explain the difference between RBAC and Azure Policy and at what level (scope) both are configured.",
      "keywords": [
        [
          "rbac",
          "who",
          "permission",
          "permissions"
        ],
        [
          "policy",
          "what",
          "rule",
          "rules"
        ],
        [
          "scope",
          "level",
          "subscription",
          "resource group"
        ]
      ],
      "model": "RBAC addresses who can do what — it assigns roles at a scope, such as a subscription or resource group. Azure Policy addresses what's allowed or required, such as requiring storage to be encrypted. Both apply to the scope hierarchy of management group, subscription, resource group, resource."
    },
    {
      "id": "lab_2",
      "t": "Choosing storage",
      "d": "You have images, shared files for multiple servers, a message queue, and relational data. Which Azure services will you use for each type?",
      "keywords": [
        [
          "blob",
          "images",
          "photos"
        ],
        [
          "files",
          "smb",
          "shared"
        ],
        [
          "queue",
          "queue",
          "messages"
        ],
        [
          "sql",
          "relational",
          "database"
        ]
      ],
      "model": "For images I'd use Blob Storage, for shared network folders Azure Files over the SMB protocol, for a message queue Azure Queue Storage, and for relational data Azure SQL Database."
    },
    {
      "id": "lab_3",
      "t": "Region vs availability zone",
      "d": "Explain the difference between a region and an availability zone and why zones increase resilience against outages.",
      "keywords": [
        [
          "region",
          "geographic",
          "area"
        ],
        [
          "zone",
          "zone",
          "datacenter"
        ],
        [
          "outage",
          "failure",
          "resilience",
          "resilience"
        ]
      ],
      "model": "A region is a geographic area containing Azure datacenters. An availability zone is a physically separate datacenter within a region with its own power and cooling. Zones increase resilience because the outage of one datacenter doesn't affect other zones in the same region."
    },
    {
      "id": "lab_4",
      "t": "Cost planning",
      "d": "What is the Pricing Calculator for and what is the TCO Calculator for? How do they differ?",
      "keywords": [
        [
          "pricing",
          "price",
          "estimate",
          "estimate"
        ],
        [
          "tco",
          "total",
          "on-prem",
          "migration"
        ],
        [
          "compare",
          "compare",
          "differ"
        ]
      ],
      "model": "The Pricing Calculator estimates the cost of specific Azure services based on your configuration. The TCO Calculator compares the total cost of running on-premises infrastructure with the cost of the same solution in Azure, including hardware, power, and IT staff."
    },
    {
      "id": "lab_5",
      "t": "Principle of least privilege",
      "d": "Why is it bad to grant a user the Owner role if they only need to read data? What is the principle of least privilege?",
      "keywords": [
        [
          "owner",
          "broad",
          "full",
          "full"
        ],
        [
          "least",
          "minim",
          "least privilege"
        ],
        [
          "risk",
          "risk",
          "security",
          "security"
        ]
      ],
      "model": "The Owner role grants full control, including deletion and access management, which is needlessly broad permission for someone who just needs to read data. The principle of least privilege means granting only the minimum needed for the job, which reduces the security risk if the account is compromised."
    },
    {
      "id": "lab_6",
      "t": "Azure Monitor",
      "d": "What is Azure Monitor for and what's the difference between metrics and logs?",
      "keywords": [
        [
          "monitor",
          "track",
          "metric"
        ],
        [
          "log",
          "alert",
          "notification"
        ],
        [
          "troubleshoot",
          "debug",
          "diagnostic"
        ]
      ],
      "model": "Azure Monitor collects metrics and logs from resources and applications for tracking performance and availability. Metrics are numerical data over time, like CPU usage. Logs contain detailed event records. Both can be used for alerts and diagnosing problems."
    },
    {
      "id": "lab_7",
      "t": "Azure Advisor",
      "d": "What does Azure Advisor do and in which areas does it give recommendations?",
      "keywords": [
        [
          "advisor",
          "recommend",
          "recommendation"
        ],
        [
          "cost",
          "cost",
          "security",
          "security"
        ],
        [
          "reliability",
          "reliability",
          "performance",
          "performance"
        ]
      ],
      "model": "Azure Advisor analyzes your environment's configuration and gives personalized recommendations across four areas: cost, security, reliability, and performance, to help you follow best practices."
    },
    {
      "id": "lab_8",
      "t": "Defender for Cloud vs Sentinel",
      "d": "Explain how Microsoft Defender for Cloud differs from Microsoft Sentinel.",
      "keywords": [
        [
          "defender",
          "posture",
          "protection",
          "protection"
        ],
        [
          "sentinel",
          "siem",
          "soar"
        ],
        [
          "incident",
          "security",
          "security"
        ]
      ],
      "model": "Defender for Cloud improves your security posture and protects your environment, showing a Secure Score and recommendations. Sentinel is a SIEM and SOAR tool for collecting and analyzing security data across an environment and responding to incidents."
    },
    {
      "id": "lab_9",
      "t": "VNet, subnet, and NSG",
      "d": "Explain how a virtual network, subnet, and Network Security Group relate to each other.",
      "keywords": [
        [
          "vnet",
          "network",
          "network"
        ],
        [
          "subnet",
          "segment"
        ],
        [
          "nsg",
          "traffic",
          "traffic",
          "filter"
        ]
      ],
      "model": "A VNet is a private virtual network in Azure. A subnet divides it into smaller segments for better organization and isolation of resources. A Network Security Group filters inbound and outbound network traffic at the subnet or network interface level using rules."
    },
    {
      "id": "lab_10",
      "t": "Public vs private vs hybrid cloud",
      "d": "Explain the difference between public, private, and hybrid cloud and when a hybrid solution is used.",
      "keywords": [
        [
          "public",
          "public",
          "shared"
        ],
        [
          "private",
          "private",
          "dedicated"
        ],
        [
          "hybrid",
          "combination",
          "connect"
        ]
      ],
      "model": "Public cloud shares infrastructure among customers and is run by a provider like Microsoft. Private cloud is dedicated to a single organization, whether on-premises or hosted. Hybrid cloud combines both, typically when a company is gradually migrating or must keep some data local for regulatory reasons."
    },
    {
      "id": "lab_11",
      "t": "CapEx vs OpEx",
      "d": "Explain the difference between the CapEx and OpEx cost models and where cloud computing fits in.",
      "keywords": [
        [
          "capex",
          "capital",
          "investment",
          "upfront"
        ],
        [
          "opex",
          "operational",
          "operating",
          "ongoing"
        ],
        [
          "cloud",
          "payment",
          "usage",
          "consumption"
        ]
      ],
      "model": "CapEx is capital expenditure paid upfront, such as buying servers. OpEx is ongoing operational cost spread out over time based on actual usage. Cloud computing typically works on an OpEx model, where you only pay for what you actually use."
    },
    {
      "id": "lab_12",
      "t": "Scalability vs elasticity",
      "d": "How does scalability differ from elasticity in the cloud?",
      "keywords": [
        [
          "scal",
          "scalab",
          "capacity"
        ],
        [
          "elast",
          "automatically",
          "dynamic"
        ],
        [
          "demand",
          "demand",
          "quickly"
        ]
      ],
      "model": "Scalability means the ability to increase or decrease capacity as needed, whether manually or automatically. Elasticity is a specific type of scalability where resources automatically and rapidly adjust to current load in real time, including scaling down when demand drops."
    },
    {
      "id": "lab_13",
      "t": "High availability vs disaster recovery",
      "d": "Explain the difference between high availability and disaster recovery.",
      "keywords": [
        [
          "high availab",
          "availability",
          "running"
        ],
        [
          "disaster recovery",
          "recovery",
          "major outage"
        ],
        [
          "differ",
          "differs",
          "scope"
        ]
      ],
      "model": "High availability ensures a service stays functional even during minor outages or maintenance, typically through redundancy within a region. Disaster recovery is the process of restoring services after a major catastrophe, often involving replication to another region, and has a longer outage (RTO/RPO)."
    },
    {
      "id": "lab_14",
      "t": "Resource group vs subscription",
      "d": "Explain what a resource group is for, what a subscription is for, and how they relate to each other.",
      "keywords": [
        [
          "resource group",
          "container",
          "logical"
        ],
        [
          "subscription",
          "billing",
          "billing",
          "access"
        ],
        [
          "relate",
          "hierarchy",
          "contains"
        ]
      ],
      "model": "A resource group is a logical container for related resources that share a lifecycle, such as a web app and its database. A subscription is the boundary for billing and access and contains one or more resource groups."
    },
    {
      "id": "lab_15",
      "t": "Authentication vs authorization",
      "d": "Explain the difference between authentication and authorization and give an example Azure service for each.",
      "keywords": [
        [
          "authentication",
          "authentication",
          "verify",
          "identity"
        ],
        [
          "authorization",
          "authorization",
          "permission",
          "access"
        ],
        [
          "entra",
          "rbac",
          "example"
        ]
      ],
      "model": "Authentication verifies who you are, typically by signing in via Microsoft Entra ID. Authorization determines what you're allowed to do, which in Azure is handled by RBAC through role assignments at a specific scope."
    },
    {
      "id": "lab_16",
      "t": "Multi-factor authentication",
      "d": "What is MFA and why does it increase sign-in security compared to a password alone?",
      "keywords": [
        [
          "mfa",
          "multi-factor",
          "more factors"
        ],
        [
          "password",
          "password",
          "phone",
          "biometrics"
        ],
        [
          "security",
          "security",
          "protection"
        ]
      ],
      "model": "MFA requires more than one verification factor at sign-in, such as a password plus a code from your phone or biometrics. Even if an attacker knows the password, they can't get further without the second factor, which significantly increases account security."
    },
    {
      "id": "lab_17",
      "t": "Conditional Access",
      "d": "What is Conditional Access and based on which conditions can it restrict or allow access?",
      "keywords": [
        [
          "conditional access",
          "condition",
          "policy"
        ],
        [
          "device",
          "device",
          "location",
          "location",
          "risk",
          "risk"
        ],
        [
          "mfa",
          "block",
          "require"
        ]
      ],
      "model": "Conditional Access is a set of policies in Microsoft Entra ID that, based on conditions like location, device type, or risk level, decide whether to allow access, require MFA, or block it."
    },
    {
      "id": "lab_18",
      "t": "Azure Policy in practice",
      "d": "Give a concrete example of a rule that Azure Policy could enforce at a company.",
      "keywords": [
        [
          "policy",
          "rule",
          "enforce",
          "enforce"
        ],
        [
          "tag",
          "region",
          "encrypt",
          "encrypt"
        ],
        [
          "compliance",
          "audit",
          "compliant"
        ]
      ],
      "model": "Azure Policy can enforce, for example, that all resources must have a department-name tag assigned, that storage accounts must be encrypted, or that VMs can only be created in approved regions. Non-compliant resources can be audited or blocked outright."
    },
    {
      "id": "lab_19",
      "t": "Management group hierarchy",
      "d": "What are management groups for and why are they used when managing multiple subscriptions?",
      "keywords": [
        [
          "management group",
          "container",
          "organize"
        ],
        [
          "subscription",
          "multiple",
          "multiple"
        ],
        [
          "governance",
          "policy",
          "central"
        ]
      ],
      "model": "Management groups organize multiple subscriptions into a hierarchical structure. They let you centrally apply governance policies, like Azure Policy or RBAC roles, to a whole group of subscriptions at once instead of configuring rules separately for each one."
    },
    {
      "id": "lab_20",
      "t": "Service Level Agreement",
      "d": "What is an SLA and what happens if Microsoft fails to meet a guaranteed availability level?",
      "keywords": [
        [
          "sla",
          "availability",
          "availab",
          "guarantee"
        ],
        [
          "uptime",
          "percent",
          "99"
        ],
        [
          "credit",
          "credit",
          "compensation"
        ]
      ],
      "model": "An SLA guarantees a minimum level of service availability, for example 99.9% uptime per month. If Microsoft fails to meet that level, the customer is entitled to financial credits under the terms of the agreement."
    },
    {
      "id": "lab_21",
      "t": "Reserved Instances vs Spot VMs",
      "d": "Explain the difference between Reserved Instances and Spot VMs and when it's appropriate to use each.",
      "keywords": [
        [
          "reserved",
          "reservation",
          "1 year",
          "3 year"
        ],
        [
          "spot",
          "unused",
          "interrupt",
          "cheap"
        ],
        [
          "discount",
          "discount",
          "suitable"
        ]
      ],
      "model": "Reserved Instances are prepaid VMs for 1 or 3 years in exchange for a substantial discount, suited to stable long-term load. Spot VMs use unused capacity at a low price, but Microsoft can evict them at any time, so they suit batch jobs that can tolerate interruption."
    },
    {
      "id": "lab_22",
      "t": "Serverless computing",
      "d": "What does serverless computing mean and which Azure service would you use for a simple event-triggered function?",
      "keywords": [
        [
          "serverless",
          "no servers",
          "manage"
        ],
        [
          "function",
          "azure functions",
          "event",
          "event"
        ],
        [
          "payment",
          "pay",
          "only for"
        ]
      ],
      "model": "Serverless computing means you don't manage servers, the infrastructure scales automatically, and you only pay for the actual code runtime. For a simple event-triggered function I'd use Azure Functions."
    },
    {
      "id": "lab_23",
      "t": "Load Balancer vs Traffic Manager",
      "d": "Explain the difference between Azure Load Balancer and Azure Traffic Manager.",
      "keywords": [
        [
          "load balancer",
          "region",
          "within"
        ],
        [
          "traffic manager",
          "dns",
          "global"
        ],
        [
          "differ",
          "level",
          "scope"
        ]
      ],
      "model": "Azure Load Balancer spreads traffic among resources within a single region at the network layer. Azure Traffic Manager is a DNS-based service that routes traffic among multiple regions globally, for example to the nearest or most available instance."
    },
    {
      "id": "lab_24",
      "t": "Azure Key Vault",
      "d": "What is Azure Key Vault for and what kinds of things can be safely stored in it?",
      "keywords": [
        [
          "key vault",
          "secure",
          "store"
        ],
        [
          "key",
          "key",
          "secret",
          "secret",
          "certificate"
        ],
        [
          "application",
          "access",
          "managed"
        ]
      ],
      "model": "Azure Key Vault securely stores sensitive data like encryption keys, passwords, API keys, and certificates. Applications access them via a managed identity instead of storing secrets directly in code, which increases security."
    },
    {
      "id": "lab_25",
      "t": "Tags in Azure",
      "d": "What are tags on Azure resources for and give an example of how they can be used.",
      "keywords": [
        [
          "tag",
          "label",
          "metadata"
        ],
        [
          "organize",
          "filter",
          "group"
        ],
        [
          "cost",
          "cost",
          "department",
          "department"
        ]
      ],
      "model": "Tags are paired metadata assigned to resources for organizing them. They can be used, for example, to assign a department or project to a resource and then filter costs by tag in billing."
    },
    {
      "id": "lab_26",
      "t": "Azure Backup",
      "d": "What does Azure Backup do and why does it matter even in the cloud, where Microsoft manages the infrastructure?",
      "keywords": [
        [
          "backup",
          "backup"
        ],
        [
          "data",
          "loss",
          "restore",
          "restore"
        ],
        [
          "responsibility",
          "responsibility",
          "customer"
        ]
      ],
      "model": "Azure Backup creates backups of data and VMs that can be restored in case of loss or corruption. It matters even in the cloud because, under the shared responsibility model, the customer — not Microsoft — is still responsible for the data itself and backing it up."
    },
    {
      "id": "lab_27",
      "t": "Migrating to Azure",
      "d": "What tools or approach would you recommend to a company planning to migrate its on-premises servers to Azure?",
      "keywords": [
        [
          "migrate",
          "azure migrate",
          "assess",
          "assessment"
        ],
        [
          "tco",
          "cost",
          "estimate"
        ],
        [
          "plan",
          "approach",
          "step"
        ]
      ],
      "model": "I'd recommend starting with Azure Migrate to assess and inventory the existing infrastructure, using the TCO Calculator to estimate savings, and planning the migration in phases, testing critical applications before the full cutover."
    },
    {
      "id": "lab_28",
      "t": "Compliance and the Trust Center",
      "d": "Why does it matter for companies in regulated industries that Azure meets various compliance certifications?",
      "keywords": [
        [
          "compliance",
          "compliance",
          "certification"
        ],
        [
          "regulation",
          "regulated",
          "industry",
          "law"
        ],
        [
          "trust",
          "trust",
          "audit"
        ]
      ],
      "model": "Companies in regulated industries, like healthcare or finance, must demonstrate compliance with standards such as ISO 27001 or GDPR. Azure meets these certifications and provides documentation through the Microsoft Trust Center, which makes companies' own audits easier and reduces legal risk."
    },
    {
      "id": "lab_29",
      "t": "Azure Cost Management",
      "d": "How can Azure Cost Management help a company keep costs under control?",
      "keywords": [
        [
          "cost management",
          "cost",
          "track"
        ],
        [
          "budget",
          "budget",
          "alert",
          "alert"
        ],
        [
          "optimize",
          "recommend",
          "savings"
        ]
      ],
      "model": "Azure Cost Management lets you track current spend in real time, set budgets with alerts when a limit is exceeded, and it provides recommendations for cost optimization, such as identifying unused resources."
    }
  ],
  "dailyFacts": [
    {
      "title": "CapEx vs OpEx",
      "text": "On-premises datacenters are Capital Expenditure — you pay upfront for hardware. Cloud is Operational Expenditure — you pay for what you use, when you use it. This is one of the core value propositions of cloud computing on the AZ-900 exam."
    },
    {
      "title": "Economies of scale",
      "text": "Because Microsoft buys hardware and datacenter capacity at massive scale, the per-unit cost is lower than what any single company could achieve on its own — and that saving gets passed down to Azure customers."
    },
    {
      "title": "High availability vs Disaster recovery",
      "text": "High availability keeps an application running through minor local failures. Disaster recovery is the plan for restoring functionality after a major, region-wide event. They're related but not the same thing — a common exam trap."
    },
    {
      "title": "Availability Zones",
      "text": "An Availability Zone is a physically separate location within an Azure region, with its own independent power, cooling, and networking. Most Azure regions have at least three, so a failure in one zone doesn't take down the others."
    },
    {
      "title": "Region pairs",
      "text": "Most Azure regions are paired with another region at least 300 miles away in the same geography. If a disaster hits one region, your paired region can take over — and Microsoft prioritizes restoring one region in a pair before the other during a broad outage."
    },
    {
      "title": "Resource Groups",
      "text": "A resource group is a logical container for resources that share the same lifecycle. Deleting a resource group deletes everything inside it — which makes it a genuinely dangerous but very convenient cleanup tool."
    },
    {
      "title": "Subscriptions vs Management Groups",
      "text": "A subscription is a billing and access boundary. A management group sits above subscriptions purely for organizing governance — like Azure Policy or RBAC — across many subscriptions at once."
    },
    {
      "title": "ARM — Azure Resource Manager",
      "text": "Every single request to create, update, or delete a resource in Azure — whether from the Portal, CLI, PowerShell, or an SDK — goes through Azure Resource Manager. It's the one unified control plane behind everything."
    },
    {
      "title": "ARM templates = Infrastructure as Code",
      "text": "ARM templates (and Bicep) let you describe your entire infrastructure in a JSON or declarative file. That means environments become repeatable, version-controllable, and far less prone to manual configuration drift."
    },
    {
      "title": "Tags",
      "text": "Tags are simple name/value pairs you attach to resources — for example Environment:Production or CostCenter:Marketing. They're one of the main tools for organizing cost reports and automating governance at scale."
    },
    {
      "title": "IaaS, PaaS, SaaS",
      "text": "IaaS gives you the raw building blocks (VMs, networking) and you manage everything above the OS. PaaS manages the OS and runtime for you, so you just deploy code. SaaS is a finished product you simply use — like Microsoft 365."
    },
    {
      "title": "Shared responsibility model",
      "text": "The more of the stack Microsoft manages (SaaS > PaaS > IaaS), the more security responsibility shifts to Microsoft. But you always remain responsible for your data, identities, and access management — no exceptions."
    },
    {
      "title": "Azure Virtual Machines",
      "text": "Azure VMs are the core IaaS compute offering — you choose the OS, size, and configuration, and you're responsible for patching and maintaining the guest OS yourself, unlike with PaaS options."
    },
    {
      "title": "Azure App Service",
      "text": "App Service is a fully managed PaaS for hosting web apps, REST APIs, and mobile backends. You just deploy your code — Microsoft handles the underlying servers, patching, and scaling infrastructure."
    },
    {
      "title": "Azure Functions",
      "text": "Azure Functions is Azure's serverless compute option — code runs only in response to an event or trigger, and you're billed by execution time and resource usage rather than for an always-on server."
    },
    {
      "title": "Azure Kubernetes Service (AKS)",
      "text": "AKS is Azure's managed Kubernetes offering. Microsoft manages the control plane for you, so you focus on deploying and scaling your containerized workloads instead of babysitting Kubernetes infrastructure."
    },
    {
      "title": "Blob Storage",
      "text": "Blob Storage is Azure's object storage for unstructured data — images, video, backups, log files. It offers access tiers (Hot, Cool, Archive) so you can balance storage cost against how quickly you need to retrieve the data."
    },
    {
      "title": "Storage redundancy — LRS vs GRS",
      "text": "LRS (Locally Redundant Storage) keeps three copies within a single datacenter. GRS (Geo-Redundant Storage) also replicates those copies to a paired region hundreds of miles away — much stronger protection against regional disasters."
    },
    {
      "title": "Azure Files vs Blob Storage",
      "text": "Azure Files gives you fully managed file shares accessible over the standard SMB protocol — genuinely useful for lift-and-shift scenarios where an app expects a traditional network drive. Blob Storage doesn't work that way."
    },
    {
      "title": "Virtual Networks (VNets)",
      "text": "A VNet is your own private, isolated network inside Azure. Resources inside it can communicate securely, and you control exactly what traffic is allowed in and out via subnets, NSGs, and routing."
    },
    {
      "title": "Network Security Groups (NSGs)",
      "text": "An NSG is a basic firewall for your VNet — a set of allow/deny rules based on source, destination, port, and protocol, applied to subnets or individual network interfaces."
    },
    {
      "title": "ExpressRoute",
      "text": "ExpressRoute creates a private, dedicated connection from your on-premises network straight into Azure — bypassing the public internet entirely. It's faster and more reliable than a VPN, but also considerably more expensive."
    },
    {
      "title": "VPN Gateway",
      "text": "A VPN Gateway creates an encrypted tunnel over the public internet between your on-premises network and Azure. It's the budget-friendly alternative to ExpressRoute for hybrid connectivity."
    },
    {
      "title": "Azure Load Balancer vs Application Gateway",
      "text": "Load Balancer works at the network layer (Layer 4) — distributing raw TCP/UDP traffic. Application Gateway works at the web layer (Layer 7) and can make routing decisions based on URL paths, plus provide a built-in web application firewall."
    },
    {
      "title": "Azure CDN",
      "text": "A Content Delivery Network caches your static content at edge locations physically close to your users around the world — cutting latency and reducing load on your origin servers."
    },
    {
      "title": "Microsoft Entra ID",
      "text": "Microsoft Entra ID (formerly Azure Active Directory) is Azure's cloud identity and access management service. Nearly every security feature on the AZ-900 exam — MFA, Conditional Access, RBAC — is built on top of it."
    },
    {
      "title": "Role-Based Access Control (RBAC)",
      "text": "RBAC lets you grant users only the permissions they actually need, scoped to a management group, subscription, resource group, or single resource — a direct implementation of the principle of least privilege."
    },
    {
      "title": "Multi-Factor Authentication (MFA)",
      "text": "MFA requires two or more proofs of identity — something you know (a password), something you have (a phone), or something you are (a fingerprint). It's one of the single highest-impact ways to prevent account compromise."
    },
    {
      "title": "Conditional Access",
      "text": "Conditional Access lets you enforce rules like 'require MFA when signing in from an unfamiliar location' — applying stricter controls automatically only when the risk signals call for it."
    },
    {
      "title": "Zero Trust model",
      "text": "Zero Trust assumes breach and verifies every request explicitly, rather than trusting anything just because it's inside the corporate network perimeter. Its three core principles: verify explicitly, use least-privileged access, assume breach."
    },
    {
      "title": "Azure Key Vault",
      "text": "Key Vault is a centralized, secure store for secrets, encryption keys, and certificates — so sensitive values never end up hardcoded in application source code or configuration files."
    },
    {
      "title": "Defender for Cloud",
      "text": "Microsoft Defender for Cloud continuously assesses your resources against security best practices and gives you a Secure Score — a single number that tracks how your overall security posture is trending over time."
    },
    {
      "title": "Azure Policy",
      "text": "Azure Policy enforces organizational rules — like 'all resources must be in West Europe' or 'storage accounts must use encryption'. Non-compliant resources can be flagged, or even blocked from being created in the first place."
    },
    {
      "title": "Azure Blueprints",
      "text": "Blueprints package together templates, policies, and role assignments into one repeatable definition — so you can spin up a fully governed environment that meets compliance standards from the very first deployment."
    },
    {
      "title": "Cost Management + Advisor",
      "text": "Azure Cost Management tracks and analyzes your spending, while Azure Advisor proactively recommends ways to cut costs, improve security, and boost performance based on your actual resource usage patterns."
    },
    {
      "title": "Service Level Agreements (SLAs)",
      "text": "An SLA is Microsoft's formal, measurable uptime commitment — for example 99.9% availability. That works out to under 9 hours of allowed downtime per year, and Azure offers service credits if it's not met."
    },
    {
      "title": "Azure Service Health",
      "text": "Service Health is personalized to your subscription — it tells you specifically which of your resources are affected by an ongoing Azure incident, unlike the general Azure Status page which just reports global outages."
    },
    {
      "title": "Scalability — vertical vs horizontal",
      "text": "Vertical scaling (scaling up) means adding more power to an existing machine — more CPU, more RAM. Horizontal scaling (scaling out) means adding more machines. Cloud workloads are generally built to favor scaling out."
    },
    {
      "title": "Elasticity",
      "text": "Elasticity is the ability to automatically scale resources up or down to match real-time demand — so you're never stuck paying for idle capacity or getting caught short during a traffic spike."
    },
    {
      "title": "Fault tolerance vs redundancy",
      "text": "Redundancy means having duplicate components ready to take over. Fault tolerance is the broader ability of the overall system to keep operating correctly even when one or more of those components actually fails."
    },
    {
      "title": "Microsoft Trust Center",
      "text": "The Trust Center is Microsoft's central hub for compliance documentation — covering GDPR, ISO standards, and dozens of other regulatory frameworks Azure has been independently audited against."
    }
  ],
  "learnContent": {
    "cloudConcepts": {
      "trackName": "Cloud Concepts",
      "icon": "<svg class=\"ic-track\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17.5 19H9a5 5 0 1 1 1.3-9.8A6 6 0 0 1 22 12.5 4.5 4.5 0 0 1 17.5 19Z\"/></svg>",
      "lessons": [
        {
          "id": "cc_b1",
          "tier": "beginner",
          "title": "So... what actually IS the cloud?",
          "hook": "You've heard \"it's in the cloud\" a hundred times. But what is it, actually?",
          "body": [
            "Strip away the marketing and \"the cloud\" is just someone else's computer, sitting in a giant building called a datacenter, that you rent access to over the internet.",
            "Instead of buying a server, plugging it in, and babysitting it in your office closet, you rent exactly the computing power you need from a company like Microsoft — and hand it back the moment you're done."
          ],
          "takeaway": "Cloud computing = renting computers instead of owning them."
        },
        {
          "id": "cc_b2",
          "tier": "beginner",
          "title": "Why \"renting\" beats \"owning\" (usually)",
          "hook": "Would you rather buy a car for one road trip, or just call a rideshare?",
          "body": [
            "Buying on-premises hardware is CapEx (Capital Expenditure) — a big chunk of cash upfront, whether you use the server at 10% or 100% capacity.",
            "Cloud is OpEx (Operational Expenditure) — you pay for what you actually use, like a taxi fare instead of buying the whole car."
          ],
          "takeaway": "CapEx = buy the car. OpEx = call the ride."
        },
        {
          "id": "cc_b3",
          "tier": "beginner",
          "title": "The backup goalkeeper principle",
          "hook": "Ever notice football teams carry a substitute goalkeeper, even though the starter rarely gets injured?",
          "body": [
            "That's redundancy — having a backup ready, just in case. Cloud providers do the same with servers, spreading your app across multiple machines so one failure doesn't take everything down.",
            "High availability means your app keeps running through small hiccups. Disaster recovery is the bigger plan for when an entire region has a really bad day."
          ],
          "takeaway": "Redundancy = a substitute goalkeeper for your app."
        },
        {
          "id": "cc_b4",
          "tier": "beginner",
          "title": "Elasticity: growing pants for your app",
          "hook": "Ever worn pants with an elastic waistband after a big meal?",
          "body": [
            "Elasticity means your resources automatically expand when demand spikes — like Black Friday traffic — and shrink back down once things calm down.",
            "You're never stuck paying for a giant server 24/7 just to handle the one hour a day it's actually busy."
          ],
          "takeaway": "Elasticity = pants that stretch only when you need them to."
        },
        {
          "id": "cc_b5",
          "tier": "beginner",
          "title": "Scaling up vs scaling out",
          "hook": "Do you hire one genius who works 100-hour weeks, or ten normal people?",
          "body": [
            "Scaling up (vertical) means making one machine bigger — more CPU, more RAM. It's simple, but eventually you hit a ceiling.",
            "Scaling out (horizontal) means adding more machines to share the load. It's how most cloud-native apps grow — easier to keep expanding indefinitely."
          ],
          "takeaway": "Scale up = a stronger worker. Scale out = more workers."
        },
        {
          "id": "cc_b6",
          "tier": "beginner",
          "title": "Public, Private, and Hybrid — pick your flavor",
          "hook": "Renting an apartment, owning a house, or a bit of both?",
          "body": [
            "Public cloud (like Azure) means you share physical infrastructure with other customers, split by strong virtual walls — cheap, flexible, someone else maintains the building.",
            "Private cloud is infrastructure dedicated entirely to one organization — more control, more cost, more maintenance, like owning the house outright.",
            "Hybrid cloud mixes both — some workloads on-premises, some in the public cloud, connected together. Most real companies live here."
          ],
          "takeaway": "Public = rent. Private = own. Hybrid = a bit of both."
        },
        {
          "id": "cc_b7",
          "tier": "beginner",
          "title": "Pay for what you use, not what you might use",
          "hook": "You don't pay a flat fee for electricity no matter how many lights are on — so why would servers be different?",
          "body": [
            "Consumption-based pricing means your bill reflects actual usage: CPU seconds, gigabytes stored, requests handled — not a fixed subscription regardless of demand.",
            "This is a major reason cloud can be cheaper than on-premises: you stop paying for capacity that's just sitting idle overnight."
          ],
          "takeaway": "Cloud billing works like your electricity meter, not a gym membership."
        },
        {
          "id": "cc_b8",
          "tier": "beginner",
          "title": "Why cloud makes you faster, not just cheaper",
          "hook": "Building your own kitchen takes months. Renting one that's already built takes minutes.",
          "body": [
            "On-premises, spinning up a new server can mean weeks of ordering hardware, racking it, configuring it. In Azure, the same server exists in a few clicks or one line of code.",
            "That speed — called agility — lets teams experiment and fail fast without a six-month hardware commitment hanging over every decision."
          ],
          "takeaway": "Cloud doesn't just save money — it saves time to try things."
        },
        {
          "id": "cc_i1",
          "tier": "intermediate",
          "title": "Reserved vs Pay-As-You-Go",
          "hook": "A CFO asks: if pay-as-you-go is so flexible, why would anyone commit to anything upfront?",
          "body": [
            "Consumption-based pricing (pure pay-as-you-go) charges only for what's used, with zero commitment — ideal for unpredictable or short-lived workloads. But Azure also offers Reserved Instances and Savings Plans: committing to 1 or 3 years of usage in exchange for a substantially lower rate, often 40-70% cheaper than pay-as-you-go.",
            "The trade-off is simple: pay-as-you-go optimizes for flexibility, reservations optimize for cost on predictable, steady-state workloads. A production database that runs 24/7 for years is a reservation candidate. A dev/test environment torn down every weekend is not."
          ],
          "takeaway": "Reservations are basically a cloud gym membership — cheaper per visit, brutal if you actually stop showing up."
        },
        {
          "id": "cc_i2",
          "tier": "intermediate",
          "title": "Elasticity vs Scalability — the precise line",
          "hook": "Two systems can both handle 10x traffic. Only one of them is actually elastic.",
          "body": [
            "Scalability is the general ability of a system to handle increased load — whether that scaling happens automatically or requires a human to click a button. Elasticity is a stricter form of scalability: resources expand and contract automatically, in both directions, without manual intervention.",
            "This distinction shows up directly on the exam. A system an engineer manually resizes for a big event is scalable, but not elastic — a person, not the platform, made the decision. True elasticity also requires scaling back down on its own once demand drops."
          ],
          "takeaway": "Scalability is 'can it grow.' Elasticity is 'does it grow up — and shrink back down — without you lifting a finger.'"
        },
        {
          "id": "cc_i3",
          "tier": "intermediate",
          "title": "Fault Tolerance vs HA vs DR — untangled",
          "hook": "Three terms that get used interchangeably in conversation — and are absolutely not interchangeable on the exam.",
          "body": [
            "Fault tolerance is an architectural property: the system keeps running correctly through a component failure, invisibly, because redundant parts silently take over. High availability is the measurable outcome — an uptime percentage target, like 99.9%, that a fault-tolerant system is built to hit. Disaster recovery is the plan for when fault tolerance wasn't enough — an entire region goes down and you fail over somewhere else.",
            "A useful ordering: fault tolerance is the mechanism, high availability is the promise, disaster recovery is the backup plan for when the promise gets broken anyway."
          ],
          "takeaway": "Fault tolerance is the seatbelt. High availability is the safety rating. Disaster recovery is the spare tire in the trunk."
        },
        {
          "id": "cc_i4",
          "tier": "intermediate",
          "title": "Deployment models — where the boundaries actually are",
          "hook": "Public, private, hybrid, multi-cloud — four terms, and the exam loves testing the boundaries between them.",
          "body": [
            "Public cloud means shared infrastructure owned by a provider like Microsoft. Private cloud means dedicated infrastructure for one organization only. Hybrid cloud specifically means combining on-premises or private infrastructure with public cloud. Multi-cloud means using two or more public cloud providers together.",
            "The trap: hybrid and multi-cloud aren't opposites — a company can be both at once, running on-premises servers, Azure, and AWS simultaneously. What distinguishes them is the specific combination of environments involved, not simply 'using more than one thing.'"
          ],
          "takeaway": "Hybrid mixes 'mine' with 'rented.' Multi-cloud just rents from two landlords at once."
        },
        {
          "id": "cc_i5",
          "tier": "intermediate",
          "title": "Total Cost of Ownership, properly defined",
          "hook": "The sticker price of a server is the least interesting number on the invoice.",
          "body": [
            "Total Cost of Ownership (TCO) accounts for the full lifetime cost of infrastructure — not just hardware, but power, cooling, physical space, IT staff time, maintenance, and eventual replacement. Azure's TCO Calculator exists specifically because comparing 'server cost' to 'Azure cost' in isolation dramatically understates on-premises spending.",
            "On the exam, TCO is less about a formula and more about scope: whenever a question asks you to compare on-premises versus cloud cost 'holistically' or 'over several years,' TCO — not simple CapEx — is the concept being tested."
          ],
          "takeaway": "CapEx is what's on the receipt. TCO is what's actually left your bank account by the time the server dies."
        }
      ]
    },
    "coreServices": {
      "trackName": "Core Azure Services",
      "icon": "<svg class=\"ic-track\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"6\" rx=\"1.5\"/><rect x=\"3\" y=\"14\" width=\"18\" height=\"6\" rx=\"1.5\"/></svg>",
      "lessons": [
        {
          "id": "cs_b1",
          "tier": "beginner",
          "title": "IaaS, PaaS, SaaS — the pizza analogy",
          "hook": "Nobody explains this better than pizza.",
          "body": [
            "IaaS (Infrastructure as a Service) is like buying flour, dough, and an oven — you get the raw ingredients (virtual machines, networking) and do the cooking yourself.",
            "PaaS (Platform as a Service) is ordering a pizza kit — someone gives you the dough and sauce already prepped; you just add your toppings (your code) and Microsoft handles the oven (the OS, patching, scaling).",
            "SaaS (Software as a Service) is calling for delivery — the pizza just shows up, ready to eat. Think Microsoft 365."
          ],
          "takeaway": "IaaS = raw ingredients. PaaS = pizza kit. SaaS = delivery."
        },
        {
          "id": "cs_b2",
          "tier": "beginner",
          "title": "What is a Virtual Machine, really?",
          "hook": "It's a computer... pretending to be a computer, inside another computer.",
          "body": [
            "A Virtual Machine (VM) is software that behaves exactly like a physical computer — its own OS, its own storage, its own personality — but it's actually just a slice of a much bigger physical server.",
            "That's how Azure fits thousands of customers onto the same hardware without anyone noticing: everyone gets their own private \"apartment\" inside the same building."
          ],
          "takeaway": "A VM is your own private apartment inside a shared building."
        },
        {
          "id": "cs_b3",
          "tier": "beginner",
          "title": "Storage: not all boxes are the same",
          "hook": "Would you store a mattress and a paperclip in the same size box?",
          "body": [
            "Blob Storage holds unstructured stuff — photos, videos, backups. Think of it as a giant warehouse of labeled boxes, no fixed shape required.",
            "Azure Files works like a shared network drive your apps can map to, exactly like the office server everyone already knows how to use.",
            "Managed Disks are the dedicated hard drive attached to a specific VM — personal storage, not shared with anyone else."
          ],
          "takeaway": "Blob = warehouse. Files = shared drive. Disks = personal hard drive."
        },
        {
          "id": "cs_b4",
          "tier": "beginner",
          "title": "Regions and their backup buddy",
          "hook": "Chain restaurants pick multiple cities on purpose — so one bad night in one city doesn't sink the whole business.",
          "body": [
            "An Azure Region is a specific geographic area with one or more datacenters — like \"West Europe\" or \"East US\".",
            "Most regions are paired with another region hundreds of miles away. If a disaster hits one, the paired region is ready to help pick up the slack."
          ],
          "takeaway": "Regions are locations. Region pairs are backup buddies for disasters."
        },
        {
          "id": "cs_b5",
          "tier": "beginner",
          "title": "Availability Zones: separate wings of the same building",
          "hook": "Ever notice hospitals put backup generators in a different wing than the main power room?",
          "body": [
            "An Availability Zone is a physically separate location within a region — its own power, cooling, and networking.",
            "Spreading your app across zones means a single equipment failure, even a whole datacenter going dark, doesn't take your app down with it."
          ],
          "takeaway": "Availability Zones = separate wings, separate power, shared building."
        },
        {
          "id": "cs_b6",
          "tier": "beginner",
          "title": "The universal remote control for Azure",
          "hook": "Imagine one remote that controls your TV, your lights, and your thermostat — regardless of brand.",
          "body": [
            "Azure Resource Manager (ARM) is the single control layer behind everything in Azure. Whether you click in the Portal, type a command in the CLI, or run a script — it all goes through ARM.",
            "That consistency is what makes automation possible: one API, every resource type, no exceptions."
          ],
          "takeaway": "Portal, CLI, PowerShell — different remotes, same ARM underneath."
        },
        {
          "id": "cs_b7",
          "tier": "beginner",
          "title": "Your own gated community, digitally",
          "hook": "Not every stranger should be able to walk into your neighborhood.",
          "body": [
            "A Virtual Network (VNet) is your own private, isolated slice of network inside Azure. Resources inside it can talk to each other freely, but nothing gets in from outside unless you allow it.",
            "It's the digital version of a gated community — your own streets, your own rules for who's allowed through the gate."
          ],
          "takeaway": "A VNet is a gated community for your Azure resources."
        },
        {
          "id": "cs_b8",
          "tier": "beginner",
          "title": "App Service: a furnished office, not an empty warehouse",
          "hook": "Would you rather rent a fully furnished office, or an empty warehouse you have to build out yourself?",
          "body": [
            "Azure App Service is a managed platform for hosting web apps and APIs. You just deploy your code — Microsoft handles the servers, patching, and scaling underneath.",
            "Compare that to a plain VM, where you're responsible for literally everything below your application, right down to Windows Updates."
          ],
          "takeaway": "App Service is move-in ready. A VM is a bare shell you build out yourself."
        },
        {
          "id": "cs_b9",
          "tier": "beginner",
          "title": "Serverless: paying a vending machine, not a full-time cashier",
          "hook": "You don't pay a cashier's salary just so a vending machine can sell you a snack at 2am.",
          "body": [
            "Azure Functions run your code only when something triggers it — a file upload, a timer, an API call — and you're billed only for that brief moment of execution.",
            "\"Serverless\" doesn't mean there's no server; it means you never think about it. No idle server sitting around costing you money between events."
          ],
          "takeaway": "Serverless = you only pay when the vending machine actually dispenses something."
        },
        {
          "id": "cs_b10",
          "tier": "beginner",
          "title": "Containers: the shipping container of software",
          "hook": "A shipping container works the same on a truck, a train, or a cargo ship — nobody has to repack it.",
          "body": [
            "A container packages your app together with everything it needs to run — libraries, settings, dependencies — so it behaves identically no matter where it's deployed.",
            "Azure Kubernetes Service (AKS) is the managed system that runs and coordinates lots of these containers for you, restarting failed ones automatically."
          ],
          "takeaway": "Containers travel with everything they need — no surprises at the destination."
        },
        {
          "id": "cs_i1",
          "tier": "intermediate",
          "title": "Zonal vs zone-redundant — the guarantee that actually matters",
          "hook": "Owning an Availability Zone and being protected by Availability Zones are two very different guarantees.",
          "body": [
            "A zonal service is deployed to one specific zone you choose — if that zone fails, your resource fails with it, though you can rebuild elsewhere manually. A zone-redundant service automatically replicates across multiple zones simultaneously, so a single zone failure causes no interruption at all, with no manual action needed.",
            "This matters because not every Azure service supports zone redundancy the same way, and picking 'zonal' when you actually needed 'zone-redundant' is a common real-world — and exam — misconfiguration."
          ],
          "takeaway": "Zonal is 'I picked a nice apartment.' Zone-redundant is 'I own the whole building, so one flooded unit doesn't matter.'"
        },
        {
          "id": "cs_i2",
          "tier": "intermediate",
          "title": "Why ARM templates don't break on the second run",
          "hook": "Run the same ARM template twice. Nothing breaks the second time — and that's the whole point.",
          "body": [
            "ARM templates are declarative: you describe the desired end state of your infrastructure, and Azure figures out how to get there — not a step-by-step script of commands. This gives them idempotency: deploying the same template repeatedly produces the same result, rather than creating duplicates or throwing errors.",
            "Bicep is a newer, more readable language that compiles down to the same underlying ARM JSON — same engine, friendlier syntax. Both stand in contrast to imperative approaches, like manually clicking through the Portal, which describe steps to take rather than an outcome to reach."
          ],
          "takeaway": "Declarative is telling a chef what dish you want. Imperative is standing in the kitchen micromanaging every chop."
        },
        {
          "id": "cs_i3",
          "tier": "intermediate",
          "title": "Peering builds the road. NSGs run the checkpoint.",
          "hook": "Two VNets, fully peered, still won't talk to each other if one firewall rule says no.",
          "body": [
            "VNet peering connects two virtual networks so resources in each can communicate using private IP addresses over Microsoft's backbone, as if on the same network. But peering only handles routing — it doesn't override security. A Network Security Group on either side can still block that traffic with its own rules.",
            "This is a genuinely common exam scenario: 'peering is configured correctly, but traffic still isn't flowing' — the answer is almost always an NSG rule, not the peering setup itself."
          ],
          "takeaway": "Peering builds the road. The NSG is the checkpoint deciding who's actually allowed to drive on it."
        },
        {
          "id": "cs_i4",
          "tier": "intermediate",
          "title": "LRS, ZRS, GRS, GZRS — what each one survives",
          "hook": "Four acronyms, and the exam expects you to know exactly what each one protects against.",
          "body": [
            "Locally Redundant Storage (LRS) keeps three copies within one datacenter — cheapest, but a datacenter-level event takes all three out. Zone-Redundant Storage (ZRS) spreads those copies across different Availability Zones in the same region, surviving a datacenter failure. Geo-Redundant Storage (GRS) adds a second copy set in a paired region hundreds of miles away. Geo-Zone-Redundant Storage (GZRS) combines both.",
            "The pattern to memorize: each tier up trades a bit more cost for protection against a bigger category of disaster — rack, zone, region."
          ],
          "takeaway": "LRS bets against a bad day. GZRS bets against a bad day, a bad zone, and a bad region — all at once."
        },
        {
          "id": "cs_i5",
          "tier": "intermediate",
          "title": "VM, App Service, Functions, Containers — picking correctly",
          "hook": "Four ways to run code in Azure — and choosing the wrong one is the most common architecture mistake on paper.",
          "body": [
            "Virtual Machines give full OS control at the cost of managing everything above the hardware — right when you need OS-level customization or are lifting-and-shifting existing software. App Service is the default for standard web apps when you just want to deploy code and let Azure handle scaling and patching. Functions fit short-lived, event-triggered logic that should scale to zero between runs. Containers fit when you need portability and consistency across environments, or you're orchestrating many services.",
            "The exam rarely asks 'what is a VM' at this level — it asks 'given this scenario, which is the best fit,' and the deciding factor is almost always: how much control do you need, versus how much do you want Azure to manage for you."
          ],
          "takeaway": "VMs are a house you renovate yourself. Functions are a hotel room you only pay for the night you sleep there."
        }
      ]
    },
    "securityGovernance": {
      "trackName": "Security, Identity & Governance",
      "icon": "<svg class=\"ic-track\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z\"/></svg>",
      "lessons": [
        {
          "id": "sg_b1",
          "tier": "beginner",
          "title": "Identity: your ID card for every door",
          "hook": "In the cloud, nothing happens until someone proves who they are.",
          "body": [
            "Microsoft Entra ID (formerly Azure AD) is the ID card system for everything in Azure. Every user, every app, every automated script has to show its badge before it can do anything.",
            "This one identity system is the foundation almost every other security feature — MFA, RBAC, Conditional Access — is built on top of."
          ],
          "takeaway": "No badge, no entry. Identity comes first."
        },
        {
          "id": "sg_b2",
          "tier": "beginner",
          "title": "RBAC: not everyone gets the master key",
          "hook": "The intern shouldn't have the same keycard as the CEO.",
          "body": [
            "Role-Based Access Control lets you hand out exactly the right level of access — read-only for some, full control for others — scoped to exactly the resources someone actually needs.",
            "It's the digital version of an office keycard system: marketing can't walk into the server room, and IT can't approve expense reports."
          ],
          "takeaway": "RBAC = keycards, not master keys."
        },
        {
          "id": "sg_b3",
          "tier": "beginner",
          "title": "Why one password was never enough",
          "hook": "A single lock only slows a thief down for so long.",
          "body": [
            "Multi-Factor Authentication (MFA) adds a second lock: something you know (password) plus something you have (your phone) or something you are (fingerprint).",
            "Even if a password leaks, the attacker still needs your phone in their hand. It's the single cheapest, highest-impact security upgrade that exists."
          ],
          "takeaway": "One lock can be picked. Two locks change the math."
        },
        {
          "id": "sg_b4",
          "tier": "beginner",
          "title": "Zero Trust: the airport, not the front door key",
          "hook": "An airport checks your ID at security, at the gate, and sometimes again before boarding — not just once at the entrance.",
          "body": [
            "Zero Trust means never assuming something is safe just because it's already \"inside\" your network. Every request gets verified, every time, regardless of where it's coming from.",
            "Its three rules: verify explicitly, use the least access necessary, and always assume a breach could already be happening."
          ],
          "takeaway": "Zero Trust checks ID at every gate, not just the front door."
        },
        {
          "id": "sg_b5",
          "tier": "beginner",
          "title": "The bouncer who only checks twice when something's off",
          "hook": "Most nights the bouncer just waves you through. The night you show up at 4am from somewhere you've never been? Different story.",
          "body": [
            "Conditional Access applies extra checks — like requiring MFA — only when a sign-in looks risky: unfamiliar location, unusual device, odd time of day.",
            "This keeps daily logins fast and frictionless for normal use, while still slamming the door on suspicious activity."
          ],
          "takeaway": "Conditional Access saves the tough questions for when something looks wrong."
        },
        {
          "id": "sg_b6",
          "tier": "beginner",
          "title": "Your security report card",
          "hook": "A report card doesn't fix your grades — but it sure tells you where to focus.",
          "body": [
            "Microsoft Defender for Cloud continuously scans your resources against security best practices and hands you a single number: your Secure Score.",
            "Watching that score trend up or down over time tells you, at a glance, whether your overall security posture is getting better or worse."
          ],
          "takeaway": "Secure Score is your environment's report card, updated continuously."
        },
        {
          "id": "sg_b7",
          "tier": "beginner",
          "title": "Key Vault: the bank safety deposit box for secrets",
          "hook": "You wouldn't tape your house key to the front door — so why hardcode a password into your code?",
          "body": [
            "Azure Key Vault is a locked, access-controlled vault for secrets, encryption keys, and certificates — nothing sensitive ever needs to sit in plain text in your application.",
            "Only identities you explicitly grant access can open the vault, and every access is logged."
          ],
          "takeaway": "Secrets belong in a vault, not taped to the front door."
        },
        {
          "id": "sg_b8",
          "tier": "beginner",
          "title": "Landlord vs tenant: who fixes what?",
          "hook": "Your landlord fixes the building's plumbing. You're the one who has to lock your own apartment door.",
          "body": [
            "The Shared Responsibility Model splits security duties between Microsoft and you. The more of the stack Microsoft manages — SaaS more than PaaS, PaaS more than IaaS — the more they handle for you.",
            "But your data, your identities, and who has access? That's always on you, no matter which service model you're using."
          ],
          "takeaway": "Microsoft maintains the building. You still have to lock your own door."
        },
        {
          "id": "sg_i1",
          "tier": "intermediate",
          "title": "RBAC scope & inheritance",
          "hook": "Grant a role at the subscription level, and it quietly shows up everywhere underneath it — whether you meant it to or not.",
          "body": [
            "RBAC role assignments apply at a scope — Management Group, Subscription, Resource Group, or individual Resource — forming a hierarchy where permissions inherit downward. A Contributor role granted at the subscription level automatically applies to every resource group and resource inside it, unless something more specific overrides it.",
            "The practical implication, and a favorite exam trap: assigning broad roles at a high scope 'to save time' quietly grants far more access than intended. Best practice is assigning roles at the narrowest scope that still gets the job done."
          ],
          "takeaway": "RBAC inheritance is like a landlord's master key — hand it out at the building level, and every tenant's door opens too."
        },
        {
          "id": "sg_i2",
          "tier": "intermediate",
          "title": "Built-in vs custom roles",
          "hook": "Azure ships with over 100 built-in roles. The exam wants you to know when that still isn't enough.",
          "body": [
            "Built-in roles (Owner, Contributor, Reader, and dozens of service-specific ones) cover the vast majority of real-world needs and should always be preferred first — Microsoft maintains them and they cover common permission sets cleanly. A custom role becomes necessary only when no built-in role matches the exact combination of permissions required.",
            "Custom roles add ongoing maintenance overhead — they don't automatically gain new permissions as Azure adds features, unlike many built-in roles. That's why 'use a built-in role unless you have a specific, documented reason not to' is correct almost every time."
          ],
          "takeaway": "A custom role is a suit tailored just for you. Great fit — but you're on the hook for every future alteration yourself."
        },
        {
          "id": "sg_i3",
          "tier": "intermediate",
          "title": "Conditional Access, decomposed",
          "hook": "Every Conditional Access policy is really just one sentence: 'if this, then that.'",
          "body": [
            "Every policy is built from the same pieces: assignments (who and what — which users, apps, or conditions like location or device state trigger it) and access controls (what happens as a result — block access, require MFA, require a compliant device). The policy engine evaluates signals in real time and applies the control only when conditions match.",
            "This is why Conditional Access is risk-based rather than static: the same user gets a frictionless sign-in most days, but hits an MFA challenge the moment a signal looks unusual — a different country, an unmanaged device, an impossible travel pattern."
          ],
          "takeaway": "Conditional Access is a bouncer with a clipboard, not a lock on the door — strict only when something on the list looks off."
        },
        {
          "id": "sg_i4",
          "tier": "intermediate",
          "title": "Defender for Cloud — free vs paid plans",
          "hook": "Defender for Cloud is free. Defender for Cloud is also not free. Both statements are true at once.",
          "body": [
            "The Foundational CSPM tier is free by default for all Azure subscriptions, giving you Secure Score, basic recommendations, and inventory visibility. Enabling the paid Defender plans on top — for servers, storage, databases, containers, and more — unlocks active threat detection, just-in-time VM access, and vulnerability scanning, charged per resource protected.",
            "The exam-relevant distinction: the free tier tells you what's wrong. The paid plans actively watch for and alert on attacks happening right now — visibility versus active defense."
          ],
          "takeaway": "Free Defender is a smoke detector. Paid Defender is a smoke detector that also calls the fire department for you."
        },
        {
          "id": "sg_i5",
          "tier": "intermediate",
          "title": "Compliance & the Trust Center",
          "hook": "A single customer can't realistically audit a hyperscale datacenter themselves — so Microsoft got audited for them, repeatedly, by everyone.",
          "body": [
            "Microsoft undergoes independent third-party audits against dozens of standards — ISO 27001, GDPR, HIPAA, SOC 2, and many more — and publishes results through the Microsoft Trust Center and Service Trust Portal. This gives customers documented evidence of Microsoft's side of the shared responsibility model without auditing a datacenter themselves.",
            "On the exam, whenever a question is about proving compliance to a regulator or auditor, the Trust Center and its documentation are almost always the intended answer — not a custom internal process."
          ],
          "takeaway": "The Trust Center is Microsoft handing you their own report card before the teacher even asks for it."
        }
      ]
    },
    "managementMonitoring": {
      "trackName": "Management & Monitoring",
      "icon": "<svg class=\"ic-track\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 20V10M12 20V4M20 20v-7\"/></svg>",
      "lessons": [
        {
          "id": "mm_b1",
          "tier": "beginner",
          "title": "Resource Groups: the moving boxes of Azure",
          "hook": "When you move house, you don't throw everything in one giant pile.",
          "body": [
            "A Resource Group is a labeled box that holds everything belonging to one project — its VM, its storage, its database — so you can manage, bill, and delete it all together.",
            "Delete the box, and everything inside goes with it. Handy for cleanup — dangerous if you grab the wrong box."
          ],
          "takeaway": "Resource Groups = labeled moving boxes for your project."
        },
        {
          "id": "mm_b2",
          "tier": "beginner",
          "title": "Cost Management: no surprise bills",
          "hook": "Ever gone over your phone's data plan without noticing?",
          "body": [
            "Azure Cost Management tracks exactly what you're spending, in real time, broken down by resource — so \"the cloud\" never turns into a mystery invoice at the end of the month.",
            "Azure Advisor goes a step further, actively suggesting where you're overpaying for things you're barely using."
          ],
          "takeaway": "Cost Management is your real-time data usage meter."
        },
        {
          "id": "mm_b3",
          "tier": "beginner",
          "title": "Policy: rules that enforce themselves",
          "hook": "A sign says \"slow down.\" A speed bump makes you.",
          "body": [
            "A company rulebook is just a sign — people can ignore it. Azure Policy is the speed bump: it can automatically block, flag, or even fix resources that don't follow the rules, no human enforcement needed.",
            "Want every storage account encrypted, no exceptions? Policy makes that true automatically, instead of hoping everyone remembers."
          ],
          "takeaway": "Policy doesn't ask nicely — it's the speed bump, not the sign."
        },
        {
          "id": "mm_b4",
          "tier": "beginner",
          "title": "The org chart of Azure",
          "hook": "A big company doesn't run without departments, divisions, and someone above all of them.",
          "body": [
            "A Subscription is a billing and access boundary — think of it as one department's budget.",
            "A Management Group sits above multiple subscriptions purely to apply governance — like company-wide policy — across all of them at once, without touching billing."
          ],
          "takeaway": "Subscriptions are departments. Management Groups are the org chart above them."
        },
        {
          "id": "mm_b5",
          "tier": "beginner",
          "title": "The dashboard warning lights of your cloud",
          "hook": "Your car doesn't wait for the engine to die before it tells you something's wrong.",
          "body": [
            "Azure Monitor collects data from your resources and can alert you the moment something looks off — before users even notice.",
            "Azure Service Health goes further, telling you specifically which of YOUR resources are affected by any ongoing Azure-wide incident, not just a generic status page."
          ],
          "takeaway": "Monitor is your dashboard. Service Health tells you if the outage is actually your problem."
        },
        {
          "id": "mm_b6",
          "tier": "beginner",
          "title": "The pizza delivery guarantee",
          "hook": "\"Delivered in 30 minutes or it's free\" is a promise with teeth.",
          "body": [
            "A Service Level Agreement (SLA) is Microsoft's formal, measurable uptime commitment — like 99.9% availability.",
            "That number sounds close to 100%, but 99.9% still allows under 9 hours of downtime a year. Miss the promise, and Microsoft owes you service credits."
          ],
          "takeaway": "An SLA is a guarantee with a number attached — and a penalty if it's broken."
        },
        {
          "id": "mm_b7",
          "tier": "beginner",
          "title": "A personal trainer for your cloud spend",
          "hook": "A good trainer doesn't just watch you work out — they tell you what to actually change.",
          "body": [
            "Azure Advisor analyzes your actual resource usage and proactively recommends ways to cut costs, boost performance, and tighten security — personalized to your setup, not generic advice.",
            "It's the difference between a static checklist and a coach who's actually looking at your numbers."
          ],
          "takeaway": "Advisor doesn't just monitor — it tells you what to fix."
        },
        {
          "id": "mm_b8",
          "tier": "beginner",
          "title": "Sticky notes for your cloud resources",
          "hook": "How do you find one specific box in a garage full of unlabeled boxes?",
          "body": [
            "Tags are simple name/value labels — like Environment:Production or Owner:Marketing — that you stick onto resources.",
            "They're what makes cost reports readable and governance automation possible at scale — without them, a big Azure environment is just a pile of unlabeled boxes."
          ],
          "takeaway": "Tags are the sticky notes that keep a big cloud environment from becoming chaos."
        },
        {
          "id": "mm_i1",
          "tier": "intermediate",
          "title": "Management Groups & Policy inheritance",
          "hook": "Apply one policy at the very top of your Azure tenant, and it silently governs every subscription you'll ever create — including ones that don't exist yet.",
          "body": [
            "Management Groups form a hierarchy above subscriptions, and both RBAC and Azure Policy inherit downward through it the same way. A policy assigned at the root management group applies automatically to every subscription, resource group, and resource beneath it — even subscriptions added later.",
            "This is why large organizations use management group hierarchies deliberately: a handful of policies at the top — like 'no resources outside approved regions' — enforce organization-wide rules without configuring each subscription individually."
          ],
          "takeaway": "A root-level policy is less like a rule and more like gravity — everything underneath is affected, whether it knew the rule existed or not."
        },
        {
          "id": "mm_i2",
          "tier": "intermediate",
          "title": "Azure Monitor is three tools wearing one name tag",
          "hook": "'Azure Monitor' isn't one tool — it's an umbrella covering at least three very different jobs.",
          "body": [
            "Metrics are lightweight, near real-time numerical data — CPU percentage, request count — good for dashboards and fast alerting. Logs, via Log Analytics, are detailed, queryable event data, better for deep investigation after something goes wrong. Application Insights specifically monitors application-level behavior — response times, exceptions, dependency calls — rather than infrastructure health.",
            "On the exam, picking the right component usually comes down to one question: do you need a fast number on a dashboard (Metrics), or do you need to investigate what actually happened (Logs / Application Insights)?"
          ],
          "takeaway": "Metrics tell you the patient's pulse. Logs are the full medical chart you pull out when the pulse looks wrong."
        },
        {
          "id": "mm_i3",
          "tier": "intermediate",
          "title": "Budgets warn you. Advisor tries to prevent the warning.",
          "hook": "A budget in Azure doesn't stop spending — it just promises to tell you when you've blown past it.",
          "body": [
            "Azure Budgets let you set a spending threshold with alerts firing at defined percentages — 50%, 90%, 100% — but a budget is a notification mechanism, not enforcement, by default. Azure Advisor works alongside this proactively, scanning actual usage and recommending specific cost-saving actions, like resizing an underutilized VM or deleting an unattached disk.",
            "The pairing to remember: Budgets are reactive — 'tell me when I've spent too much.' Advisor is proactive — 'here's what to fix before you overspend.'"
          ],
          "takeaway": "A Budget is a smoke alarm. Advisor is the friend who keeps pointing out you left the stove on in the first place."
        },
        {
          "id": "mm_i4",
          "tier": "intermediate",
          "title": "Why chaining services lowers your composite SLA",
          "hook": "Two services, each individually rated at 99.9% uptime. Combined, your guaranteed uptime is not 99.9%.",
          "body": [
            "When an application depends on multiple Azure services chained together, the composite SLA is calculated by multiplying the individual SLAs, not matching the lowest one. Two services each at 99.9% combine to roughly 99.8% — worse than either alone, because either one failing breaks the chain.",
            "This is exactly why architects add redundant paths for critical dependencies: a redundant component raises the composite SLA back up, since the combined path only fails if both redundant options fail at the same time."
          ],
          "takeaway": "Chaining services multiplies your risk, not your reliability — every extra link is one more way for the chain to snap."
        },
        {
          "id": "mm_i5",
          "tier": "intermediate",
          "title": "Tags become governance once Policy enforces them",
          "hook": "A single tag on a single resource is trivial. A thousand resources with inconsistent tags is a governance nightmare — and entirely preventable.",
          "body": [
            "At scale, tags stop being a manual convenience and become something enforced through Azure Policy — requiring a CostCenter tag on every resource, or blocking deployment of anything missing an Environment tag. This is what makes large-scale cost reporting and automated governance reliable, rather than dependent on everyone remembering to tag things by hand.",
            "The exam angle: whenever a scenario describes needing consistent tagging across an entire organization, the answer is policy-enforced tagging, not a reminder in a wiki page somewhere."
          ],
          "takeaway": "A tag is a sticky note. A tag enforced by Policy is a sticky note that physically won't let the box leave the warehouse without it."
        }
      ]
    }
  },
  "masteryTracks": [
    {
      "id": "cloudConcepts",
      "name": "Cloud Concepts",
      "icon": "<svg class=\"ic-track\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17.5 19H9a5 5 0 1 1 1.3-9.8A6 6 0 0 1 22 12.5 4.5 4.5 0 0 1 17.5 19Z\"/></svg>",
      "categories": [
        "Cloud concepts",
        "Cloud models",
        "Cloud",
        "Reliability"
      ]
    },
    {
      "id": "coreServices",
      "name": "Core Azure Services",
      "icon": "<svg class=\"ic-track\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"6\" rx=\"1.5\"/><rect x=\"3\" y=\"14\" width=\"18\" height=\"6\" rx=\"1.5\"/></svg>",
      "categories": [
        "Architecture",
        "Compute",
        "Networking",
        "Storage",
        "Databases",
        "Database",
        "Hybrid"
      ]
    },
    {
      "id": "securityGovernance",
      "name": "Security, Identity & Governance",
      "icon": "<svg class=\"ic-track\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z\"/></svg>",
      "categories": [
        "Identity",
        "Governance",
        "Security"
      ]
    },
    {
      "id": "managementMonitoring",
      "name": "Management & Monitoring",
      "icon": "<svg class=\"ic-track\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 20V10M12 20V4M20 20v-7\"/></svg>",
      "categories": [
        "Cost",
        "Management",
        "Monitoring",
        "DevOps",
        "Migration"
      ]
    }
  ],
  "masteryBaseCost": 12,
  "streakMilestones": [
    {
      "day": 3,
      "shards": 10
    },
    {
      "day": 7,
      "shards": 20
    },
    {
      "day": 14,
      "shards": 35
    },
    {
      "day": 30,
      "shards": 75
    },
    {
      "day": 60,
      "shards": 150
    },
    {
      "day": 100,
      "shards": 300
    }
  ],
  "streakFreezeCost": 15,
  "loot": [
    {
      "id": "rusty_cloud_dagger",
      "name": "Rusty Cloud Dagger",
      "type": "Weapon",
      "rarity": "common",
      "cost": 5,
      "effect": "+2% XP from Easy quests",
      "effectCode": {
        "xpBonusEasy": 0.02
      },
      "desc": "A beginner blade for cloud basics."
    },
    {
      "id": "apprentice_admin_cloak",
      "name": "Apprentice Admin Cloak",
      "type": "Armor",
      "rarity": "common",
      "cost": 8,
      "effect": "+1 shard when opening Easy chest",
      "effectCode": {
        "easyClearShardBonus": 1
      },
      "desc": "For admins who still Google things correctly."
    },
    {
      "id": "storage_satchel",
      "name": "Storage Satchel",
      "type": "Trinket",
      "rarity": "common",
      "cost": 10,
      "effect": "+1 shard from campaign chest",
      "effectCode": {
        "campaignShardBonus": 1
      },
      "desc": "Carries blobs, files and queues."
    },
    {
      "id": "blob_slime_pet",
      "name": "Blob Slime",
      "type": "Pet",
      "rarity": "common",
      "cost": 12,
      "effect": "Cosmetic pet",
      "effectCode": {
        "pet": "Blob Slime"
      },
      "desc": "A tiny blue blob companion."
    },
    {
      "id": "rbac_ring",
      "name": "RBAC Ring of Least Privilege",
      "type": "Ring",
      "rarity": "uncommon",
      "cost": 18,
      "effect": "+5% XP from Governance questions",
      "effectCode": {
        "categoryXpBonus": {
          "Governance": 0.05
        }
      },
      "desc": "Grants only what is needed."
    },
    {
      "id": "policy_shield",
      "name": "Policy Shield",
      "type": "Shield",
      "rarity": "uncommon",
      "cost": 20,
      "effect": "+5 consolation XP after wrong quiz answer",
      "effectCode": {
        "wrongConsolationXp": 5
      },
      "desc": "Doesn't make wrong right, but protects morale."
    },
    {
      "id": "bastion_boots",
      "name": "Bastion Boots",
      "type": "Boots",
      "rarity": "uncommon",
      "cost": 22,
      "effect": "Unlocks Bastion theme",
      "effectCode": {
        "theme": "bastion"
      },
      "desc": "No public RDP goblins allowed."
    },
    {
      "id": "network_ranger_hood",
      "name": "Network Ranger Hood",
      "type": "Armor",
      "rarity": "uncommon",
      "cost": 24,
      "effect": "+5% XP from Networking questions",
      "effectCode": {
        "categoryXpBonus": {
          "Networking": 0.05
        }
      },
      "desc": "For subnet survivors."
    },
    {
      "id": "key_vault_amulet",
      "name": "Key Vault Amulet",
      "type": "Amulet",
      "rarity": "rare",
      "cost": 35,
      "effect": "Practical hint unlocks after 2 checks",
      "effectCode": {
        "hintReduction": 1
      },
      "desc": "Secrets stay secret, hints come sooner."
    },
    {
      "id": "sentinel_raven",
      "name": "Sentinel Raven",
      "type": "Companion",
      "rarity": "rare",
      "cost": 45,
      "effect": "Highlights weak answers in summary",
      "effectCode": {
        "weakSummary": true
      },
      "desc": "Watches logs and mistakes."
    },
    {
      "id": "defender_wolf",
      "name": "Defender Wolf",
      "type": "Companion",
      "rarity": "rare",
      "cost": 50,
      "effect": "+5% XP from Security questions",
      "effectCode": {
        "categoryXpBonus": {
          "Security": 0.05
        }
      },
      "desc": "Growls at bad posture."
    },
    {
      "id": "bicep_goblin",
      "name": "Bicep Goblin",
      "type": "Pet",
      "rarity": "rare",
      "cost": 55,
      "effect": "Unlocks IaC theme",
      "effectCode": {
        "theme": "iac"
      },
      "desc": "Turns JSON into less pain."
    },
    {
      "id": "azure_gryphon",
      "name": "Azure Gryphon Mount",
      "type": "Mount",
      "rarity": "epic",
      "cost": 80,
      "effect": "Unlocks Gryphon theme + +2 shards from Heroic chest",
      "effectCode": {
        "theme": "gryphon",
        "heroicClearShardBonus": 2
      },
      "desc": "A mount for cloud raiders."
    },
    {
      "id": "cloud_raider_title",
      "name": "Cloud Raider Title",
      "type": "Title",
      "rarity": "epic",
      "cost": 100,
      "effect": "Unlocks title display",
      "effectCode": {
        "title": "Cloud Raider"
      },
      "desc": "Proof that you kept returning."
    },
    {
      "id": "sentinel_phoenix",
      "name": "Sentinel Phoenix",
      "type": "Mount",
      "rarity": "legendary",
      "cost": 180,
      "effect": "Unlocks Phoenix theme + +5% all XP",
      "effectCode": {
        "theme": "phoenix",
        "xpBonusAll": 0.05
      },
      "desc": "Rises from failed practice exams."
    }
  ],
  "dropTables": {
    "practical": {
      "shards": 12,
      "xp": 50,
      "rolls": [
        [
          "none",
          20
        ],
        [
          "common",
          35
        ],
        [
          "uncommon",
          27
        ],
        [
          "rare",
          15
        ],
        [
          "epic",
          3
        ]
      ]
    },
    "easy": {
      "shards": 3,
      "xp": 10,
      "rolls": [
        [
          "none",
          65
        ],
        [
          "common",
          30
        ],
        [
          "uncommon",
          5
        ]
      ]
    },
    "normal": {
      "shards": 7,
      "xp": 25,
      "rolls": [
        [
          "none",
          45
        ],
        [
          "common",
          35
        ],
        [
          "uncommon",
          15
        ],
        [
          "rare",
          5
        ]
      ]
    },
    "heroic": {
      "shards": 15,
      "xp": 60,
      "rolls": [
        [
          "none",
          25
        ],
        [
          "common",
          35
        ],
        [
          "uncommon",
          25
        ],
        [
          "rare",
          13
        ],
        [
          "epic",
          2
        ]
      ]
    },
    "campaign": {
      "shards": 25,
      "xp": 100,
      "rolls": [
        [
          "common",
          50
        ],
        [
          "uncommon",
          30
        ],
        [
          "rare",
          15
        ],
        [
          "epic",
          4
        ],
        [
          "legendary",
          1
        ]
      ]
    }
  },
  "examPool": [
    {
      "id": "exam_0",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company currently spends heavily on new server hardware every three years, regardless of whether it's fully utilized. Moving to Azure and paying only for consumed compute would shift this spending from which model to which model?",
      "a": [
        "CapEx to OpEx",
        "OpEx to CapEx",
        "OpEx to TCO",
        "TCO to CapEx"
      ],
      "c": 0,
      "e": "Buying hardware upfront is Capital Expenditure (CapEx) — a large investment regardless of use. Paying for consumption as it happens is Operational Expenditure (OpEx). Moving to the cloud is the classic CapEx-to-OpEx shift tested throughout AZ-900."
    },
    {
      "id": "exam_1",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A startup wants to launch a new product quickly and avoid a large upfront hardware purchase in case the product doesn't succeed. Which cloud benefit does this scenario primarily describe?",
      "a": [
        "Redundancy",
        "Agility",
        "High availability",
        "Fault tolerance"
      ],
      "c": 1,
      "e": "Agility refers to the ability to rapidly provision and de-provision resources, letting organizations experiment and pivot quickly without heavy upfront investment. The scenario is about speed and low commitment, not uptime or automatic scaling."
    },
    {
      "id": "exam_2",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "During a regional promotional event, an e-commerce site's traffic increases tenfold for six hours, then returns to normal. Which cloud characteristic allows the infrastructure to expand and then automatically shrink back afterward?",
      "a": [
        "Redundancy",
        "Fault tolerance",
        "Elasticity",
        "Scalability"
      ],
      "c": 2,
      "e": "Elasticity specifically means resources scale both up and down automatically in response to demand, without manual intervention. Scalability is the broader, more general ability to handle growth, which may or may not be automatic."
    },
    {
      "id": "exam_3",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company wants to guarantee that if an entire Azure datacenter loses power, their application keeps running without any downtime. Which concept BEST addresses this requirement?",
      "a": [
        "Elasticity",
        "Scalability",
        "Agility",
        "High availability"
      ],
      "c": 3,
      "e": "High availability is about designing a system to remain operational and accessible even when individual components fail, often expressed as an uptime percentage such as 99.9%."
    },
    {
      "id": "exam_4",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which statement correctly distinguishes Disaster Recovery (DR) from High Availability (HA)?",
      "a": [
        "DR recovers from regional outages; HA handles smaller failures",
        "DR guarantees zero downtime in every single case",
        "HA only applies to on-premises systems, never cloud",
        "DR and HA are simply two different names for identical concepts"
      ],
      "c": 0,
      "e": "High availability keeps a system running through everyday component failures. Disaster recovery is the broader plan for recovering after a catastrophic, region-wide event — a different scope and severity of failure."
    },
    {
      "id": "exam_5",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A retail company operates its own datacenter for sensitive financial data but also uses Azure for its public-facing website during peak seasons. Which deployment model does this describe?",
      "a": [
        "Multi-cloud",
        "Hybrid cloud",
        "Public cloud",
        "Private cloud"
      ],
      "c": 1,
      "e": "Combining on-premises (or private) infrastructure with public cloud resources is the definition of a hybrid cloud deployment."
    },
    {
      "id": "exam_6",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company uses both Microsoft Azure and another public cloud provider simultaneously for different workloads, with no on-premises infrastructure involved. Which deployment model is this?",
      "a": [
        "Private cloud",
        "Community cloud",
        "Multi-cloud",
        "Hybrid cloud"
      ],
      "c": 2,
      "e": "Multi-cloud specifically refers to using services from two or more public cloud providers. Hybrid cloud, by contrast, requires a combination with private or on-premises infrastructure."
    },
    {
      "id": "exam_7",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which of the following is the BEST example of Total Cost of Ownership (TCO) as opposed to simple upfront cost comparison?",
      "a": [
        "Comparing one server's sticker price to one month of Azure spend",
        "Comparing list prices from two different hardware vendors",
        "Comparing license fees between two operating system vendors",
        "Five-year hardware, power, and staff cost vs. five-year Azure cost"
      ],
      "c": 3,
      "e": "TCO accounts for the full lifetime cost of ownership — not just the purchase price, but ongoing operational costs like power, cooling, space, and staffing — compared against the equivalent cloud costs over the same period."
    },
    {
      "id": "exam_8",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A finance team wants Azure spending to closely track actual usage, with no obligation to pay for unused capacity. Which pricing model satisfies this requirement?",
      "a": [
        "Consumption-based pricing",
        "CapEx-based procurement",
        "A three-year Reserved Instance",
        "A fixed annual license"
      ],
      "c": 0,
      "e": "Consumption-based (pay-as-you-go) pricing charges only for resources actually used, with no long-term commitment — the opposite of a reservation, which trades flexibility for a lower rate."
    },
    {
      "id": "exam_9",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which scenario BEST illustrates vertical scaling (scaling up)?",
      "a": [
        "Removing unused VMs overnight",
        "Upgrading a VM from 4 vCPUs to 16 vCPUs",
        "Adding five more VMs behind a load balancer",
        "Migrating a VM to another region"
      ],
      "c": 1,
      "e": "Vertical scaling (scaling up) means increasing the resources of an existing single machine. Adding more machines instead is horizontal scaling (scaling out)."
    },
    {
      "id": "exam_10",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which scenario BEST illustrates horizontal scaling (scaling out)?",
      "a": [
        "Reducing a VM's CPU core count",
        "Upgrading a single VM to a larger size",
        "Adding more VM instances behind a load balancer",
        "Switching a VM's operating system"
      ],
      "c": 2,
      "e": "Horizontal scaling (scaling out) adds more machines to distribute load, rather than making one machine larger."
    },
    {
      "id": "exam_11",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "An organization needs its cloud provider to demonstrate compliance with ISO 27001 and GDPR for an upcoming audit. Where would they find this documentation?",
      "a": [
        "Azure Advisor",
        "Azure Marketplace",
        "Azure Cost Management",
        "Microsoft Trust Center"
      ],
      "c": 3,
      "e": "The Microsoft Trust Center (and Service Trust Portal) publishes Microsoft's compliance certifications and audit reports, giving customers documented evidence for their own compliance needs."
    },
    {
      "id": "exam_12",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which of the following is an example of a cloud economic benefit resulting directly from 'economies of scale'?",
      "a": [
        "Lower per-unit compute cost from Microsoft's bulk purchasing",
        "The exact same services being available in every Azure region",
        "Consistent resource tagging enforced across all subscriptions",
        "A guarantee of 100 percent uptime across every Azure service"
      ],
      "c": 0,
      "e": "Economies of scale means the cost per unit decreases as purchasing volume increases. Microsoft's massive scale lets it negotiate better hardware pricing and pass some of that savings to customers."
    },
    {
      "id": "exam_13",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company wants a solution that can automatically detect increased demand and provision more resources without a human approving each change. Which term describes this capability?",
      "a": [
        "High availability",
        "Elasticity",
        "Manual scaling",
        "Redundancy"
      ],
      "c": 1,
      "e": "Elasticity implies automatic, demand-driven scaling in both directions — no human needs to intervene for resources to expand or contract."
    },
    {
      "id": "exam_14",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which of these is generally considered a potential DISADVANTAGE of public cloud compared to on-premises infrastructure, according to AZ-900 exam guidance?",
      "a": [
        "A higher upfront capital cost than on-premises",
        "An inability to scale resources on demand",
        "Less direct physical control over hardware",
        "Slower provisioning of new compute resources"
      ],
      "c": 2,
      "e": "Because the cloud provider owns and operates the physical infrastructure, customers have less direct physical control than they would with hardware in their own datacenter — a common trade-off discussed on the exam."
    },
    {
      "id": "exam_15",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company deploys identical copies of its application across three different Azure regions on different continents. What is the PRIMARY benefit of this approach?",
      "a": [
        "Faster ARM template deployment speed",
        "Lower monthly billing across all regions",
        "Simplified role-based access control setup",
        "Protection from a large regional disaster"
      ],
      "c": 3,
      "e": "Deploying across widely separated regions protects against a disaster that could take an entire region offline — a disaster recovery strategy, not primarily a cost or governance benefit."
    },
    {
      "id": "exam_16",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which best describes the relationship between fault tolerance and redundancy?",
      "a": [
        "Redundancy is a key mechanism used to achieve fault tolerance",
        "Redundancy is always manual; fault tolerance is always automatic",
        "They are unrelated concepts",
        "Fault tolerance applies only to storage"
      ],
      "c": 0,
      "e": "Redundancy (having backup components ready) is a key building block used to achieve fault tolerance, which is the broader property of a system continuing to operate correctly despite a failure."
    },
    {
      "id": "exam_17",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A business wants to convert a large capital expense for new servers into a smaller, predictable monthly operating expense. Which cloud characteristic makes this possible?",
      "a": [
        "Increased physical security",
        "Consumption-based pricing",
        "Global datacenter footprint",
        "Role-Based Access Control"
      ],
      "c": 1,
      "e": "Pay-as-you-go, consumption-based pricing is what enables the shift from a large upfront capital cost to smaller, ongoing operational costs."
    },
    {
      "id": "exam_18",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which of the following is an example of the shared responsibility model as applied to an IaaS virtual machine?",
      "a": [
        "No shared responsibility exists for IaaS",
        "Microsoft secures everything, including app code",
        "Microsoft secures the host; customer patches the guest OS",
        "Customer secures Microsoft's datacenters"
      ],
      "c": 2,
      "e": "In IaaS, Microsoft secures the physical infrastructure and virtualization layer, but the customer remains responsible for the guest OS, patching, and anything they deploy on top of it."
    },
    {
      "id": "exam_19",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company evaluating cloud adoption is most concerned with being able to try a new workload cheaply and abandon it quickly if it doesn't work out. Which benefit are they prioritizing?",
      "a": [
        "Global reach",
        "Fault tolerance",
        "Compliance",
        "Agility"
      ],
      "c": 3,
      "e": "Agility is specifically about the speed and low cost of experimenting — provisioning and de-provisioning resources quickly with minimal risk."
    },
    {
      "id": "exam_20",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which of these best distinguishes 'scalability' from 'elasticity' on the AZ-900 exam?",
      "a": [
        "Scalability may be manual; elasticity is always automatic",
        "They are identical, fully interchangeable exam terms",
        "Scalability always requires planned downtime",
        "Elasticity applies only to storage services"
      ],
      "c": 0,
      "e": "Scalability is the broader concept — a system CAN handle more load, possibly through manual resizing. Elasticity is a more specific, automatic form of scalability that also shrinks back down."
    },
    {
      "id": "exam_21",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "An organization's leadership wants proof that Azure datacenters undergo independent, third-party security audits. Which Microsoft resource directly addresses this need?",
      "a": [
        "Azure Resource Manager",
        "Microsoft Trust Center",
        "Azure Advisor",
        "Azure Cost Management"
      ],
      "c": 1,
      "e": "The Trust Center centralizes Microsoft's compliance certifications and independent audit reports, exactly the kind of evidence needed to satisfy this leadership concern."
    },
    {
      "id": "exam_22",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A small business wants to avoid maintaining physical servers altogether but still needs occasional, unpredictable bursts of extra compute capacity. Which cloud benefit is MOST relevant?",
      "a": [
        "A fixed three-year Reserved Instance",
        "More physical space in a datacenter",
        "Elasticity with consumption-based pricing",
        "Manual vertical scaling alone"
      ],
      "c": 2,
      "e": "Elasticity handles the unpredictable bursts automatically, and consumption-based pricing ensures they only pay for the extra capacity while it's actually being used."
    },
    {
      "id": "exam_23",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which statement about the relationship between CapEx and cloud computing is MOST accurate?",
      "a": [
        "CapEx and OpEx don't apply to cloud",
        "Cloud eliminates OpEx entirely",
        "Cloud increases CapEx, reduces OpEx",
        "Cloud shifts most spending from CapEx to OpEx"
      ],
      "c": 3,
      "e": "Cloud adoption doesn't eliminate spending — it shifts the majority of infrastructure-related spending from upfront CapEx to ongoing, consumption-based OpEx."
    },
    {
      "id": "exam_24",
      "track": "coreServices",
      "category": "Compute",
      "q": "A company needs to run a legacy Windows application that requires full control over the operating system, including custom driver installations. Which Azure service is the BEST fit?",
      "a": [
        "Azure Virtual Machines",
        "Azure App Service",
        "Azure Functions",
        "Azure Container Instances"
      ],
      "c": 0,
      "e": "Virtual Machines provide full control over the guest OS, which is required here. PaaS and serverless options abstract away OS-level control."
    },
    {
      "id": "exam_25",
      "track": "coreServices",
      "category": "Compute",
      "q": "A development team wants to deploy a web API and have Azure automatically handle patching, scaling, and load balancing, without managing any servers directly. Which service fits BEST?",
      "a": [
        "Azure Virtual Network",
        "Azure App Service",
        "Azure Bastion",
        "Azure Virtual Machines"
      ],
      "c": 1,
      "e": "App Service is a fully managed PaaS specifically designed for hosting web apps and APIs, with Azure handling the underlying infrastructure."
    },
    {
      "id": "exam_26",
      "track": "coreServices",
      "category": "Compute",
      "q": "A company wants to run a small piece of code only when a new file is uploaded to storage, and not be charged when no files are being uploaded. Which Azure service is designed for this?",
      "a": [
        "Azure App Service",
        "Azure Virtual Machines",
        "Azure Functions",
        "Azure Kubernetes Service"
      ],
      "c": 2,
      "e": "Azure Functions is Azure's serverless compute offering, triggered by events like a file upload, and billed only for actual execution time."
    },
    {
      "id": "exam_27",
      "track": "coreServices",
      "category": "Compute",
      "q": "A team is containerizing a complex application made up of many microservices that need to be orchestrated, scaled, and restarted automatically. Which Azure service is the BEST fit?",
      "a": [
        "Azure Blueprints",
        "Azure Functions",
        "Azure Virtual Machines",
        "Azure Kubernetes Service (AKS)"
      ],
      "c": 3,
      "e": "AKS is Azure's managed Kubernetes service, purpose-built for orchestrating multiple interdependent containerized services at scale."
    },
    {
      "id": "exam_28",
      "track": "coreServices",
      "category": "Compute",
      "q": "Which Azure compute service requires the customer to manually apply operating system patches and updates?",
      "a": [
        "Azure Virtual Machines",
        "Azure App Service",
        "Azure Logic Apps",
        "Azure Functions"
      ],
      "c": 0,
      "e": "As an IaaS offering, Virtual Machines put OS patching responsibility on the customer. The PaaS and serverless options in the other choices handle OS maintenance for you."
    },
    {
      "id": "exam_29",
      "track": "coreServices",
      "category": "Storage",
      "q": "A media company needs to store millions of video files that are accessed unpredictably and don't follow a fixed folder structure. Which storage service is the BEST fit?",
      "a": [
        "Azure managed disks",
        "Azure Blob Storage",
        "Azure SQL Database",
        "Azure Files"
      ],
      "c": 1,
      "e": "Blob Storage is designed for large volumes of unstructured data like video and image files, accessed via a flat namespace rather than a traditional folder hierarchy."
    },
    {
      "id": "exam_30",
      "track": "coreServices",
      "category": "Storage",
      "q": "An organization wants to migrate an on-premises file share to Azure so that existing applications can continue accessing it using the standard SMB protocol. Which service should they use?",
      "a": [
        "Azure managed disks",
        "Azure Blob Storage",
        "Azure Files",
        "Azure Table Storage"
      ],
      "c": 2,
      "e": "Azure Files specifically provides fully managed file shares accessible over SMB (and NFS), making it ideal for lift-and-shift scenarios expecting a traditional network drive."
    },
    {
      "id": "exam_31",
      "track": "coreServices",
      "category": "Storage",
      "q": "A company has compliance data that must be retained for seven years but is almost never accessed. Which Blob Storage access tier minimizes cost for this scenario?",
      "a": [
        "Cool",
        "Premium",
        "Hot",
        "Archive"
      ],
      "c": 3,
      "e": "The Archive tier offers the lowest storage cost, intended for data that's rarely accessed and can tolerate a retrieval delay of several hours — ideal for long-term compliance retention."
    },
    {
      "id": "exam_32",
      "track": "coreServices",
      "category": "Storage",
      "q": "Which Blob Storage access tier is MOST appropriate for data accessed frequently, such as images served by an active website?",
      "a": [
        "Hot",
        "Standard",
        "Archive",
        "Cool"
      ],
      "c": 0,
      "e": "The Hot tier is optimized for frequently accessed data, offering the lowest access cost at the expense of higher storage cost compared to Cool or Archive."
    },
    {
      "id": "exam_33",
      "track": "coreServices",
      "category": "Storage",
      "q": "A company wants storage that survives the loss of an entire Azure region, not just a single datacenter. Which redundancy option should they choose?",
      "a": [
        "Locally Redundant Storage (LRS)",
        "Geo-Redundant Storage (GRS)",
        "No redundancy needed",
        "Zone-Redundant Storage (ZRS)"
      ],
      "c": 1,
      "e": "GRS replicates data to a second, geographically distant paired region, protecting against a full regional outage — something LRS and ZRS alone do not cover."
    },
    {
      "id": "exam_34",
      "track": "coreServices",
      "category": "Networking",
      "q": "A company wants two Azure resources in different Virtual Networks to communicate privately using Microsoft's backbone network instead of the public internet. What should they configure?",
      "a": [
        "Azure Firewall",
        "A Network Security Group",
        "VNet peering",
        "Azure Bastion"
      ],
      "c": 2,
      "e": "VNet peering connects two virtual networks so resources can communicate privately over Microsoft's backbone, without traversing the public internet."
    },
    {
      "id": "exam_35",
      "track": "coreServices",
      "category": "Networking",
      "q": "An organization needs a dedicated, private connection from their on-premises datacenter to Azure that does not travel over the public internet at all. Which service fits BEST?",
      "a": [
        "Azure Load Balancer",
        "Azure VPN Gateway",
        "Azure Front Door",
        "Azure ExpressRoute"
      ],
      "c": 3,
      "e": "ExpressRoute provides a private, dedicated connection to Azure that completely bypasses the public internet, unlike VPN Gateway, which uses an encrypted tunnel over the internet."
    },
    {
      "id": "exam_36",
      "track": "coreServices",
      "category": "Networking",
      "q": "A remote branch office needs a cost-effective, encrypted connection to Azure over the existing internet connection, without dedicated new hardware from a telecom provider. Which service is the BEST fit?",
      "a": [
        "Azure VPN Gateway",
        "Azure ExpressRoute",
        "Azure Bastion",
        "Azure Front Door"
      ],
      "c": 0,
      "e": "VPN Gateway creates an encrypted tunnel over the public internet — a much cheaper and faster-to-set-up option than ExpressRoute, appropriate for smaller or less latency-sensitive connections."
    },
    {
      "id": "exam_37",
      "track": "coreServices",
      "category": "Networking",
      "q": "Which Azure resource acts as a basic, rule-based network-layer firewall for a subnet or network interface based on source, destination, and port?",
      "a": [
        "Azure DNS",
        "Network Security Group (NSG)",
        "Azure Load Balancer",
        "Azure Application Gateway"
      ],
      "c": 1,
      "e": "An NSG is a simple, rule-based filter for allowing or denying traffic based on properties like source, destination, port, and protocol."
    },
    {
      "id": "exam_38",
      "track": "coreServices",
      "category": "Networking",
      "q": "A company needs to distribute incoming web traffic across multiple backend servers based on URL path, and also wants a built-in web application firewall. Which service fits BEST?",
      "a": [
        "Azure Load Balancer",
        "Azure VPN Gateway",
        "Azure Application Gateway",
        "Azure ExpressRoute"
      ],
      "c": 2,
      "e": "Application Gateway operates at Layer 7 and can route based on URL path while also offering a Web Application Firewall — capabilities the network-layer Load Balancer does not provide."
    },
    {
      "id": "exam_39",
      "track": "coreServices",
      "category": "Networking",
      "q": "Which Azure service is specifically designed to cache static content at edge locations close to end users, reducing latency for a globally distributed audience?",
      "a": [
        "Azure Bastion",
        "Azure Virtual Network",
        "Azure ExpressRoute",
        "Azure Content Delivery Network"
      ],
      "c": 3,
      "e": "Azure CDN caches static content at edge locations physically closer to users, reducing the distance data has to travel and improving load times."
    },
    {
      "id": "exam_40",
      "track": "coreServices",
      "category": "Networking",
      "q": "What is the PRIMARY purpose of a Virtual Network (VNet) in Azure?",
      "a": [
        "A private, isolated network boundary for Azure resources",
        "Automatic encryption applied to all stored data",
        "Managing billing across multiple subscriptions",
        "Public internet access granted to all resources by default"
      ],
      "c": 0,
      "e": "A VNet is your own isolated network space within Azure, letting resources communicate privately while giving you control over what traffic is allowed in or out."
    },
    {
      "id": "exam_41",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Which Azure feature allows administrators to manage, deploy, and monitor all Azure resources through a single, consistent API regardless of the tool used?",
      "a": [
        "Azure Policy assignments",
        "Azure Resource Manager (ARM)",
        "Azure Monitor dashboards",
        "Azure Advisor recommendations"
      ],
      "c": 1,
      "e": "ARM is the unified management layer behind the Portal, CLI, PowerShell, and SDKs — every request to create or modify a resource goes through it."
    },
    {
      "id": "exam_42",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A team wants to deploy the exact same infrastructure configuration repeatedly across dev, test, and production environments with no manual configuration drift. Which approach BEST supports this?",
      "a": [
        "Creating a new subscription per environment",
        "Using only the mobile app",
        "ARM templates (Infrastructure as Code)",
        "Manually configuring each environment"
      ],
      "c": 2,
      "e": "ARM templates let you declare infrastructure as code, ensuring identical, repeatable deployments across environments without manual, error-prone configuration."
    },
    {
      "id": "exam_43",
      "track": "coreServices",
      "category": "Architecture",
      "q": "What is the defining characteristic of an Azure Region Pair?",
      "a": [
        "Any two regions located on the same continent",
        "Two subscriptions linked together for billing purposes",
        "Two Availability Zones within one single datacenter",
        "Two regions 300+ miles apart, paired for disaster recovery"
      ],
      "c": 3,
      "e": "Region pairs are specific Microsoft-designated pairings of regions at a safe distance apart, used for coordinated disaster recovery and planned maintenance rollouts."
    },
    {
      "id": "exam_44",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A company needs their application to survive the failure of an entire Azure datacenter within a region, without failing over to a different region. Which architecture feature should they use?",
      "a": [
        "Availability Zones",
        "Azure Front Door",
        "Reserved Instances",
        "Region pairs"
      ],
      "c": 0,
      "e": "Availability Zones are physically separate datacenters within the same region, each with independent power and networking — protecting against a single datacenter failure without needing to leave the region."
    },
    {
      "id": "exam_45",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Which of the following BEST describes an Azure Resource Group?",
      "a": [
        "A particular type of virtual machine size",
        "A container for resources sharing one lifecycle",
        "A specific physical datacenter location",
        "A billing method used for enterprise customers"
      ],
      "c": 1,
      "e": "A resource group is a logical grouping for resources that belong together and share a lifecycle — deleting the group deletes everything inside it."
    },
    {
      "id": "exam_46",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Which best describes the relationship between an Azure Subscription and a Management Group?",
      "a": [
        "Management Groups and subscriptions are unrelated",
        "Management Groups always nest inside one subscription",
        "Management Groups apply governance above subscriptions",
        "Management Groups fully replace subscriptions"
      ],
      "c": 2,
      "e": "Management Groups organize multiple subscriptions above the subscription level, letting governance tools like Azure Policy apply consistently across all of them at once."
    },
    {
      "id": "exam_47",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A company wants its infrastructure deployment to be idempotent — meaning running the same deployment twice produces the same result without errors or duplicates. Which Azure approach supports this?",
      "a": [
        "Manually clicking through the Portal",
        "Azure Advisor recommendations",
        "A new PowerShell script every time",
        "ARM templates (declarative deployment)"
      ],
      "c": 3,
      "e": "Declarative ARM templates describe the desired end state, and Azure reconciles the actual environment to match it — running the same template again produces the same result rather than duplicating resources."
    },
    {
      "id": "exam_48",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Which Azure service allows an organization to package a set of ARM templates, policies, and role assignments together as a single repeatable, compliant environment definition?",
      "a": [
        "Azure Blueprints",
        "Azure Bastion",
        "Azure Monitor",
        "Azure Advisor"
      ],
      "c": 0,
      "e": "Azure Blueprints packages templates, policies, and role assignments together so a fully governed environment can be reliably reproduced from the first deployment."
    },
    {
      "id": "exam_49",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A company is deciding between Azure Container Apps and a traditional Virtual Machine for a new microservice. Which factor MOST strongly favors containers over a VM?",
      "a": [
        "Wanting to avoid Azure Resource Manager entirely",
        "Needing the app to run identically across environments",
        "Needing full control of the guest operating system",
        "Wanting the absolute lowest cost option"
      ],
      "c": 1,
      "e": "Containers package an application with everything it needs to run consistently anywhere, which is their main advantage over a VM when portability and consistency matter more than deep OS-level control."
    },
    {
      "id": "exam_50",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Which statement correctly describes the relationship between Azure Regions and Availability Zones?",
      "a": [
        "Zones and Regions describe the exact same thing",
        "Availability Zones can span across multiple regions",
        "Most regions contain multiple physically separate zones",
        "Every single Azure region has exactly one zone"
      ],
      "c": 2,
      "e": "A region is a broad geography; most regions are further subdivided into multiple physically separate Availability Zones for extra resilience within that region."
    },
    {
      "id": "exam_51",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A company running many small independent event-driven functions wants to be billed ONLY for the exact compute time each function actually uses. Which pricing/compute model matches this requirement?",
      "a": [
        "Reserved VM Instances",
        "A fixed App Service Plan",
        "On-premises hardware",
        "Azure Functions Consumption plan"
      ],
      "c": 3,
      "e": "The Functions Consumption plan bills purely by execution time and resource consumption during that execution — no charge while idle, matching a true pay-only-for-use model."
    },
    {
      "id": "exam_52",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Which of the following is TRUE about Azure Resource Manager templates written in JSON versus Bicep?",
      "a": [
        "Bicep compiles down to the same underlying ARM JSON",
        "JSON templates can't be idempotent",
        "Bicep only works for storage resources",
        "Bicep uses an entirely separate deployment engine"
      ],
      "c": 0,
      "e": "Bicep is a more human-readable authoring language that transpiles into standard ARM JSON, so both ultimately go through the same ARM deployment engine."
    },
    {
      "id": "exam_53",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A company wants a single place to view the health of Azure services specifically affecting their own subscriptions, not just a general public status page. Which service provides this?",
      "a": [
        "Azure Policy",
        "Azure Service Health",
        "Azure Advisor",
        "Azure Status page"
      ],
      "c": 1,
      "e": "Azure Service Health is personalized — it reports specifically on incidents affecting the customer's own resources, unlike the general public Azure Status page."
    },
    {
      "id": "exam_54",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Which choice BEST reflects when a company should choose Azure Virtual Machines over Azure App Service for hosting a web application?",
      "a": [
        "Wanting the absolute minimum infrastructure management",
        "Wanting Azure to automatically manage all OS patching",
        "Needing OS customization App Service doesn't support",
        "Hosting a simple, stateless REST API endpoint"
      ],
      "c": 2,
      "e": "VMs are the right choice specifically when deep OS-level control or custom software installations are required — otherwise, App Service's managed platform is typically the better fit."
    },
    {
      "id": "exam_55",
      "track": "coreServices",
      "category": "Architecture",
      "q": "What is the main advantage of using Azure Container Instances (ACI) for a short-lived batch job compared to provisioning a full Virtual Machine?",
      "a": [
        "Guaranteed availability across every Azure region",
        "Built-in Kubernetes orchestration and scaling",
        "Full control over the guest operating system kernel",
        "Fast startup, billed only while running, no VM to manage"
      ],
      "c": 3,
      "e": "ACI lets you run containers directly without provisioning or managing VMs, starting quickly and billing per second — ideal for short-lived, bursty workloads like batch jobs."
    },
    {
      "id": "exam_56",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A company needs a database service where Azure fully manages patching, backups, and high availability, without the customer having to manage a database server. Which is the BEST example?",
      "a": [
        "Azure SQL Database (PaaS)",
        "Azure Blob Storage",
        "An on-premises SQL Server",
        "SQL Server installed on an Azure VM"
      ],
      "c": 0,
      "e": "Azure SQL Database is a fully managed PaaS offering — Microsoft handles patching, backups, and high availability, unlike SQL Server self-installed on a VM."
    },
    {
      "id": "exam_57",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Which best explains why deploying resources through ARM templates is generally preferred over manually creating them in the Azure Portal for production environments?",
      "a": [
        "Manually created resources can't be modified",
        "Templates are repeatable and version-controllable",
        "The Portal can't create most resource types",
        "Templates always deploy faster than the Portal"
      ],
      "c": 1,
      "e": "Infrastructure as Code (ARM templates) can be stored in version control, reviewed, and reliably repeated — reducing the human error and drift that comes with manual, click-through configuration."
    },
    {
      "id": "exam_58",
      "track": "securityGovernance",
      "category": "Identity",
      "q": "Which Microsoft service serves as the central identity provider for authenticating users and applications across Azure and Microsoft 365?",
      "a": [
        "Azure Key Vault",
        "Azure Policy",
        "Microsoft Entra ID",
        "Azure Firewall"
      ],
      "c": 2,
      "e": "Microsoft Entra ID (formerly Azure Active Directory) is the identity backbone for Azure and Microsoft 365, handling authentication for users, groups, and applications."
    },
    {
      "id": "exam_59",
      "track": "securityGovernance",
      "category": "Identity",
      "q": "A company wants to require a second verification step, such as a phone prompt, in addition to a password for signing in. Which feature should they enable?",
      "a": [
        "Role-Based Access Control",
        "Network Security Groups",
        "Azure Policy",
        "Multi-Factor Authentication (MFA)"
      ],
      "c": 3,
      "e": "MFA specifically adds an additional authentication factor — something the user has or is — beyond just a password."
    },
    {
      "id": "exam_60",
      "track": "securityGovernance",
      "category": "Identity",
      "q": "Which statement about Conditional Access is MOST accurate?",
      "a": [
        "It adds controls, like MFA, only for risky sign-ins",
        "It replaces the need for passwords entirely",
        "It only ever applies to Virtual Machines",
        "It permanently blocks every sign-in from off-site"
      ],
      "c": 0,
      "e": "Conditional Access evaluates signals like location, device compliance, and risk level in real time, applying stricter controls only when those signals warrant it — not a blanket restriction."
    },
    {
      "id": "exam_61",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A company needs to grant a contractor read-only access to a single resource group without giving them access to anything else in the subscription. Which feature should they use?",
      "a": [
        "Azure Blueprints",
        "RBAC scoped to the resource group",
        "Azure Advisor",
        "A Conditional Access policy"
      ],
      "c": 1,
      "e": "RBAC lets you assign a role, like Reader, scoped precisely to the resource group needed, without granting broader subscription-wide access."
    },
    {
      "id": "exam_62",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "Which Azure feature can automatically prevent the creation of a storage account that isn't configured with encryption, according to organizational rules?",
      "a": [
        "Azure Advisor",
        "Azure Cost Management",
        "Azure Policy",
        "Microsoft Entra ID"
      ],
      "c": 2,
      "e": "Azure Policy can enforce rules that actively deny non-compliant resource creation — like blocking an unencrypted storage account — rather than merely flagging it afterward."
    },
    {
      "id": "exam_63",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A company wants a single numeric score reflecting the overall security posture of their Azure environment, updated continuously as they make changes.",
      "a": [
        "Advisor cost score",
        "Reserved Instance utilization",
        "Cost Management budget",
        "Secure Score"
      ],
      "c": 3,
      "e": "Secure Score, provided by Microsoft Defender for Cloud, is a single continuously updated number reflecting how well an environment follows security best practices."
    },
    {
      "id": "exam_64",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "Which Azure service should be used to securely store and manage API keys, connection strings, and certificates, rather than hardcoding them into application source code?",
      "a": [
        "Azure Key Vault",
        "Azure Policy",
        "Azure Monitor",
        "Azure Blueprints"
      ],
      "c": 0,
      "e": "Key Vault is purpose-built as a secure, access-controlled store for secrets, keys, and certificates — exactly what should replace hardcoded credentials in source code."
    },
    {
      "id": "exam_65",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "Under the shared responsibility model, which of the following is ALWAYS the customer's responsibility, regardless of whether they use IaaS, PaaS, or SaaS?",
      "a": [
        "Maintaining physical network hardware",
        "Their own data and who can access it",
        "Patching the hypervisor",
        "Physical datacenter security"
      ],
      "c": 1,
      "e": "No matter which service model is used, the customer always retains responsibility for their own data, identities, and access management — that responsibility never shifts to Microsoft."
    },
    {
      "id": "exam_66",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A security team wants to enforce 'verify explicitly, use least privileged access, and assume breach' across their organization. Which security model does this describe?",
      "a": [
        "Shared responsibility model",
        "Defense in depth only",
        "Zero Trust",
        "RBAC alone"
      ],
      "c": 2,
      "e": "These three principles — verify explicitly, least privilege, assume breach — are the defining tenets of the Zero Trust security model."
    },
    {
      "id": "exam_67",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "Which built-in Azure role grants full access to manage all resources, INCLUDING the ability to grant access to others?",
      "a": [
        "Security Reader",
        "Reader",
        "Contributor",
        "Owner"
      ],
      "c": 3,
      "e": "Owner has full control, including the ability to manage access for others — Contributor can manage resources but cannot grant access, and Reader is view-only."
    },
    {
      "id": "exam_68",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "Which built-in Azure RBAC role allows a user to create and manage all types of Azure resources but NOT grant access to other users?",
      "a": [
        "Contributor",
        "Reader",
        "Owner",
        "Global Administrator"
      ],
      "c": 0,
      "e": "Contributor can create, modify, and delete resources but explicitly cannot assign roles or manage access — that capability is reserved for Owner."
    },
    {
      "id": "exam_69",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A company wants to ensure that only compliant, managed devices can access sensitive company applications, decided dynamically at sign-in time. Which feature supports this?",
      "a": [
        "The Azure Cost Management + Billing blade",
        "Conditional Access with device compliance",
        "A general-purpose Azure Policy assignment",
        "A basic Network Security Group rule"
      ],
      "c": 1,
      "e": "Conditional Access can require that a device be marked compliant (via Intune, for example) before granting access — evaluated dynamically at each sign-in."
    },
    {
      "id": "exam_70",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "Which Microsoft Defender for Cloud capability specifically provides just-in-time access to reduce exposure of a VM's management ports?",
      "a": [
        "Policy compliance dashboard",
        "Secure Score",
        "Just-in-time (JIT) VM access",
        "Advisor recommendations"
      ],
      "c": 2,
      "e": "JIT VM access locks down management ports like RDP/SSH by default and opens them only for a limited time window when explicitly requested and approved."
    },
    {
      "id": "exam_71",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A multinational organization needs documented evidence that Microsoft datacenters comply with regional data protection regulations like GDPR. Where should they look?",
      "a": [
        "Azure Resource Manager docs",
        "Azure Cost Management + Billing",
        "The Azure status page",
        "Microsoft Trust Center"
      ],
      "c": 3,
      "e": "The Trust Center and Service Trust Portal are Microsoft's central resources for compliance documentation and independent audit results across many regulatory frameworks."
    },
    {
      "id": "exam_72",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "Which of the following BEST describes why Microsoft recommends using built-in RBAC roles over custom roles whenever possible?",
      "a": [
        "Microsoft maintains and updates them automatically",
        "Built-in roles always have fewer permissions",
        "Custom roles need Entra ID Premium",
        "Custom roles can't be assigned to multiple users"
      ],
      "c": 0,
      "e": "Because Microsoft maintains built-in roles, they require no ongoing upkeep as new features are added — a benefit custom roles don't share, since they must be manually updated."
    },
    {
      "id": "exam_73",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "Which statement about Azure Policy is MOST accurate?",
      "a": [
        "It can only report on non-compliant resources",
        "It can audit, deny, or auto-remediate resources",
        "It applies only to virtual machine resources",
        "It completely replaces the need for RBAC"
      ],
      "c": 1,
      "e": "Azure Policy can do more than just report — depending on its effect setting, it can actively deny non-compliant deployments or even automatically remediate them."
    },
    {
      "id": "exam_74",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A company's compliance officer wants to know, at a glance, which Azure resources currently violate an organization-wide encryption requirement. Which Azure feature provides this visibility?",
      "a": [
        "Reserved Instance recommendations",
        "Cost Management + Billing",
        "Azure Policy compliance dashboard",
        "Advisor cost recommendations"
      ],
      "c": 2,
      "e": "The Azure Policy compliance dashboard shows exactly which resources are compliant or non-compliant against assigned policies, like an encryption requirement."
    },
    {
      "id": "exam_75",
      "track": "securityGovernance",
      "category": "Identity",
      "q": "Which of the following is an example of something you HAVE, as used in Multi-Factor Authentication?",
      "a": [
        "The username permanently tied to your account",
        "The password you always type in to sign in",
        "Your official job title within the company",
        "A code from an authenticator app on your phone"
      ],
      "c": 3,
      "e": "MFA combines different factor types: something you know (password), something you have (a phone or hardware token), and something you are (biometrics). An authenticator app code is a 'something you have' factor."
    },
    {
      "id": "exam_76",
      "track": "managementMonitoring",
      "category": "Cost",
      "q": "A finance manager wants to be automatically notified by email once Azure spending reaches 80% of a predefined monthly limit. Which feature should they configure?",
      "a": [
        "An Azure Budget with an alert threshold",
        "An Azure Policy assignment rule",
        "A three-year Reserved Instance",
        "The Azure Advisor recommendations blade"
      ],
      "c": 0,
      "e": "Azure Budgets let you define a spending threshold and configure alerts that fire automatically once spending crosses a set percentage of that budget."
    },
    {
      "id": "exam_77",
      "track": "managementMonitoring",
      "category": "Cost",
      "q": "Which Azure tool proactively analyzes actual resource usage and recommends specific actions, such as resizing an underutilized VM, to reduce cost?",
      "a": [
        "Microsoft Entra ID",
        "Azure Advisor",
        "Azure Policy",
        "Azure Budgets"
      ],
      "c": 1,
      "e": "Azure Advisor actively scans usage patterns and provides personalized, specific recommendations for cost savings, performance, security, and reliability."
    },
    {
      "id": "exam_78",
      "track": "managementMonitoring",
      "category": "Cost",
      "q": "A company wants to commit to using a specific VM size for three years in exchange for a significantly discounted hourly rate. Which pricing option should they choose?",
      "a": [
        "Spot pricing only",
        "A free trial subscription",
        "A Reserved Instance",
        "Pay-as-you-go pricing"
      ],
      "c": 2,
      "e": "Reserved Instances offer a substantial discount in exchange for a 1- or 3-year usage commitment, ideal for predictable, steady-state workloads."
    },
    {
      "id": "exam_79",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "Which Azure feature allows an organization to apply a single governance policy that automatically cascades to every subscription within a management group, including subscriptions added later?",
      "a": [
        "Azure Cost Management on its own",
        "Azure Advisor's recommendations",
        "A single tag on a Resource Group",
        "Management Group policy inheritance"
      ],
      "c": 3,
      "e": "Policies assigned at a management group level inherit down to every subscription beneath it, automatically, even ones created after the policy was assigned."
    },
    {
      "id": "exam_80",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "A company wants to organize resources with simple name/value labels, such as 'Environment:Production', to support cost reporting and automation. What should they use?",
      "a": [
        "Tags",
        "Resource locks",
        "Management groups",
        "Azure Blueprints"
      ],
      "c": 0,
      "e": "Tags are simple metadata labels attached to resources, commonly used to organize cost reports and drive policy-based automation."
    },
    {
      "id": "exam_81",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "Which Azure feature can prevent a critical production resource from being accidentally deleted, even by a user with Contributor access?",
      "a": [
        "An Availability Zone",
        "A resource lock (Delete lock)",
        "A Network Security Group",
        "Cost Management"
      ],
      "c": 1,
      "e": "Resource locks (CanNotDelete or ReadOnly) override normal RBAC permissions to specifically prevent accidental deletion or modification, even for users who otherwise have sufficient access."
    },
    {
      "id": "exam_82",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "A team wants near real-time numerical data, such as CPU percentage, to power a live operational dashboard. Which Azure Monitor component is BEST suited?",
      "a": [
        "Application Insights alone",
        "Log Analytics",
        "Metrics",
        "Azure Advisor"
      ],
      "c": 2,
      "e": "Metrics provide lightweight, near real-time numerical data ideal for dashboards and fast alerting, as opposed to the more detailed, queryable data in Logs."
    },
    {
      "id": "exam_83",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "Which Azure Monitor component would an engineer use to run a detailed query investigating exactly what happened before an application crash?",
      "a": [
        "Azure Advisor",
        "Cost Management",
        "Metrics alone",
        "Log Analytics (Logs)"
      ],
      "c": 3,
      "e": "Log Analytics stores detailed, queryable event and diagnostic data, making it the right tool for in-depth investigation rather than at-a-glance dashboards."
    },
    {
      "id": "exam_84",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "A company has resources deployed across production, staging, and multiple subscriptions but needs to see status of Azure incidents affecting specifically their own resources. Which service should they check?",
      "a": [
        "Azure Service Health",
        "Azure Advisor",
        "The general Azure Status page",
        "Cost Management"
      ],
      "c": 0,
      "e": "Azure Service Health is personalized to the customer's own subscriptions and resources, unlike the general public Azure Status page, which reports global incidents only."
    },
    {
      "id": "exam_85",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "Which of the following BEST describes a Service Level Agreement (SLA) in the context of Azure?",
      "a": [
        "A discount applied after one year",
        "A measurable uptime commitment with service credits owed",
        "An internal document not shared with customers",
        "A guarantee of zero downtime ever"
      ],
      "c": 1,
      "e": "An SLA is Microsoft's measurable, published uptime commitment (like 99.9%), with defined service credits owed to the customer if that commitment isn't met."
    },
    {
      "id": "exam_86",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "If two chained Azure services each individually offer a 99.9% SLA, what happens to the application's overall composite SLA?",
      "a": [
        "It automatically rises to 99.99%",
        "Composite SLA math doesn't apply to this case",
        "It drops below 99.9%, since the SLAs multiply",
        "It stays at exactly 99.9% regardless"
      ],
      "c": 2,
      "e": "When services are chained, the composite SLA is the product of the individual SLAs, which is mathematically lower than any single service's SLA on its own."
    },
    {
      "id": "exam_87",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "Which Azure Monitor component is specifically designed to track application-level behavior such as response times, exception rates, and dependency calls, rather than infrastructure health?",
      "a": [
        "Azure Policy",
        "Resource locks",
        "Azure Advisor",
        "Application Insights"
      ],
      "c": 3,
      "e": "Application Insights focuses on application performance monitoring — response times, exceptions, and dependencies — distinct from infrastructure-level Metrics or Logs."
    },
    {
      "id": "exam_88",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "A company's IT department wants to know, at a glance, whether a trending Azure incident is actually affecting any of their own deployed resources.",
      "a": [
        "Azure Service Health",
        "Azure Advisor",
        "Policy compliance dashboard",
        "Reserved Instance recommendations"
      ],
      "c": 0,
      "e": "Service Health filters incident information down to what specifically affects the customer's own subscription and resources, answering exactly this kind of question."
    },
    {
      "id": "exam_89",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "Which combination BEST reflects how Azure Budgets and Azure Advisor work together for cost control?",
      "a": [
        "Advisor sets limits; Budgets makes recommendations",
        "Budgets alert reactively; Advisor recommends proactively",
        "Neither tool manages cost",
        "They perform the exact same function"
      ],
      "c": 1,
      "e": "Budgets are a reactive notification mechanism — they alert after a threshold is crossed. Advisor is proactive, recommending specific actions before costs get out of hand."
    }
  ],
  "examConfig": {
    "questionCount": 10,
    "timeLimitSeconds": 600,
    "passThreshold": 0.7,
    "domainDraw": {
      "cloudConcepts": 3,
      "coreServices": 4,
      "govMgmt": 3
    }
  }
};