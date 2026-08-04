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
          "Edge computing",
          "On-premises hosting",
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
          "SaaS",
          "PaaS",
          "IaaS",
          "FaaS"
        ],
        "c": 2,
        "e": "IaaS (Infrastructure as a Service) provides basic building blocks like VMs and disks, while the customer manages the OS, runtime, and applications. PaaS would also manage the runtime environment, so you wouldn't have direct control over the OS. SaaS is a finished application with no infrastructure management at all. FaaS (Functions as a Service) runs without any servers whatsoever."
      },
      {
        "id": "easy_2",
        "category": "Cloud models",
        "q": "A development team wants to deploy code without worrying about the operating system, patching, or server scaling. Which model lets them do that?",
        "a": [
          "IaaS",
          "PaaS",
          "On-premises",
          "Colocation"
        ],
        "c": 1,
        "e": "PaaS (Platform as a Service) like Azure App Service manages the runtime environment, OS, and scaling for you, so the team can focus purely on code. IaaS would still require managing the OS and patches. On-premises means owning physical infrastructure. Colocation is placing your own hardware in someone else's datacenter, which solves none of these concerns."
      },
      {
        "id": "easy_3",
        "category": "Cloud models",
        "q": "A company wants to use a ready-made email application through a browser without installing anything locally. What model is this?",
        "a": [
          "IaaS",
          "PaaS",
          "SaaS",
          "Hybrid cloud"
        ],
        "c": 2,
        "e": "SaaS (Software as a Service) like Microsoft 365 is a complete application available over the internet, where the provider manages absolutely everything. IaaS and PaaS require the customer to deploy or manage part of the solution themselves. Hybrid cloud describes a combination of environments, not a type of software service."
      },
      {
        "id": "easy_4",
        "category": "Cloud concepts",
        "q": "Microsoft operates datacenters that anyone with a subscription can access, sharing resources among many customers. What type of cloud is this?",
        "a": [
          "Private cloud",
          "Public cloud",
          "Community cloud",
          "On-premises"
        ],
        "c": 1,
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
          "Public cloud only",
          "Private cloud only",
          "Hybrid cloud",
          "Multi-tenant cloud"
        ],
        "c": 2,
        "e": "Hybrid cloud combines public cloud with on-premises or private infrastructure, typically during a gradual migration or due to data residency requirements. Purely public or private cloud would mean using only one of these environments. Multi-tenant describes resource sharing among customers inside a public cloud, not a combination of environments."
      },
      {
        "id": "easy_7",
        "category": "Cost",
        "q": "A company buys servers for its own datacenter and pays the full amount upfront. What is this type of expense called?",
        "a": [
          "Operating expense (OpEx)",
          "Capital expense (CapEx)",
          "Total cost of ownership",
          "Contractual availability guarantee"
        ],
        "c": 1,
        "e": "CapEx (Capital Expenditure) is a one-time investment in long-term assets, like owned servers. OpEx, by contrast, is ongoing operational cost spread over time. TCO is a total cost calculation over a period, not a type of expense itself. SLA is a service level agreement and has nothing to do with the type of cost."
      },
      {
        "id": "easy_8",
        "category": "Cost",
        "q": "A company pays every month only for the Azure resources it actually used, with no upfront investment. What is this cost model called?",
        "a": [
          "CapEx",
          "OpEx",
          "Fixed budget",
          "Amortization"
        ],
        "c": 1,
        "e": "OpEx (Operational Expenditure) is ongoing operational cost that rises or falls based on actual usage — exactly how the cloud works. CapEx, in contrast, is a one-time upfront investment. A fixed budget would mean paying the same amount regardless of usage, which contradicts the cloud principle. Amortization is an accounting method for spreading the cost of an asset, not a cloud payment model."
      },
      {
        "id": "easy_9",
        "category": "Cost",
        "q": "The price of an Azure service changes based on how much compute power, storage, or data transfer a company actually consumes. What principle is this?",
        "a": [
          "A flat rate regardless of usage",
          "A consumption-based model tied to actual usage",
          "A prepaid annual license paid once",
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
          "Automatic scalability",
          "Cross-region replication",
          "Hardware virtualization"
        ],
        "c": 1,
        "e": "Scalability is the ability to increase or decrease resource capacity based on current need, whether manually or automatically. Redundancy means duplicate resources for resilience against failure, not a response to load. Replication copies data between locations for availability. Virtualization is a technology enabling multiple virtual machines on one piece of hardware, but on its own it doesn't address capacity adjustment."
      },
      {
        "id": "easy_11",
        "category": "Cloud concepts",
        "q": "An application automatically adds servers under increased load and removes them once the load drops, without administrator intervention. What is this trait called?",
        "a": [
          "Scalability",
          "Elasticity",
          "High availability",
          "Geo-replication"
        ],
        "c": 1,
        "e": "Elasticity is a specific type of scalability where capacity automatically and rapidly adjusts in real time in both directions — up and down. Scalability is the broader term that also includes manual capacity increases. High availability concerns resilience against outages, not reacting to load. Geo-replication copies data between regions and has nothing to do with adjusting performance."
      },
      {
        "id": "easy_12",
        "category": "Reliability",
        "q": "An e-commerce site wants its web app to stay available to customers even during planned maintenance or a minor outage of one server. What does it need to ensure?",
        "a": [
          "A disaster recovery plan",
          "High availability of the service",
          "The ability to scale quickly",
          "Lower operating costs"
        ],
        "c": 1,
        "e": "High availability ensures a service stays functional even during minor outages or maintenance, typically through redundancy within a region. Disaster recovery addresses recovery after a major catastrophe, not routine operational resilience. Scalability concerns capacity in response to load, not availability during an outage. Lower costs have no direct connection to service availability."
      },
      {
        "id": "easy_13",
        "category": "Reliability",
        "q": "After a complete datacenter outage due to a fire, a company needs to restore its services in a different location with minimal data loss. What process does this describe?",
        "a": [
          "High availability",
          "Scalability",
          "Disaster recovery",
          "Load balancing"
        ],
        "c": 2,
        "e": "Disaster recovery is the process and plan for restoring services after a major catastrophe, typically including replication to another region and defined RTO/RPO targets. High availability handles routine minor outages, not the catastrophic loss of an entire datacenter. Scalability concerns capacity, not recovery after a disaster. Load balancing spreads traffic across servers but on its own doesn't provide disaster recovery."
      },
      {
        "id": "easy_14",
        "category": "Architecture",
        "q": "A company wants to deploy an application as close as possible to its European customers for low latency. What in Azure determines the geographic location of its resources?",
        "a": [
          "Resource group",
          "Region",
          "Subscription",
          "Management group"
        ],
        "c": 1,
        "e": "A region is a geographic area containing one or more Azure datacenters, and choosing a region determines where resources physically run. A resource group is a logical container for organizing resources, not a physical location. A subscription is a billing and access boundary. A management group organizes multiple subscriptions and has nothing directly to do with physical location."
      },
      {
        "id": "easy_15",
        "category": "Architecture",
        "q": "To prevent an outage in one datacenter from affecting the whole application, a company spreads its servers across three physically separate datacenters in the same region. What did it just use?",
        "a": [
          "Multiple geographic regions",
          "Availability zones within a region",
          "Multiple resource groups",
          "Multiple company subscriptions"
        ],
        "c": 1,
        "e": "Availability zones are physically separate datacenters with their own power and cooling within a single region, designed exactly for this type of resilience. Multiple regions would mean geographically distant locations, not zones within one region. Resource groups are just a logical organization of resources. Subscriptions handle billing and access, not physical placement."
      },
      {
        "id": "easy_16",
        "category": "Management",
        "q": "A team wants to group a web app and its database into a single unit that can be managed and deleted together. What will it use for this?",
        "a": [
          "Subscription",
          "Resource group",
          "Management group",
          "Tenant"
        ],
        "c": 1,
        "e": "A resource group is a logical container for resources that share a lifecycle — they can be managed, cost-tracked, and deleted together as a unit. A subscription is a wider billing boundary that contains multiple resource groups. A management group organizes multiple subscriptions at once. A tenant represents a Microsoft Entra ID instance for the whole organization, not a container for specific resources."
      },
      {
        "id": "easy_17",
        "category": "Management",
        "q": "A company needs a billing and access boundary that contains all of its resource groups and resources. What plays this role in Azure?",
        "a": [
          "Resource group",
          "Subscription",
          "Tag",
          "Availability zone"
        ],
        "c": 1,
        "e": "A subscription is the boundary for billing, quotas, and access to Azure resources, and it contains one or more resource groups. A resource group is a smaller logical unit inside a subscription. A tag is a metadata label for organizing resources, not a billing boundary. An availability zone is a physical location, not an administrative or billing boundary."
      },
      {
        "id": "easy_18",
        "category": "Management",
        "q": "A corporation with three divisions wants to apply the same security rules across all its subscriptions at once, instead of configuring them separately for each. What will it use for this?",
        "a": [
          "One shared resource group",
          "A hierarchy of management groups",
          "A set of descriptive tags",
          "A protective resource lock"
        ],
        "c": 1,
        "e": "A management group organizes multiple subscriptions into a hierarchy and lets you centrally apply governance policies, like RBAC or Azure Policy, to the whole group at once. A resource group only works within a single subscription. A tag just labels resources with metadata and doesn't enforce rules. A resource lock protects an individual resource from deletion or change, but doesn't apply rules across subscriptions."
      },
      {
        "id": "easy_19",
        "category": "Identity",
        "q": "A company wants to centrally manage employee identities, their sign-ins, and access to cloud applications. Which Azure service provides this?",
        "a": [
          "The Azure Monitor tool",
          "The Microsoft Entra ID service",
          "The Azure Policy tool",
          "The Resource Manager layer"
        ],
        "c": 1,
        "e": "Microsoft Entra ID (formerly Azure Active Directory) is a cloud identity and access management service for managing users, groups, sign-ins, and applications. Azure Monitor collects performance metrics and logs and has nothing to do with identities. Azure Policy enforces configuration rules on resources. Resource Manager is the layer for deploying and managing resources, not identities."
      },
      {
        "id": "easy_20",
        "category": "Identity",
        "q": "A user enters their name and password so the system can verify they really are who they claim to be. What is this process called?",
        "a": [
          "Authorization",
          "Authentication",
          "Federation",
          "Delegation"
        ],
        "c": 1,
        "e": "Authentication is the process of verifying identity — who you are. Authorization, by contrast, determines what you're allowed to do once your identity has been verified. Federation links identities across different systems or organizations. Delegation means transferring permissions to another person or service, not verifying identity itself."
      },
      {
        "id": "easy_21",
        "category": "Identity",
        "q": "After a user successfully signs in, the system still decides whether they're allowed to delete files in a shared folder. What is this step called?",
        "a": [
          "Authentication",
          "Authorization",
          "Single sign-on",
          "Tokenization"
        ],
        "c": 1,
        "e": "Authorization determines what actions a verified identity is allowed to perform, typically through assigned roles or permissions. Authentication already happened earlier when the password was verified. Single sign-on enables one login across multiple apps, but on its own doesn't address specific permissions. Tokenization is a technique for replacing sensitive data with tokens and has nothing directly to do with permissions."
      },
      {
        "id": "easy_22",
        "category": "Identity",
        "q": "A bank wants employees to verify with a code from their phone in addition to their password. What mechanism provides this?",
        "a": [
          "Single sign-on (SSO)",
          "Multi-factor authentication (MFA)",
          "Conditional Access",
          "Role-based access control"
        ],
        "c": 1,
        "e": "Multi-factor authentication (MFA) requires more than one verification factor at sign-in, typically a password plus a phone code or biometrics. Single sign-on addresses signing into multiple apps at once, not the number of verification factors. Conditional Access can require MFA based on conditions, but on its own isn't a second factor. RBAC handles permissions, not the method of verifying identity."
      },
      {
        "id": "easy_23",
        "category": "Identity",
        "q": "A company wants to automatically require MFA only when an employee signs in from an unfamiliar country or an unrecognized device. Which service enables this?",
        "a": [
          "Multi-factor authentication",
          "Conditional Access",
          "Microsoft Entra ID alone",
          "Resource lock"
        ],
        "c": 1,
        "e": "Conditional Access evaluates conditions like location, device, or risk level and dynamically decides whether to allow access, require MFA, or block it. MFA alone is just the verification mechanism, not the conditional logic for when to require it. Entra ID by itself without Conditional Access doesn't offer this kind of conditional behavior. A resource lock protects resources from deletion and has nothing to do with sign-in."
      },
      {
        "id": "easy_24",
        "category": "Governance",
        "q": "A manager needs to grant an employee permission to read data in a specific resource group, but not delete it or change other people's permissions. What will they use for this?",
        "a": [
          "A set of rules defined in Azure Policy",
          "A role assignment via RBAC at that scope",
          "A protective resource lock",
          "A descriptive tag assigned to the resource"
        ],
        "c": 1,
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
          "A resource lock",
          "A rule in Azure Policy",
          "A role assignment via RBAC",
          "A descriptive tag on the resource"
        ],
        "c": 0,
        "e": "A resource lock (CanNotDelete or ReadOnly) adds a protective layer to a specific resource regardless of what RBAC permissions a user has. Azure Policy enforces configuration standards, but isn't primarily meant to protect a single specific resource from deletion. RBAC determines permissions, but even a user with full access could still delete the resource without a lock. A tag is just a metadata label with no protective function."
      },
      {
        "id": "easy_27",
        "category": "Governance",
        "q": "The finance department wants to easily distinguish in billing which costs belong to Project Alpha versus Project Beta. What will they best use for this?",
        "a": [
          "Resource lock",
          "Tag",
          "Management group",
          "Azure Policy"
        ],
        "c": 1,
        "e": "Tags are paired metadata (key-value) assigned to resources, which can be used to filter billing by project, department, or environment. A resource lock protects a resource from deletion and has nothing to do with billing. A management group organizes subscriptions and is too coarse-grained for distinguishing individual projects. Azure Policy enforces rules but doesn't itself generate a cost breakdown."
      },
      {
        "id": "easy_28",
        "category": "Monitoring",
        "q": "An operations team wants to get alerted when CPU usage on a production server exceeds 90%. Which service provides this kind of monitoring and alerting?",
        "a": [
          "Azure Advisor",
          "Azure Monitor",
          "Azure Policy",
          "Resource group"
        ],
        "c": 1,
        "e": "Azure Monitor collects metrics and logs from resources in real time and lets you set alerts based on them, exactly for this purpose. Azure Advisor gives one-time optimization recommendations, not ongoing real-time monitoring. Azure Policy enforces configuration rules and doesn't track performance metrics. A resource group is an organizational container with no monitoring function."
      },
      {
        "id": "easy_29",
        "category": "Monitoring",
        "q": "A security team needs to search through a large volume of logs from multiple sources using a query language to find suspicious sign-in attempts. What will they use for this?",
        "a": [
          "Azure Advisor",
          "Log Analytics",
          "Resource lock",
          "Azure Policy"
        ],
        "c": 1,
        "e": "Log Analytics is part of Azure Monitor designed for storing and querying large volumes of logs using the KQL query language, ideal for finding patterns like suspicious sign-ins. Azure Advisor provides general recommendations, not a log analysis tool. A resource lock protects resources from deletion. Azure Policy enforces configuration standards and isn't used for searching logs."
      },
      {
        "id": "easy_30",
        "category": "Management",
        "q": "A finance manager wants personalized recommendations on how to reduce costs, improve security, and increase the reliability of their Azure environment. What will they use?",
        "a": [
          "Azure Monitor",
          "Azure Advisor",
          "Azure Policy",
          "Cost Management"
        ],
        "c": 1,
        "e": "Azure Advisor analyzes the environment's configuration and gives specific recommendations across four areas: cost, security, reliability, and performance. Azure Monitor collects metrics and logs, but doesn't itself actively recommend specific actions across these areas. Azure Policy enforces already-decided rules. Cost Management focuses only on cost, not all four areas at once."
      },
      {
        "id": "easy_31",
        "category": "Cost",
        "q": "An IT lead wants visibility into current monthly spend across all projects and to set up alerts when the budget is exceeded. Which service will they use?",
        "a": [
          "Azure Advisor",
          "Cost Management",
          "Pricing calculator",
          "Azure Policy"
        ],
        "c": 1,
        "e": "Cost Management tracks actual spend in real time, lets you set budgets with alerts, and analyze costs by various criteria. Azure Advisor gives recommendations but doesn't offer ongoing tracking of actual spend. The pricing calculator is for estimating cost before deployment, not tracking costs already incurred. Azure Policy enforces configuration rules, not budget tracking."
      },
      {
        "id": "easy_32",
        "category": "Cost",
        "q": "Before deploying a new solution, an architect wants to estimate the monthly cost of a specific combination of VMs, storage, and networking. What will they use for this?",
        "a": [
          "Cost Management",
          "Pricing calculator",
          "Azure Advisor",
          "TCO calculator"
        ],
        "c": 1,
        "e": "The pricing calculator is built exactly for estimating the cost of a specific service configuration before it's deployed. Cost Management tracks costs that have already been incurred, not a hypothetical estimate beforehand. Azure Advisor gives recommendations for an already-existing environment. The TCO calculator compares on-premises costs with the cloud over a longer horizon, not the price of a specific configuration."
      },
      {
        "id": "easy_33",
        "category": "Compute",
        "q": "A company needs full control over a server's operating system, including installing custom software and OS-level configuration. Which Azure service will they use?",
        "a": [
          "Azure Functions",
          "Azure Virtual Machines",
          "Azure App Service",
          "Azure Container Instances"
        ],
        "c": 1,
        "e": "Azure Virtual Machines provide full control over the OS, similar to a physical server, including installing any software you want. Azure Functions runs without servers and you don't manage the OS at all. Azure App Service manages the OS and runtime for you, so you don't have direct OS access. Azure Container Instances runs containers without needing to manage the host machine's OS."
      },
      {
        "id": "easy_34",
        "category": "Compute",
        "q": "A developer wants to deploy a Python web app without having to manage a server, OS, or scaling — just upload the code. Which service will they choose?",
        "a": [
          "Azure Virtual Machines",
          "Azure App Service",
          "Azure Virtual Network",
          "Azure Bastion"
        ],
        "c": 1,
        "e": "Azure App Service is a fully managed PaaS platform for web apps, where Azure handles the OS, runtime, and scaling for the developer. Azure Virtual Machines would still require manually managing the entire OS. Azure Virtual Network is for connecting and isolating resources on a network, not hosting applications. Azure Bastion provides secure access to VMs and has nothing to do with hosting a web app."
      },
      {
        "id": "easy_35",
        "category": "Compute",
        "q": "An application has a short function that should run only when a new file is uploaded to storage, and shouldn't run at all the rest of the time. What will they choose?",
        "a": [
          "Azure Virtual Machines",
          "Azure Kubernetes Service",
          "Azure Functions",
          "Azure App Service"
        ],
        "c": 2,
        "e": "Azure Functions is a serverless service designed exactly for short tasks triggered by an event, like a file upload, and you only pay for the actual runtime. Azure Virtual Machines run continuously and need to be managed even outside actual usage. Azure Kubernetes Service is meant for orchestrating larger numbers of containers, unnecessarily complex for one short function. Azure App Service suits continuously running web apps, not one-off short tasks."
      },
      {
        "id": "easy_36",
        "category": "Compute",
        "q": "A team wants to quickly spin up a single isolated container for testing without building an entire cluster. Which service will they use?",
        "a": [
          "Azure Kubernetes Service",
          "Azure Container Instances",
          "Azure Virtual Machines",
          "Azure Functions"
        ],
        "c": 1,
        "e": "Azure Container Instances lets you quickly run a single container without managing a cluster or orchestration, ideal for simple or test scenarios. Azure Kubernetes Service, by contrast, is meant for orchestrating large numbers of containers and requires more complex setup. Azure Virtual Machines would require manually installing and managing a container engine. Azure Functions is for short event-driven functions, not running arbitrary containers."
      },
      {
        "id": "easy_37",
        "category": "Compute",
        "q": "A company runs dozens of microservices in containers and needs automatic scaling, self-healing, and orchestration between them. What will they use?",
        "a": [
          "Azure Container Instances",
          "Azure Kubernetes Service",
          "Azure Functions",
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
          "A separate resource group",
          "A dedicated virtual network (VNet)",
          "A network security group",
          "A load balancer for traffic"
        ],
        "c": 1,
        "e": "A Virtual Network is the fundamental building block of a private network in Azure, where resources can communicate securely and be isolated from the public internet. A resource group is just an organizational container for resources, not a networking construct. A Network Security Group filters traffic inside an already-existing network, it doesn't create the network itself. A Load Balancer spreads traffic across servers, it doesn't create an isolated network space."
      },
      {
        "id": "easy_39",
        "category": "Networking",
        "q": "An administrator wants to split one large virtual network into smaller logical parts, for example separating web servers and databases. What will they use?",
        "a": [
          "Subnet",
          "Resource group",
          "Availability zone",
          "Network Security Group"
        ],
        "c": 0,
        "e": "A subnet divides a VNet into smaller segments, letting you logically separate different application layers and apply different rules to them. A resource group organizes resources administratively, not on the network. An availability zone is a physical datacenter location, not a network segment. A Network Security Group filters traffic, but doesn't itself segment a network into subnets."
      },
      {
        "id": "easy_40",
        "category": "Networking",
        "q": "A team wants to allow inbound traffic on port 443 only from a specific range of IP addresses and block everything else at the subnet level. What will they use for this?",
        "a": [
          "A VPN Gateway connection",
          "Network security group rules",
          "Records in the Azure DNS service",
          "A private ExpressRoute circuit"
        ],
        "c": 1,
        "e": "A Network Security Group (NSG) contains rules for filtering inbound and outbound traffic based on ports, protocols, and source IP addresses. A VPN Gateway creates an encrypted connection between networks and doesn't handle rule-based traffic filtering. Azure DNS translates domain names to IP addresses and has nothing to do with traffic filtering. ExpressRoute provides private connectivity outside the public internet, but on its own doesn't filter traffic by rules."
      },
      {
        "id": "easy_41",
        "category": "Networking",
        "q": "A company wants to securely connect its local office network to Azure over an encrypted tunnel through the public internet. What will they use for this?",
        "a": [
          "ExpressRoute",
          "VPN Gateway",
          "Azure Bastion",
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
          "ExpressRoute",
          "Azure DNS",
          "Virtual Network peering"
        ],
        "c": 1,
        "e": "ExpressRoute provides a dedicated private physical connection to Azure outside the public internet, with higher reliability and lower latency than VPN. A VPN Gateway, by contrast, routes its encrypted tunnel through the public internet, which may not be enough for extremely low latency. Azure DNS only handles domain name resolution. Virtual Network peering connects two VNets to each other, not an on-premises network to Azure."
      },
      {
        "id": "easy_43",
        "category": "Networking",
        "q": "An administrator needs to securely connect to a virtual machine's remote desktop through a browser, without the VM having a public IP address. What will they use?",
        "a": [
          "VPN Gateway",
          "Azure Bastion",
          "ExpressRoute",
          "Network Security Group"
        ],
        "c": 1,
        "e": "Azure Bastion provides secure RDP or SSH access to a VM directly in the browser, without the VM ever needing a public IP address or open ports to the internet. A VPN Gateway connects entire networks, which is a broader and more complex solution for this specific purpose. ExpressRoute addresses private connectivity to Azure overall, not access to a single VM. A Network Security Group only filters traffic, it doesn't enable access on its own."
      },
      {
        "id": "easy_44",
        "category": "Networking",
        "q": "A company wants their application's domain name (such as app.company.com) to resolve to the right IP address in Azure. Which service will they use?",
        "a": [
          "Azure Bastion",
          "Azure DNS",
          "Network Security Group",
          "VPN Gateway"
        ],
        "c": 1,
        "e": "Azure DNS manages DNS records and handles resolving domain names to the IP addresses of resources. Azure Bastion addresses secure access to VMs, it has nothing to do with domain name resolution. A Network Security Group filters network traffic by rules, it doesn't resolve names to addresses. A VPN Gateway creates an encrypted connection between networks, on its own it doesn't handle DNS."
      },
      {
        "id": "easy_45",
        "category": "Storage",
        "q": "An application needs to store large amounts of unstructured data, such as photos and videos uploaded by users. Which Azure service will it use?",
        "a": [
          "Azure Files",
          "Blob Storage",
          "Table Storage",
          "Queue Storage"
        ],
        "c": 1,
        "e": "Blob Storage is optimized for storing large amounts of unstructured binary data, such as images, videos, or backups. Azure Files provides shared network folders over the SMB protocol, better suited for sharing documents between servers. Table Storage stores structured NoSQL data in key-value form. Queue Storage is used for storing messages between application components, not for storing files."
      },
      {
        "id": "easy_46",
        "category": "Storage",
        "q": "A company is migrating an old application that requires access to a shared network folder over the SMB protocol, just like on the old server. What will it use?",
        "a": [
          "Blob Storage",
          "Azure Files",
          "Disk Storage",
          "Table Storage"
        ],
        "c": 1,
        "e": "Azure Files provides fully managed shared network folders accessible over the standard SMB or NFS protocol, so the application works just like it did with a shared folder on a physical server. Blob Storage is meant for object storage, not emulating a network folder. Disk Storage provides virtual disks for individual VMs, not shared network storage. Table Storage stores structured NoSQL data, not files accessible as a network folder."
      },
      {
        "id": "easy_47",
        "category": "Storage",
        "q": "Two parts of an application need to communicate asynchronously, where one sends messages and the other processes them in order over time. What will they use for this?",
        "a": [
          "Blob Storage",
          "Queue Storage",
          "Disk Storage",
          "Azure Files"
        ],
        "c": 1,
        "e": "Queue Storage stores messages in a queue that one component fills and another processes over time, enabling asynchronous communication between parts of an application. Blob Storage is for storing files, not message queues. Disk Storage provides virtual disks for VMs and has nothing to do with inter-component communication. Azure Files is a shared network folder for files, not a message queue mechanism."
      },
      {
        "id": "easy_48",
        "category": "Storage",
        "q": "An application stores millions of simple key-value records, such as user settings, and needs fast access to them without a SQL schema. What will it choose?",
        "a": [
          "Table Storage",
          "Blob Storage",
          "Azure SQL Database",
          "Disk Storage"
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
          "Queue Storage",
          "Table Storage"
        ],
        "c": 1,
        "e": "Disk Storage provides virtual (managed) disks that function as the system or data disks attached to a virtual machine. Blob Storage is object storage accessible via API, not a disk directly attachable to a VM. Queue Storage stores messages between components, it isn't a disk. Table Storage stores structured data, also not a disk format for a VM."
      },
      {
        "id": "easy_50",
        "category": "Storage",
        "q": "Data is stored in three copies within a single datacenter, which protects against a single disk failure but not against an outage of the whole datacenter. What type of redundancy is this?",
        "a": [
          "GRS",
          "LRS",
          "ZRS",
          "RA-GRS"
        ],
        "c": 1,
        "e": "LRS (Locally Redundant Storage) replicates data three times within a single datacenter, so it protects against a disk or server failure, but not an outage of the entire datacenter. GRS also replicates data to a remote region, which protects against an entire region outage too. ZRS spreads copies across multiple availability zones within a region, not just within one datacenter. RA-GRS is an extension of GRS with readable access to the secondary region, making it even more robust than the scenario described."
      },
      {
        "id": "easy_51",
        "category": "Storage",
        "q": "A company wants its data to survive an outage of an entire datacenter within a region, so it spreads copies across multiple physically separate datacenters in the same region. What will it use?",
        "a": [
          "LRS",
          "ZRS",
          "GRS",
          "Hot tier"
        ],
        "c": 1,
        "e": "ZRS (Zone-Redundant Storage) replicates data synchronously across multiple availability zones within a single region, so it survives an outage of an entire datacenter. LRS only replicates within one datacenter, so an outage of that datacenter would threaten the data. GRS replicates to another region, which is more than the requirement asks for but describes a different architecture. Hot tier is a data access frequency level, not a type of geographic redundancy."
      },
      {
        "id": "easy_52",
        "category": "Storage",
        "q": "A company needs its data to survive a catastrophe that destroys an entire region, so it replicates it hundreds of kilometers away to another Azure region. What will it use?",
        "a": [
          "LRS",
          "ZRS",
          "GRS",
          "Premium SSD"
        ],
        "c": 2,
        "e": "GRS (Geo-Redundant Storage) asynchronously replicates data to a distant paired region, which protects against a catastrophe affecting an entire region. LRS only protects against failure within a single datacenter. ZRS protects against a datacenter outage within a region, but not a catastrophe affecting the whole region. Premium SSD is a disk performance tier, not a geographic redundancy mechanism."
      },
      {
        "id": "easy_53",
        "category": "Storage",
        "q": "An application frequently and immediately accesses current user data, so it needs the fastest and most expensive data access tier in Blob Storage. What will it choose?",
        "a": [
          "Archive tier",
          "Cool tier",
          "Hot tier",
          "Cold tier"
        ],
        "c": 2,
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
          "Hot tier",
          "Cool tier",
          "Archive tier",
          "LRS"
        ],
        "c": 1,
        "e": "Cool tier is designed for less frequently accessed data (roughly once a month), with lower storage cost than Hot tier but faster access than Archive tier. Hot tier has a higher storage cost, better suited to daily access. Archive tier is the cheapest, but access takes hours, which may not suit monthly reports. LRS is a type of data redundancy, not an access frequency tier."
      },
      {
        "id": "easy_56",
        "category": "Databases",
        "q": "A company is migrating an existing relational database with tables, relationships, and SQL queries and wants a managed service without having to manage the database server itself. What will it choose?",
        "a": [
          "A globally distributed Cosmos DB database",
          "A managed relational Azure SQL Database",
          "A simple Table Storage store",
          "An object-based Blob Storage store"
        ],
        "c": 1,
        "e": "Azure SQL Database is a fully managed relational database service supporting standard SQL, tables, and relationships, ideal for migrating an existing relational database. Cosmos DB is primarily a NoSQL database with a different data model, not a direct replacement for a relational database. Table Storage is a simple NoSQL key-value store that doesn't support relational queries or relationships between tables. Blob Storage is for storing files, not structured database data."
      },
      {
        "id": "easy_57",
        "category": "Databases",
        "q": "A global application needs a database with very low latency and automatic data replication across multiple regions worldwide. What will it choose?",
        "a": [
          "Azure SQL Database",
          "Cosmos DB",
          "Azure Files",
          "Disk Storage"
        ],
        "c": 1,
        "e": "Cosmos DB is a globally distributed NoSQL database designed for low latency and automatic replication across regions worldwide. Azure SQL Database can also be geo-replicated, but it isn't primarily designed for this kind of global low latency as a default trait. Azure Files provides shared network folders, it isn't a database. Disk Storage provides virtual disks for VMs and has nothing to do with global database distribution."
      },
      {
        "id": "easy_58",
        "category": "Security",
        "q": "An application needs to securely store and manage API keys and passwords that it accesses at runtime, instead of having them written directly in the code. What will it use?",
        "a": [
          "Azure Monitor",
          "Azure Key Vault",
          "Resource group",
          "Azure Advisor"
        ],
        "c": 1,
        "e": "Azure Key Vault securely stores sensitive data like keys, passwords, and certificates, which the application accesses at runtime instead of storing them directly in the code. Azure Monitor collects metrics and logs and has nothing to do with storing secrets. A resource group is just an organizational container for resources. Azure Advisor gives optimization recommendations, it isn't a secure store for secrets."
      },
      {
        "id": "easy_59",
        "category": "Security",
        "q": "A security team wants to receive recommendations and a Secure Score across the entire Azure environment, and to detect threats. What will it use?",
        "a": [
          "Microsoft Sentinel",
          "Defender for Cloud",
          "Azure Key Vault",
          "Resource lock"
        ],
        "c": 1,
        "e": "Defender for Cloud provides a Secure Score, recommendations for improving security, and threat detection across an Azure environment. Microsoft Sentinel is a SIEM and SOAR tool for deeper security data analysis and incident response, not primarily for scoring configuration. Azure Key Vault stores secrets, it doesn't provide a security score. A resource lock protects a single resource from deletion and has nothing to do with overall security posture."
      },
      {
        "id": "easy_60",
        "category": "Security",
        "q": "A security analyst needs to centrally collect security data from many sources and investigate incidents using queries and automated playbooks. What will they use?",
        "a": [
          "Defender for Cloud",
          "Microsoft Sentinel",
          "Azure Policy",
          "Azure Advisor"
        ],
        "c": 1,
        "e": "Microsoft Sentinel is a cloud SIEM and SOAR tool for collecting, correlating, and investigating security data across sources, including automated responses. Defender for Cloud focuses on posture and protecting specific resources, not extensive incident analysis across an organization. Azure Policy enforces configuration rules, it isn't used for investigating incidents. Azure Advisor gives general recommendations, it isn't a security analytics tool."
      },
      {
        "id": "easy_61",
        "category": "Security",
        "q": "A company wants to design its security so that it automatically trusts nobody and nothing, verifying every request regardless of where it comes from. What approach is this?",
        "a": [
          "Defense in depth",
          "Zero Trust",
          "Least privilege",
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
          "The principle of least privilege",
          "Layered defense (defense in depth)",
          "Conditional Access"
        ],
        "c": 1,
        "e": "Least privilege is the principle of granting only the minimum permissions necessary for a given job, reducing the risk of abuse if an account is compromised. Zero Trust is the broader security philosophy of verifying every request; least privilege is one of its components. Defense in depth means layering multiple defense mechanisms, not specifically minimizing permissions. Conditional Access conditions access on circumstances like location or device, and doesn't directly address the scope of granted permissions."
      },
      {
        "id": "easy_63",
        "category": "DevOps",
        "q": "A team wants to define infrastructure (VMs, networks, storage) as code in a declarative JSON file that can be deployed repeatedly and consistently. What will it use?",
        "a": [
          "Azure CLI",
          "ARM template",
          "Cloud Shell",
          "Azure PowerShell"
        ],
        "c": 1,
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
          "Azure Portal",
          "Azure CLI",
          "Resource lock",
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
          "The cross-platform Azure CLI tool",
          "The Azure PowerShell scripting tool with cmdlets",
          "The declarative ARM template format",
          "The more concise Bicep infrastructure language"
        ],
        "c": 1,
        "e": "Azure PowerShell uses cmdlets in a Verb-Noun format (such as Get-AzVM) and the object-oriented approach typical of PowerShell. Azure CLI has a different syntax based on commands and text output, not PowerShell-style cmdlets. An ARM template is a declarative format for describing infrastructure, not a scripting language with cmdlets. Bicep is also a declarative infrastructure language, it doesn't include cmdlets or scripting logic like PowerShell."
      },
      {
        "id": "easy_67",
        "category": "Management",
        "q": "An administrator wants to manage Azure directly from a browser without having to install CLI or PowerShell locally on their computer. What will they use?",
        "a": [
          "Azure CLI",
          "Cloud Shell",
          "ARM template",
          "Resource group"
        ],
        "c": 1,
        "e": "Cloud Shell is a browser-based environment available directly in the Azure Portal, where you can run both Azure CLI and PowerShell commands without local installation. Azure CLI by itself is a tool that would otherwise need to be installed locally. An ARM template is a format for describing infrastructure, not an interactive environment. A resource group is an organizational container for resources, not a tool for running commands."
      },
      {
        "id": "easy_68",
        "category": "Migration",
        "q": "A company is planning to move dozens of on-premises servers to Azure and first needs to find out how utilized those servers are and what the migration will cost. What will it use?",
        "a": [
          "Azure Arc",
          "Azure Migrate",
          "Azure Bastion",
          "Azure Advisor"
        ],
        "c": 1,
        "e": "Azure Migrate provides tools for assessing on-premises servers, their utilization, and estimating the cost and steps needed to migrate to Azure. Azure Arc extends Azure management to resources outside Azure, but doesn't primarily address migration assessment and planning. Azure Bastion provides secure access to VMs and has nothing to do with migration. Azure Advisor gives general recommendations for an already-existing Azure environment, not planning a migration from outside."
      },
      {
        "id": "easy_69",
        "category": "Hybrid",
        "q": "A company wants to manage its on-premises servers and servers in other clouds from the same Azure interface, as if they were Azure resources. What will it use?",
        "a": [
          "Azure Migrate",
          "Azure Arc",
          "Azure Bastion",
          "ExpressRoute"
        ],
        "c": 1,
        "e": "Azure Arc extends Azure's management, governance, and tooling to resources outside Azure, including on-premises servers and other clouds, as if they were a native part of Azure. Azure Migrate is for assessing and actually migrating servers to Azure, not for ongoing management if they remain outside Azure. Azure Bastion provides secure access to VMs in Azure, it doesn't address managing external resources. ExpressRoute creates private network connectivity, on its own it doesn't enable unified management across environments."
      },
      {
        "id": "easy_70",
        "category": "Cloud concepts",
        "q": "A company wants to quickly try out a new idea without having to buy hardware, and can end the project at any time without losing the investment in equipment. Which cloud trait enables this?",
        "a": [
          "Guaranteed high service availability",
          "Low upfront investment and rapid elasticity",
          "Automatic geographic data replication",
          "Dependence on a single service provider"
        ],
        "c": 1,
        "e": "The cloud lets you start with minimal or no upfront investment and end a project at any time without losing the value of physical hardware, because you only pay for resources actually used. High availability concerns resilience against outages, not a low entry barrier. Geo-replication copies data between regions and has nothing to do with the investment barrier. Vendor lock-in, by contrast, is the risk of depending on a single provider, not the advantage described in the scenario."
      },
      {
        "id": "easy_71",
        "category": "Cloud concepts",
        "q": "Several companies in the same industry with shared regulatory requirements share one dedicated cloud infrastructure that nobody outside the group uses. What type of cloud is this?",
        "a": [
          "Public cloud",
          "Private cloud",
          "Community cloud",
          "Hybrid cloud"
        ],
        "c": 2,
        "e": "Community cloud shares infrastructure among multiple organizations with common needs or regulatory requirements, unlike private cloud, which is dedicated to a single company. Public cloud is shared among any customers without being restricted to a specific group. Private cloud is dedicated to a single organization, not a group of companies. Hybrid cloud combines different environments, but doesn't describe sharing among multiple companies with the same requirements."
      },
      {
        "id": "easy_72",
        "category": "Cloud models",
        "q": "A development team wants to run its own code as a simple function without worrying about servers, the OS, or the runtime environment at all. Which service model best describes this?",
        "a": [
          "The IaaS model, with full control over the OS",
          "The PaaS model, with a fully managed runtime",
          "The serverless model, with no infrastructure management",
          "The traditional on-premises deployment model"
        ],
        "c": 2,
        "e": "The serverless model (Functions as a Service) goes even further than classic PaaS — the developer doesn't even handle scaling or running instances, paying only for the actual code execution time. IaaS requires managing the OS, which contradicts the scenario. PaaS does manage the runtime, but typically still runs continuously like an app, not as a one-off function on demand. On-premises means owning physical infrastructure, the opposite of what's described."
      },
      {
        "id": "easy_73",
        "category": "Reliability",
        "q": "After a disaster, a company must restore operations with a maximum data loss of 15 minutes and a maximum outage duration of 1 hour. What are these two targets generally called?",
        "a": [
          "SLA and TCO",
          "RPO and RTO",
          "CapEx and OpEx",
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
          "Multi-factor authentication",
          "Single sign-on (SSO)",
          "Conditional Access",
          "Identity federation"
        ],
        "c": 1,
        "e": "Single sign-on lets a user sign in once and gain access to multiple connected applications without needing to re-enter their password. Multi-factor authentication addresses the number of verification factors at a single sign-in, not access to multiple apps at once. Conditional Access conditions access on circumstances like location or device. Identity federation links identities across different organizations or systems, a broader concept than just convenient single sign-on within one organization's apps."
      },
      {
        "id": "easy_75",
        "category": "Identity",
        "q": "An organization wants an external vendor to be able to use their own company account to sign into the organization's application, instead of creating a new account. What concept enables this?",
        "a": [
          "The resource lock protection mechanism",
          "Identity federation between organizations",
          "A set of rules in Azure Policy",
          "A descriptive tag assigned to a resource"
        ],
        "c": 1,
        "e": "Identity federation enables trusted linking between identity providers of different organizations, so a user can sign in with their existing account across organizational boundaries. A resource lock protects resources from deletion and has nothing to do with sign-in. Azure Policy enforces configuration rules on resources. A tag is a metadata label for organizing resources and has nothing to do with a user's identity."
      },
      {
        "id": "easy_76",
        "category": "Monitoring",
        "q": "An auditor needs to find out exactly what actions were performed by whom on Azure resources over the past month, including configuration changes. What will they review?",
        "a": [
          "Azure Advisor",
          "Activity log",
          "Resource lock",
          "Pricing calculator"
        ],
        "c": 1,
        "e": "The Activity log records control-plane operations performed on resources (who changed what and when), exactly matching the audit need. Azure Advisor gives optimization recommendations, it doesn't record a history of user actions. A resource lock protects a resource against change or deletion, on its own it doesn't provide a record of action history. The pricing calculator is for estimating costs in advance and has nothing to do with auditing actions taken."
      },
      {
        "id": "easy_77",
        "category": "Governance",
        "q": "A company wants to ensure nobody can change production network settings, while reading the configuration remains allowed for everyone. What type of resource lock will it use?",
        "a": [
          "CanNotDelete",
          "ReadOnly",
          "Deny policy",
          "RBAC Reader role"
        ],
        "c": 1,
        "e": "A ReadOnly lock prevents any changes to a resource (not just deletion), while reading remains possible for everyone with appropriate access. A CanNotDelete lock would only prevent deletion, configuration changes would still be possible. A Deny policy in Azure Policy blocks creating resources that don't meet a rule, but doesn't directly address protecting an existing resource from changes this way. An RBAC Reader role would restrict specific users to read-only, but wouldn't protect the resource as a whole against changes from users with higher permissions."
      },
      {
        "id": "easy_78",
        "category": "Governance",
        "q": "A company wants Azure Policy not only to detect non-compliant resources, but to actively remediate missing settings, such as installing a monitoring agent. Which policy effect enables this?",
        "a": [
          "The Audit effect, used only for reporting",
          "The Deny effect, which blocks creation",
          "DeployIfNotExists, with automatic remediation",
          "The Append effect, used for adding fields"
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
          "Sentinel with automated playbooks",
          "A protective resource lock",
          "A descriptive tag assigned to a resource"
        ],
        "c": 1,
        "e": "Microsoft Sentinel enables detection of suspicious behavior using analytics rules and an automated response via playbooks (connected to Azure Logic Apps). Azure Policy enforces configuration standards on resources, it doesn't detect user behavior in real time. A resource lock protects a resource from deletion or change and doesn't react to suspicious sign-ins. A tag is just a metadata label with no detection or response function whatsoever."
      },
      {
        "id": "easy_80",
        "category": "DevOps",
        "q": "A DevOps team wants infrastructure to deploy automatically every time a change in the repository is approved, with no manual intervention. What concept describes this?",
        "a": [
          "Manual deployment",
          "CI/CD pipeline",
          "Resource lock",
          "Pricing calculator"
        ],
        "c": 1,
        "e": "A CI/CD (Continuous Integration/Continuous Deployment) pipeline automates the deployment process after a code or infrastructure change is approved, with no need for manual intervention. Manual deployment is the exact opposite of the automated process described. A resource lock protects a resource from deletion or modification and has nothing to do with deployment automation. The pricing calculator is for estimating costs and has nothing to do with the deployment process."
      },
      {
        "id": "easy_81",
        "category": "Management",
        "q": "A manager wants to see a consolidated overview of recommendations across cost, security, reliability, performance, and operational excellence in one place. What will they use?",
        "a": [
          "Azure Monitor",
          "Azure Advisor",
          "Resource group",
          "Azure DNS"
        ],
        "c": 1,
        "e": "Azure Advisor provides a consolidated overview of recommendations across five pillars: cost, security, reliability, performance, and operational excellence. Azure Monitor collects metrics and logs, but doesn't provide the same kind of consolidated recommendations across all these areas. A resource group is an organizational container for resources. Azure DNS only handles domain name resolution and has nothing to do with overall recommendations."
      },
      {
        "id": "easy_82",
        "category": "Reliability",
        "q": "A company wants to back up its virtual machines regularly according to a defined schedule and be able to restore them if data is corrupted. What will it use?",
        "a": [
          "Azure Backup",
          "Azure Bastion",
          "Azure DNS",
          "Resource lock"
        ],
        "c": 0,
        "e": "Azure Backup creates scheduled backups of VMs and other resources and allows you to restore them in case of data loss or corruption. Azure Bastion provides secure access to VMs and has nothing directly to do with backups. Azure DNS handles domain name resolution. A resource lock protects a resource from deletion, but doesn't create data backups or allow you to restore them."
      },
      {
        "id": "easy_83",
        "category": "Networking",
        "q": "A global application needs to route users to the nearest or most available instance of the app across multiple regions using DNS. What will it use?",
        "a": [
          "Azure Load Balancer",
          "Azure Traffic Manager",
          "Network Security Group",
          "VPN Gateway"
        ],
        "c": 1,
        "e": "Azure Traffic Manager is a DNS-based service that routes traffic between application instances across multiple regions according to a chosen strategy, such as geographic proximity or availability. Azure Load Balancer spreads traffic across resources within a single region at the network layer, not between regions using DNS. A Network Security Group filters traffic by rules and doesn't address routing between regions. A VPN Gateway creates encrypted connections between networks, it doesn't route user traffic to the nearest instance."
      },
      {
        "id": "easy_84",
        "category": "Networking",
        "q": "A company wants traffic within a single region to be spread across multiple instances of a web app at the network layer for higher performance and resilience. What will it use?",
        "a": [
          "Azure Traffic Manager",
          "Azure Load Balancer",
          "Azure DNS",
          "Azure Bastion"
        ],
        "c": 1,
        "e": "Azure Load Balancer spreads inbound network traffic across multiple instances within a single region, increasing performance and resilience against the failure of one instance. Azure Traffic Manager works at the DNS level and routes between regions, not within a single region at the network layer. Azure DNS only resolves domain names, on its own it doesn't spread traffic. Azure Bastion provides secure access to VMs and has nothing to do with spreading traffic across instances."
      },
      {
        "id": "easy_85",
        "category": "Networking",
        "q": "A team wants to connect two virtual networks in Azure so they can communicate with each other as if they were one network, without needing a VPN. What will it use?",
        "a": [
          "A VPN Gateway connection",
          "Mutual VNet connection (peering)",
          "A private ExpressRoute circuit",
          "Network security group rules"
        ],
        "c": 1,
        "e": "Virtual Network peering connects two VNets directly over the Azure backbone network, so they can communicate without needing a VPN or the public internet. A VPN Gateway creates an encrypted tunnel, typically between on-premises and Azure, not primarily between two VNets in Azure. ExpressRoute addresses private connectivity between on-premises and Azure, not connecting two VNets to each other. A Network Security Group filters traffic by rules, it doesn't connect networks to each other."
      },
      {
        "id": "easy_86",
        "category": "Storage",
        "q": "A developer needs storage optimized for storing and streaming large video files accessible via an HTTP/HTTPS link. What will they choose?",
        "a": [
          "Table Storage",
          "Blob Storage",
          "Queue Storage",
          "Disk Storage"
        ],
        "c": 1,
        "e": "Blob Storage lets you store large binary files like videos and access them directly via an HTTP/HTTPS URL, ideal for streaming. Table Storage stores structured key-value data, not large binary files. Queue Storage is for message queues between components, not for storing media. Disk Storage provides virtual disks attached to VMs, which aren't directly accessible via a web link like Blob."
      },
      {
        "id": "easy_87",
        "category": "Storage",
        "q": "A company wants assurance that even if the entire primary region failed, it could still read its data from a secondary region without waiting for the primary to recover. What will it choose?",
        "a": [
          "LRS",
          "ZRS",
          "RA-GRS",
          "Hot tier"
        ],
        "c": 2,
        "e": "RA-GRS (Read-Access Geo-Redundant Storage) lets you read data from the secondary region even during an outage of the primary region, unlike standard GRS, where the secondary copy is only readable after an official failover. LRS only replicates within a single datacenter and doesn't protect against a regional outage. ZRS protects against a datacenter outage within a region, not an outage of the entire region. Hot tier is a data access frequency level, not a type of geographic redundancy."
      },
      {
        "id": "easy_88",
        "category": "Compute",
        "q": "A company wants to store and manage container images, from which it then deploys applications to Azure Kubernetes Service. What will it use?",
        "a": [
          "Object-based Blob Storage",
          "A container image registry",
          "Shared Azure Files storage",
          "Table Storage"
        ],
        "c": 1,
        "e": "Azure Container Registry is a managed service for storing and managing Docker and OCI container images, from which containers are then deployed to, say, AKS. Blob Storage is general-purpose object storage, not optimized for versioning container images the same way. Azure Files provides shared network folders, not a container image registry. Table Storage stores simple structured data and has nothing to do with managing container images."
      },
      {
        "id": "easy_89",
        "category": "Databases",
        "q": "A team runs a database and wants Azure to automatically handle backups, patching, and high availability without having to install SQL Server on a VM. What will it choose?",
        "a": [
          "SQL Server on an Azure VM",
          "Azure SQL Database",
          "Disk Storage",
          "Azure Files"
        ],
        "c": 1,
        "e": "Azure SQL Database is a fully managed PaaS database where Azure automatically handles backups, patching, and high availability without administrator intervention. SQL Server on an Azure VM would still require manually managing the OS, patches, and high availability configuration, which contradicts the scenario. Disk Storage only provides virtual disks, it isn't a database service. Azure Files is shared file storage, not a database."
      },
      {
        "id": "easy_90",
        "category": "Security",
        "q": "A security engineer wants certificates used for encrypting communication to be automatically renewed and centrally managed. What will they use?",
        "a": [
          "Resource lock",
          "Azure Key Vault",
          "Network Security Group",
          "Tag"
        ],
        "c": 1,
        "e": "Azure Key Vault manages not just keys and secrets but also certificates, including their automatic renewal and centralized management. A resource lock protects a resource from deletion and doesn't address certificate management. A Network Security Group filters network traffic and has nothing to do with certificate management. A tag is just a metadata label with no certificate management function."
      },
      {
        "id": "easy_91",
        "category": "DevOps",
        "q": "A team wants to use the same Bicep or ARM code to deploy both test and production environments, differing only in parameters like VM size. What concept enables this?",
        "a": [
          "The resource lock protection mechanism",
          "Parameterizing reusable templates",
          "A descriptive tag assigned to a resource",
          "A recommendation from Azure Advisor"
        ],
        "c": 1,
        "e": "Template parameterization lets you reuse the same infrastructure definition with different input values for different environments, avoiding code duplication. A resource lock protects a resource from deletion and has nothing to do with reusing templates. A tag just labels resources with metadata and doesn't address template structure. Azure Advisor gives recommendations for an already-existing environment, it doesn't help with deployment template structure."
      },
      {
        "id": "easy_92",
        "category": "Hybrid",
        "q": "After migrating servers to Azure, the IT department wants to keep managing the servers that, for technical reasons, remained on-premises, from the same interface as Azure resources. What will it use?",
        "a": [
          "Azure Migrate",
          "Azure Arc",
          "ExpressRoute",
          "Azure Bastion"
        ],
        "c": 1,
        "e": "Azure Arc extends Azure management and governance to servers outside Azure too, so they can be managed from the same interface as native Azure resources. Azure Migrate is for assessing and carrying out the migration process itself, not for ongoing management of servers that will never be in Azure. ExpressRoute creates private network connectivity, on its own it doesn't enable unified management across environments. Azure Bastion provides secure access to VMs in Azure, it doesn't address managing external on-premises servers."
      },
      {
        "id": "easy_93",
        "category": "Migration",
        "q": "A team is planning a migration and needs to find out what savings migrating to Azure would bring compared to maintaining its own infrastructure over five years. What will it use?",
        "a": [
          "Pricing calculator",
          "TCO calculator",
          "Azure Advisor",
          "Cost Management"
        ],
        "c": 1,
        "e": "The TCO (Total Cost of Ownership) calculator compares the total cost of running on-premises infrastructure with the cost of an equivalent solution in Azure over a longer time horizon. The pricing calculator estimates the cost of a specific Azure configuration, but doesn't directly compare it to on-premises infrastructure costs. Azure Advisor gives recommendations for an already-existing Azure environment, not a comparison with an on-premises alternative. Cost Management tracks costs already incurred in Azure, not a hypothetical comparison before a migration."
      },
      {
        "id": "easy_94",
        "category": "Reliability",
        "q": "A company wants assurance that if Azure fails to meet a service's guaranteed availability, it will receive financial compensation. What defines this guarantee and compensation?",
        "a": [
          "Total cost of ownership",
          "A Service Level Agreement (SLA)",
          "Role-based access control",
          "A resource lock"
        ],
        "c": 1,
        "e": "An SLA defines the guaranteed level of service availability and the terms for financial compensation (service credits) if Microsoft fails to meet that level. TCO is a calculation of total ownership costs, not an availability guarantee. RBAC addresses granting permissions and has nothing to do with a service's availability guarantee. A resource lock protects a resource from deletion, it doesn't address contractual availability guarantees."
      },
      {
        "id": "easy_95",
        "category": "Management",
        "q": "A team wants to create a test environment that can be quickly deleted as a whole once testing is finished, without affecting production resources elsewhere. What will it best use for this?",
        "a": [
          "A separate resource group",
          "A descriptive tag on the resources",
          "A protective resource lock",
          "A rule in Azure Policy"
        ],
        "c": 0,
        "e": "A separate resource group for test resources lets you delete the entire test environment with a single command, without affecting resources in other resource groups. A tag just labels resources with metadata and doesn't enable bulk deletion as directly. A resource lock, by contrast, protects resources against deletion, the opposite of the desired behavior for an easily deletable test environment. Azure Policy enforces rules, but on its own doesn't make it easier to bulk-delete test resources."
      },
      {
        "id": "easy_96",
        "category": "Architecture",
        "q": "A company is choosing an Azure region for a new application and, besides latency to customers, must also consider where it's legally allowed to store European citizens' personal data. What does this requirement affect?",
        "a": [
          "Only the final price of services",
          "The choice of region due to data residency",
          "Only the level of disk redundancy",
          "Only the choice of availability zone"
        ],
        "c": 1,
        "e": "The choice of region affects where data physically resides (data residency), which is key to meeting regulations like GDPR that require keeping data within a certain geographic area. Prices do vary between regions, but that isn't the primary reason mentioned in the scenario. The storage redundancy type is configured independently of the region choice for regulatory purposes. Availability zone addresses resilience within an already-chosen region, not the question of which country data is legally allowed to reside in."
      },
      {
        "id": "easy_97",
        "category": "Architecture",
        "q": "An architect is designing a solution and wants the application to keep working even if an entire Azure region becomes unavailable. What strategy will they choose?",
        "a": [
          "Deploying to just one availability zone",
          "Deploying across several regions with replication",
          "Relying only on basic LRS redundancy",
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
          "The assessment phase",
          "A pilot test migration",
          "The post-migration optimization phase",
          "The post-migration security phase"
        ],
        "c": 1,
        "e": "A pilot or test migration verifies that a solution works in Azure before a full production migration, typically using test data on a limited sample of the system. Assessment happens earlier and focuses on analyzing the current state and planning, not the test deployment itself. Post-migration optimization happens only after the production data transition is complete. Post-migration security is also a later step, not a phase preceding the functional verification."
      },
      {
        "id": "easy_99",
        "category": "Migration",
        "q": "After successfully migrating production data to Azure, the team still wants to fine-tune VM sizes and storage tiers based on actual usage. What phase of the migration process is this?",
        "a": [
          "The assessment phase before migration",
          "The data migration step itself",
          "The post-migration optimization phase",
          "The initial planning phase"
        ],
        "c": 2,
        "e": "Post-migration optimization happens after the transition is complete, when resource sizes and settings are fine-tuned based on real metrics for a better performance-to-cost ratio. Assessment happens before the migration, during analysis of the current state. Data migration is the transfer itself, which has already happened by this point. Planning precedes the entire process and isn't about fine-tuning an environment that's already been migrated."
      }
    ],
    "normal": [
      {
        "id": "normal_0",
        "category": "Compute",
        "q": "A developer wants to deploy a simple web app and doesn't want to deal with servers or scaling manually. Which service will they choose?",
        "a": [
          "Azure App Service, for automatic platform management",
          "Azure Virtual Machine, for full OS control",
          "An on-premises server, for lower costs",
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
          "Azure App Service, for a managed runtime",
          "Azure Virtual Machine, for full OS control",
          "Azure Functions, for serverless execution",
          "Azure CDN, for faster content delivery"
        ],
        "c": 1,
        "e": "An Azure Virtual Machine gives full control over the OS, which is necessary for older specific software requiring particular configuration. App Service manages the OS for you, so you lack direct access. Azure Functions is serverless and you don't manage the OS at all. Azure CDN is for distributing content, not hosting applications."
      },
      {
        "id": "normal_2",
        "category": "Compute",
        "q": "An application has a small function that should run only when a file is uploaded, and not run at all the rest of the day. Which service will they choose?",
        "a": [
          "An Azure Virtual Machine running continuously",
          "Azure Functions with an event-driven trigger",
          "Azure Kubernetes Service with a persistent pod",
          "An on-premises server started manually"
        ],
        "c": 1,
        "e": "Azure Functions is a serverless service designed for short tasks triggered by an event, and you only pay for actual runtime. A continuously running VM would be needlessly costly for such short tasks. AKS with a persistent pod would also consume resources continuously. An on-premises server requires manual startup, contradicting an automated trigger."
      },
      {
        "id": "normal_3",
        "category": "Compute",
        "q": "A team wants to quickly spin up a single isolated container for testing without building an entire cluster. Which service will they choose?",
        "a": [
          "Azure Kubernetes Service, for full container orchestration",
          "Azure Container Instances, for fast startup",
          "An Azure Virtual Machine with Docker manually installed",
          "Azure Functions, for short event-driven runs"
        ],
        "c": 1,
        "e": "Azure Container Instances lets you quickly run a single container without managing a cluster, ideal for testing. AKS is meant for orchestrating many containers, needlessly complex for a single test. A VM with manually installed Docker requires more setup and management. Azure Functions is for short functions, not for running arbitrary containers."
      },
      {
        "id": "normal_4",
        "category": "Compute",
        "q": "A company runs dozens of microservices in containers and needs automatic scaling and recovery from failure. Which service will they choose?",
        "a": [
          "Azure Container Instances, for simple deployment",
          "Azure Kubernetes Service, for orchestration at scale",
          "Azure Functions, for short isolated tasks",
          "An Azure Virtual Machine with no built-in orchestration"
        ],
        "c": 1,
        "e": "Azure Kubernetes Service is a managed platform for orchestrating large numbers of containers, including automatic scaling and self-healing. Container Instances suits only individual or loosely connected containers. Azure Functions handles short functions, not complex orchestration of microservices. A VM without orchestration would require manually managing scaling and recovery."
      },
      {
        "id": "normal_5",
        "category": "Networking",
        "q": "A company needs an isolated private network environment where virtual machines can communicate with each other securely. What will it create?",
        "a": [
          "A resource group, as an organizational container",
          "A Virtual Network, as a private network space",
          "A Network Security Group, as a traffic filter",
          "A Load Balancer, for spreading load"
        ],
        "c": 1,
        "e": "A Virtual Network is the fundamental building block of a private network in Azure, where resources communicate securely. A resource group is an administrative container, not a networking construct. A Network Security Group filters traffic inside an already-existing network, it doesn't create the network itself. A Load Balancer spreads traffic, it doesn't create an isolated network environment."
      },
      {
        "id": "normal_6",
        "category": "Networking",
        "q": "An administrator wants to split one large virtual network into smaller logical parts for different application layers. What will they use?",
        "a": [
          "A subnet, for network segmentation",
          "A resource group, to organize resources",
          "An availability zone, for physical location",
          "A tag, to describe resources"
        ],
        "c": 0,
        "e": "A subnet splits a VNet into smaller segments, letting you logically separate different application layers. A resource group organizes resources administratively, not on the network. An availability zone is a physical datacenter location, not a network segment. A tag just describes resources with metadata, it doesn't segment the network."
      },
      {
        "id": "normal_7",
        "category": "Networking",
        "q": "A team wants to allow traffic only on port 443 from a specific range of IP addresses and block everything else. What will they use?",
        "a": [
          "A VPN Gateway, for an encrypted connection",
          "A Network Security Group, with filtering rules",
          "Azure DNS, for name resolution",
          "ExpressRoute, for private connectivity"
        ],
        "c": 1,
        "e": "A Network Security Group contains rules for filtering traffic by ports, protocols, and source IP addresses, exactly matching the scenario. A VPN Gateway creates an encrypted connection but doesn't handle rule-based filtering. Azure DNS resolves domain names into IP addresses. ExpressRoute provides private connectivity, on its own it doesn't filter traffic."
      },
      {
        "id": "normal_8",
        "category": "Networking",
        "q": "A company wants to securely connect its local network to Azure over an encrypted tunnel through the public internet. What will it use?",
        "a": [
          "ExpressRoute, as a dedicated connection",
          "VPN Gateway, as an encrypted tunnel over the internet",
          "Azure Bastion, for accessing VMs",
          "Network Security Group, for filtering traffic"
        ],
        "c": 1,
        "e": "A VPN Gateway creates an encrypted site-to-site connection between an on-premises network and Azure over the public internet. ExpressRoute, by contrast, bypasses the public internet and creates a private physical connection. Azure Bastion provides access to individual VMs, it doesn't connect entire networks. A Network Security Group filters traffic, it doesn't create the connection itself."
      },
      {
        "id": "normal_9",
        "category": "Networking",
        "q": "A large company needs dedicated private connectivity to Azure with high bandwidth, outside the public internet. What will it choose?",
        "a": [
          "A VPN Gateway routed over the public internet",
          "ExpressRoute, as dedicated private connectivity",
          "Azure DNS, for managing domain names",
          "Virtual Network peering between two VNets"
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
          "Azure Bastion, for browser-based access",
          "ExpressRoute, for private connectivity",
          "Network Security Group, for filtering"
        ],
        "c": 1,
        "e": "Azure Bastion provides secure RDP/SSH access to a VM directly in the browser, without the VM needing a public IP address. A VPN Gateway connects entire networks, a broader solution for this specific purpose. ExpressRoute addresses private connectivity to Azure overall, not access to a single VM. A Network Security Group just filters traffic, it doesn't enable access on its own."
      },
      {
        "id": "normal_11",
        "category": "Networking",
        "q": "A company wants its application's domain name to resolve to the correct IP address in Azure. What will it use?",
        "a": [
          "Azure Bastion, for VM access",
          "Azure DNS, for managing and resolving names",
          "Network Security Group, for filtering",
          "VPN Gateway, to connect networks"
        ],
        "c": 1,
        "e": "Azure DNS manages DNS records and handles resolving domain names to resource IP addresses. Azure Bastion addresses secure VM access. A Network Security Group filters network traffic by rules, it doesn't resolve names. A VPN Gateway creates an encrypted connection between networks, it doesn't address DNS."
      },
      {
        "id": "normal_12",
        "category": "Networking",
        "q": "A global application needs to route users to the nearest or most available instance across multiple regions using DNS. What will it choose?",
        "a": [
          "Azure Load Balancer, for spreading load within a region",
          "Azure Traffic Manager, for DNS routing between regions",
          "Network Security Group, for filtering traffic",
          "VPN Gateway, for an encrypted network connection"
        ],
        "c": 1,
        "e": "Azure Traffic Manager is a DNS-based service that routes traffic between instances across multiple regions according to a chosen strategy. Azure Load Balancer spreads traffic within a single region at the network layer, not between regions using DNS. A Network Security Group filters traffic by rules. A VPN Gateway creates an encrypted connection, it doesn't route users between regions."
      },
      {
        "id": "normal_13",
        "category": "Networking",
        "q": "A company wants to spread traffic within a single region across multiple instances of a web app at the network layer. What will it choose?",
        "a": [
          "Azure Traffic Manager, for DNS routing between regions",
          "Azure Load Balancer, for spreading traffic within a region",
          "Azure DNS, only for domain name resolution",
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
          "A VPN Gateway between networks",
          "Virtual Network peering between VNets",
          "ExpressRoute, for private connectivity",
          "Network Security Group, for filtering"
        ],
        "c": 1,
        "e": "Virtual Network peering connects two VNets directly over the Azure backbone network without needing a VPN or the public internet. A VPN Gateway creates an encrypted tunnel, typically between on-premises and Azure. ExpressRoute addresses private connectivity between on-premises and Azure, not connecting two VNets. A Network Security Group filters traffic by rules, it doesn't connect networks."
      },
      {
        "id": "normal_15",
        "category": "Networking",
        "q": "Besides filtering by port, a team wants to add protection for a web app against SQL injection and XSS attacks. What will it add?",
        "a": [
          "A Network Security Group, for filtering traffic by port",
          "A Web Application Firewall, for application-layer protection",
          "A VPN Gateway, for an encrypted network connection",
          "Azure DNS, only for managing domain names"
        ],
        "c": 1,
        "e": "A Web Application Firewall works at the application layer and protects against specific attacks like SQL injection or XSS. A Network Security Group filters traffic at the network layer by port, it doesn't understand HTTP request content. A VPN Gateway encrypts the connection between networks, it doesn't analyze request content. Azure DNS only handles name resolution, it has no security function."
      },
      {
        "id": "normal_16",
        "category": "Networking",
        "q": "A company wants DNS queries for internal private resources to work from an on-premises network connected to Azure, but not be publicly visible. What will it use?",
        "a": [
          "A public Azure DNS zone",
          "An Azure Private DNS zone connected to the VNet",
          "Manually editing the hosts file on clients",
          "A public third-party DNS server"
        ],
        "c": 1,
        "e": "An Azure Private DNS zone resolves names for private resources inside a VNet, and when connected to an on-premises network, it works from there too without being visible from the internet. A public DNS zone would expose internal records to anyone. Manually editing the hosts file doesn't scale and is error-prone. A public third-party DNS server would also mean exposing internal records."
      },
      {
        "id": "normal_17",
        "category": "Networking",
        "q": "A company has an app in one VNet and a database in another VNet in the same region and wants low latency between them without a VPN. What will it choose?",
        "a": [
          "A VPN Gateway between the networks",
          "Virtual Network peering between the VNets",
          "Public IP addresses with NSG rules",
          "ExpressRoute between the networks"
        ],
        "c": 1,
        "e": "Virtual Network peering connects two VNets directly over the Azure backbone network with low latency and no VPN. A VPN Gateway would introduce unnecessary overhead for connecting two networks in the same region. Public IP addresses with NSG rules would route traffic over the public internet. ExpressRoute is meant for connecting on-premises to Azure, not two VNets within Azure."
      },
      {
        "id": "normal_18",
        "category": "Networking",
        "q": "A company wants to centralize and simplify managing network rules across dozens of VNets in the organization. What will it use?",
        "a": [
          "Manually syncing NSG rules on each subnet",
          "Azure Firewall or Azure Policy, for centralized rules",
          "Deleting the rules and relying on default settings",
          "Independent rules for each subnet with no coordination"
        ],
        "c": 1,
        "e": "Azure Firewall provides a centralized gateway for managing rules, and Azure Policy enforces consistent configuration across VNets. Manually syncing dozens of subnets is inefficient and error-prone. Deleting rules and relying on defaults would reduce security. Independent rules with no coordination would only deepen the inconsistency problem."
      },
      {
        "id": "normal_19",
        "category": "Networking",
        "q": "A team wants firewall rules and a VPN Gateway shared across multiple subscriptions instead of duplicating them in each one. What topology will it choose?",
        "a": [
          "A separate firewall in each individual subscription",
          "A hub-and-spoke topology with shared network resources",
          "Leaving out both the firewall and VPN Gateway entirely",
          "Isolated networks per department with no connectivity"
        ],
        "c": 1,
        "e": "A hub-and-spoke topology with central network resources in a hub VNet connected to spoke VNets via peering lets you share costly resources. A separate firewall in each subscription would mean unnecessary duplication. Leaving out the firewall and VPN Gateway would reduce security and connectivity. Isolated networks with no connectivity would prevent sharing resources."
      },
      {
        "id": "normal_20",
        "category": "Networking",
        "q": "An application needs to route all outbound traffic through a central control point with logging, due to a security policy. What will it use?",
        "a": [
          "Direct outbound connections from each VM",
          "Azure Firewall, with rules and central logging",
          "A complete ban on all outbound traffic",
          "Relying on logging by an external party"
        ],
        "c": 1,
        "e": "Azure Firewall as a central point for outbound traffic lets you define rules and log all communication centrally. Direct outbound connections from each VM don't provide unified logging. A complete ban on outbound traffic would prevent the app from functioning. Relying on an external party's logging doesn't give the company its own control and visibility."
      },
      {
        "id": "normal_21",
        "category": "Networking",
        "q": "A company wants to protect a publicly accessible application against DDoS attacks while keeping access for legitimate users. What will it deploy?",
        "a": [
          "A preventive block on all inbound traffic",
          "Azure DDoS Protection with Application Gateway or Front Door",
          "Only NSG rules for filtering network ports",
          "Shutting down the entire app during a suspected attack"
        ],
        "c": 1,
        "e": "Azure DDoS Protection detects and mitigates volumetric attacks in real time, while Application Gateway or Front Door add another layer of protection while keeping access for legitimate users. Blocking all traffic would prevent access for legitimate users too. NSG rules aren't designed to detect volumetric DDoS attacks. Shutting down the app would cause a complete outage for everyone."
      },
      {
        "id": "normal_22",
        "category": "Networking",
        "q": "A team wants traffic between a PaaS web app and a PaaS database to stay inside Azure's private network. What will it use?",
        "a": [
          "The default public endpoints of both services",
          "VNet integration and Private Endpoints for both",
          "The public internet, with SSL encryption",
          "Relying on PaaS's built-in automatic security"
        ],
        "c": 1,
        "e": "VNet integration for App Service together with a Private Endpoint for the database connects both PaaS services over a private network. The default public endpoints would mean traffic passes through a public interface. SSL encryption protects the content, but doesn't address whether traffic passes through public or private endpoints. PaaS services aren't automatically fully isolated without deliberate configuration."
      },
      {
        "id": "normal_23",
        "category": "Networking",
        "q": "A branch office needs to connect to Azure quickly over its existing internet connection without waiting weeks for a dedicated line. What will it choose?",
        "a": [
          "ExpressRoute, for its guaranteed bandwidth",
          "VPN Gateway, with an encrypted internet tunnel",
          "Public IP addresses with no encryption",
          "Physically transporting data on disks"
        ],
        "c": 1,
        "e": "A VPN Gateway can be set up quickly because it uses the existing internet connection and creates an encrypted tunnel. ExpressRoute offers better performance, but setting it up takes weeks to months. Unencrypted public IP addresses would be a security risk. Physically transporting data doesn't address ongoing network connectivity, just a one-time transfer."
      },
      {
        "id": "normal_24",
        "category": "Compute",
        "q": "A company has traffic with bursty load and wants automatic VM scaling without manual administration. What compute model will it choose?",
        "a": [
          "A fixed number of VMs set once and never changed",
          "App Service or Container Apps, with automatic scaling",
          "Manually adding VMs by an administrator as needed",
          "One powerful VM sized for the worst-case scenario"
        ],
        "c": 1,
        "e": "Azure App Service or Container Apps with automatic scaling respond to current load without manual intervention. A fixed number of VMs would either fall short at peak or waste capacity off-peak. Manually adding VMs is exactly the burden the team wants to avoid. One powerful VM sized for the worst case would be needlessly expensive off-peak."
      },
      {
        "id": "normal_25",
        "category": "Compute",
        "q": "A development team wants to test a new app version with a small percentage of traffic before a full rollout, with the ability to roll back quickly. What will it use?",
        "a": [
          "Deploying the new version straight to everyone",
          "Deployment slots in App Service, for gradual rollout",
          "Testing only locally, without real production data",
          "Deleting the old version immediately after the new deployment"
        ],
        "c": 1,
        "e": "Deployment slots let you deploy a new version into a separate slot, gradually shift a small percentage of traffic to it, and quickly switch back if there's a problem. Deploying straight to everyone would risk a bug affecting the entire user base. Testing only locally won't reveal issues specific to the production environment. Deleting the old version immediately would prevent a quick rollback."
      },
      {
        "id": "normal_26",
        "category": "Storage",
        "q": "An application stores large amounts of unstructured data, like photos uploaded by users. Which service will it choose?",
        "a": [
          "Azure Files, for shared network folders",
          "Blob Storage, for unstructured binary data",
          "Table Storage, for structured records",
          "Queue Storage, for message queues"
        ],
        "c": 1,
        "e": "Blob Storage is optimized for storing large amounts of unstructured binary data like images. Azure Files provides shared network folders, better suited for documents shared between servers. Table Storage stores structured NoSQL key-value data. Queue Storage is used for storing messages between application components."
      },
      {
        "id": "normal_27",
        "category": "Storage",
        "q": "A company is migrating an app that needs access to a shared network folder over the SMB protocol, just like on the old server. What will it use?",
        "a": [
          "Blob Storage, for binary objects",
          "Azure Files, for shared SMB network folders",
          "Disk Storage, for VM virtual disks",
          "Table Storage, for structured data"
        ],
        "c": 1,
        "e": "Azure Files provides fully managed shared network folders over the standard SMB protocol, so the app works just like it did with a shared folder on a physical server. Blob Storage is meant for object storage, not emulating a network folder. Disk Storage provides virtual disks for VMs. Table Storage stores structured data, not access like a network folder."
      },
      {
        "id": "normal_28",
        "category": "Storage",
        "q": "Two parts of an application communicate asynchronously, where one sends messages and the other processes them over time. What will they use?",
        "a": [
          "Blob Storage, for storing files",
          "Queue Storage, for a message queue",
          "Disk Storage, for virtual disks",
          "Azure Files, for a network folder"
        ],
        "c": 1,
        "e": "Queue Storage stores messages in a queue that one component fills and another processes over time, enabling asynchronous communication. Blob Storage is for storing files, not message queues. Disk Storage provides virtual disks for VMs. Azure Files is a shared network folder for files, not a message queue mechanism."
      },
      {
        "id": "normal_29",
        "category": "Storage",
        "q": "An application stores millions of simple key-value records and needs fast access without a SQL schema. What will it choose?",
        "a": [
          "Table Storage, for NoSQL key-value records",
          "Blob Storage, for binary objects",
          "Azure SQL Database, for a relational schema",
          "Disk Storage, for virtual disks"
        ],
        "c": 0,
        "e": "Table Storage is a NoSQL store for structured key-value data, optimized for fast access without a fixed schema. Blob Storage is meant for binary objects like files. Azure SQL Database requires a defined relational schema, which goes against the requirement for a schema-less store. Disk Storage provides disks for VMs, not storage for data records."
      },
      {
        "id": "normal_30",
        "category": "Storage",
        "q": "A virtual machine needs attached storage functioning as its system or data disk. What does Azure provide for this?",
        "a": [
          "Blob Storage, for object data",
          "Disk Storage, for VM virtual disks",
          "Queue Storage, for message queues",
          "Table Storage, for structured data"
        ],
        "c": 1,
        "e": "Disk Storage provides virtual disks that function as the system or data disks attached to a virtual machine. Blob Storage is object storage accessible via API, not a directly attachable disk. Queue Storage stores messages between components, it isn't a disk. Table Storage stores structured data, also not a disk format for a VM."
      },
      {
        "id": "normal_31",
        "category": "Storage",
        "q": "Data is replicated three times within a single datacenter, which protects against a disk failure but not against an outage of the whole datacenter. What is this?",
        "a": [
          "GRS, replicating to a remote region",
          "LRS, replicating only within one datacenter",
          "ZRS, replicating across zones in a region",
          "RA-GRS, with read access to a secondary region"
        ],
        "c": 1,
        "e": "LRS (Locally Redundant Storage) replicates data three times within a single datacenter, protecting against a disk failure but not an outage of the whole datacenter. GRS also replicates to a remote region, which protects against more than the scenario describes. ZRS spreads copies across zones within a region, not just within one datacenter. RA-GRS is an extension of GRS, even more robust than the LRS described in the scenario."
      },
      {
        "id": "normal_32",
        "category": "Storage",
        "q": "A company wants its data to survive an outage of an entire datacenter within a region, without needing geographic distance. What will it use?",
        "a": [
          "LRS, replicating only within one datacenter",
          "ZRS, replicating across zones within a region",
          "GRS, replicating to a remote region",
          "Hot tier, as an access level"
        ],
        "c": 1,
        "e": "ZRS replicates data synchronously across multiple availability zones within a single region, surviving an outage of an entire datacenter. LRS only replicates within one datacenter, so a full datacenter outage would threaten the data. GRS replicates to another region, going beyond the requirement. Hot tier is an access frequency level, not a type of geographic redundancy."
      },
      {
        "id": "normal_33",
        "category": "Storage",
        "q": "A company wants its data to survive even a catastrophe that destroys an entire region, by replicating to a distant Azure region. What will it use?",
        "a": [
          "LRS, replicating within one datacenter",
          "ZRS, replicating across zones within a region",
          "GRS, replicating to a remote region",
          "Premium SSD, as a disk type"
        ],
        "c": 2,
        "e": "GRS asynchronously replicates data to a distant paired region, protecting against a catastrophe affecting an entire region. LRS only protects against failure within a single datacenter. ZRS protects against a datacenter outage within a region, not a catastrophe affecting the whole region. Premium SSD is a disk performance tier, not a geographic redundancy mechanism."
      },
      {
        "id": "normal_34",
        "category": "Storage",
        "q": "An application frequently accesses current data and needs the fastest access tier in Blob Storage. What will it choose?",
        "a": [
          "Archive tier, for the cheapest storage",
          "Cool tier, for less frequent access",
          "Hot tier, for frequent and fast access",
          "Cold tier, as a separate level"
        ],
        "c": 2,
        "e": "Hot tier is optimized for frequently accessed data, with the highest storage cost but the lowest access cost. Archive tier is the cheapest for storage, but access takes hours, unsuited for frequent use. Cool tier suits less frequent access. Cold tier as a separate level doesn't exist in Azure Storage's core offering the same way Hot, Cool, and Archive do."
      },
      {
        "id": "normal_35",
        "category": "Storage",
        "q": "A company archives data it accesses once every few years and wants the lowest possible storage cost. What will it choose?",
        "a": [
          "Hot tier, for frequent access",
          "Cool tier, for moderately frequent access",
          "Archive tier, for the lowest storage cost",
          "Premium SSD, for high performance"
        ],
        "c": 2,
        "e": "Archive tier offers the lowest storage cost of all the tiers, suited for very rarely accessed data. Hot tier is optimized for frequent access and has the highest storage cost. Cool tier is a compromise for moderately frequent access, more expensive than Archive. Premium SSD is a high-performance disk for VMs, not an archival tier of Blob Storage."
      },
      {
        "id": "normal_36",
        "category": "Storage",
        "q": "Marketing stores reports it accesses once a month and wants a balance between cost and speed. What will it choose?",
        "a": [
          "Hot tier, for the highest access speed",
          "Cool tier, as a balance between cost and speed",
          "Archive tier, for the lowest cost",
          "LRS, as a type of data redundancy"
        ],
        "c": 1,
        "e": "Cool tier is designed for less frequently accessed data, with lower storage cost than Hot tier but faster access than Archive tier. Hot tier has a higher storage cost, optimal for daily access. Archive tier is the cheapest, but access takes hours. LRS is a type of data redundancy, not an access frequency tier."
      },
      {
        "id": "normal_37",
        "category": "Database",
        "q": "A company is migrating a relational database with tables and SQL queries and wants a managed service without owning a database server. What will it choose?",
        "a": [
          "Cosmos DB, a NoSQL engine option",
          "Azure SQL Database, a managed relational DB",
          "Table Storage, a key-value store",
          "Blob Storage, for binary file storage"
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
          "Cosmos DB, with global distribution",
          "Azure Files, for shared storage",
          "Disk Storage, for VM disks"
        ],
        "c": 1,
        "e": "Cosmos DB is a globally distributed NoSQL database designed for low latency and automatic replication across regions. Azure SQL Database can also be geo-replicated, but it isn't primarily designed for this kind of global low latency as a default trait. Azure Files provides shared network folders, it isn't a database. Disk Storage provides disks for VMs, not a global database."
      },
      {
        "id": "normal_39",
        "category": "Database",
        "q": "A team wants a database with a flexible schema for storing JSON documents with a variable structure. What will it choose?",
        "a": [
          "Azure SQL Database, with a fixed schema",
          "Cosmos DB, with document model support",
          "Disk Storage, for virtual disks",
          "Queue Storage, for message queues"
        ],
        "c": 1,
        "e": "Cosmos DB supports a document data model for JSON with a flexible schema, ideal for data with a variable structure. Azure SQL Database requires a strictly defined relational schema, which goes against the requirement for flexibility. Disk Storage provides disks for VMs, it isn't a database. Queue Storage stores messages between components, not documents."
      },
      {
        "id": "normal_40",
        "category": "Database",
        "q": "A company wants to automatically back up a database and be able to restore it to any point in the last 7 days. What feature will it use?",
        "a": [
          "A manual database export by an administrator",
          "Automated backups with point-in-time restore",
          "A resource lock, to protect the database",
          "A tag, to label the database"
        ],
        "c": 1,
        "e": "Azure SQL Database offers automated backups with point-in-time restore, recovering to any moment within the retention period. A manual export would require regular manual intervention by an administrator. A resource lock protects a resource from deletion, it doesn't address backup and restore to a specific point in time. A tag just describes a resource with metadata, it has no backup function."
      },
      {
        "id": "normal_41",
        "category": "Database",
        "q": "A team needs a database engine compatible with MySQL for an existing application without major code changes. What will it choose?",
        "a": [
          "Cosmos DB, as a global NoSQL database",
          "Azure Database for MySQL, as a managed service",
          "Table Storage, for simple key-value data",
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
          "Azure Monitor, for tracking metrics",
          "Azure Key Vault, for managing secrets",
          "Resource group, as an organizational container",
          "Azure Advisor, for recommendations"
        ],
        "c": 1,
        "e": "Azure Key Vault securely stores sensitive data like keys and passwords, which the application accesses at runtime instead of storing them in the code. Azure Monitor collects metrics and logs and has nothing to do with storing secrets. A resource group is an organizational container for resources. Azure Advisor gives optimization recommendations, it isn't a store for secrets."
      },
      {
        "id": "normal_43",
        "category": "Security",
        "q": "A security team wants a security score and recommendations across the Azure environment, plus threat detection. What will it use?",
        "a": [
          "Microsoft Sentinel, for incident analysis",
          "Defender for Cloud, for scoring and recommendations",
          "Azure Key Vault, for secrets",
          "Resource lock, for protecting resources"
        ],
        "c": 1,
        "e": "Defender for Cloud provides a Secure Score, recommendations for improving security, and threat detection across the environment. Microsoft Sentinel is a SIEM tool for deeper incident analysis, not primarily for scoring configuration. Azure Key Vault stores secrets, it doesn't provide a security score. A resource lock protects a single resource from deletion."
      },
      {
        "id": "normal_44",
        "category": "Security",
        "q": "An analyst needs to centrally collect security data from many sources and investigate incidents using queries. What will they use?",
        "a": [
          "Defender for Cloud, a security score tool",
          "Microsoft Sentinel, for correlation work",
          "Azure Policy, for configuration rules",
          "Azure Advisor, for general recommendations"
        ],
        "c": 1,
        "e": "Microsoft Sentinel is a SIEM and SOAR tool for collecting, correlating, and investigating security data across sources, including automated responses. Defender for Cloud focuses on posture and protecting resources, not extensive incident analysis. Azure Policy enforces configuration rules, it isn't used for investigating incidents. Azure Advisor gives general recommendations, it isn't a security analytics tool."
      },
      {
        "id": "normal_45",
        "category": "Security",
        "q": "A company designs its security so that it automatically trusts nobody and verifies every request. What approach is this?",
        "a": [
          "Defense in depth, as layering multiple defenses",
          "Zero Trust, as the principle of never automatically trusting",
          "Least privilege, as the principle of minimal permissions",
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
          "Zero Trust, a broader security philosophy",
          "Least privilege, granting minimal permissions",
          "Defense in depth, layering multiple defenses",
          "Conditional Access, conditioning access on context"
        ],
        "c": 1,
        "e": "Least privilege is the principle of granting only the minimal necessary permissions, reducing the risk of abuse if an account is compromised. Zero Trust is the broader security philosophy; least privilege is one of its components. Defense in depth means layering defenses, not specifically minimizing permissions. Conditional Access conditions access on circumstances, it doesn't address the scope of granted permissions."
      },
      {
        "id": "normal_47",
        "category": "Security",
        "q": "A team wants encryption certificates to be automatically renewed and centrally managed. What will it use?",
        "a": [
          "A resource lock, to protect a resource",
          "Azure Key Vault, for certificate management",
          "Network Security Group, for filtering",
          "A tag, to describe a resource"
        ],
        "c": 1,
        "e": "Azure Key Vault manages not just keys and secrets but also certificates, including their automatic renewal and centralized management. A resource lock protects a resource from deletion, it doesn't address certificate management. A Network Security Group filters network traffic, unrelated to certificate management. A tag is just a metadata label with no certificate management function."
      },
      {
        "id": "normal_48",
        "category": "Security",
        "q": "A security team wants alerts on suspicious behavior and an automatic response, like blocking an account. What will it use?",
        "a": [
          "Azure Policy, enforcing configuration rules",
          "Sentinel with playbooks, for automatic response",
          "A resource lock, protecting one specific resource",
          "A tag, a descriptive label on a resource"
        ],
        "c": 1,
        "e": "Microsoft Sentinel enables detecting suspicious behavior via analytics rules and an automatic response through playbooks. Azure Policy enforces configuration standards on resources, it doesn't detect user behavior in real time. A resource lock protects a resource from deletion, it doesn't react to suspicious sign-ins. A tag is just a metadata label with no detection function."
      },
      {
        "id": "normal_49",
        "category": "Security",
        "q": "An application accesses a database and the team wants authentication without storing a password anywhere in the code. What will it use?",
        "a": [
          "A connection string with the password in an environment variable",
          "A managed identity, for authentication",
          "Sharing one common password between applications",
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
          "Key Vault Premium tier or Managed HSM",
          "Storing keys directly in the application's code",
          "Sharing keys over encrypted email"
        ],
        "c": 1,
        "e": "Key Vault Premium tier or Managed HSM ensures keys are generated and stored directly in a certified HSM and never leave it. The standard tier uses software-protected keys, not a dedicated HSM. Storing keys in code is a major security risk. Sharing over email creates unnecessary copies of the key outside a secure environment."
      },
      {
        "id": "normal_51",
        "category": "Governance",
        "q": "A manager grants an employee permission to read data in a resource group, but not delete it. What will they use for this?",
        "a": [
          "Azure Policy, for configuration rules",
          "RBAC, with a Reader role at that scope",
          "A resource lock, to protect the resource",
          "A tag, to describe the resource"
        ],
        "c": 1,
        "e": "RBAC assigns a specific role like Reader at a given scope, precisely controlling what that identity is allowed to do. Azure Policy enforces configuration rules on resources, not who has what access. A resource lock prevents deletion for everyone regardless of role. A tag just labels a resource with metadata, with no effect on permissions."
      },
      {
        "id": "normal_52",
        "category": "Governance",
        "q": "A company wants to enforce that all new storage accounts are automatically encrypted. What will ensure this?",
        "a": [
          "RBAC, for granting permissions",
          "Azure Policy, for enforcing configuration rules",
          "Resource group, as an organizational container",
          "Azure Advisor, for recommendations"
        ],
        "c": 1,
        "e": "Azure Policy lets you define rules that are enforced on resources, including blocking the creation of a resource that doesn't meet the rule. RBAC handles who has what permissions, not what properties a resource must have. A resource group is an organizational container. Azure Advisor gives recommendations, it doesn't actively enforce anything."
      },
      {
        "id": "normal_53",
        "category": "Governance",
        "q": "An administrator wants to protect a critical database from accidental deletion by anyone with sufficient permissions. What will they use?",
        "a": [
          "A resource lock, against deletion",
          "Azure Policy, for configuration rules",
          "RBAC, for assigning roles",
          "A tag, to describe the resource"
        ],
        "c": 0,
        "e": "A resource lock adds a protective layer to a resource regardless of a user's RBAC permissions. Azure Policy enforces configuration standards, but isn't primarily meant to protect a single resource from deletion. RBAC determines permissions, but even a user with full access could still delete the resource without a lock. A tag is just a metadata label with no protective function."
      },
      {
        "id": "normal_54",
        "category": "Governance",
        "q": "The finance department wants to recognize costs by project in billing. What will it best use for this?",
        "a": [
          "A resource lock, to protect a resource",
          "A tag, for describing and filtering resources",
          "A management group, for organizing subscriptions",
          "Azure Policy, for enforcing rules"
        ],
        "c": 1,
        "e": "Tags are paired metadata assigned to resources, which can be used to filter billing costs by project. A resource lock protects a resource from deletion and has nothing to do with billing. A management group organizes subscriptions, too coarse-grained for distinguishing projects. Azure Policy enforces rules, it doesn't generate a cost breakdown."
      },
      {
        "id": "normal_55",
        "category": "Governance",
        "q": "A large company with dozens of subscriptions wants to apply the same rules across all of them at once. What will it use?",
        "a": [
          "A resource group in each subscription separately",
          "A management group over all the subscriptions",
          "A tag on individual resources",
          "A resource lock on critical resources"
        ],
        "c": 1,
        "e": "A management group organizes multiple subscriptions into a hierarchy, letting you centrally apply policies to the whole group at once. A resource group only works within a single subscription. A tag just labels resources with metadata, it doesn't enforce rules. A resource lock protects an individual resource, it doesn't apply rules across subscriptions."
      },
      {
        "id": "normal_56",
        "category": "Governance",
        "q": "An external vendor needs to temporarily view the logs of one application, but not change anything else. What permission will you grant them?",
        "a": [
          "The Owner role at subscription level",
          "The Reader role scoped to that resource group",
          "The Global Administrator role",
          "Anonymous public access for everyone"
        ],
        "c": 1,
        "e": "The Reader role at the scope of that resource group gives the vendor the ability to view relevant resources without the right to change anything elsewhere — least privilege in practice. Owner at the subscription level would give much broader access than needed. Global Administrator is an extremely powerful role, disproportionate to the need. Anonymous access would mean anyone could access the logs."
      },
      {
        "id": "normal_57",
        "category": "Governance",
        "q": "A team wants to create a test environment that can be quickly deleted as a whole without affecting production. What will it use?",
        "a": [
          "A separate resource group just for tests",
          "A tag, as a descriptive label for resources",
          "A resource lock, as protection for resources",
          "Azure Policy, as a set of rules"
        ],
        "c": 0,
        "e": "A separate resource group for test resources lets you delete the entire test environment with a single command without affecting resources elsewhere. A tag just labels resources with metadata, it doesn't enable bulk deletion as a whole. A resource lock, by contrast, protects resources from deletion, the opposite of the desired behavior. Azure Policy enforces rules, it doesn't make bulk deletion easier."
      },
      {
        "id": "normal_58",
        "category": "Governance",
        "q": "An auditor wants to find out who made a configuration change on a resource and when, over the past month. What will they review?",
        "a": [
          "Azure Advisor, for recommendations",
          "Activity log, the history of resource actions",
          "A resource lock, protecting a resource",
          "Pricing calculator, for cost estimates"
        ],
        "c": 1,
        "e": "The Activity log records control-plane operations performed on resources, who changed what and when, exactly matching the audit need. Azure Advisor gives optimization recommendations, it doesn't record a history of actions. A resource lock protects a resource, on its own it doesn't provide a history record. The pricing calculator is for estimating costs in advance."
      },
      {
        "id": "normal_59",
        "category": "Governance",
        "q": "A company wants Azure Policy not only to detect non-compliant resources, but to actively remediate missing settings. What will enable this?",
        "a": [
          "The Audit effect, reporting only",
          "DeployIfNotExists, for automatic remediation",
          "The Deny effect, blocking creation",
          "The Append effect, adding fields"
        ],
        "c": 1,
        "e": "The DeployIfNotExists effect automatically deploys missing configuration if the policy finds that a resource lacks that property. The Audit effect only flags the non-compliance in a report, it doesn't actively fix anything. The Deny effect blocks the creation of a non-compliant resource, but doesn't remediate anything on existing resources. The Append effect adds fields to a creation request, it doesn't address remediating existing resources the way DeployIfNotExists does."
      },
      {
        "id": "normal_60",
        "category": "Governance",
        "q": "A company wants to prevent deploying a resource in the wrong region due to regulatory requirements. What best eliminates this risk?",
        "a": [
          "Training administrators and relying on their attention",
          "Azure Policy with a Deny effect for disallowed regions",
          "An email with a list of allowed regions",
          "A weekly manual check after creation"
        ],
        "c": 1,
        "e": "Azure Policy with a Deny effect technically blocks creating a resource outside the allowed regions, eliminating the risk of human error. Training reduces risk, but doesn't guarantee one hundred percent prevention. An email is just informational, with no technical enforcement. A weekly check addresses the problem only after the mistake has happened, not preventively."
      },
      {
        "id": "normal_61",
        "category": "Governance",
        "q": "A company wants to ensure a production network can't be changed, while reading the configuration remains allowed. What type of resource lock will it use?",
        "a": [
          "A CanNotDelete lock, against deletion",
          "A ReadOnly lock, against any change",
          "A Deny policy, for blocking creation",
          "An RBAC Reader role for a specific user"
        ],
        "c": 1,
        "e": "A ReadOnly lock prevents any changes to a resource, while reading remains possible for everyone. A CanNotDelete lock would only prevent deletion, changes would still be possible. A Deny policy blocks creating new resources by rule, it doesn't address protecting an existing resource this way. An RBAC Reader role would restrict specific users, but wouldn't protect the resource as a whole against changes from other users."
      },
      {
        "id": "normal_62",
        "category": "Compute",
        "q": "A company wants a VM with guaranteed performance and uninterrupted operation for a critical production database. What will it choose?",
        "a": [
          "A Spot VM, for its lowest price",
          "A standard or Reserved VM, guaranteed performance",
          "A VM with no backup, for simplicity",
          "An on-premises server outside the cloud"
        ],
        "c": 1,
        "e": "A standard or Reserved VM provides guaranteed performance and uninterrupted operation suited to a critical database. A Spot VM can be evicted at any time, unsuited for critical operation. A VM with no backup would risk data loss on failure. An on-premises server lacks the benefits of cloud elasticity and being managed."
      },
      {
        "id": "normal_63",
        "category": "Compute",
        "q": "A developer wants to host a static website (HTML, CSS, JS) with no backend logic as cheaply as possible. What will they choose?",
        "a": [
          "An Azure Virtual Machine with a web server",
          "Static Web Apps or Blob Storage static website",
          "Azure Kubernetes Service, for orchestration",
          "Azure SQL Database, for data"
        ],
        "c": 1,
        "e": "Static Web Apps or static website hosting in Blob Storage are designed exactly for static content with no backend logic, at low cost. A Virtual Machine would require managing an entire server just for static files. AKS is needlessly complex orchestration for a static site. Azure SQL Database is a database, not website hosting."
      },
      {
        "id": "normal_64",
        "category": "Compute",
        "q": "A team wants to run batch processing of a large volume of data in parallel across many compute nodes. What will it choose?",
        "a": [
          "Azure Batch, for parallel batch processing",
          "Azure Bastion, for remote access",
          "Azure DNS, for managing names",
          "Resource lock, to protect resources"
        ],
        "c": 0,
        "e": "Azure Batch is designed for running parallel batch jobs across large numbers of compute nodes. Azure Bastion addresses secure VM access and has nothing to do with batch processing. Azure DNS manages domain names. A resource lock protects resources from deletion, it doesn't address compute processing."
      },
      {
        "id": "normal_65",
        "category": "Compute",
        "q": "A company wants to deploy virtual desktops for remote employees with access to corporate applications. What will it choose?",
        "a": [
          "Azure Virtual Desktop, for remote desktops",
          "Azure Functions, for short functions",
          "Blob Storage, for storing files",
          "Azure DNS, for managing names"
        ],
        "c": 0,
        "e": "Azure Virtual Desktop provides virtualized desktops and applications accessible remotely, ideal for remote employees. Azure Functions is for short event-driven functions, not user desktops. Blob Storage stores files, it isn't a virtual desktop. Azure DNS only manages domain names."
      },
      {
        "id": "normal_66",
        "category": "Compute",
        "q": "A team wants to deploy a containerized app without having to manage a Kubernetes cluster, but with automatic scaling. What will it choose?",
        "a": [
          "Azure Kubernetes Service, with full cluster management",
          "Azure Container Apps, with serverless container scaling",
          "An Azure Virtual Machine, with manual Docker",
          "Azure Bastion, for VM access"
        ],
        "c": 1,
        "e": "Azure Container Apps lets you deploy containers with serverless automatic scaling without having to manage the Kubernetes cluster itself. AKS requires managing the entire cluster, more than the scenario wants. A VM with manual Docker requires managing the OS and container engine yourself. Azure Bastion addresses VM access, not hosting containers."
      },
      {
        "id": "normal_67",
        "category": "Compute",
        "q": "A company wants to process data streamed in real time from thousands of IoT devices. What will it choose?",
        "a": [
          "Azure Event Hubs, for receiving streamed data",
          "Azure Files, for classic shared storage",
          "Resource lock, to protect resources from deletion",
          "Azure DNS, for managing domain names"
        ],
        "c": 0,
        "e": "Azure Event Hubs is designed for receiving and processing large volumes of streamed data in real time from many sources like IoT devices. Azure Files provides shared network folders, unsuited for streaming data. A resource lock protects resources from deletion. Azure DNS only manages domain names."
      },
      {
        "id": "normal_68",
        "category": "Compute",
        "q": "A developer wants to deploy an API with automatic documentation generation and version management without owning the infrastructure. What will they choose?",
        "a": [
          "Azure API Management, for managing and publishing APIs",
          "An Azure Virtual Machine, with a custom API server",
          "Blob Storage, for storing API definitions",
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
          "A continuously running VM with very high performance",
          "An on-demand VM or cluster, deleted after completion",
          "An on-premises server with fixed capacity",
          "Azure Bastion, for secure remote access"
        ],
        "c": 1,
        "e": "A VM or compute cluster created on demand and deleted after the job finishes minimizes the cost of a one-off compute-intensive task. A continuously running VM would be needlessly costly for one-time use. An on-premises server with fixed capacity lacks cloud flexibility. Azure Bastion addresses VM access, it doesn't address compute processing."
      },
      {
        "id": "normal_70",
        "category": "Compute",
        "q": "A team wants to host the backend of a mobile app with push notifications and offline data sync. What will it choose?",
        "a": [
          "Azure Mobile Apps, part of App Service",
          "Azure Bastion, for remote access",
          "Resource lock, to protect resources",
          "Azure DNS, for managing names"
        ],
        "c": 0,
        "e": "Azure Mobile Apps, part of App Service, provides features like push notifications and offline data sync specifically for mobile backends. Azure Bastion addresses secure VM access, unrelated to a mobile backend. A resource lock protects resources from deletion. Azure DNS only manages domain names."
      },
      {
        "id": "normal_71",
        "category": "Compute",
        "q": "A company wants to deploy an application consistently across multiple cloud environments or on-premises using containers. What will it choose?",
        "a": [
          "Azure Arc-enabled Kubernetes, for consistent management",
          "Azure Bastion, for secure VM access",
          "Resource lock, to protect resources from deletion",
          "A tag, as a descriptive label for resources"
        ],
        "c": 0,
        "e": "Azure Arc-enabled Kubernetes lets you consistently manage and deploy containerized apps across Azure, other clouds, and on-premises. Azure Bastion addresses secure VM access, unrelated to multi-cloud deployment. A resource lock protects resources from deletion. A tag just describes resources with metadata."
      },
      {
        "id": "normal_72",
        "category": "Compute",
        "q": "A team wants to host long-running backend processes and workers that process message queues. What will it choose?",
        "a": [
          "Azure WebJobs, part of App Service",
          "Resource lock, to protect resources",
          "A tag, to describe resources",
          "Azure DNS, for managing names"
        ],
        "c": 0,
        "e": "Azure WebJobs, part of App Service, lets you run long-running backend processes and workers that process message queues in the same environment as the web app. A resource lock protects resources from deletion, unrelated to running processes. A tag just describes resources. Azure DNS manages domain names."
      },
      {
        "id": "normal_73",
        "category": "Monitoring",
        "q": "A company wants to track performance metrics and logs across all its resources in one central place. What will it use?",
        "a": [
          "Azure Advisor, for recommendations",
          "Azure Monitor, for collecting metrics and logs",
          "Resource group, for organizing resources",
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
          "Log Analytics, with the KQL query language",
          "Resource lock, to protect resources",
          "Azure Policy, for rules"
        ],
        "c": 1,
        "e": "Log Analytics is part of Azure Monitor, designed for storing and querying large volumes of logs using the KQL query language. Azure Advisor provides general recommendations, not a log analysis tool. A resource lock protects resources from deletion. Azure Policy enforces configuration standards, it isn't used for searching logs."
      },
      {
        "id": "normal_75",
        "category": "Monitoring",
        "q": "A team wants an alert when CPU usage on a production server exceeds 90%. What will it set up?",
        "a": [
          "Azure Policy, for configuration rules",
          "An alert in Azure Monitor on that metric",
          "A resource lock, to protect a resource",
          "A tag, to describe a resource"
        ],
        "c": 1,
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
          "Only an email notification to the team",
          "An alert wired to an Automation runbook",
          "A resource lock, protecting resources",
          "A tag, describing resources"
        ],
        "c": 1,
        "e": "An alert connected to an Azure Automation runbook lets you trigger an automated action like restarting a service as soon as the condition is met. An email notification alone informs the team, but still requires manual action. A resource lock protects resources from deletion, it doesn't react to alerts. A tag just describes resources with metadata."
      },
      {
        "id": "normal_78",
        "category": "Monitoring",
        "q": "An administrator wants to find the history of all actions taken on a specific resource over the past week. What will they review?",
        "a": [
          "That resource's Activity log",
          "Azure Advisor recommendations",
          "A pricing calculator estimate",
          "Resource lock settings"
        ],
        "c": 0,
        "e": "The Activity log records the history of operations performed on a resource, who changed what and when. Azure Advisor gives optimization recommendations, it doesn't contain a history of actions. The pricing calculator estimates future costs, unrelated to a history of actions. Resource lock settings show the protection status, they don't provide a history of actions."
      },
      {
        "id": "normal_79",
        "category": "Management",
        "q": "A manager wants consolidated recommendations across cost, security, reliability, and performance in one place. What will they use?",
        "a": [
          "Azure Monitor, for collecting metrics",
          "Azure Advisor, for consolidated recommendations",
          "Resource group, for organizing resources",
          "Azure DNS, for managing names"
        ],
        "c": 1,
        "e": "Azure Advisor provides a consolidated overview of recommendations across cost, security, reliability, and performance. Azure Monitor collects metrics and logs, but doesn't provide the same kind of consolidated recommendations. A resource group is an organizational container. Azure DNS only handles domain name resolution."
      },
      {
        "id": "normal_80",
        "category": "Management",
        "q": "An administrator wants to manage Azure via the command line using scriptable commands that work cross-platform. What will they use?",
        "a": [
          "Azure Portal, as a graphical web interface",
          "Azure CLI, as a cross-platform command-line tool",
          "A resource lock, to protect resources from deletion",
          "A tag, as a descriptive label for resources"
        ],
        "c": 1,
        "e": "Azure CLI is a cross-platform command-line tool for scriptable management of Azure resources on Windows, macOS, and Linux. Azure Portal is a graphical web interface, not a command-line tool. A resource lock is a resource protection feature, not a general management tool. A tag just describes resources with metadata."
      },
      {
        "id": "normal_81",
        "category": "Management",
        "q": "A team wants to define infrastructure as code in a declarative JSON file for repeatable deployment. What will it use?",
        "a": [
          "Azure CLI, as a command-line tool",
          "ARM template, as a declarative JSON format",
          "Cloud Shell, as a browser-based environment",
          "Resource lock, to protect resources"
        ],
        "c": 1,
        "e": "An ARM template is a declarative JSON file describing infrastructure, which Azure Resource Manager uses for repeatable deployment. Azure CLI is an imperative tool for interactive management, not a declarative format. Cloud Shell is an environment for running commands, not an infrastructure format. A resource lock protects resources, it doesn't define infrastructure as code."
      },
      {
        "id": "normal_82",
        "category": "Cost",
        "q": "A finance manager wants to track current monthly spend and set up alerts when the budget is exceeded. What will they use?",
        "a": [
          "Azure Advisor, for recommendations",
          "Cost Management, for tracking spend and budgets",
          "Pricing calculator, for estimating before deployment",
          "Azure Policy, for configuration rules"
        ],
        "c": 1,
        "e": "Cost Management tracks actual spend in real time and lets you set budgets with alerts when the limit is exceeded. Azure Advisor gives recommendations, but doesn't offer ongoing tracking of actual spend. The pricing calculator is for estimating cost before deployment, not tracking costs already incurred. Azure Policy enforces configuration rules, not budget tracking."
      },
      {
        "id": "normal_83",
        "category": "Cost",
        "q": "An architect wants to estimate the monthly cost of a specific combination of VMs, storage, and networking before deployment. What will they use?",
        "a": [
          "Cost Management, for tracking incurred costs",
          "Pricing calculator, for estimating before deployment",
          "Azure Advisor, for recommendations",
          "TCO calculator, for comparing with on-premises"
        ],
        "c": 1,
        "e": "The pricing calculator is built exactly for estimating the cost of a specific service configuration before it's deployed. Cost Management tracks actual costs already incurred, not a hypothetical estimate beforehand. Azure Advisor gives recommendations for an existing environment. The TCO calculator compares on-premises costs with the cloud over a longer horizon, not the price of a specific configuration."
      },
      {
        "id": "normal_84",
        "category": "Cost",
        "q": "A team is planning a migration and wants to find out the savings versus maintaining its own infrastructure over a longer horizon. What will it use?",
        "a": [
          "Pricing calculator, for estimating a configuration",
          "TCO calculator, for comparing with on-premises costs",
          "Azure Advisor, for recommendations on an existing environment",
          "Cost Management, for tracking spend"
        ],
        "c": 1,
        "e": "The TCO calculator compares the total cost of running on-premises infrastructure with the cost of an equivalent solution in Azure over a longer horizon. The pricing calculator estimates the cost of a specific Azure configuration, but doesn't compare it with on-premises costs. Azure Advisor gives recommendations for an already-existing Azure environment. Cost Management tracks costs already incurred in Azure."
      },
      {
        "id": "normal_85",
        "category": "Storage",
        "q": "A company wants to store and version container images, from which it deploys applications to AKS. What will it use?",
        "a": [
          "Blob Storage, for object data",
          "Container Registry, for managing images",
          "Azure Files, for shared storage",
          "Table Storage, for structured data"
        ],
        "c": 1,
        "e": "Azure Container Registry is a managed service for storing and managing Docker and OCI container images. Blob Storage is general-purpose object storage, not optimized for versioning images the same way. Azure Files provides shared network folders, not an image registry. Table Storage stores simple structured data and has nothing to do with managing images."
      },
      {
        "id": "normal_86",
        "category": "Storage",
        "q": "A company wants older versions of a file to be automatically preserved for 30 days in case of a user mistake. What will it use?",
        "a": [
          "Lifecycle management, for deleting old data",
          "Blob versioning and soft delete with retention",
          "Higher redundancy like GRS",
          "Switching to Archive tier"
        ],
        "c": 1,
        "e": "Blob versioning preserves prior versions of an object with every change, and soft delete lets you restore deleted objects for a defined period. Lifecycle management is for automatically moving or deleting data by age, not preserving version history. Higher redundancy like GRS protects against infrastructure outages, not accidental file overwrites. Archive tier just changes the price and speed of access."
      },
      {
        "id": "normal_87",
        "category": "Storage",
        "q": "A team wants to securely share a specific file with an external partner for a limited 24-hour window without creating an account. What will it use?",
        "a": [
          "Public access to the entire storage account, permanently",
          "A Shared Access Signature (SAS) token with a time limit",
          "Sharing the account's primary access key",
          "Creating a full account for the partner"
        ],
        "c": 1,
        "e": "A SAS token lets you grant time- and scope-limited access to a specific resource without creating an account. Permanent public access to the entire account would expose all data to anyone. Sharing the primary key would give unlimited access to all data. Creating a full account is administratively heavier for one-off sharing."
      },
      {
        "id": "normal_88",
        "category": "Storage",
        "q": "A company wants to automatically move data older than 90 days to a cheaper tier without manual intervention. What will it use?",
        "a": [
          "A manual monthly transfer by an administrator",
          "A lifecycle management policy, for automatic transfer",
          "Deleting old data without creating a backup",
          "Switching the whole account to a more expensive Premium tier"
        ],
        "c": 1,
        "e": "A lifecycle management policy automatically moves data to a cheaper tier based on defined rules tied to data age. A manual monthly check is time-consuming and prone to being forgotten. Deleting data without a backup could cause data loss. Switching to Premium tier would actually increase costs."
      },
      {
        "id": "normal_89",
        "category": "Compute",
        "q": "A team wants to deploy an application that automatically restarts on failure, without manual administrator intervention. What will provide this?",
        "a": [
          "Manual monitoring by an administrator",
          "A self-healing orchestration mechanism like AKS",
          "Shutting down the application on any problem",
          "A manual restart after a user reports it"
        ],
        "c": 1,
        "e": "A self-healing mechanism, like in Azure Kubernetes Service, automatically detects failure and restarts the application without manual intervention. Manual monitoring requires an administrator to notice the problem and react themselves. Shutting down the app on any problem would worsen availability, not fix it. A manual restart after a user report is a slow, reactive approach."
      },
      {
        "id": "normal_90",
        "category": "Compute",
        "q": "A company wants to host a backend for smart devices sending telemetry and wants central management of connected devices. What will it choose?",
        "a": [
          "Azure DNS, only for domain name resolution",
          "Microsoft Entra Connect, for identity synchronization",
          "Network Security Group, for filtering traffic",
          "Azure Bastion, for secure VM access"
        ],
        "c": 0,
        "e": "Azure IoT Hub is designed exactly for two-way communication and central management of large numbers of connected devices. Blob Storage just stores files and doesn't address device communication. A resource lock protects resources from deletion. Azure DNS only manages domain names and has nothing to do with managing IoT devices."
      },
      {
        "id": "normal_91",
        "category": "Networking",
        "q": "A company wants to connect its local Active Directory with a cloud identity for unified employee sign-in. What will it use?",
        "a": [
          "Azure DNS, only for managing domain names",
          "Azure Firewall, with rules for allowed sources",
          "A resource lock, to protect resources from deletion",
          "A tag, as a descriptive label for resources"
        ],
        "c": 0,
        "e": "Microsoft Entra Connect synchronizes identities between a local Active Directory and Microsoft Entra ID, enabling unified sign-in across environments. Azure DNS only handles domain name resolution. A Network Security Group filters network traffic, unrelated to identity synchronization. Azure Bastion provides VM access, it doesn't address linking identities."
      },
      {
        "id": "normal_92",
        "category": "Networking",
        "q": "A team wants to restrict which public IP addresses can communicate with their Azure environment at all, at the network level. What will it use?",
        "a": [
          "A Network Security Group, with a redirection rule",
          "Application Gateway or Front Door, with HTTPS support",
          "Azure DNS, with a regular CNAME record",
          "A VPN Gateway, with an encrypted tunnel between networks"
        ],
        "c": 1,
        "e": "Azure Firewall lets you define rules that restrict communication to only allowed source IP addresses at the whole-network level. Azure DNS only handles domain name resolution. A resource lock protects resources from deletion, it doesn't address network traffic filtering. A tag just describes resources with metadata."
      },
      {
        "id": "normal_93",
        "category": "Networking",
        "q": "A company wants a web app to automatically redirect HTTP requests to encrypted HTTPS. What will it set up?",
        "a": [
          "A Network Security Group, with a custom routing rule",
          "Application Gateway or Front Door, with redirect support",
          "Azure DNS, only with a CNAME record",
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
          "Just the Network Security Group alone, nothing else",
          "Region autoscaling with Traffic Manager for routing",
          "Just Azure DNS alone, with no other services",
          "Just a VPN Gateway alone, with nothing else"
        ],
        "c": 0,
        "e": "NSG Flow Logs record information about network traffic passing through a Network Security Group, enabling auditing and analysis of where communication originates. A resource lock protects resources from deletion, it doesn't provide traffic logging. A tag just describes resources with metadata. The pricing calculator is for estimating costs, unrelated to network logging."
      },
      {
        "id": "normal_95",
        "category": "Networking",
        "q": "A company wants to automatically scale the number of instances of a web app according to network load across multiple regions. What will it combine?",
        "a": [
          "A public IP with absolutely no restriction",
          "Autoscaling per region plus Traffic Manager",
          "Sharing a link with a few trusted people",
          "Relying only on a strong admin password"
        ],
        "c": 1,
        "e": "Combining per-region autoscaling with Traffic Manager for routing lets you scale capacity according to load while also routing users to the appropriate region. A Network Security Group alone just filters traffic, it doesn't address scaling or routing between regions. Azure DNS alone, with no other services, won't provide scaling. A VPN Gateway alone only addresses connecting networks, not scaling or routing between regions."
      },
      {
        "id": "normal_96",
        "category": "Networking",
        "q": "A team wants to ensure an application's internal admin interface is reachable only from the corporate network, not the public internet. What will it use?",
        "a": [
          "A public IP address with no restriction",
          "A Private Endpoint or NSG rules restricting source IPs",
          "Sharing a link only with trusted people",
          "Relying only on a complex administrator password"
        ],
        "c": 1,
        "e": "A Private Endpoint or NSG rules restricting access to just the corporate IP range technically ensure the interface isn't reachable from the public internet. An unrestricted public IP address would expose the interface to anyone on the internet. Sharing a link only with trusted people doesn't address technical security, the link could leak. Relying on a complex password doesn't prevent the connection attempt itself from outside."
      },
      {
        "id": "normal_97",
        "category": "Database",
        "q": "A company wants to migrate an application using specific PostgreSQL features without major code changes. What will it choose?",
        "a": [
          "Cosmos DB, a global NoSQL database",
          "Database for PostgreSQL, a compatible service",
          "Table Storage, for simple key-value data",
          "Blob Storage, for storing binary files"
        ],
        "c": 1,
        "e": "Azure Database for PostgreSQL is a managed service fully compatible with PostgreSQL, enabling migration with minimal code changes. Cosmos DB is a NoSQL database with a different data model and would require rewriting the app. Table Storage can't handle PostgreSQL-specific queries. Blob Storage is for storing files, not running a relational database."
      },
      {
        "id": "normal_98",
        "category": "Governance",
        "q": "A company wants every newly created resource to automatically require a department-name tag, otherwise the resource can't be created. What will it use?",
        "a": [
          "RBAC, for granting specific permissions",
          "Azure Policy, with a Deny effect enforcing a required tag",
          "A resource lock, protecting a resource from deletion",
          "Activity log, as a record of actions taken"
        ],
        "c": 1,
        "e": "Azure Policy with a Deny effect can enforce that a resource without the required tag is never created at all, guaranteeing consistent tagging from the start. RBAC handles who has what permissions, not what properties a resource must have. A resource lock protects an existing resource from deletion, it doesn't address rules for creating new resources. The Activity log just records actions already taken, it doesn't enforce anything in advance."
      },
      {
        "id": "normal_99",
        "category": "Networking",
        "q": "A company has traffic with bursty load across multiple Azure regions and wants a load balancer that works across regions, not just within one. What does it actually need?",
        "a": [
          "Azure Load Balancer, said to work across regions too",
          "Traffic Manager or Front Door, for routing between regions",
          "Network Security Group, for filtering network traffic",
          "Azure Bastion, for secure VM access"
        ],
        "c": 1,
        "e": "Azure Traffic Manager or Front Door are designed for routing traffic across multiple regions, unlike Load Balancer, which only works within a single region at the network layer. A Network Security Group just filters traffic by rules, it doesn't address routing between regions. Azure Bastion provides VM access and has nothing to do with routing traffic between regions."
      }
    ],
    "heroic": [
      {
        "id": "heroic_0",
        "category": "Cloud",
        "q": "An e-commerce site sees ten times more traffic in November and December than the rest of the year, but for the rest of the year the same capacity would mostly sit idle and expensive. Which solution best fits this pattern?",
        "a": [
          "Buying physical servers powerful enough for peak load and leaving them running all year",
          "Using autoscaling in the public cloud with a consumption-based payment model",
          "Reserving a fixed VM capacity for 3 years with a Reserved Instances discount",
          "Running the app in a private cloud with fixed capacity sized for average load"
        ],
        "c": 1,
        "e": "Autoscaling with a consumption-based (pay-as-you-go) model exactly matches irregular, seasonal load — capacity automatically rises at peak and drops outside it, so the company only pays for actual usage. Physical servers sized for peak would be expensive and idle most of the year. Reserved Instances are good for stable, predictable load, not extreme seasonal swings. Fixed capacity sized for the average wouldn't be enough at peak, costing the company revenue."
      },
      {
        "id": "heroic_1",
        "category": "Cloud",
        "q": "A company has an old internal system that, due to licensing and hardware dependencies, can't be migrated to the cloud, but it wants to build all new customer-facing applications in Azure. What architectural approach does this require?",
        "a": [
          "Running everything purely in the public cloud and rewriting the old system from scratch before launch",
          "Choosing a hybrid architecture connecting the on-premises system with Azure",
          "Running everything purely on-premises, including new apps, for consistency",
          "Migrating the old system to a SaaS solution from a different provider"
        ],
        "c": 1,
        "e": "A hybrid architecture lets you keep the non-migratable system on-premises while building new apps in Azure, connected via something like a VPN or ExpressRoute. Rewriting the old system from scratch would be costly and outside the scenario, which explicitly says migration isn't possible. Running everything on-premises would contradict the requirement to build new apps in Azure. Migrating to a third-party SaaS solution doesn't address the licensing and hardware dependencies described."
      },
      {
        "id": "heroic_2",
        "category": "Reliability",
        "q": "A critical application must stay available even in the unlikely event that an entire Azure region becomes unavailable due to a large-scale regional disaster. What architecture covers this risk?",
        "a": [
          "Deploying across multiple availability zones in one geographic region",
          "Deploying across two or more distant Azure regions with replication",
          "Deploying on a significantly larger VM with more performance in one region",
          "Increasing backup frequency within the same single region"
        ],
        "c": 1,
        "e": "Only deploying across multiple regions (multi-region) with data replication protects against a full regional outage, because the application keeps running elsewhere, beyond the reach of the disaster. Availability zones protect against a datacenter outage, but they're still part of one region, and a disaster affecting the whole region would impact them all at once. A larger VM increases performance, but doesn't address geographic resilience. More frequent backups within the same region would also be unavailable during a regional outage."
      },
      {
        "id": "heroic_3",
        "category": "Governance",
        "q": "A large company with dozens of subscriptions wants to prevent any team from creating extremely expensive VM sizes across the whole organization, not just one subscription. What's the most effective solution?",
        "a": [
          "Set Azure Policy at the level of individual resource groups in each subscription separately",
          "Set Azure Policy at the management group level over all subscriptions",
          "Send an internal memo banning expensive VM sizes via email",
          "Set up an Azure Monitor alert when a cost limit is exceeded"
        ],
        "c": 1,
        "e": "Azure Policy applied at the management group level is enforced across all subscriptions beneath it at once, so there's no need to set the rule separately in each subscription. Setting it at the level of individual resource groups would require repeating the configuration dozens of times and risk gaps in coverage. An internal memo is just a recommendation with no technical enforcement, teams can ignore it. A Monitor alert only warns after a cost has already been incurred, it won't prevent the expensive VM from being created in the first place."
      },
      {
        "id": "heroic_4",
        "category": "Governance",
        "q": "An external vendor needs temporary access to view the logs of one specific application to resolve an incident, but must not have access to any other resources or be able to change them. What permission will you grant them?",
        "a": [
          "Assign the Owner role at the level of the whole subscription",
          "A Reader role scoped only to the resource group where the app runs",
          "Assign the Global Administrator role in Microsoft Entra ID",
          "Allow anonymous public access to the logs via a link"
        ],
        "c": 1,
        "e": "A Reader role assigned exactly at the scope of that resource group lets the vendor view only relevant resources without the right to change anything or see resources elsewhere — least privilege in practice. Owner at the subscription level would give the vendor far broader access and the right to change resources, more than needed. Global Administrator is an extremely powerful role for managing the entire tenant, wildly disproportionate to the need. Anonymous public access would additionally mean anyone could access the logs, not just the vendor."
      },
      {
        "id": "heroic_5",
        "category": "Cost",
        "q": "The finance department needs to see an exact monthly cost breakdown by individual internal projects every month, where those projects share the same subscription and often the same resource groups. What approach enables this?",
        "a": [
          "Creating a separate subscription for each individual internal project",
          "Tagging resources by project and filtering costs in Cost Management",
          "Using Azure Advisor to estimate the cost of individual projects",
          "Relying on the resource group name to clearly identify the project"
        ],
        "c": 1,
        "e": "Consistently tagging resources by project together with Cost Management lets you filter and report costs exactly by tag, even when projects share the same subscription or resource group. Creating a separate subscription per project would work, but it's a much heavier administrative change than the scenario calls for, and the question assumes a shared environment. Azure Advisor gives optimization recommendations, it doesn't provide a cost breakdown by custom project categories. Relying on the resource group name is unreliable if projects share the same resource groups, as the scenario describes."
      },
      {
        "id": "heroic_6",
        "category": "Storage",
        "q": "A photo-sharing app expects millions of images of varying sizes to be uploaded monthly, which will be accessed via web URLs. Which storage is designed for this purpose?",
        "a": [
          "Azure Table Storage, for fast structured access",
          "Azure Blob Storage, for scalable object storage with URL access",
          "Azure Queue Storage, for processing asynchronous message queues",
          "Azure SQL Database, for storing binary data in table columns"
        ],
        "c": 1,
        "e": "Blob Storage is designed exactly for massively scalable storage of unstructured binary objects like images, with direct access via HTTP/HTTPS URL. Table Storage stores structured key-value data, not binary files like photos. Queue Storage is for message queues between application components, not for storing files for end users. Storing millions of binary images directly in a SQL database is an inefficient and expensive solution compared to object storage built exactly for this purpose."
      },
      {
        "id": "heroic_7",
        "category": "Storage",
        "q": "Microservice A generates orders and microservice B processes them over time, but B can be temporarily slower or unavailable without losing orders created in the meantime. What mechanism ensures this?",
        "a": [
          "A direct synchronous HTTP call between A and B with no intermediary",
          "A message queue (Queue Storage) between A and B for asynchronous processing",
          "A shared Blob Storage location where both services write the same file",
          "A shared database table that both services read from and write to simultaneously"
        ],
        "c": 1,
        "e": "A message queue lets service A insert orders independently of whether B is currently available, and B processes them whenever it's ready, with no data loss. A direct synchronous call would fail or block A if B were temporarily unavailable. A shared file in Blob Storage isn't designed for safe concurrent writes and reads in a queue pattern. A shared database table with concurrent access from both services introduces conflict risks and isn't a standard solution for asynchronous communication."
      },
      {
        "id": "heroic_8",
        "category": "Networking",
        "q": "Administrators occasionally need RDP access to production VMs, but security policy prohibits assigning public IP addresses to those VMs. Which solution satisfies this requirement?",
        "a": [
          "A temporary public IP assigned only during access",
          "Azure Bastion, for browser-based access with no public IP",
          "Open port 3389 on the NSG for any source IP",
          "Install a VPN client directly on that VM"
        ],
        "c": 1,
        "e": "Azure Bastion provides secure RDP/SSH access to a VM directly through the browser, without the VM ever needing a public IP address, exactly satisfying the security policy. Temporarily assigning a public IP would still violate the policy banning public IPs on production VMs. Opening port 3389 for any source IP would expose the VM to attack risk from the entire internet, contradicting the security requirements. Installing a VPN client directly on the VM is a nonstandard and needlessly complex solution compared to the purpose-built Bastion service."
      },
      {
        "id": "heroic_9",
        "category": "Compute",
        "q": "A development team wants to deploy a Node.js web app often and quickly, without having to handle OS patching or server scaling manually. Which deployment model best fits this?",
        "a": [
          "IaaS with virtual machines managed manually by the whole team",
          "PaaS like Azure App Service, with a managed runtime and scaling",
          "An on-premises server fully managed by the internal IT department",
          "A physical server located in a third-party colocation datacenter"
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
          "Storing the key in Key Vault, accessed via a managed identity",
          "Storing the key in a publicly accessible README in the repository",
          "Sharing the key between developers over unencrypted email or chat"
        ],
        "c": 1,
        "e": "Azure Key Vault securely stores sensitive data like access keys, which the application accesses at runtime via a managed identity, so the key never appears in the code or the repository. Storing the key as a code comment would expose it to anyone with repository access, including the version history. A public README is an even worse option, since the key would be accessible to anyone on the internet. Sharing it over email or chat is an unencrypted channel prone to leaks, and it doesn't address the application's automatic runtime access either."
      },
      {
        "id": "heroic_11",
        "category": "Networking",
        "q": "A bank needs extremely low latency and high bandwidth to connect its datacenter to Azure, outside the public internet, due to regulatory requirements on transfer privacy. What solution will it choose?",
        "a": [
          "A VPN Gateway over the public internet with encryption",
          "ExpressRoute, with a dedicated private connection",
          "Azure Bastion, for remote access",
          "Public IP addresses with strict NSG rules"
        ],
        "c": 1,
        "e": "ExpressRoute provides a dedicated private physical connection outside the public internet with high bandwidth and low, predictable latency — exactly what the transfer privacy regulation requires. A VPN Gateway encrypts traffic, but still routes it over the public internet, which fails to meet the regulatory requirement to exclude the public internet. Azure Bastion addresses access to individual VMs, not connecting entire datacenters. Public IP addresses with NSG rules still use the public internet and don't meet the requirement for a private connection."
      },
      {
        "id": "heroic_12",
        "category": "Networking",
        "q": "A company's branch office needs to connect to Azure quickly and securely over its existing internet connection, without waiting weeks to set up a dedicated line. Which solution is more suitable?",
        "a": [
          "ExpressRoute, for its guaranteed bandwidth",
          "VPN Gateway, with an encrypted tunnel over the public internet",
          "Public IP addresses without encryption, for speed",
          "Physically transporting data on disks to the datacenter"
        ],
        "c": 1,
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
          "Manually set the same password for every application",
          "Turn on Single sign-on (SSO) across the connected applications",
          "Disable MFA so sign-in is faster",
          "Create multiple accounts per user, one for each application"
        ],
        "c": 1,
        "e": "Single sign-on enables one sign-in that's valid across all the connected applications, exactly solving the repeated password entry problem. Manually setting the same password is a security risk and isn't real SSO, just a shared password. Disabling MFA would reduce security and doesn't address the frequency of signing in between apps at all. Creating multiple accounts per user would make the problem worse, since they'd need to sign in even more often and into more accounts."
      },
      {
        "id": "heroic_16",
        "category": "Identity",
        "q": "The security team wants employees signing in from risky locations or unrecognized devices to verify with an additional factor, while routine sign-in from the corporate network stays simpler. What solution enables this distinction?",
        "a": [
          "Require MFA for absolutely every employee, no exceptions",
          "Set up a Conditional Access policy reacting to location and risk",
          "Completely block access outside the corporate network, no exceptions",
          "Use only a simple password for absolutely every scenario"
        ],
        "c": 1,
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
          "Manually checking and fixing only the existing non-compliant accounts, once",
          "Set Azure Policy with a DeployIfNotExists or Deny effect for encryption",
          "Sending a one-time email asking administrators to remediate it",
          "Deleting all non-compliant storage accounts with no replacement"
        ],
        "c": 1,
        "e": "Azure Policy with the right effect ensures new non-compliant resources are either never created (Deny) or have the missing setting automatically remediated (DeployIfNotExists), and the report can also be used to fix existing accounts — this addresses compliance permanently, not just as a one-off. A manual one-time fix doesn't address future newly created resources, which can violate the policy again. An email is just a recommendation with no technical enforcement and doesn't guarantee future compliance. Deleting non-compliant accounts with no replacement would cause data loss and service disruption, not a sensible solution to a configuration problem."
      },
      {
        "id": "heroic_19",
        "category": "DevOps",
        "q": "A DevOps team wants the same infrastructure (network, VMs, database) to be reliably and repeatedly deployable to both test and production environments with minimal risk of human error. What approach will it choose?",
        "a": [
          "Manually creating resources via the Azure Portal over and over again",
          "Infrastructure as Code via ARM templates or Bicep with parameterization",
          "Copying resources via Azure CLI command by command, with no versioning",
          "Relying on an administrator to remember the exact steps"
        ],
        "c": 1,
        "e": "Infrastructure as Code via ARM templates or Bicep with parameterization enables repeatable, consistent, versioned deployment across environments, minimizing the risk of human error. Manually creating resources through the portal is prone to errors and inconsistencies between environments. CLI commands with no versioning or structure lack the repeatability and auditability that IaC offers. Relying on an administrator's memory is extremely risky and doesn't scale with a growing number of deployments or changes in team membership."
      },
      {
        "id": "heroic_20",
        "category": "Monitoring",
        "q": "A production application occasionally experiences outages, but the team only notices once customers start complaining, not proactively. What solution lets them detect a problem before customers notice it?",
        "a": [
          "Relying on customer feedback as the primary source of information",
          "Proactive alerts in Azure Monitor on key performance indicators",
          "Increasing customer support capacity for faster response",
          "Relying on a monthly manual log review by an administrator"
        ],
        "c": 1,
        "e": "Azure Monitor with alerts configured on key metrics (availability, error rate, response time) lets the team get notified of a problem in real time, before customers notice it. Waiting for customer feedback is the reactive approach the scenario specifically wants to remove. Increasing support capacity only addresses the speed of responding to already-reported problems, not detecting them early. A monthly manual log review is far too slow to catch outages in real time."
      },
      {
        "id": "heroic_21",
        "category": "Security",
        "q": "A security team needs to correlate suspicious events across dozens of different sources (firewalls, identities, applications) and automatically trigger a response, like temporarily blocking an account. What will they best use for this?",
        "a": [
          "Just Azure Monitor on its own, with no other tools at all",
          "Microsoft Sentinel with analytics rules and automated playbooks",
          "Just a resource lock set on critical resources",
          "Regularly reviewing logs manually, one source at a time"
        ],
        "c": 1,
        "e": "Microsoft Sentinel is designed exactly for correlating security data across many sources, and playbooks (connected to Logic Apps) enable an automated response like blocking an account. Azure Monitor alone collects metrics and logs, but lacks built-in security correlation and automated playbooks of the same caliber. A resource lock protects a resource from deletion or modification and has nothing to do with detecting and responding to security incidents. Manually reviewing logs one source at a time would be extremely slow and impractical across dozens of sources."
      },
      {
        "id": "heroic_22",
        "category": "Migration",
        "q": "A company is planning to migrate hundreds of servers to Azure and first needs to find out their current utilization, dependencies between them, and an estimate of monthly costs after migration. What tool will it use as the first step?",
        "a": [
          "Azure Backup, to immediately back up absolutely all the servers",
          "Azure Migrate, to assess the servers before migration",
          "Azure Bastion, for remote access to individual servers",
          "Launching the migration directly with no prior analysis at all"
        ],
        "c": 1,
        "e": "Azure Migrate provides tools for assessing existing infrastructure, its utilization, dependencies between servers, and an estimate of post-migration costs — exactly what's needed as the first step before a large-scale migration. Azure Backup addresses backups, not assessing migration readiness. Azure Bastion provides secure VM access and has nothing to do with migration planning. Launching the migration directly with no analysis would be highly risky due to unknown dependencies and unpredictable costs."
      },
      {
        "id": "heroic_23",
        "category": "Hybrid",
        "q": "An IT department manages servers in Azure, on-premises, and in another cloud, and wants a unified view of status, policies, and compliance across all three environments from one place. What solution enables this?",
        "a": [
          "Three separate tools, one for each environment individually",
          "Azure Arc, to extend Azure management to resources outside Azure",
          "Azure Migrate, to migrate everything into Azure",
          "Ignoring resources outside Azure and managing only those in Azure"
        ],
        "c": 1,
        "e": "Azure Arc extends Azure's management, policy, and monitoring tools to resources outside Azure, including on-premises and other clouds, so everything can be managed from one place. Three separate tools would mean a fragmented view with no unified picture, contradicting the scenario. Azure Migrate addresses moving servers into Azure, not unified management across environments that will never be in Azure. Ignoring resources outside Azure would mean losing visibility into part of the infrastructure that the scenario explicitly wants tracked."
      },
      {
        "id": "heroic_24",
        "category": "Governance",
        "q": "A team wants to ensure a production database can't be accidentally deleted, even by an administrator with full RBAC permissions, until someone deliberately removes the protection. What solution ensures this?",
        "a": [
          "Assign the administrator a lower RBAC role",
          "Set a CanNotDelete resource lock on the database",
          "Rely on the administrator being careful",
          "Use only a tag with a \"Do not delete\" warning"
        ],
        "c": 1,
        "e": "A CanNotDelete resource lock adds a protective layer independent of RBAC permissions — even an administrator with full access must deliberately remove the lock first before they can delete the resource. Lowering the administrator's RBAC role would also restrict their legitimate work with the database, not just protect against accidental deletion. Relying on human carefulness isn't a technical solution and won't prevent a mistake. A tag is just a visual warning with no technical enforcement at all, the administrator could still accidentally delete the database."
      },
      {
        "id": "heroic_25",
        "category": "Security",
        "q": "An application running in Azure App Service needs access to Azure SQL Database without storing credentials anywhere in code or configuration. Which solution enables this most securely?",
        "a": [
          "Storing the connection string with a password in an environment variable",
          "Use App Service's managed identity to authenticate to the database",
          "Sharing one common password across all applications",
          "Encoding the password directly into the application's binary"
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
          "Multiple instances across regions with Traffic Manager for routing",
          "Azure Load Balancer in just one region, for spreading load",
          "Manually redirecting users based on their email domain"
        ],
        "c": 1,
        "e": "Multiple application instances across regions, together with Azure Traffic Manager, enable DNS-based routing of users to the geographically nearest, available instance. A single instance in one region would mean high latency for distant users and no resilience during a regional outage. Azure Load Balancer works at the network layer within a single region, it can't route between multiple geographic regions like Traffic Manager. Manually redirecting based on email domain has nothing to do with a user's geographic location and isn't a scalable or reliable solution."
      },
      {
        "id": "heroic_27",
        "category": "Reliability",
        "q": "A company wants to ensure that even if an entire VM running a web server failed, users would immediately and automatically switch to another working instance with no manual intervention. What solution ensures this?",
        "a": [
          "Running just a single VM with very high performance",
          "Load Balancer with multiple VMs and health probes",
          "Relying on a fast administrator reaction to outages",
          "Backing up the VM once a day, nothing else"
        ],
        "c": 1,
        "e": "Azure Load Balancer with multiple VMs in a backend pool and health probes automatically detects the failure of one instance and redirects traffic to healthy instances with no manual intervention. A single VM with high performance is a single point of failure — if it fails, the application would become completely unavailable. Relying on a fast administrator response is slower and less reliable than an automated mechanism. Daily backups address restoring data after a longer period, not immediately and automatically redirecting traffic during a current outage."
      },
      {
        "id": "heroic_28",
        "category": "DevOps",
        "q": "A development team wants tests to run automatically and the app to deploy to a test environment every time a pull request is approved, with no manual intervention. What approach enables this?",
        "a": [
          "Manual deployment by an administrator after every approved change",
          "An automated CI/CD pipeline running tests and deployment",
          "An email notification telling developers to deploy the code themselves",
          "Deploying once a week regardless of how many changes there are"
        ],
        "c": 1,
        "e": "A CI/CD pipeline connected to the repository automatically runs tests and deployment every time a change is approved, exactly matching the requirement for automation with no manual intervention. Manual deployment by an administrator is the exact opposite of the requested automation and introduces risk of human error and delay. An email notification to developers still requires manual action, so it doesn't provide automation. Deploying once a week regardless of approved changes would slow down delivery and doesn't match the requirement to deploy after every approval."
      },
      {
        "id": "heroic_29",
        "category": "Storage",
        "q": "An application requires that older versions of every file be automatically preserved for 30 days, in case a user accidentally overwrites or deletes one. Which Blob Storage feature enables this?",
        "a": [
          "A lifecycle management policy, for automatically deleting old data",
          "Blob versioning and soft delete with a retention policy",
          "Only higher storage redundancy, like GRS",
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
          "Azure Content Delivery Network (CDN)",
          "Network Security Group, for filtering",
          "Azure Key Vault, for managing keys"
        ],
        "c": 1,
        "e": "Azure CDN caches content on edge nodes worldwide close to end users, significantly reducing the latency of content streamed from central Blob Storage. Azure Bastion addresses secure VM access and has nothing to do with distributing content to users. A Network Security Group filters network traffic by rules and doesn't address caching or speeding up content delivery. Azure Key Vault manages secrets and certificates and has nothing to do with distributing video content."
      },
      {
        "id": "heroic_31",
        "category": "Storage",
        "q": "A team needs an application to securely share a specific file in Blob Storage with an external partner for a limited 24-hour window, without creating an account for the partner. What solution will they use?",
        "a": [
          "Set the entire storage account as permanently publicly accessible",
          "Generate a Shared Access Signature (SAS) token valid for 24 hours",
          "Send the partner the access key for the entire storage account",
          "Create a full user account for the partner in Microsoft Entra ID"
        ],
        "c": 1,
        "e": "A SAS token lets you grant time-limited and scope-limited access to a specific resource (file) without creating an account or sharing the primary access keys. Permanently making the whole account publicly accessible would expose all data to anyone on the internet, far more than the scenario calls for. Sharing the primary access key would give the partner unlimited access to all data in the account, not just one file for 24 hours. Creating a full account is administratively heavier than needed for a one-off, temporary sharing of a single file."
      },
      {
        "id": "heroic_32",
        "category": "Storage",
        "q": "An application stores sensitive customer data, and regulation requires it to be encrypted both in transit and at rest, with the company itself managing the encryption keys. Which solution satisfies this?",
        "a": [
          "Relying only on default encryption managed by Microsoft",
          "Encryption at rest with custom keys stored in Key Vault",
          "Completely disabling encryption for higher system performance",
          "Encrypting data only in transit, not at rest"
        ],
        "c": 1,
        "e": "Encryption at rest with customer-managed keys stored in Key Vault gives the company full control over the encryption keys while keeping data encrypted at rest, exactly matching the regulatory requirement. Default Microsoft-managed encryption does encrypt the data, but doesn't let the company manage its own keys, as the scenario requires. Disabling encryption would directly violate the regulatory requirement to protect sensitive data. Encrypting only in transit would leave data unencrypted at rest, which the regulation also requires covering."
      },
      {
        "id": "heroic_33",
        "category": "Storage",
        "q": "A data team needs to migrate 50 TB of data into Azure Storage, but over the company's internet connection, the transfer would take over a month. Which solution significantly speeds up the migration?",
        "a": [
          "Start the transfer over the slow connection and wait a month",
          "Use Azure Data Box for a physical transfer of data on a mailed device",
          "Split the data into smaller files and transfer them gradually over the same connection",
          "Increase the speed of employees' home internet"
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
          "Use a Private Endpoint for the storage account in that VNet",
          "Relying on the storage account's default settings",
          "Using a public IP address with NSG rules for the account"
        ],
        "c": 1,
        "e": "A Private Endpoint creates a private network interface for the storage account inside the VNet, so communication happens exclusively over the private Azure network and isn't reachable over the public internet, even with knowledge of the access keys. A strong password would protect access, but communication could still pass over the public internet. The storage account's default settings typically allow access via public endpoints. A public IP address with NSG rules still means the storage account has a publicly reachable endpoint, contradicting the requirement for exclusively private access."
      },
      {
        "id": "heroic_35",
        "category": "Networking",
        "q": "A team manages three Azure regions connected in a star topology with a central hub VNet, to which the spoke VNets of individual departments connect. What architectural pattern does this describe?",
        "a": [
          "A full mesh topology with every VNet directly connected to every other",
          "Hub-and-spoke topology with centralized network management",
          "One large flat network with no segmentation",
          "Isolated VNets with no connectivity at all"
        ],
        "c": 1,
        "e": "Hub-and-spoke topology has a central hub VNet (typically with shared services like a firewall or VPN Gateway), to which individual spoke VNets connect, enabling centralized network management and security. A full mesh topology would mean every network directly connected to every other, which is significantly more complex and doesn't match the star structure described. One flat network with no segmentation wouldn't match the multi-region setup with departments described in the scenario. Isolated VNets with no connectivity would prevent the centralized management that a hub-and-spoke solution enables."
      },
      {
        "id": "heroic_36",
        "category": "Networking",
        "q": "An application receives traffic from the internet, and besides basic port filtering, the team wants protection against application-layer attacks like SQL injection or cross-site scripting. What solution will they add?",
        "a": [
          "Only a Network Security Group with port-based rules",
          "A Web Application Firewall (WAF) at the application layer",
          "Only a VPN Gateway, for encrypting network traffic",
          "Only Azure DNS, for managing domain names"
        ],
        "c": 1,
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
          "Manually checking and syncing rules on each subnet",
          "Azure Firewall or Azure Policy, for centralized rules",
          "Deleting all NSG rules and relying on default settings",
          "Creating independent rules for each subnet with no coordination"
        ],
        "c": 1,
        "e": "Azure Firewall provides a centralized gateway for managing network rules, and Azure Policy can enforce consistent NSG configurations across all VNets, addressing the problem of inconsistent manual management. Manually checking and syncing dozens of subnets is exactly the inefficient process the scenario describes as the problem. Deleting all rules and relying on default settings would reduce security, since the defaults may not match the organization's needs. Creating independent rules with no coordination would only deepen the inconsistency problem."
      },
      {
        "id": "heroic_39",
        "category": "Networking",
        "q": "A company needs DNS queries for internal private resources (like an internal database server) to work from an on-premises network connected to Azure too, but they must not be visible from the public internet. What solution will they use?",
        "a": [
          "A public Azure DNS zone for every single record",
          "A Private DNS zone connected to the VNet and on-premises",
          "Manually editing the hosts file on every client",
          "Using a public third-party DNS server"
        ],
        "c": 1,
        "e": "An Azure Private DNS zone resolves names for private resources inside a VNet, and when connected to an on-premises network (via VPN or ExpressRoute), it works from there too without the records being visible from the public internet. A public DNS zone would expose internal records to anyone on the internet, a security risk. Manually editing the hosts file on every client doesn't scale and is extremely error-prone with a larger number of devices. A public third-party DNS server would also mean exposing internal records outside the company's control."
      },
      {
        "id": "heroic_40",
        "category": "Compute",
        "q": "An application running in a Kubernetes cluster (AKS) needs to automatically add more pods and nodes under increased load, and remove them again when load drops, so the company doesn't pay for unused capacity. Which AKS feature enables this?",
        "a": [
          "Manual scaling by an administrator based on a daily check",
          "Horizontal Pod Autoscaler together with Cluster Autoscaler",
          "A fixed number of pods set once and never changed",
          "Shutting down the cluster outside business hours"
        ],
        "c": 1,
        "e": "Horizontal Pod Autoscaler scales the number of pods according to load, and Cluster Autoscaler scales the number of cluster nodes so there's enough capacity for the pods, together automating the whole process up and down with no manual intervention. Manual scaling by an administrator based on a daily check is slow and doesn't react to sudden real-time load swings. A fixed number of pods would either waste capacity at low load or fall short at high load. Shutting down the cluster outside business hours could disrupt operations if the app is needed continuously, and it doesn't address scaling during load within business hours."
      },
      {
        "id": "heroic_41",
        "category": "Compute",
        "q": "A company runs dozens of microservices in containers and needs a failed container to be automatically restarted with no loss of availability for the whole application. What orchestration feature ensures this?",
        "a": [
          "Manually restarting containers by an administrator after a report",
          "The Kubernetes self-healing mechanism, with automatic pod restart",
          "Relying on containers never failing",
          "Running just a single container with no redundancy at all"
        ],
        "c": 1,
        "e": "Self-healing in Kubernetes automatically detects a pod's failure and restarts it or replaces it with a new instance with no manual intervention, preserving the application's availability. Manually restarting by an administrator is slow and doesn't react immediately to failure in production. Relying on containers never failing is an unrealistic assumption in real-world operation with dozens of services. Running just a single container with no redundancy would mean its failure immediately affects the availability of that entire service."
      },
      {
        "id": "heroic_42",
        "category": "Compute",
        "q": "A team wants to deploy a function that runs just once a day at a precisely defined time to process a batch report, with no need to keep a server running the rest of the day. What solution will it choose?",
        "a": [
          "An Azure Virtual Machine running continuously, 24/7",
          "Azure Functions, with a timer trigger",
          "Azure Kubernetes Service, with a permanently running pod",
          "An on-premises server started manually by an administrator"
        ],
        "c": 1,
        "e": "Azure Functions with a timer trigger runs code exactly on a defined schedule (such as once a day) and doesn't run at all outside that time, so you only pay for the actual execution time. An Azure VM running continuously would be needlessly costly, since it would sit idle most of the day. AKS with a permanently running pod would also consume resources continuously, even though the function is only needed once a day. An on-premises server started manually by an administrator requires human intervention and risks the start being forgotten at the right time."
      },
      {
        "id": "heroic_43",
        "category": "Cloud",
        "q": "A startup isn't sure whether its new product will succeed in the market and doesn't want to lock up capital in its own datacenter if the project ends after a few months. Which cloud trait helps it most?",
        "a": [
          "Higher hardware performance compared to on-premises servers",
          "Low upfront investment and the ability to end the project anytime",
          "Better security compared to on-premises solutions in general",
          "Greater control over the physical location of servers"
        ],
        "c": 1,
        "e": "The cloud lets you start with minimal upfront investment and end a project at any time without locking up capital in your own hardware, exactly matching a startup's situation with an uncertain outcome. Higher hardware performance isn't the primary reason in this scenario, where financial flexibility is the main concern. Better security is a possible general advantage of the cloud, but it isn't directly related to uncertainty about the project's future. Greater control over physical location is, by contrast, a trait of on-premises solutions, not an advantage of the cloud in this context."
      },
      {
        "id": "heroic_44",
        "category": "Cloud",
        "q": "An international company wants part of its infrastructure under full control because of sensitive data, but also wants to use the public cloud's scalability for routine customer-facing apps with variable load. Which strategy will it choose?",
        "a": [
          "Running everything exclusively in a private cloud, for consistency",
          "A hybrid strategy combining private and public cloud",
          "Running everything exclusively in the public cloud, with no exceptions",
          "Moving all data, including sensitive data, to an external SaaS"
        ],
        "c": 1,
        "e": "A hybrid strategy lets you keep sensitive data in an environment under the company's full control while also using the public cloud's elasticity for apps with variable load, exactly matching both requirements in the scenario. A purely private cloud wouldn't let you fully leverage the public cloud's scalability for customer-facing apps, as required. A purely public cloud with no distinction wouldn't provide the required full control over sensitive data. Moving all data to an external SaaS provider, including sensitive data, would go directly against the requirement to keep it fully under control."
      },
      {
        "id": "heroic_45",
        "category": "Cost",
        "q": "A company running multiple projects in a shared subscription wants individual project managers to see only their own project's costs, not the whole organization's. What solution enables this without major restructuring?",
        "a": [
          "Cost Management access for all managers at the subscription level",
          "Consistent project-based resource tagging with filtered reports",
          "Sending a monthly summary report for the whole subscription",
          "Creating a new subscription for each project separately"
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
          "Reserved Instances, for stable predictable load",
          "Pay-as-you-go, with no long-term commitment at all",
          "Buying its own physical servers for the datacenter"
        ],
        "c": 1,
        "e": "Reserved Instances offer a substantial discount in exchange for a 1- or 3-year commitment, ideal for stable, predictable load with no risk of disruption. Spot VMs are the cheapest, but Microsoft can evict them at any time, contradicting the requirement for zero risk of disrupting production. Pay-as-you-go with no commitment is flexible, but more expensive than Reserved Instances for stable long-term load. Buying physical servers would mean reverting to a CapEx model and losing cloud benefits like scaling flexibility."
      },
      {
        "id": "heroic_47",
        "category": "Cost",
        "q": "A company wants to process large batch machine learning jobs that can be interrupted at any time and resumed later, and wants to pay as little as possible for compute. Which purchasing model will it choose?",
        "a": [
          "Reserved Instances, for their stable fixed price",
          "Spot VMs, for a lower price with tolerance for interruption",
          "An on-demand VM with no discount or commitment at all",
          "A Premium VM with guaranteed continuous availability"
        ],
        "c": 1,
        "e": "Spot VMs use unused Azure capacity at a significantly lower price, with a risk of interruption, which is acceptable for batch jobs that can be resumed at any time, exactly as the scenario describes. Reserved Instances are good for stable, uninterrupted load, not primarily for the lowest possible price on interruption-tolerant jobs. An on-demand VM with no discount would cost significantly more than Spot VMs for the same type of job. A Premium VM with guaranteed availability addresses a different problem — high availability, not minimizing cost — contradicting the scenario's goal."
      },
      {
        "id": "heroic_48",
        "category": "Reliability",
        "q": "An architecture team is designing a critical system and wants not only to survive a datacenter outage, but also to minimize data loss to a maximum of a few seconds in the event of a regional catastrophe. Which solution best satisfies both requirements?",
        "a": [
          "LRS storage, one copy in a single datacenter",
          "Multi-region deployment with synchronous replication",
          "Daily backups within the company's own region",
          "A single high-performance VM with zero replication"
        ],
        "c": 1,
        "e": "Multi-region deployment with synchronous or near-synchronous replication minimizes both the outage (RTO) and data loss (RPO) to seconds, even in the event of a regional catastrophe. LRS only protects within a single datacenter and doesn't address an outage of the entire region at all. Daily backups would mean up to 24 hours of data loss in a catastrophe, far short of the requirement for a maximum of a few seconds. A single VM with no replication is a single point of failure and doesn't even meet the basic requirement to survive a datacenter outage."
      },
      {
        "id": "heroic_49",
        "category": "Reliability",
        "q": "After defining a disaster recovery plan, a team wants to verify it actually works in practice before a real disaster occurs. What step is necessary for this?",
        "a": [
          "Relying on the plan's documentation being enough alone",
          "Regularly testing failover to the secondary region",
          "Waiting for the first real disaster to improvise",
          "Setting up the plan once and never updating it"
        ],
        "c": 1,
        "e": "Regular test failovers verify that the disaster recovery plan actually works in practice, reveal weaknesses before a real disaster happens, and let the plan be gradually improved. Relying only on documentation with no real-world verification is risky, since a theoretical plan may not work as designed. Waiting for a real disaster with no prior testing increases the risk that the plan fails exactly when it's most needed. Setting up the plan once with no updates ignores changes in infrastructure and applications over time that can invalidate the plan."
      },
      {
        "id": "heroic_50",
        "category": "Governance",
        "q": "A large organization with many teams wants to ensure nobody can bypass central security standards, while also letting individual teams quickly experiment within their own resource groups. What Azure Policy approach will it choose?",
        "a": [
          "Strictly applying all rules at resource group level",
          "Baseline rules at management group level, plus local additions",
          "Having no central rules at all for teams",
          "Banning all new resources without central IT approval"
        ],
        "c": 1,
        "e": "A layered approach with mandatory rules at the management group level ensures baseline security standards can't be bypassed, while additional rules at the resource group level give teams room to quickly experiment within set boundaries. Strictly applying all rules only at the resource group level would risk gaps if some team forgot to set a rule. Having no central rules at all wouldn't ensure standards can't be bypassed, as the scenario requires. Banning any resource creation without approval would completely prevent the rapid experimentation the scenario also requires."
      },
      {
        "id": "heroic_51",
        "category": "Governance",
        "q": "An auditor needs to prove that nobody made an unauthorized configuration change to a critical network resource over the past 90 days. Where will they find this information?",
        "a": [
          "In the Cost Management report for the relevant period",
          "In that resource's Activity log, filtered to the past 90 days",
          "In Azure Advisor's recommendations",
          "In the resource's description directly in the Azure Portal"
        ],
        "c": 1,
        "e": "The Activity log records all control-plane operations performed on a resource, including who made what change and when, exactly the source for an audit verification over any period. A Cost Management report shows costs, not a history of configuration changes. Azure Advisor gives optimization recommendations, it doesn't contain a historical record of actions taken. A resource's description in the portal shows the current configuration state, not a history of changes over recent months."
      },
      {
        "id": "heroic_52",
        "category": "Governance",
        "q": "A company wants to prevent a situation where an administrator accidentally deploys a resource in the wrong region, given regulatory requirements on data location. Which solution best eliminates this risk?",
        "a": [
          "Relying on administrator training and attentiveness",
          "Azure Policy with Deny for disallowed regions",
          "Sending an email listing the allowed regions",
          "A weekly manual check of regions after creation"
        ],
        "c": 1,
        "e": "Azure Policy with a Deny effect technically blocks the creation of any resource outside the allowed regions, eliminating the risk of human error entirely, unlike relying on a person's attentiveness. Training and administrator attentiveness reduce risk, but don't guarantee one hundred percent prevention of human error. An email with a list of allowed regions is just informational, with no technical enforcement it can be ignored or forgotten. A weekly manual check after resource creation addresses the problem only after the mistake has already happened, rather than preventing it."
      },
      {
        "id": "heroic_53",
        "category": "Security",
        "q": "A security team found that several developers have the Owner role on a production subscription, even though their work only requires deploying applications, not managing others' access. Which solution best reduces the risk?",
        "a": [
          "Leaving the current state as is, since the work gets done",
          "Reassessing roles by least privilege, using the Contributor role",
          "Raising every developer's permissions to Global Administrator",
          "Removing all access to the production subscription entirely"
        ],
        "c": 1,
        "e": "Reassessing roles according to the principle of least privilege and granting a role like Contributor (which allows deployment without managing access) reduces the risk of misuse or accidental mistakes, without restricting the work developers actually need to do. Leaving the current state as is preserves needlessly high risk tied to excessive permissions. Raising permissions to Global Administrator would significantly worsen the risk, going exactly the opposite direction from the security recommendation. Removing all access entirely would prevent developers from doing their legitimate work of deploying applications."
      },
      {
        "id": "heroic_54",
        "category": "Security",
        "q": "A company wants encryption keys used for sensitive data to never leave hardware security modules (HSMs) and to meet strict FIPS 140-2 Level 3 regulatory certification. Which Azure service will they use for this?",
        "a": [
          "The standard Azure Key Vault tier, with no HSM support",
          "Azure Key Vault Managed HSM or Premium tier, with HSM support",
          "Storing keys directly in the application's code",
          "Sharing keys between developers over encrypted email"
        ],
        "c": 1,
        "e": "Azure Key Vault Managed HSM or Premium tier with hardware security module support ensures keys are generated and stored directly in a certified HSM and never leave it, meeting strict regulatory requirements. The standard Key Vault tier uses software-protected keys, not a dedicated HSM certified to FIPS 140-2 Level 3, as the scenario requires. Storing keys directly in application code is a major security risk and the exact opposite of secure key management. Sharing keys over email, even encrypted, creates unnecessary copies of the key outside a secure environment and doesn't match the requirement for HSM protection."
      },
      {
        "id": "heroic_55",
        "category": "Security",
        "q": "After a security incident, a company wants to determine the exact timeline of events across firewalls, servers, and applications to understand how the attacker proceeded. What tool will they best use for this?",
        "a": [
          "Azure Advisor, for general optimization tips",
          "Microsoft Sentinel, for correlation across sources",
          "A resource lock set on the affected resources",
          "A Cost Management report for that period"
        ],
        "c": 1,
        "e": "Microsoft Sentinel lets you correlate and analyze logs from many different sources (firewalls, servers, applications) and reconstruct an exact event timeline during an incident investigation. Azure Advisor gives general optimization recommendations, it isn't a tool for forensic incident investigation. A resource lock protects resources from deletion or modification, it provides no data about the course of an attack. A Cost Management report shows financial costs and has no connection to reconstructing a security incident."
      },
      {
        "id": "heroic_56",
        "category": "Reliability",
        "q": "A team found that an application has good response time under normal load, but outages occur during a stress test at ten times the usual load. What architectural approach would reduce the risk of a similar situation in production?",
        "a": [
          "Ignoring the test results as an unlikely case",
          "Auto-scaling architecture, verified by repeated tests",
          "A one-time VM size bump with no further testing",
          "Assuming users will never generate that load"
        ],
        "c": 1,
        "e": "An architecture with automatic scaling, verified through repeated load testing at various levels, prepares the application for unexpected spikes and reduces the risk of an outage in production. Ignoring the test results would leave the risk uncovered, even though the test already revealed the problem. A one-time VM size increase with no further testing doesn't address scalability under even higher or variable load in the future. Relying on users never generating that kind of load is a risky assumption that the load test has already shown to be uncertain."
      },
      {
        "id": "heroic_57",
        "category": "Cost",
        "q": "A company is planning next year's budget and wants to know exactly how much running a new application in Azure will cost before deploying anything, so it can compare architecture alternatives. What tool will they use?",
        "a": [
          "Cost Management, since it tracks costs already incurred",
          "Pricing calculator, for estimating costs before deployment",
          "Azure Advisor, for recommendations on an already-running environment",
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
          "A lifecycle management policy, for automatic transfer over time",
          "Deleting all the old data with no backup at all",
          "Switching the entire account to a more expensive Premium tier"
        ],
        "c": 1,
        "e": "A lifecycle management policy automatically moves data to a cheaper tier (Cool or Archive) according to defined rules based on age or last activity, with no manual intervention. A manual monthly check is time-consuming and prone to being forgotten, exactly the problem automation solves. Deleting data with no backup could cause irreversible loss of information that might still be needed. Switching to Premium tier would actually increase costs, the opposite of the desired reduction for rarely accessed data."
      },
      {
        "id": "heroic_59",
        "category": "Storage",
        "q": "A company is migrating a 5 TB database and needs to minimize production downtime to the shortest possible time, ideally on the order of minutes. What migration approach will it choose?",
        "a": [
          "Shutting down the production database for the whole weekend to copy it",
          "An online migration tool with ongoing synchronization and a cutover",
          "Exporting the data to a CSV file and importing it manually",
          "Migrating with no plan at all and handling problems as they arise"
        ],
        "c": 1,
        "e": "An online migration with ongoing synchronization lets you copy most of the data while the source database keeps running, and only synchronize the final small delta during a brief cutover, minimizing downtime to minutes. Shutting down the database for the whole weekend would cause a much longer outage than the scenario requires. Exporting to CSV and importing manually is a slow process unsuited to 5 TB of data and risks a longer outage as well as errors during manual processing. Migrating with no plan would be highly risky and could lead to a longer outage than acceptable."
      },
      {
        "id": "heroic_60",
        "category": "Storage",
        "q": "A company has an application storing a large volume of structured data (billions of records) needing very fast key-based reads and writes of individual records, with no complex relational queries. Which storage will it choose?",
        "a": [
          "Azure SQL Database, for its strict relational relationships",
          "Table Storage or Cosmos DB, for key-value access",
          "Blob Storage, for its very low storage cost",
          "A local disk attached directly to the virtual machine"
        ],
        "c": 1,
        "e": "Table Storage or Cosmos DB are designed for massively scalable, fast key-based data access with no need for complex relational queries, exactly matching the scenario described. Azure SQL Database is optimized for relational data with relationships and complex queries, which the scenario explicitly doesn't require, and the relational model would be unnecessary overhead here. Blob Storage is meant for binary objects like files, not billions of structured records with fast key-based access. A local disk on a VM wouldn't provide the scalability or reliability needed for that volume of data."
      },
      {
        "id": "heroic_61",
        "category": "Storage",
        "q": "A security team wants to prevent anyone outside the corporate VNet from even attempting to connect to an Azure SQL Database, even with valid credentials. What solution ensures this?",
        "a": [
          "Relying only on a strong database password",
          "Set up a Private Endpoint for the database and disable public access",
          "Use firewall rules allowing all IP addresses, for simplicity",
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
          "Relying on the default public endpoints of both services",
          "VNet integration and Private Endpoints for both PaaS services",
          "The public internet with SSL encryption as sufficient protection",
          "Assuming PaaS services are automatically secure"
        ],
        "c": 1,
        "e": "VNet integration for App Service together with a Private Endpoint for the database lets you connect both PaaS services over a private network, so traffic never leaves the Azure backbone network. Relying on the default public endpoints would mean traffic passes through a public interface, even if it physically stays within the Azure network. SSL encryption protects the content of the traffic, but doesn't address whether the traffic goes through public or private endpoints. The claim that PaaS services are automatically secure with no configuration is mistaken — default settings often include public endpoints that need to be deliberately secured."
      },
      {
        "id": "heroic_63",
        "category": "Networking",
        "q": "A company wants to prevent DDoS attacks on its publicly accessible web application while keeping legitimate user traffic flowing with no delay. What solution will it deploy?",
        "a": [
          "Preventively blocking all inbound traffic",
          "Azure DDoS Protection combined with Application Gateway",
          "Relying only on NSG rules for filtering ports",
          "Shutting down the application during suspected activity"
        ],
        "c": 1,
        "e": "Azure DDoS Protection detects and automatically mitigates volumetric attacks in real time, while Application Gateway or Front Door add another layer of protection and routing, together keeping the app available for legitimate users even during an attack. Preventively blocking all traffic would prevent access for legitimate users too, contradicting the requirement to keep their access. NSG rules filter by ports and IP addresses, but aren't designed to detect and mitigate volumetric DDoS attacks the way a specialized service is. Shutting down the application during an attack would cause a complete outage for all users, a worse outcome than targeted protection."
      },
      {
        "id": "heroic_64",
        "category": "Networking",
        "q": "A company has multiple Azure subscriptions for different departments and wants all of them to share a central firewall and VPN Gateway instead of duplicating these costly resources in each subscription. What architecture will it choose?",
        "a": [
          "A separate firewall and VPN Gateway in each subscription",
          "A hub-and-spoke topology with shared network resources via peering",
          "Completely leaving out both the firewall and VPN Gateway, to save money",
          "Isolated networks per department with no central management"
        ],
        "c": 1,
        "e": "A hub-and-spoke topology with central network resources in a hub VNet, connected to the individual departments' spoke VNets via peering, lets you share costly resources like a firewall and VPN Gateway instead of duplicating them. A separate firewall and VPN Gateway in each subscription would mean unnecessary cost duplication and more complex management, exactly what the company wants to avoid. Completely leaving out the firewall and VPN Gateway would reduce security and connectivity, not a sensible solution to a cost problem. Isolated networks with no central management would prevent resource sharing and complicate management across departments."
      },
      {
        "id": "heroic_65",
        "category": "Networking",
        "q": "An application needs to connect to an external third-party payment gateway outside Azure, but security policy requires all outbound traffic to go through a central control point with logging. What solution ensures this?",
        "a": [
          "Allowing direct outbound connections from every VM with no central control",
          "Routing all outbound traffic through Azure Firewall, with rules and logging",
          "Banning all outbound traffic entirely, which would break the application",
          "Relying on the payment gateway itself to log all communication"
        ],
        "c": 1,
        "e": "Azure Firewall as a central point for outbound traffic lets you define rules and log all outgoing communication centrally, exactly matching a security policy requiring central control. Direct outbound connections from every VM with no central control wouldn't provide unified logging or the ability to centrally enforce rules. Banning all outbound traffic would prevent the application from functioning at all, since it couldn't connect to the payment gateway. Relying on the third-party payment gateway's own logging doesn't give the company control or visibility over its own outbound traffic, as the policy requires."
      },
      {
        "id": "heroic_66",
        "category": "Compute",
        "q": "A team runs a web app with bursty traffic where it's hard to predict the required VM capacity in advance, and wants to minimize the administrative burden of manually managing scaling. Which compute model will it choose?",
        "a": [
          "A fixed number of VMs set once and never changed",
          "App Service or Container Apps, with automatic scaling",
          "Manually adding VMs by an administrator as traffic increases",
          "One extremely powerful VM sized for the worst-case scenario"
        ],
        "c": 1,
        "e": "Azure App Service or Container Apps with automatic scaling respond to current load with no manual intervention, minimizing both administrative burden and the risk of insufficient or excess capacity. A fixed number of VMs would either fall short at peak or waste capacity off-peak, and would additionally require manual adjustment whenever traffic patterns changed. Manually adding VMs is exactly the administrative burden the team wants to avoid. One extremely powerful VM sized for the worst case would be needlessly expensive most of the time, when load doesn't reach peak."
      },
      {
        "id": "heroic_67",
        "category": "DevOps",
        "q": "A development team wants to test a new app version with a small percentage of real production traffic before rolling it out to all users, with the ability to roll back immediately if there's a problem. What deployment pattern will they use?",
        "a": [
          "Deploying the new version straight to all users at once",
          "Deployment slots in App Service, for a gradual rollout",
          "Testing only locally, with no real production data",
          "Deploying the new version and immediately deleting the old one"
        ],
        "c": 1,
        "e": "Deployment slots in Azure App Service let you deploy a new version into a separate slot, gradually shift a small percentage of traffic to it, and immediately switch back to the stable version if there's a problem. Deploying straight to all users would risk a bug's impact hitting the entire user base at once, with no chance for gradual verification. Testing only locally won't reveal problems specific to the production environment and real traffic. Immediately deleting the old version would prevent a quick rollback if the new version had a problem."
      },
      {
        "id": "heroic_68",
        "category": "DevOps",
        "q": "A team wants the whole process to stop and prevent buggy code from reaching production if an automated deployment step fails (such as a failed test). What CI/CD pipeline principle ensures this?",
        "a": [
          "Ignoring test results and deploying even when they fail",
          "A pipeline that halts on the failure of a step like tests",
          "Running deployment in parallel with tests with no waiting",
          "Continuing deployment regardless of the result of any step"
        ],
        "c": 1,
        "e": "A pipeline designed so that the failure of a step (such as failed tests) halts further progress prevents buggy code from reaching production, and is a standard principle of safe CI/CD. Ignoring test results would allow buggy code to be deployed, exactly what we want to avoid. Running deployment in parallel with tests with no waiting could deploy code before discovering it contains a bug. Continuing regardless of the result of any step completely defeats the purpose of automated quality checks in the pipeline."
      },
      {
        "id": "heroic_69",
        "category": "Monitoring",
        "q": "An operations team wants a high-CPU-usage alert to trigger not just an email notification, but also an automatic action like restarting a service or adding instances, with no waiting for a human to act manually. What solution enables this?",
        "a": [
          "Only an email notification, with no further action",
          "A Monitor alert connected to an automated runbook",
          "A manual metrics check by an administrator once an hour",
          "Ignoring high CPU as long as the application is still running"
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
          "A centralized Monitor workbook aggregating data across sources",
          "Relying on each team to monitor only its own application",
          "Disabling monitoring for less critical applications"
        ],
        "c": 1,
        "e": "A centralized Azure Monitor workbook or dashboard can aggregate metrics and logs across many sources and applications into one clear view of the whole infrastructure's health. Maintaining dozens of separate, unconnected dashboards doesn't provide the desired central overview and makes it harder to quickly identify problems across the system. Relying on each team to monitor only its own application creates a risk that broader systemic problems go unnoticed. Disabling monitoring for less critical applications would reduce visibility and could mean a problem originating there shows up only later, elsewhere."
      },
      {
        "id": "heroic_71",
        "category": "Migration",
        "q": "After migrating hundreds of servers to Azure, a team finds that some VMs are significantly oversized and the company is paying needlessly for unused performance. What tool will help them systematically identify this problem?",
        "a": [
          "Azure Bastion, for secure remote VM access",
          "Azure Advisor, with usage-based sizing tips",
          "Azure DNS, for company domain name management",
          "Resource lock, protecting resources from deletion"
        ],
        "c": 1,
        "e": "Azure Advisor analyzes actual resource usage and provides specific right-sizing recommendations for oversized VMs, systematically identifying opportunities to save costs after migration. Azure Bastion addresses secure VM access, it has no function for analyzing usage or recommending sizing. Azure DNS manages domain name resolution and has nothing to do with optimizing compute resource sizing. A resource lock protects resources from deletion or modification, it provides no usage analysis or cost optimization recommendations."
      },
      {
        "id": "heroic_72",
        "category": "Hybrid",
        "q": "A company with thousands of IoT devices in the field, outside Azure, wants to manage them centrally, monitor their security posture, and apply consistent policies to them as if they were native Azure resources. What solution enables this?",
        "a": [
          "Manually managing each device individually, with no tool at all",
          "Azure Arc, to extend Azure management to devices outside Azure",
          "Migrating all the physical devices into Azure as VMs",
          "Ignoring devices outside Azure and managing only those in the cloud"
        ],
        "c": 1,
        "e": "Azure Arc extends Azure's management, policy, and monitoring tools to resources outside Azure, including physical devices in the field, so they can be managed consistently like native Azure resources. Manually managing thousands of devices individually would be extremely inefficient and wouldn't scale. Migrating physical IoT devices into Azure as VMs isn't technically possible, since they're physical devices in the field, not virtualizable servers. Ignoring devices outside Azure would mean losing visibility and control over a significant part of the infrastructure that the scenario specifically wants addressed."
      },
      {
        "id": "heroic_73",
        "category": "Identity",
        "q": "A company wants to ensure that even administrators with the highest permissions must go through an additional approval process to access the most sensitive production resources, rather than having standing access. What solution enables this?",
        "a": [
          "A permanent Owner role for administrators with no restrictions",
          "Privileged Identity Management, for time-limited access",
          "Relying on administrators being careful",
          "Completely banning administrator access to production resources"
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
          "The choice of regions, based on data location requirements",
          "Only the language setting in the user profile",
          "Only the redundancy type of the chosen storage"
        ],
        "c": 1,
        "e": "Choosing Azure regions according to each country's data residency requirements ensures that employee data from that country is stored in compliance with local regulations, and the compliance team can document this based on the actual location of resources. Service pricing tiers do vary between regions, but that doesn't primarily address the regulatory requirement on data location. The language setting in the user profile only affects how the interface is displayed, not the physical location of stored data. The storage redundancy type addresses resilience against an outage, not the question of which country or region the data is legally allowed to reside in."
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
    {"title":"CapEx vs OpEx","text":"On-premises datacenters are Capital Expenditure — you pay upfront for hardware. Cloud is Operational Expenditure — you pay for what you use, when you use it. This is one of the core value propositions of cloud computing on the AZ-900 exam."},
    {"title":"Economies of scale","text":"Because Microsoft buys hardware and datacenter capacity at massive scale, the per-unit cost is lower than what any single company could achieve on its own — and that saving gets passed down to Azure customers."},
    {"title":"High availability vs Disaster recovery","text":"High availability keeps an application running through minor local failures. Disaster recovery is the plan for restoring functionality after a major, region-wide event. They're related but not the same thing — a common exam trap."},
    {"title":"Availability Zones","text":"An Availability Zone is a physically separate location within an Azure region, with its own independent power, cooling, and networking. Most Azure regions have at least three, so a failure in one zone doesn't take down the others."},
    {"title":"Region pairs","text":"Most Azure regions are paired with another region at least 300 miles away in the same geography. If a disaster hits one region, your paired region can take over — and Microsoft prioritizes restoring one region in a pair before the other during a broad outage."},
    {"title":"Resource Groups","text":"A resource group is a logical container for resources that share the same lifecycle. Deleting a resource group deletes everything inside it — which makes it a genuinely dangerous but very convenient cleanup tool."},
    {"title":"Subscriptions vs Management Groups","text":"A subscription is a billing and access boundary. A management group sits above subscriptions purely for organizing governance — like Azure Policy or RBAC — across many subscriptions at once."},
    {"title":"ARM — Azure Resource Manager","text":"Every single request to create, update, or delete a resource in Azure — whether from the Portal, CLI, PowerShell, or an SDK — goes through Azure Resource Manager. It's the one unified control plane behind everything."},
    {"title":"ARM templates = Infrastructure as Code","text":"ARM templates (and Bicep) let you describe your entire infrastructure in a JSON or declarative file. That means environments become repeatable, version-controllable, and far less prone to manual configuration drift."},
    {"title":"Tags","text":"Tags are simple name/value pairs you attach to resources — for example Environment:Production or CostCenter:Marketing. They're one of the main tools for organizing cost reports and automating governance at scale."},
    {"title":"IaaS, PaaS, SaaS","text":"IaaS gives you the raw building blocks (VMs, networking) and you manage everything above the OS. PaaS manages the OS and runtime for you, so you just deploy code. SaaS is a finished product you simply use — like Microsoft 365."},
    {"title":"Shared responsibility model","text":"The more of the stack Microsoft manages (SaaS > PaaS > IaaS), the more security responsibility shifts to Microsoft. But you always remain responsible for your data, identities, and access management — no exceptions."},
    {"title":"Azure Virtual Machines","text":"Azure VMs are the core IaaS compute offering — you choose the OS, size, and configuration, and you're responsible for patching and maintaining the guest OS yourself, unlike with PaaS options."},
    {"title":"Azure App Service","text":"App Service is a fully managed PaaS for hosting web apps, REST APIs, and mobile backends. You just deploy your code — Microsoft handles the underlying servers, patching, and scaling infrastructure."},
    {"title":"Azure Functions","text":"Azure Functions is Azure's serverless compute option — code runs only in response to an event or trigger, and you're billed by execution time and resource usage rather than for an always-on server."},
    {"title":"Azure Kubernetes Service (AKS)","text":"AKS is Azure's managed Kubernetes offering. Microsoft manages the control plane for you, so you focus on deploying and scaling your containerized workloads instead of babysitting Kubernetes infrastructure."},
    {"title":"Blob Storage","text":"Blob Storage is Azure's object storage for unstructured data — images, video, backups, log files. It offers access tiers (Hot, Cool, Archive) so you can balance storage cost against how quickly you need to retrieve the data."},
    {"title":"Storage redundancy — LRS vs GRS","text":"LRS (Locally Redundant Storage) keeps three copies within a single datacenter. GRS (Geo-Redundant Storage) also replicates those copies to a paired region hundreds of miles away — much stronger protection against regional disasters."},
    {"title":"Azure Files vs Blob Storage","text":"Azure Files gives you fully managed file shares accessible over the standard SMB protocol — genuinely useful for lift-and-shift scenarios where an app expects a traditional network drive. Blob Storage doesn't work that way."},
    {"title":"Virtual Networks (VNets)","text":"A VNet is your own private, isolated network inside Azure. Resources inside it can communicate securely, and you control exactly what traffic is allowed in and out via subnets, NSGs, and routing."},
    {"title":"Network Security Groups (NSGs)","text":"An NSG is a basic firewall for your VNet — a set of allow/deny rules based on source, destination, port, and protocol, applied to subnets or individual network interfaces."},
    {"title":"ExpressRoute","text":"ExpressRoute creates a private, dedicated connection from your on-premises network straight into Azure — bypassing the public internet entirely. It's faster and more reliable than a VPN, but also considerably more expensive."},
    {"title":"VPN Gateway","text":"A VPN Gateway creates an encrypted tunnel over the public internet between your on-premises network and Azure. It's the budget-friendly alternative to ExpressRoute for hybrid connectivity."},
    {"title":"Azure Load Balancer vs Application Gateway","text":"Load Balancer works at the network layer (Layer 4) — distributing raw TCP/UDP traffic. Application Gateway works at the web layer (Layer 7) and can make routing decisions based on URL paths, plus provide a built-in web application firewall."},
    {"title":"Azure CDN","text":"A Content Delivery Network caches your static content at edge locations physically close to your users around the world — cutting latency and reducing load on your origin servers."},
    {"title":"Microsoft Entra ID","text":"Microsoft Entra ID (formerly Azure Active Directory) is Azure's cloud identity and access management service. Nearly every security feature on the AZ-900 exam — MFA, Conditional Access, RBAC — is built on top of it."},
    {"title":"Role-Based Access Control (RBAC)","text":"RBAC lets you grant users only the permissions they actually need, scoped to a management group, subscription, resource group, or single resource — a direct implementation of the principle of least privilege."},
    {"title":"Multi-Factor Authentication (MFA)","text":"MFA requires two or more proofs of identity — something you know (a password), something you have (a phone), or something you are (a fingerprint). It's one of the single highest-impact ways to prevent account compromise."},
    {"title":"Conditional Access","text":"Conditional Access lets you enforce rules like 'require MFA when signing in from an unfamiliar location' — applying stricter controls automatically only when the risk signals call for it."},
    {"title":"Zero Trust model","text":"Zero Trust assumes breach and verifies every request explicitly, rather than trusting anything just because it's inside the corporate network perimeter. Its three core principles: verify explicitly, use least-privileged access, assume breach."},
    {"title":"Azure Key Vault","text":"Key Vault is a centralized, secure store for secrets, encryption keys, and certificates — so sensitive values never end up hardcoded in application source code or configuration files."},
    {"title":"Defender for Cloud","text":"Microsoft Defender for Cloud continuously assesses your resources against security best practices and gives you a Secure Score — a single number that tracks how your overall security posture is trending over time."},
    {"title":"Azure Policy","text":"Azure Policy enforces organizational rules — like 'all resources must be in West Europe' or 'storage accounts must use encryption'. Non-compliant resources can be flagged, or even blocked from being created in the first place."},
    {"title":"Azure Blueprints","text":"Blueprints package together templates, policies, and role assignments into one repeatable definition — so you can spin up a fully governed environment that meets compliance standards from the very first deployment."},
    {"title":"Cost Management + Advisor","text":"Azure Cost Management tracks and analyzes your spending, while Azure Advisor proactively recommends ways to cut costs, improve security, and boost performance based on your actual resource usage patterns."},
    {"title":"Service Level Agreements (SLAs)","text":"An SLA is Microsoft's formal, measurable uptime commitment — for example 99.9% availability. That works out to under 9 hours of allowed downtime per year, and Azure offers service credits if it's not met."},
    {"title":"Azure Service Health","text":"Service Health is personalized to your subscription — it tells you specifically which of your resources are affected by an ongoing Azure incident, unlike the general Azure Status page which just reports global outages."},
    {"title":"Scalability — vertical vs horizontal","text":"Vertical scaling (scaling up) means adding more power to an existing machine — more CPU, more RAM. Horizontal scaling (scaling out) means adding more machines. Cloud workloads are generally built to favor scaling out."},
    {"title":"Elasticity","text":"Elasticity is the ability to automatically scale resources up or down to match real-time demand — so you're never stuck paying for idle capacity or getting caught short during a traffic spike."},
    {"title":"Fault tolerance vs redundancy","text":"Redundancy means having duplicate components ready to take over. Fault tolerance is the broader ability of the overall system to keep operating correctly even when one or more of those components actually fails."},
    {"title":"Microsoft Trust Center","text":"The Trust Center is Microsoft's central hub for compliance documentation — covering GDPR, ISO standards, and dozens of other regulatory frameworks Azure has been independently audited against."}
  ],
  "masteryTracks": [
    {
      "id": "cloudConcepts",
      "name": "Cloud Concepts",
      "icon": "☁️",
      "categories": ["Cloud concepts", "Cloud models", "Cloud", "Reliability"]
    },
    {
      "id": "coreServices",
      "name": "Core Azure Services",
      "icon": "🧱",
      "categories": ["Architecture", "Compute", "Networking", "Storage", "Databases", "Database", "Hybrid"]
    },
    {
      "id": "securityGovernance",
      "name": "Security, Identity & Governance",
      "icon": "🛡️",
      "categories": ["Identity", "Governance", "Security"]
    },
    {
      "id": "managementMonitoring",
      "name": "Management & Monitoring",
      "icon": "📊",
      "categories": ["Cost", "Management", "Monitoring", "DevOps", "Migration"]
    }
  ],
  "masteryBaseCost": 12,
  "streakMilestones": [
    { "day": 3, "shards": 10 },
    { "day": 7, "shards": 20 },
    { "day": 14, "shards": 35 },
    { "day": 30, "shards": 75 },
    { "day": 60, "shards": 150 },
    { "day": 100, "shards": 300 }
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
  }
};
