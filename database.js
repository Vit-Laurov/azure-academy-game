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
        "q": "What is delivering computing services over the internet with pay-as-you-go pricing called?",
        "a": [
          "Cloud computing",
          "Resource locking",
          "Identity federation",
          "Disk encryption"
        ],
        "c": 0,
        "e": "Cloud computing delivers servers, storage and software over the internet, billed by usage. Resource locking, identity federation and disk encryption are individual features, not the overall model."
      },
      {
        "id": "easy_1",
        "category": "Cloud models",
        "q": "Which cloud service model gives you VMs and storage but leaves OS management to you?",
        "a": [
          "Role-based access control",
          "Infrastructure as a Service",
          "Geo-redundant storage",
          "Azure Resource Manager templates"
        ],
        "c": 1,
        "e": "IaaS rents you raw infrastructure (VMs, disks, networks) while you manage the OS and apps. RBAC, GRS and ARM templates are an access system, a redundancy option and a deployment format, not service models."
      },
      {
        "id": "easy_2",
        "category": "Cloud models",
        "q": "Which cloud service model lets developers deploy code while the provider manages the OS and runtime?",
        "a": [
          "Locally redundant storage",
          "Network security group",
          "Platform as a Service",
          "Conditional Access policy"
        ],
        "c": 2,
        "e": "PaaS gives you a managed platform: you bring code and data, Microsoft runs the OS, patching and runtime. LRS, NSGs and Conditional Access policies are storage, networking and identity features."
      },
      {
        "id": "easy_3",
        "category": "Cloud models",
        "q": "Which cloud service model delivers a finished application, like email, used through a browser?",
        "a": [
          "Azure Kubernetes Service",
          "Zone-redundant storage",
          "Microsoft Defender for Cloud",
          "Software as a Service"
        ],
        "c": 3,
        "e": "SaaS is complete software you just use, such as Microsoft 365 email. AKS, ZRS and Defender for Cloud are container, storage and security services."
      },
      {
        "id": "easy_4",
        "category": "Cloud concepts",
        "q": "What type of cloud is owned by a provider and shared by many customers over the internet?",
        "a": [
          "Public cloud",
          "Azure Monitor",
          "Resource lock",
          "Blob Storage"
        ],
        "c": 0,
        "e": "A public cloud such as Azure is run by the provider and shared by many customers. Azure Monitor, resource locks and Blob Storage are services inside a cloud, not cloud types."
      },
      {
        "id": "easy_5",
        "category": "Cloud concepts",
        "q": "What type of cloud is used exclusively by a single organization?",
        "a": [
          "Azure Policy",
          "Private cloud",
          "VPN Gateway",
          "Azure DNS"
        ],
        "c": 1,
        "e": "A private cloud serves only one organization. Azure Policy, VPN Gateway and Azure DNS are a governance tool, a network service and a DNS service."
      },
      {
        "id": "easy_6",
        "category": "Cloud concepts",
        "q": "What is it called when on-premises infrastructure and a public cloud work together?",
        "a": [
          "Disk Storage",
          "Azure Advisor",
          "Hybrid cloud",
          "Azure CLI"
        ],
        "c": 2,
        "e": "A hybrid cloud combines on-premises (private) resources with the public cloud. Disk Storage, Azure Advisor and Azure CLI are a storage type, a recommendation service and a command-line tool."
      },
      {
        "id": "easy_7",
        "category": "Cost",
        "q": "What is buying servers upfront for your own datacenter called?",
        "a": [
          "Single sign-on (SSO)",
          "Virtual network peering",
          "Geo-redundancy (GRS)",
          "Capital expenditure (CapEx)"
        ],
        "c": 3,
        "e": "CapEx is a large upfront spend on physical assets like servers. SSO, peering and GRS are identity, networking and storage features, not types of expense."
      },
      {
        "id": "easy_8",
        "category": "Cost",
        "q": "What type of expense is a monthly cloud bill for services you used?",
        "a": [
          "Operational expenditure (OpEx)",
          "Role-based access control (RBAC)",
          "Availability zone",
          "Network security group (NSG)"
        ],
        "c": 0,
        "e": "OpEx is ongoing spending on services as you use them, like a monthly Azure bill. RBAC, availability zones and NSGs are access, resilience and network-filtering concepts."
      },
      {
        "id": "easy_9",
        "category": "Cost",
        "q": "What is the cloud pricing model where you pay only for what you use?",
        "a": [
          "Principle of least privilege",
          "Consumption-based model",
          "Vertical scaling",
          "Infrastructure as code"
        ],
        "c": 1,
        "e": "In the consumption-based model you are billed for the resources you actually use. Least privilege, vertical scaling and infrastructure as code are security, scaling and deployment ideas."
      },
      {
        "id": "easy_10",
        "category": "Cloud concepts",
        "q": "Which cloud benefit lets you add or remove resources to match demand?",
        "a": [
          "Data encryption",
          "Authentication",
          "Scalability",
          "Authorization"
        ],
        "c": 2,
        "e": "Scalability means adjusting resources up or down to match demand. Data encryption, authentication and authorization protect data, verify identity and control access."
      },
      {
        "id": "easy_11",
        "category": "Cloud concepts",
        "q": "What is it called when resources scale out and back in automatically as load changes?",
        "a": [
          "Virtualization",
          "Replication",
          "Authorization",
          "Elasticity"
        ],
        "c": 3,
        "e": "Elasticity is automatic scaling that follows the load in both directions. Virtualization, replication and authorization concern hardware abstraction, data copies and access control."
      },
      {
        "id": "easy_12",
        "category": "Reliability",
        "q": "What is the ability of a service to stay up and reachable with minimal downtime?",
        "a": [
          "High availability",
          "Infrastructure as code",
          "Conditional Access",
          "Identity federation"
        ],
        "c": 0,
        "e": "High availability keeps a service running with as little downtime as possible. Infrastructure as code, Conditional Access and identity federation are about deployment, sign-in rules and trusted identities."
      },
      {
        "id": "easy_13",
        "category": "Reliability",
        "q": "What is restoring services in another location after a major outage, like a datacenter fire?",
        "a": [
          "Conditional Access",
          "Disaster recovery",
          "Pricing calculator",
          "Azure Kubernetes Service"
        ],
        "c": 1,
        "e": "Disaster recovery brings systems back after a major incident, often in another location. Conditional Access, the Pricing calculator and AKS handle sign-in rules, cost estimates and containers."
      },
      {
        "id": "easy_14",
        "category": "Architecture",
        "q": "In Azure, what is a geographic area containing one or more datacenters called?",
        "a": [
          "Azure CLI",
          "Azure Files",
          "Azure region",
          "Cloud Shell"
        ],
        "c": 2,
        "e": "An Azure region is a geographic area with one or more datacenters, such as West Europe. Azure CLI, Azure Files and Cloud Shell are management tools and storage, not locations."
      },
      {
        "id": "easy_15",
        "category": "Architecture",
        "q": "What are physically separate datacenters within one Azure region called?",
        "a": [
          "Management groups",
          "Network security groups",
          "Resource tags",
          "Availability zones"
        ],
        "c": 3,
        "e": "Availability zones are separate datacenters with their own power and networking inside one region. Management groups, NSGs and tags organize, filter and label resources."
      },
      {
        "id": "easy_16",
        "category": "Management",
        "q": "What logical container groups related Azure resources so they can be managed together?",
        "a": [
          "Resource group",
          "Azure Functions",
          "Conditional Access",
          "Microsoft Purview"
        ],
        "c": 0,
        "e": "A resource group holds related resources that share a lifecycle and can be managed or deleted together. Azure Functions, Conditional Access and Purview are compute, identity and data governance services."
      },
      {
        "id": "easy_17",
        "category": "Management",
        "q": "Which Azure unit acts as a billing and access boundary for resource groups?",
        "a": [
          "Availability zone",
          "Subscription",
          "Azure Functions",
          "Azure Monitor"
        ],
        "c": 1,
        "e": "A subscription is the billing and access boundary that contains resource groups. Availability zones, Azure Functions and Azure Monitor are a resilience concept, serverless compute and monitoring."
      },
      {
        "id": "easy_18",
        "category": "Management",
        "q": "What do you use to apply policies and access to many subscriptions at once?",
        "a": [
          "Storage tiers",
          "Virtual networks",
          "Management groups",
          "Resource tags"
        ],
        "c": 2,
        "e": "Management groups sit above subscriptions, so policies and access set on them apply to all subscriptions below. Storage tiers, virtual networks and resource tags are storage, networking and labelling concepts."
      },
      {
        "id": "easy_19",
        "category": "Identity",
        "q": "Which Microsoft cloud service manages identities, sign-ins and access to applications?",
        "a": [
          "Azure Storage Explorer",
          "Azure Virtual Network",
          "Azure Cost Management",
          "Microsoft Entra ID"
        ],
        "c": 3,
        "e": "Microsoft Entra ID (formerly Azure AD) is the cloud identity and access service. Storage Explorer, Virtual Network and Cost Management handle storage browsing, networking and spending."
      },
      {
        "id": "easy_20",
        "category": "Identity",
        "q": "What is the process of proving you are who you claim to be?",
        "a": [
          "Authentication",
          "Replication",
          "Encryption",
          "Load testing"
        ],
        "c": 0,
        "e": "Authentication verifies identity, for example with a password. Replication, encryption and load testing are about copying data, protecting it and measuring performance."
      },
      {
        "id": "easy_21",
        "category": "Identity",
        "q": "After sign-in, what is deciding what a user is allowed to do called?",
        "a": [
          "Replication",
          "Authorization",
          "Load testing",
          "Encryption"
        ],
        "c": 1,
        "e": "Authorization decides which actions a signed-in user may perform. Replication, load testing and encryption concern data copies, performance and data protection."
      },
      {
        "id": "easy_22",
        "category": "Identity",
        "q": "What is it called when signing in needs a password plus a code from your phone?",
        "a": [
          "Azure Container Instances (ACI)",
          "Infrastructure as code",
          "Multi-factor authentication",
          "Geo-redundant storage"
        ],
        "c": 2,
        "e": "MFA requires two or more proofs of identity, such as a password and a phone code. ACI, infrastructure as code and GRS are a container service, a deployment practice and a storage redundancy option."
      },
      {
        "id": "easy_23",
        "category": "Identity",
        "q": "Which Entra ID feature applies sign-in rules based on signals like location or device?",
        "a": [
          "Archive storage tier",
          "Azure Service Health",
          "Virtual network peering",
          "Conditional Access"
        ],
        "c": 3,
        "e": "Conditional Access evaluates signals such as location, device or risk and then allows, blocks or requires MFA. The Archive tier, Service Health and peering are storage, outage reporting and networking features."
      },
      {
        "id": "easy_24",
        "category": "Governance",
        "q": "Which system grants users specific permissions to Azure resources at a chosen scope?",
        "a": [
          "Role-based access control (RBAC)",
          "Geo-redundant storage (GRS)",
          "Azure Virtual Desktop (AVD)",
          "Infrastructure as a Service (IaaS)"
        ],
        "c": 0,
        "e": "Azure RBAC assigns roles (permissions) to users at a scope such as a resource group. GRS, AVD and IaaS are a redundancy option, a desktop service and a cloud service model."
      },
      {
        "id": "easy_25",
        "category": "Governance",
        "q": "Which service enforces rules on resources, for example blocking non-compliant configurations?",
        "a": [
          "Azure Cosmos DB",
          "Azure Policy",
          "Azure ExpressRoute",
          "Azure Functions"
        ],
        "c": 1,
        "e": "Azure Policy evaluates resources against rules and can deny or flag non-compliant ones. Cosmos DB, ExpressRoute and Azure Functions are a database, a connectivity service and a compute service."
      },
      {
        "id": "easy_26",
        "category": "Governance",
        "q": "What prevents a critical resource from being accidentally deleted or modified?",
        "a": [
          "Blob Storage",
          "Azure Functions",
          "Resource lock",
          "VPN Gateway"
        ],
        "c": 2,
        "e": "A resource lock (CanNotDelete or ReadOnly) blocks deletion or changes even for users with permissions. Blob Storage, Azure Functions and VPN Gateway are storage, compute and networking services."
      },
      {
        "id": "easy_27",
        "category": "Governance",
        "q": "What name-value label do you attach to resources to organize them and track costs?",
        "a": [
          "Cloud Shell",
          "Azure Files",
          "Azure DNS",
          "Resource tag"
        ],
        "c": 3,
        "e": "Tags are name-value pairs such as project=alpha, used for organizing and cost reporting. Cloud Shell, Azure Files and Azure DNS are a browser shell, a file service and name resolution."
      },
      {
        "id": "easy_28",
        "category": "Monitoring",
        "q": "Which service collects metrics and logs and sends alerts, for example on high CPU?",
        "a": [
          "Azure Monitor",
          "Azure Policy",
          "Azure Files",
          "Blob Storage"
        ],
        "c": 0,
        "e": "Azure Monitor collects metrics and logs and triggers alerts. Azure Policy, Azure Files and Blob Storage handle governance rules and storage, not monitoring."
      },
      {
        "id": "easy_29",
        "category": "Monitoring",
        "q": "Which tool lets you query collected logs with the Kusto Query Language (KQL)?",
        "a": [
          "Azure Functions",
          "Log Analytics",
          "Azure Data Box",
          "Conditional Access"
        ],
        "c": 1,
        "e": "Log Analytics in Azure Monitor runs KQL queries over collected logs. Azure Functions, Data Box and Conditional Access are serverless compute, offline data transfer and sign-in rules."
      },
      {
        "id": "easy_30",
        "category": "Management",
        "q": "Which free service gives personalized recommendations on cost, security and reliability?",
        "a": [
          "Azure Functions",
          "Azure File Sync",
          "Azure Advisor",
          "Microsoft Entra ID"
        ],
        "c": 2,
        "e": "Azure Advisor analyzes your environment and recommends improvements in cost, security, reliability, performance and operations. Azure Functions, Azure File Sync and Entra ID are compute, file synchronization and identity."
      },
      {
        "id": "easy_31",
        "category": "Cost",
        "q": "Which service shows current Azure spending and lets you set budgets and alerts?",
        "a": [
          "Azure Virtual Desktop",
          "Microsoft Purview",
          "Conditional Access",
          "Cost Management"
        ],
        "c": 3,
        "e": "Microsoft Cost Management shows actual spending and supports budgets and alerts. Azure Virtual Desktop, Purview and Conditional Access are hosted desktops, data governance and sign-in rules."
      },
      {
        "id": "easy_32",
        "category": "Cost",
        "q": "Which free Azure tool estimates the monthly cost of services before you deploy them?",
        "a": [
          "Pricing calculator",
          "Microsoft Entra ID",
          "Azure Virtual Network",
          "Availability zone"
        ],
        "c": 0,
        "e": "The Pricing calculator estimates the cost of the services you pick before deployment. Entra ID, Virtual Network and availability zones are identity, networking and resilience concepts that don't estimate prices."
      },
      {
        "id": "easy_33",
        "category": "Compute",
        "q": "Which Azure compute service gives you full control over the operating system?",
        "a": [
          "Azure Blob Storage",
          "Azure Virtual Machines",
          "Microsoft Defender for Cloud",
          "Azure Cost Management"
        ],
        "c": 1,
        "e": "Azure Virtual Machines are IaaS: you choose and manage the OS and software. Blob Storage, Defender for Cloud and Cost Management are storage, security and cost tools."
      },
      {
        "id": "easy_34",
        "category": "Compute",
        "q": "Which PaaS service hosts web apps and APIs without you managing servers?",
        "a": [
          "Azure ExpressRoute",
          "Azure Policy",
          "Azure App Service",
          "Log Analytics"
        ],
        "c": 2,
        "e": "Azure App Service is a managed platform for web apps and APIs. ExpressRoute, Azure Policy and Log Analytics are connectivity, governance and log-query services."
      },
      {
        "id": "easy_35",
        "category": "Compute",
        "q": "Which serverless service runs small pieces of code in response to events?",
        "a": [
          "Azure Files",
          "Resource locks",
          "Resource tags",
          "Azure Functions"
        ],
        "c": 3,
        "e": "Azure Functions runs code when triggered by events and bills only for execution. Azure Files, resource locks and tags are file shares, deletion protection and labels."
      },
      {
        "id": "easy_36",
        "category": "Compute",
        "q": "Which service runs a single container quickly without managing VMs or a cluster?",
        "a": [
          "Azure Container Instances",
          "Azure Virtual Network",
          "Microsoft Defender for Cloud",
          "Azure Resource Manager"
        ],
        "c": 0,
        "e": "Azure Container Instances (ACI) runs containers on demand with no VM or cluster to manage. Virtual Network, Defender for Cloud and Resource Manager are networking, security and the deployment layer."
      },
      {
        "id": "easy_37",
        "category": "Compute",
        "q": "Which service orchestrates many containers with automatic scaling and self-healing?",
        "a": [
          "Microsoft Defender for Cloud",
          "Azure Kubernetes Service",
          "Microsoft Entra Connect",
          "Azure Storage Explorer"
        ],
        "c": 1,
        "e": "Azure Kubernetes Service (AKS) is managed Kubernetes for orchestrating many containers. Defender for Cloud, Entra Connect and Storage Explorer are security, identity sync and storage tools."
      },
      {
        "id": "easy_38",
        "category": "Networking",
        "q": "What provides a private, isolated network for your Azure resources?",
        "a": [
          "Azure Cost Management",
          "Microsoft Entra ID",
          "Azure Virtual Network",
          "Azure Kubernetes Service"
        ],
        "c": 2,
        "e": "An Azure Virtual Network (VNet) is your private network in Azure where resources communicate securely. Cost Management, Entra ID and AKS are cost, identity and container services."
      },
      {
        "id": "easy_39",
        "category": "Networking",
        "q": "What do you call a smaller address range carved out of a virtual network?",
        "a": [
          "Resource lock",
          "Cloud Shell",
          "Storage account",
          "Virtual subnet"
        ],
        "c": 3,
        "e": "A subnet divides a VNet's address space into smaller segments, for example for web and database tiers. Resource locks, Cloud Shell and storage accounts are governance, management and storage concepts."
      },
      {
        "id": "easy_40",
        "category": "Networking",
        "q": "What filters inbound and outbound traffic to Azure resources by port and IP address?",
        "a": [
          "Network security group",
          "Azure Cost Management",
          "Azure Kubernetes Service",
          "Microsoft Purview"
        ],
        "c": 0,
        "e": "A network security group (NSG) holds allow/deny rules by port, protocol and IP address. Cost Management, AKS and Purview handle spending, containers and data governance."
      },
      {
        "id": "easy_41",
        "category": "Networking",
        "q": "Which service connects an on-premises network to Azure through an encrypted tunnel over the internet?",
        "a": [
          "Azure Advisor",
          "VPN Gateway",
          "Blob Storage",
          "Azure Functions"
        ],
        "c": 1,
        "e": "VPN Gateway creates encrypted IPsec tunnels over the public internet. Azure Advisor, Blob Storage and Azure Functions are recommendations, storage and serverless compute."
      },
      {
        "id": "easy_42",
        "category": "Networking",
        "q": "Which service gives a private, dedicated connection to Azure that bypasses the public internet?",
        "a": [
          "Azure CLI",
          "Cosmos DB",
          "ExpressRoute",
          "Azure Files"
        ],
        "c": 2,
        "e": "ExpressRoute is a private connection through a connectivity provider, not over the public internet. Azure CLI, Cosmos DB and Azure Files are a command-line tool, a database and file shares."
      },
      {
        "id": "easy_43",
        "category": "Networking",
        "q": "What gives an Azure service a private IP address inside your virtual network?",
        "a": [
          "Conditional Access",
          "Archive tier",
          "Cost Management",
          "Private endpoint"
        ],
        "c": 3,
        "e": "A private endpoint is a network interface with a private IP from your VNet, so the service is reached privately. Conditional Access, the Archive tier and Cost Management are identity, storage and cost features."
      },
      {
        "id": "easy_44",
        "category": "Networking",
        "q": "Which Azure service hosts domain names and resolves them to IP addresses?",
        "a": [
          "Azure DNS",
          "Bicep",
          "Azure Files",
          "Azure Monitor"
        ],
        "c": 0,
        "e": "Azure DNS hosts DNS zones and resolves names like app.contoso.com to IP addresses. Bicep, Azure Files and Azure Monitor are an IaC language, file shares and monitoring."
      },
      {
        "id": "easy_45",
        "category": "Storage",
        "q": "Which Azure storage service is built for unstructured data such as photos and videos?",
        "a": [
          "VPN Gateway",
          "Blob Storage",
          "Azure Monitor",
          "Azure Policy"
        ],
        "c": 1,
        "e": "Blob Storage is object storage for unstructured data like images and video. VPN Gateway, Azure Monitor and Azure Policy handle networking, monitoring and governance, not file storage."
      },
      {
        "id": "easy_46",
        "category": "Storage",
        "q": "Which Azure storage service offers fully managed file shares accessed over SMB?",
        "a": [
          "Azure Arc",
          "Azure Policy",
          "Azure Files",
          "ExpressRoute"
        ],
        "c": 2,
        "e": "Azure Files provides managed file shares over SMB (and NFS) that can be mounted like a network drive. Azure Arc, Azure Policy and ExpressRoute are hybrid management, governance and connectivity."
      },
      {
        "id": "easy_47",
        "category": "Storage",
        "q": "Which storage service holds messages so app components can communicate asynchronously?",
        "a": [
          "Azure Cost Management",
          "Microsoft Entra ID",
          "Azure Functions",
          "Queue Storage"
        ],
        "c": 3,
        "e": "Queue Storage stores messages that one component sends and another processes later. Cost Management, Entra ID and Azure Functions are spending, identity and compute."
      },
      {
        "id": "easy_48",
        "category": "Storage",
        "q": "Which storage service keeps simple key-value data without a fixed schema?",
        "a": [
          "Table Storage",
          "Microsoft Purview",
          "Azure Functions",
          "Conditional Access"
        ],
        "c": 0,
        "e": "Table Storage is a NoSQL key-attribute store for structured data without a fixed schema. Purview, Azure Functions and Conditional Access are data governance, compute and sign-in rules."
      },
      {
        "id": "easy_49",
        "category": "Storage",
        "q": "Which storage type provides block-level OS and data disks for Azure VMs?",
        "a": [
          "Azure Service Health",
          "Azure managed disks",
          "Microsoft Entra ID",
          "Azure Policy"
        ],
        "c": 1,
        "e": "Azure managed disks are block storage volumes attached to VMs as OS or data disks. Service Health, Entra ID and Azure Policy report outages, manage identity and enforce rules."
      },
      {
        "id": "easy_50",
        "category": "Storage",
        "q": "Which redundancy option keeps three copies of data in a single datacenter?",
        "a": [
          "Single sign-on (SSO)",
          "Role-based access control (RBAC)",
          "Locally redundant storage (LRS)",
          "Platform as a Service (PaaS)"
        ],
        "c": 2,
        "e": "LRS stores three copies within one datacenter, protecting against disk or rack failure only. SSO, RBAC and PaaS are sign-in, access and service-model concepts."
      },
      {
        "id": "easy_51",
        "category": "Storage",
        "q": "Which redundancy option copies data across availability zones in one region?",
        "a": [
          "Multi-factor authentication (MFA)",
          "Azure Virtual Desktop (AVD)",
          "Azure Kubernetes Service (AKS)",
          "Zone-redundant storage (ZRS)"
        ],
        "c": 3,
        "e": "ZRS keeps copies in three availability zones of one region, so it survives a datacenter outage. MFA, AVD and AKS are identity, desktop and container services."
      },
      {
        "id": "easy_52",
        "category": "Storage",
        "q": "Which redundancy option replicates data to a second, distant Azure region?",
        "a": [
          "Geo-redundant storage (GRS)",
          "Platform as a Service (PaaS)",
          "Multi-factor authentication (MFA)",
          "Azure Resource Manager (ARM)"
        ],
        "c": 0,
        "e": "GRS copies data to a secondary region hundreds of kilometres away, protecting against a regional outage. PaaS, MFA and ARM are a service model, a sign-in method and the deployment layer."
      },
      {
        "id": "easy_53",
        "category": "Storage",
        "q": "Which Blob Storage access tier is meant for data used frequently?",
        "a": [
          "Resource lock",
          "Hot access tier",
          "Azure Policy",
          "Azure Migrate"
        ],
        "c": 1,
        "e": "The Hot tier has the highest storage cost but the lowest access cost, ideal for frequently used data. Resource locks, Azure Policy and Azure Migrate are governance and migration tools, not storage tiers."
      },
      {
        "id": "easy_54",
        "category": "Storage",
        "q": "Which Blob access tier is cheapest to store but can take hours to read?",
        "a": [
          "Azure Virtual Network",
          "Azure Service Health",
          "Archive access tier",
          "Microsoft Entra Connect"
        ],
        "c": 2,
        "e": "The Archive tier is the cheapest for storage, but data must be rehydrated (up to hours) before reading. Virtual Network, Service Health and Entra Connect are networking, outage reporting and identity sync."
      },
      {
        "id": "easy_55",
        "category": "Storage",
        "q": "Which Blob access tier suits infrequently used data kept at least 30 days?",
        "a": [
          "Azure Virtual Desktop",
          "Resource group",
          "Single sign-on",
          "Cool access tier"
        ],
        "c": 3,
        "e": "The Cool tier is for infrequently accessed data stored at least 30 days: cheaper storage, higher access cost than Hot. Azure Virtual Desktop, resource groups and SSO are desktops, management and sign-in."
      },
      {
        "id": "easy_56",
        "category": "Databases",
        "q": "Azure SQL Database is an example of which cloud service model?",
        "a": [
          "Platform as a Service (PaaS)",
          "Zone-redundant storage (ZRS)",
          "Role-based access control (RBAC)",
          "Single sign-on (SSO)"
        ],
        "c": 0,
        "e": "Azure SQL Database is a managed database: Microsoft handles the server, patching and backups, so it is PaaS. ZRS, RBAC and SSO are a redundancy option, an access system and a sign-in feature."
      },
      {
        "id": "easy_57",
        "category": "Databases",
        "q": "What kind of database is Azure Cosmos DB?",
        "a": [
          "A private network connection to Azure",
          "A globally distributed NoSQL database",
          "A tool for estimating monthly costs",
          "A service for managing user identities"
        ],
        "c": 1,
        "e": "Azure Cosmos DB is a globally distributed NoSQL database with low latency worldwide. The other answers describe ExpressRoute, the Pricing calculator and Microsoft Entra ID."
      },
      {
        "id": "easy_58",
        "category": "Security",
        "q": "Which security strategy layers several protections so that one failure is not fatal?",
        "a": [
          "Pay-as-you-go",
          "Horizontal scaling",
          "Defense in depth",
          "Geo-replication"
        ],
        "c": 2,
        "e": "Defense in depth stacks layers (physical, identity, perimeter, network, compute, application, data) so a breach of one layer is stopped by the next. The others are a pricing model, a scaling method and a data copy method."
      },
      {
        "id": "easy_59",
        "category": "Security",
        "q": "Which service shows a secure score and protects workloads against threats?",
        "a": [
          "Azure Resource Manager",
          "Azure Storage Explorer",
          "Azure Kubernetes Service (AKS)",
          "Microsoft Defender for Cloud"
        ],
        "c": 3,
        "e": "Microsoft Defender for Cloud gives a secure score, security recommendations and threat protection for Azure, hybrid and multicloud workloads. Resource Manager, Storage Explorer and AKS deploy resources, browse storage and run containers."
      },
      {
        "id": "easy_60",
        "category": "Security",
        "q": "Which Microsoft service helps discover, classify and govern data across your organization?",
        "a": [
          "Microsoft Purview",
          "Cost Management",
          "Azure Functions",
          "VPN Gateway"
        ],
        "c": 0,
        "e": "Microsoft Purview maps, classifies and governs data across on-premises, multicloud and SaaS sources. Cost Management, Azure Functions and VPN Gateway are spending, compute and networking."
      },
      {
        "id": "easy_61",
        "category": "Security",
        "q": "Which security model says 'never trust, always verify' for every request?",
        "a": [
          "Elasticity",
          "Zero Trust",
          "Azure Arc",
          "Scalability"
        ],
        "c": 1,
        "e": "Zero Trust assumes breach and verifies every request explicitly, whatever network it comes from. Elasticity, Azure Arc and scalability are cloud benefits and a hybrid management service."
      },
      {
        "id": "easy_62",
        "category": "Security",
        "q": "What is the principle of giving users only the permissions they need?",
        "a": [
          "Geo-replication",
          "Vertical scaling",
          "Least privilege",
          "Pay-as-you-go"
        ],
        "c": 2,
        "e": "Least privilege grants only the access needed for a task, nothing more. Geo-replication, vertical scaling and pay-as-you-go concern data copies, VM sizing and pricing."
      },
      {
        "id": "easy_63",
        "category": "DevOps",
        "q": "Which JSON file declares Azure resources so they can be deployed repeatedly?",
        "a": [
          "Resource lock",
          "Azure DNS",
          "Blob Storage",
          "ARM template"
        ],
        "c": 3,
        "e": "An ARM template is a declarative JSON file describing resources for repeatable deployment. Resource locks, Azure DNS and Blob Storage protect resources, resolve names and store objects."
      },
      {
        "id": "easy_64",
        "category": "DevOps",
        "q": "Which Azure language offers simpler syntax than JSON for infrastructure as code?",
        "a": [
          "Bicep",
          "Entra ID",
          "Tags",
          "Azure Arc"
        ],
        "c": 0,
        "e": "Bicep is a declarative language that compiles to ARM templates with cleaner syntax than JSON. Entra ID, tags and Azure Arc are identity, labels and hybrid management."
      },
      {
        "id": "easy_65",
        "category": "Management",
        "q": "Which cross-platform command-line tool uses commands like 'az vm create'?",
        "a": [
          "Azure Files",
          "Azure CLI",
          "Azure Policy",
          "Entra ID"
        ],
        "c": 1,
        "e": "Azure CLI is the cross-platform command-line tool whose commands start with 'az'. Azure Files, Azure Policy and Entra ID are file shares, governance rules and identity."
      },
      {
        "id": "easy_66",
        "category": "Management",
        "q": "Which Azure command-line tool uses Verb-Noun cmdlets such as New-AzVM?",
        "a": [
          "Microsoft Purview",
          "Azure ExpressRoute",
          "Azure PowerShell",
          "Conditional Access"
        ],
        "c": 2,
        "e": "Azure PowerShell is a module of cmdlets in Verb-Noun form, like New-AzVM. Purview, ExpressRoute and Conditional Access are data governance, connectivity and sign-in rules."
      },
      {
        "id": "easy_67",
        "category": "Management",
        "q": "Which browser-based shell lets you run Azure CLI or PowerShell without installing anything?",
        "a": [
          "Azure ExpressRoute",
          "Table Storage",
          "Microsoft Purview",
          "Azure Cloud Shell"
        ],
        "c": 3,
        "e": "Azure Cloud Shell runs in the browser with Azure CLI and PowerShell preinstalled. ExpressRoute, Table Storage and Purview are connectivity, storage and data governance."
      },
      {
        "id": "easy_68",
        "category": "Migration",
        "q": "Which service helps discover, assess and move on-premises servers to Azure?",
        "a": [
          "Azure Migrate",
          "Microsoft Purview",
          "Azure Functions",
          "Conditional Access"
        ],
        "c": 0,
        "e": "Azure Migrate discovers and assesses on-premises servers and migrates them to Azure. Purview, Azure Functions and Conditional Access are data governance, compute and sign-in rules."
      },
      {
        "id": "easy_69",
        "category": "Hybrid",
        "q": "Which service lets you manage on-premises and other-cloud servers from Azure?",
        "a": [
          "Entra ID",
          "Azure Arc",
          "Azure Files",
          "Cosmos DB"
        ],
        "c": 1,
        "e": "Azure Arc projects servers and other resources outside Azure into Azure so you manage them in one place. Entra ID, Azure Files and Cosmos DB are identity, file shares and a database."
      },
      {
        "id": "easy_70",
        "category": "Cloud concepts",
        "q": "What splits security duties between the cloud provider and the customer?",
        "a": [
          "Consumption-based pricing",
          "Zone-redundant storage",
          "Shared responsibility model",
          "Infrastructure as code (IaC)"
        ],
        "c": 2,
        "e": "The shared responsibility model defines which duties belong to Microsoft and which to the customer in IaaS, PaaS and SaaS. Consumption pricing, ZRS and IaC are billing, storage and deployment concepts."
      },
      {
        "id": "easy_71",
        "category": "Cloud concepts",
        "q": "What is using services from more than one cloud provider at the same time called?",
        "a": [
          "Elasticity",
          "Federation",
          "Encryption",
          "Multi-cloud"
        ],
        "c": 3,
        "e": "Multi-cloud means using two or more public cloud providers together. Elasticity, federation and encryption are automatic scaling, trusted identity and data protection."
      },
      {
        "id": "easy_72",
        "category": "Cloud models",
        "q": "What is the cloud model where you run code without managing any servers at all?",
        "a": [
          "Serverless computing",
          "Resource locking",
          "Geo-redundant storage",
          "Identity federation"
        ],
        "c": 0,
        "e": "Serverless computing (like Azure Functions) runs code with no servers to manage, billed per execution. Resource locking, GRS and identity federation are governance, storage and identity concepts."
      },
      {
        "id": "easy_73",
        "category": "Reliability",
        "q": "What groups VMs across fault and update domains to reduce downtime in one datacenter?",
        "a": [
          "Cost Management",
          "Availability set",
          "Resource tag",
          "Azure Files"
        ],
        "c": 1,
        "e": "An availability set spreads VMs across fault domains (separate power and network) and update domains (separate maintenance). Cost Management, tags and Azure Files are spending, labelling and file shares."
      },
      {
        "id": "easy_74",
        "category": "Identity",
        "q": "What lets a user sign in once and access many applications?",
        "a": [
          "Locally redundant storage",
          "Resource group",
          "Single sign-on (SSO)",
          "Azure Virtual Desktop"
        ],
        "c": 2,
        "e": "Single sign-on gives access to many apps after one sign-in. LRS, resource groups and Azure Virtual Desktop are storage redundancy, management containers and hosted desktops."
      },
      {
        "id": "easy_75",
        "category": "Identity",
        "q": "Which Entra ID feature lets partner users sign in with their own company accounts?",
        "a": [
          "Archive access tier",
          "Azure Migrate",
          "Virtual subnet",
          "B2B collaboration"
        ],
        "c": 3,
        "e": "Microsoft Entra B2B collaboration invites external users as guests who sign in with their own identity. The Archive tier, Azure Migrate and subnets are storage, migration and networking."
      },
      {
        "id": "easy_76",
        "category": "Monitoring",
        "q": "Which log records who performed which operations on Azure resources?",
        "a": [
          "Activity log",
          "Cool tier",
          "VPN Gateway",
          "Azure Files"
        ],
        "c": 0,
        "e": "The Azure Activity log records control-plane operations: who did what, when, on which resource. The Cool tier, VPN Gateway and Azure Files are storage, networking and file shares."
      },
      {
        "id": "easy_77",
        "category": "Governance",
        "q": "Which lock type allows reading a resource but blocks any changes or deletion?",
        "a": [
          "Hot access tier",
          "ReadOnly lock",
          "Private endpoint",
          "Azure Cost Management"
        ],
        "c": 1,
        "e": "A ReadOnly lock lets authorized users read a resource but not change or delete it. The Hot tier, private endpoints and Cost Management are storage, networking and spending tools."
      },
      {
        "id": "easy_78",
        "category": "Governance",
        "q": "What is a group of Azure Policy definitions assigned together called?",
        "a": [
          "Storage account",
          "Resource lock",
          "Policy initiative",
          "VPN connection"
        ],
        "c": 2,
        "e": "A policy initiative bundles several policy definitions so they are assigned and tracked as one. Storage accounts, resource locks and VPN connections are storage, deletion protection and networking."
      },
      {
        "id": "easy_79",
        "category": "Security",
        "q": "In defense in depth, which layer comes first, protecting the datacenter buildings?",
        "a": [
          "Pay-as-you-go",
          "Vertical scaling",
          "Cloud Shell",
          "Physical security"
        ],
        "c": 3,
        "e": "Physical security (buildings, access to hardware) is the outermost layer of defense in depth. Pay-as-you-go, vertical scaling and Cloud Shell are pricing, VM sizing and a management tool."
      },
      {
        "id": "easy_80",
        "category": "DevOps",
        "q": "What is managing infrastructure through code files instead of manual setup called?",
        "a": [
          "Infrastructure as code",
          "Multi-factor authentication",
          "Geo-redundant storage",
          "Conditional Access"
        ],
        "c": 0,
        "e": "Infrastructure as code (IaC) defines resources in files such as ARM templates or Bicep for repeatable deployments. MFA, GRS and Conditional Access are identity and storage features."
      },
      {
        "id": "easy_81",
        "category": "Management",
        "q": "Which web-based graphical console lets you manage Azure resources?",
        "a": [
          "Azure DNS",
          "Azure portal",
          "Azure Files",
          "Azure Arc"
        ],
        "c": 1,
        "e": "The Azure portal is the web-based graphical interface for managing Azure. Azure DNS, Azure Files and Azure Arc are name resolution, file shares and hybrid management."
      },
      {
        "id": "easy_82",
        "category": "Reliability",
        "q": "Which service informs you about Azure outages and planned maintenance affecting your resources?",
        "a": [
          "Azure Virtual Network",
          "Microsoft Entra ID",
          "Azure Service Health",
          "Pricing calculator"
        ],
        "c": 2,
        "e": "Azure Service Health reports service issues, planned maintenance and advisories that affect your resources. Virtual Network, Entra ID and the Pricing calculator are networking, identity and cost estimation."
      },
      {
        "id": "easy_83",
        "category": "Networking",
        "q": "What is an address that makes an Azure service reachable from the internet?",
        "a": [
          "Resource lock",
          "Archive tier",
          "Management group",
          "Public endpoint"
        ],
        "c": 3,
        "e": "A public endpoint exposes a service on a public IP address, reachable from the internet. Resource locks, the Archive tier and management groups are governance, storage and organization concepts."
      },
      {
        "id": "easy_84",
        "category": "Networking",
        "q": "Which Azure DNS feature resolves names only inside your virtual networks?",
        "a": [
          "Private DNS zone",
          "Cost Management",
          "Azure Functions",
          "Azure Migrate"
        ],
        "c": 0,
        "e": "An Azure Private DNS zone resolves names only within linked virtual networks, not on the internet. Cost Management, Azure Functions and Azure Migrate are spending, compute and migration."
      },
      {
        "id": "easy_85",
        "category": "Networking",
        "q": "What connects two Azure virtual networks so they communicate as one?",
        "a": [
          "Locally redundant storage",
          "Virtual network peering",
          "Azure Cost Management",
          "Microsoft Entra ID"
        ],
        "c": 1,
        "e": "VNet peering links two virtual networks over the Microsoft backbone so resources talk using private IPs. LRS, Cost Management and Entra ID are storage, cost and identity."
      },
      {
        "id": "easy_86",
        "category": "Storage",
        "q": "What Azure resource provides a unique namespace for blobs, files, queues and tables?",
        "a": [
          "Virtual subnet",
          "Activity log",
          "Storage account",
          "Resource lock"
        ],
        "c": 2,
        "e": "A storage account is the container with a unique name that holds blobs, files, queues and tables. Subnets, the Activity log and resource locks are networking, auditing and deletion protection."
      },
      {
        "id": "easy_87",
        "category": "Storage",
        "q": "Which redundancy option adds read access to the secondary region copy?",
        "a": [
          "Microsoft Entra multi-factor authentication",
          "Infrastructure as a Service (IaaS)",
          "Microsoft Defender for Cloud secure score",
          "Read-access geo-redundant storage (RA-GRS)"
        ],
        "c": 3,
        "e": "RA-GRS is GRS plus the ability to read data from the secondary region at any time. MFA, IaaS and the secure score are identity, a service model and a security metric."
      },
      {
        "id": "easy_88",
        "category": "Compute",
        "q": "Which service delivers Windows desktops and apps running in Azure to users anywhere?",
        "a": [
          "Azure Virtual Desktop",
          "Azure Service Health",
          "Microsoft Purview",
          "Azure Cloud Shell"
        ],
        "c": 0,
        "e": "Azure Virtual Desktop (AVD) streams Windows desktops and apps hosted in Azure to any device. Service Health, Purview and Cloud Shell are outage reporting, data governance and a browser shell."
      },
      {
        "id": "easy_89",
        "category": "Databases",
        "q": "Running SQL Server yourself on an Azure VM is which service model?",
        "a": [
          "Zone-redundant storage (ZRS)",
          "Infrastructure as a Service (IaaS)",
          "Microsoft Entra multi-factor authentication",
          "Role-based access control (RBAC)"
        ],
        "c": 1,
        "e": "SQL Server on an Azure VM is IaaS: you manage the OS, SQL Server and patches. ZRS, MFA and RBAC are storage redundancy, a sign-in method and access control."
      },
      {
        "id": "easy_90",
        "category": "Security",
        "q": "In the shared responsibility model, who always secures the physical datacenter?",
        "a": [
          "The customer's own IT team",
          "The customer's developers",
          "Microsoft (the cloud provider)",
          "Each individual app user"
        ],
        "c": 2,
        "e": "Physical security of datacenters is always Microsoft's responsibility, in IaaS, PaaS and SaaS. Customers never have access to Azure datacenters, so neither their IT team, their developers nor app users secure them."
      },
      {
        "id": "easy_91",
        "category": "DevOps",
        "q": "Which Azure layer receives and processes every create, update and delete request?",
        "a": [
          "Azure Virtual Desktop",
          "Microsoft Purview",
          "Azure Cost Management",
          "Azure Resource Manager"
        ],
        "c": 3,
        "e": "Azure Resource Manager (ARM) is the deployment and management layer behind the portal, CLI, PowerShell and templates. Virtual Desktop, Purview and Cost Management are hosted desktops, data governance and spending."
      },
      {
        "id": "easy_92",
        "category": "Hybrid",
        "q": "Which service syncs on-premises Windows file servers with Azure Files?",
        "a": [
          "Azure File Sync",
          "Microsoft Purview",
          "Conditional Access",
          "Azure Service Health"
        ],
        "c": 0,
        "e": "Azure File Sync keeps on-premises Windows file servers in sync with Azure Files and can tier cold files to the cloud. Purview, Conditional Access and Service Health are data governance, sign-in rules and outage reporting."
      },
      {
        "id": "easy_93",
        "category": "Migration",
        "q": "Which calculator compares running on-premises with the cost of running in Azure?",
        "a": [
          "Azure Functions",
          "TCO calculator",
          "Private endpoint",
          "Microsoft Purview"
        ],
        "c": 1,
        "e": "The TCO calculator estimates savings of moving on-premises workloads to Azure over several years. Azure Functions, private endpoints and Purview are compute, networking and data governance."
      },
      {
        "id": "easy_94",
        "category": "Reliability",
        "q": "What document states Microsoft's uptime commitment and the credits you get if it's missed?",
        "a": [
          "Role-based access control (RBAC)",
          "Locally redundant storage (LRS)",
          "Service Level Agreement (SLA)",
          "Single sign-on (SSO)"
        ],
        "c": 2,
        "e": "An SLA defines a service's guaranteed availability and the service credits paid if it isn't met. RBAC, LRS and SSO are access control, storage redundancy and sign-in."
      },
      {
        "id": "easy_95",
        "category": "Management",
        "q": "How many resource groups can one Azure resource belong to at a time?",
        "a": [
          "Up to ten",
          "Unlimited",
          "At least three",
          "Exactly one"
        ],
        "c": 3,
        "e": "Every resource lives in exactly one resource group; it can be moved, but never sits in two at once. That rules out ten, unlimited or three groups."
      },
      {
        "id": "easy_96",
        "category": "Architecture",
        "q": "Which kind of Azure region is isolated for government or legal compliance needs?",
        "a": [
          "Sovereign region",
          "Archive tier",
          "Resource group",
          "Single sign-on"
        ],
        "c": 0,
        "e": "Sovereign regions, such as Azure Government or Azure operated by 21Vianet, are isolated instances for compliance and legal needs. The Archive tier, resource groups and SSO are storage, management and sign-in concepts."
      },
      {
        "id": "easy_97",
        "category": "Architecture",
        "q": "What do you call two Azure regions in the same geography linked for disaster recovery?",
        "a": [
          "Cloud Shell",
          "Region pair",
          "Bicep file",
          "Azure CLI"
        ],
        "c": 1,
        "e": "A region pair is two regions in one geography, usually 300+ miles apart, updated one at a time and prioritized for recovery. Cloud Shell, Bicep files and Azure CLI are management tools and an IaC format."
      },
      {
        "id": "easy_98",
        "category": "Migration",
        "q": "Which physical device ships large amounts of data to Azure offline?",
        "a": [
          "Azure Kubernetes Service",
          "Conditional Access",
          "Azure Data Box",
          "Azure Functions"
        ],
        "c": 2,
        "e": "Azure Data Box is a secure device Microsoft ships to you so you can move terabytes of data offline. AKS, Conditional Access and Azure Functions are containers, sign-in rules and serverless compute."
      },
      {
        "id": "easy_99",
        "category": "Migration",
        "q": "Which command-line utility copies files to and from Azure Storage accounts?",
        "a": [
          "Azure Arc",
          "Purview",
          "Entra ID",
          "AzCopy"
        ],
        "c": 3,
        "e": "AzCopy is a command-line tool for copying blobs and files to or from storage accounts. Azure Arc, Purview and Entra ID are hybrid management, data governance and identity."
      },
      {
        "id": "easy_100",
        "category": "Cloud concepts",
        "q": "Which cloud benefit lets you forecast both costs and performance with confidence?",
        "a": [
          "Predictability",
          "Data encryption",
          "Containerization",
          "Identity federation"
        ],
        "c": 0,
        "e": "Predictability means you can forecast cost (budgets, calculators) and performance (autoscaling, templates). Data encryption, containerization and identity federation are data protection, app packaging and identity concepts."
      },
      {
        "id": "easy_101",
        "category": "Cloud concepts",
        "q": "What lets a huge cloud provider offer lower prices by buying in massive volume?",
        "a": [
          "Defense in depth",
          "Economies of scale",
          "Network peering",
          "Conditional Access"
        ],
        "c": 1,
        "e": "Economies of scale lower the cost per unit when operating at huge volume, and Microsoft passes some savings on. Defense in depth, peering and Conditional Access are security, networking and identity."
      },
      {
        "id": "easy_102",
        "category": "Cloud concepts",
        "q": "What is a system's ability to keep running when one of its components fails?",
        "a": [
          "Authentication",
          "Pay-as-you-go",
          "Fault tolerance",
          "Data tagging"
        ],
        "c": 2,
        "e": "Fault tolerance lets a system continue working despite a component failure, often through redundancy. Authentication, pay-as-you-go and data tagging are identity, pricing and labelling."
      },
      {
        "id": "easy_103",
        "category": "Cloud concepts",
        "q": "Which cloud benefit covers managing resources via the portal, CLI, APIs and templates?",
        "a": [
          "Geo-redundancy",
          "Encryption",
          "Federation",
          "Manageability"
        ],
        "c": 3,
        "e": "Manageability covers management of the cloud (autoscaling, monitoring) and in the cloud (portal, CLI, APIs, templates). Geo-redundancy, encryption and federation are storage, data protection and identity."
      },
      {
        "id": "easy_104",
        "category": "Cloud concepts",
        "q": "Which cloud benefit helps keep resources compliant using templates and policies?",
        "a": [
          "Governance",
          "Peering",
          "Replication",
          "Containers"
        ],
        "c": 0,
        "e": "Governance in the cloud means enforcing standards and compliance with policies and templates. Peering, replication and containers are networking, data copies and app packaging."
      },
      {
        "id": "easy_105",
        "category": "Cloud concepts",
        "q": "What is adding more CPU and memory to one existing VM called?",
        "a": [
          "Geo-replication",
          "Vertical scaling",
          "Single sign-on",
          "Resource locking"
        ],
        "c": 1,
        "e": "Vertical scaling (scaling up) increases the size of an existing machine. Geo-replication, SSO and resource locking are data copies, sign-in and deletion protection."
      },
      {
        "id": "easy_106",
        "category": "Cloud concepts",
        "q": "Adding more VM instances to share the workload is known as what?",
        "a": [
          "Single sign-on",
          "Data encryption",
          "Horizontal scaling",
          "Cost analysis"
        ],
        "c": 2,
        "e": "Horizontal scaling (scaling out) adds more instances instead of making one bigger. SSO, encryption and cost analysis are identity, data protection and billing."
      },
      {
        "id": "easy_107",
        "category": "Cloud models",
        "q": "In IaaS, who is responsible for patching the virtual machine's operating system?",
        "a": [
          "Microsoft",
          "The hardware vendor",
          "The end users",
          "The customer"
        ],
        "c": 3,
        "e": "In IaaS the customer manages the guest OS, including updates and patches; Microsoft handles only the physical host and datacenter. Hardware vendors and end users have no role in patching your VM."
      }
    ],
    "normal": [
      {
        "id": "normal_0",
        "category": "Compute",
        "q": "A small agency builds a customer portal in .NET. It wants Azure to handle OS patching, load balancing and scaling, while the team only deploys code. Which hosting option fits best?",
        "a": [
          "Azure App Service",
          "Azure Virtual Machines",
          "Virtual Machine Scale Sets",
          "Azure Virtual Desktop"
        ],
        "c": 0,
        "e": "App Service is a PaaS web hosting platform: Azure manages the OS, patching and scaling, and the team only deploys code. Virtual Machines are IaaS, so the agency would patch and configure the OS itself. Scale Sets add autoscaling, but the VMs are still the customer's to manage. Azure Virtual Desktop delivers desktops to users; it doesn't host web apps."
      },
      {
        "id": "normal_1",
        "category": "Compute",
        "q": "An engineering firm must move a legacy application that needs a custom kernel driver and a specific Windows Server build. The app can't be changed. Which compute option should it use?",
        "a": [
          "Container Instances",
          "Azure Virtual Machines",
          "Azure Container Apps",
          "Azure App Service"
        ],
        "c": 1,
        "e": "Only a virtual machine (IaaS) gives full control of the operating system, so the firm can install the driver and choose the exact Windows Server build. Container Instances and Container Apps run containers on a host OS that Azure manages. App Service also manages the OS for you, so custom drivers aren't possible."
      },
      {
        "id": "normal_2",
        "category": "Compute",
        "q": "A report must be generated every night at 02:00 and takes about a minute. The team wants to write only the code and pay nothing while it isn't running. Which service fits best?",
        "a": [
          "Azure Virtual Machines",
          "Azure Kubernetes Service",
          "Azure Functions",
          "Virtual Machine Scale Sets"
        ],
        "c": 2,
        "e": "Azure Functions is serverless: a timer trigger runs the code on schedule, and the consumption plan bills only for execution time. A VM or a scale set would run, and cost money, all day for a one-minute job. AKS needs a cluster that runs permanently."
      },
      {
        "id": "normal_3",
        "category": "Compute",
        "q": "A nightly job is packaged as a single container that runs for about 20 minutes and then exits. The team wants to pay only while it runs, without maintaining any cluster or VM. Which service fits best?",
        "a": [
          "Azure Kubernetes Service",
          "Azure App Service",
          "VM Scale Sets",
          "Azure Container Instances"
        ],
        "c": 3,
        "e": "Azure Container Instances runs a single container on demand and bills per second while it runs, with no cluster or VM to manage. AKS is built to orchestrate many containers and means running a cluster. App Service hosts always-on web apps, not short run-and-exit jobs. Scale Sets are groups of VMs the team would have to maintain."
      },
      {
        "id": "normal_4",
        "category": "Compute",
        "q": "An online shop runs about 40 microservices in containers. It needs rolling updates, automatic restarts of failed containers and fine-grained control over the cluster. Which service fits best?",
        "a": [
          "Azure Kubernetes Service",
          "Azure Container Instances",
          "Azure App Service",
          "Azure Functions"
        ],
        "c": 0,
        "e": "AKS is managed Kubernetes: it orchestrates many containers, restarts failed ones, performs rolling updates and gives control over cluster configuration. Container Instances runs individual containers without orchestration. App Service and Functions host web apps and code, not a large set of orchestrated containers with cluster-level control."
      },
      {
        "id": "normal_5",
        "category": "Networking",
        "q": "Two project teams deploy VMs in the same subscription. Their VMs must not be able to reach each other unless someone deliberately connects them. What provides this isolation by default?",
        "a": [
          "Separate resource groups",
          "Separate virtual networks",
          "Separate subnets in one VNet",
          "Separate availability zones"
        ],
        "c": 1,
        "e": "Virtual networks are isolated from each other by default; traffic only flows between them after you add peering or a gateway. Subnets in the same VNet can talk to each other by default. Resource groups are management containers and availability zones are physical locations; neither isolates network traffic."
      },
      {
        "id": "normal_6",
        "category": "Networking",
        "q": "In one virtual network, the web servers and the database servers need different network security rules. How should the network be organized?",
        "a": [
          "Separate resource groups per tier",
          "One VNet per VM",
          "Separate subnets per tier",
          "Separate availability zones per tier"
        ],
        "c": 2,
        "e": "Subnets divide a VNet's address space into segments, so each tier gets its own subnet with its own rules (for example an NSG per subnet). Resource groups and availability zones don't segment network traffic. One VNet per VM would break normal communication and be hard to manage."
      },
      {
        "id": "normal_7",
        "category": "Networking",
        "q": "A security scan shows that RDP (port 3389) on a VM is reachable from the whole internet. The team wants to block it while keeping HTTPS open. What should it configure?",
        "a": [
          "Point-to-site VPN",
          "ExpressRoute circuit",
          "Azure DNS private zone",
          "Network security group (NSG)"
        ],
        "c": 3,
        "e": "A network security group (NSG) allows or denies traffic by port, protocol and source, so an inbound rule can block 3389 while allowing 443. A point-to-site VPN gives secure access but doesn't close the open port by itself. ExpressRoute is private connectivity, and a private DNS zone handles name resolution."
      },
      {
        "id": "normal_8",
        "category": "Networking",
        "q": "Developers working from home need secure access from their individual laptops to VMs in an Azure virtual network. The office network isn't involved. Which connection type fits best?",
        "a": [
          "Point-to-site VPN",
          "Site-to-site VPN connection",
          "ExpressRoute",
          "Virtual network peering"
        ],
        "c": 0,
        "e": "A point-to-site VPN connects individual devices to an Azure VNet over an encrypted tunnel, which is ideal for remote workers. Site-to-site VPN connects a whole on-premises network through a VPN device. ExpressRoute is a dedicated private connection for a site. VNet peering connects two Azure VNets, not laptops."
      },
      {
        "id": "normal_9",
        "category": "Networking",
        "q": "A bank's regulator forbids its traffic to Azure from crossing the public internet, even when encrypted. Which connectivity option meets this requirement?",
        "a": [
          "Site-to-site VPN",
          "ExpressRoute",
          "Point-to-site VPN",
          "Public endpoint with TLS"
        ],
        "c": 1,
        "e": "ExpressRoute provides a private connection to Microsoft through a connectivity provider, so traffic doesn't go over the public internet. Both VPN types use encrypted tunnels across the public internet, which the regulator forbids. A public endpoint with TLS is also reached over the internet."
      },
      {
        "id": "normal_10",
        "category": "Networking",
        "q": "A VM in a virtual network hosts a public website and must accept incoming connections from internet users. What does the VM need?",
        "a": [
          "A private endpoint",
          "VNet peering",
          "A public IP address",
          "A private DNS zone"
        ],
        "c": 2,
        "e": "To be reachable from the internet, the VM (or a component in front of it) needs a public IP address. A private endpoint gives a private IP inside the VNet, the opposite of public exposure. Peering connects VNets, and a private DNS zone only resolves names inside private networks."
      },
      {
        "id": "normal_11",
        "category": "Networking",
        "q": "A company already owns the domain contoso.com from a registrar. It wants to manage the domain's DNS records in Azure with the same tools, permissions and billing as its other resources. What should it use?",
        "a": [
          "Azure Private DNS zone",
          "Microsoft Entra ID",
          "Azure Resource Manager",
          "Azure DNS"
        ],
        "c": 3,
        "e": "Azure DNS hosts public DNS zones, so the company can manage contoso.com records with Azure RBAC, logs and billing. Azure DNS doesn't sell domains; the domain stays registered with the registrar. A private DNS zone only resolves names inside virtual networks. Entra ID manages identities, and Azure Resource Manager is the deployment layer, not a DNS host."
      },
      {
        "id": "normal_12",
        "category": "Networking",
        "q": "An app runs in a VNet in West Europe, and its reporting database runs in a VNet in East US. The company wants private, low-latency traffic between them over the Microsoft backbone. What should it use?",
        "a": [
          "Virtual network peering",
          "VNet-to-VNet VPN",
          "ExpressRoute",
          "Public endpoints"
        ],
        "c": 0,
        "e": "VNet peering also works between regions (global peering): traffic stays private on the Microsoft backbone with low latency. A VNet-to-VNet VPN needs gateways and an encrypted tunnel, which adds cost and latency. ExpressRoute connects on-premises networks to Azure. Public endpoints would send traffic over the internet."
      },
      {
        "id": "normal_13",
        "category": "Networking",
        "q": "A storage account holds HR files. The security team wants VMs in the company VNet to reach it through a private IP address from that VNet. What should be created?",
        "a": [
          "A network security group",
          "A private endpoint",
          "A public IP address",
          "A site-to-site VPN"
        ],
        "c": 1,
        "e": "A private endpoint gives the storage account a private IP address in the VNet, so traffic stays on the private network. An NSG filters traffic but doesn't give the service a private address. A public IP is the opposite of the goal. A site-to-site VPN connects on-premises networks to Azure."
      },
      {
        "id": "normal_14",
        "category": "Networking",
        "q": "A central VNet hosts shared DNS and monitoring servers. Several project VNets in the same region need private access to those servers. What is the simplest way to connect them?",
        "a": [
          "Site-to-site VPN",
          "ExpressRoute circuit",
          "VNet peering",
          "Public IPs on the shared servers"
        ],
        "c": 2,
        "e": "Peering each project VNet with the central VNet gives private, low-latency connectivity without gateways (a hub-and-spoke layout). Site-to-site VPN and ExpressRoute connect on-premises networks to Azure. Public IPs would expose the shared servers to the internet."
      },
      {
        "id": "normal_15",
        "category": "Networking",
        "q": "In one VNet, only the web subnet may connect to the database subnet on port 1433; all other subnets must be blocked. What should the team configure?",
        "a": [
          "VNet peering",
          "A private DNS zone",
          "Separate resource groups per tier",
          "A network security group (NSG)"
        ],
        "c": 3,
        "e": "A network security group on the database subnet can allow port 1433 only from the web subnet's address range and deny everything else. Peering connects separate VNets, not subnets. A private DNS zone resolves names, and resource groups don't filter traffic."
      },
      {
        "id": "normal_16",
        "category": "Networking",
        "q": "VMs in a company VNet must resolve names like db.internal.contoso.com to private IP addresses, and these records must not be visible on the internet. What should the company use?",
        "a": [
          "Azure Private DNS zone",
          "Azure public DNS zone",
          "A public endpoint",
          "Microsoft Entra Domain Services"
        ],
        "c": 0,
        "e": "An Azure Private DNS zone is linked to VNets and resolves names only inside them, so the records stay off the internet. A public DNS zone publishes records to everyone. A public endpoint is an internet-facing address. Entra Domain Services provides domain join and LDAP; it isn't the tool for hosting private DNS records."
      },
      {
        "id": "normal_17",
        "category": "Networking",
        "q": "A media company copies several terabytes from its datacenter to Azure every night and needs consistent, predictable latency and bandwidth. Which connection fits best?",
        "a": [
          "Site-to-site VPN",
          "ExpressRoute",
          "Point-to-site VPN",
          "VNet peering"
        ],
        "c": 1,
        "e": "ExpressRoute is a dedicated private connection with predictable latency and high bandwidth, suited to large regular transfers. A site-to-site VPN runs over the public internet, where performance varies. Point-to-site connects individual devices, and peering connects Azure VNets."
      },
      {
        "id": "normal_18",
        "category": "Networking",
        "q": "A company has five branch offices, each with its own VPN device. It wants every branch network permanently connected to the same Azure VNet over encrypted tunnels. What should it deploy?",
        "a": [
          "Point-to-site VPN",
          "ExpressRoute",
          "Site-to-site VPN connections",
          "VNet peering"
        ],
        "c": 2,
        "e": "A VPN gateway with site-to-site connections links whole on-premises networks, through their VPN devices, to an Azure VNet over encrypted tunnels; one gateway can serve several branches. Point-to-site would need a VPN client on every device. ExpressRoute is a private circuit, not an encrypted internet tunnel. Peering connects Azure VNets only."
      },
      {
        "id": "normal_19",
        "category": "Networking",
        "q": "A VM in the subnet 'app' needs to call a VM in the subnet 'data' of the same virtual network. No NSGs have been added. What else is needed for them to communicate?",
        "a": [
          "VNet peering",
          "A VPN gateway",
          "A public IP on each VM",
          "Nothing extra"
        ],
        "c": 3,
        "e": "Subnets in the same virtual network can communicate by default; Azure routes traffic between them automatically. Peering is for connecting separate VNets, and a VPN gateway connects external networks. Public IPs would needlessly expose the VMs to the internet."
      },
      {
        "id": "normal_20",
        "category": "Networking",
        "q": "A company compares hybrid connection options. Which option sends its traffic across the public internet, protected inside an encrypted tunnel?",
        "a": [
          "VPN Gateway",
          "ExpressRoute",
          "VNet peering",
          "Private endpoint"
        ],
        "c": 0,
        "e": "A VPN gateway creates IPsec-encrypted tunnels over the public internet. ExpressRoute uses a private connection through a provider and doesn't cross the public internet. VNet peering connects Azure VNets over the Microsoft backbone. A private endpoint gives a service a private IP inside a VNet."
      },
      {
        "id": "normal_21",
        "category": "Networking",
        "q": "A team wants to add a new VM in East US to an existing virtual network that was created in West Europe. What should it do?",
        "a": [
          "Add a new subnet in East US to that VNet",
          "Create an East US VNet and peer it",
          "Change the VNet's region to Global",
          "Place the VM in an availability zone"
        ],
        "c": 1,
        "e": "A virtual network exists in one region, and all its subnets are in that region. The solution is a new VNet in East US connected with (global) VNet peering. Subnets can't be placed in another region, and there's no 'Global' region for VNets. Availability zones exist inside one region and don't extend a VNet."
      },
      {
        "id": "normal_22",
        "category": "Networking",
        "q": "Customers anywhere in the world must reach a company's Azure-hosted web app from their browsers. What kind of endpoint does the web app need?",
        "a": [
          "A private endpoint",
          "A private DNS zone",
          "A public endpoint",
          "A VNet peering connection"
        ],
        "c": 2,
        "e": "A public endpoint is an address reachable from the internet, which customers connecting from anywhere need. A private endpoint is reachable only from private networks. A private DNS zone resolves names internally, and peering connects VNets."
      },
      {
        "id": "normal_23",
        "category": "Networking",
        "q": "A company orders ExpressRoute. Besides Microsoft, who provides the private connection between its datacenter and Azure?",
        "a": [
          "Its ISP, via an IPsec tunnel",
          "Microsoft Entra ID",
          "The VNet peering service",
          "A connectivity provider"
        ],
        "c": 3,
        "e": "ExpressRoute circuits are delivered through a connectivity provider (for example a telecom or exchange partner) that links the datacenter to Microsoft's network privately. An IPsec tunnel over the internet is a VPN, not ExpressRoute. Entra ID handles identity, and peering connects Azure VNets."
      },
      {
        "id": "normal_24",
        "category": "Compute",
        "q": "A web shop runs on identical VMs. Traffic triples every evening, and the company wants VMs added and removed automatically based on CPU load. What should it use?",
        "a": [
          "Virtual Machine Scale Sets",
          "Availability sets",
          "Azure Container Instances",
          "A larger VM size"
        ],
        "c": 0,
        "e": "Virtual Machine Scale Sets manage a group of identical VMs and automatically add or remove instances based on metrics such as CPU. Availability sets spread VMs across fault domains for resilience but don't scale. Resizing a VM is manual vertical scaling and doesn't follow evening peaks. Container Instances runs single containers, not the existing VM workload."
      },
      {
        "id": "normal_25",
        "category": "Compute",
        "q": "Two VMs run the same app in one datacenter. The company wants to make sure a single rack power failure or a host update never takes both down at the same time. What should it use?",
        "a": [
          "Region pairs",
          "Availability sets",
          "Virtual Machine Scale Sets",
          "Geo-redundant storage"
        ],
        "c": 1,
        "e": "An availability set spreads VMs across fault domains (separate power and network) and update domains (not rebooted together) within a datacenter. Region pairs relate to disaster recovery between regions. Scale Sets focus on scaling identical VMs. Geo-redundant storage protects data, not running VMs."
      },
      {
        "id": "normal_26",
        "category": "Storage",
        "q": "A video platform stores millions of clips and serves them directly to browsers via HTTPS URLs. Which storage service fits best?",
        "a": [
          "Azure Files",
          "Queue Storage",
          "Blob Storage",
          "Azure Disk Storage"
        ],
        "c": 2,
        "e": "Blob Storage stores massive amounts of unstructured data such as video and images, and serves each object through an HTTPS URL. Azure Files provides SMB/NFS shares for mounting. Queue Storage holds messages. Disk Storage provides disks attached to VMs."
      },
      {
        "id": "normal_27",
        "category": "Storage",
        "q": "Several Windows and Linux VMs must mount the same shared folder at the same time, over SMB or NFS. Which storage service fits best?",
        "a": [
          "Blob Storage",
          "Azure Disk Storage",
          "Table Storage",
          "Azure Files"
        ],
        "c": 3,
        "e": "Azure Files provides fully managed file shares over SMB and NFS that many machines can mount at the same time. Blob Storage is object storage accessed over REST/HTTPS. Disk Storage disks attach to VMs and aren't a shared folder. Table Storage stores NoSQL entities."
      },
      {
        "id": "normal_28",
        "category": "Storage",
        "q": "A company must move 80 TB of archived video to Azure. Over its internet connection the transfer would take months. What should it use?",
        "a": [
          "Azure Data Box",
          "AzCopy",
          "Azure File Sync",
          "Azure Storage Explorer"
        ],
        "c": 0,
        "e": "Azure Data Box is a physical device shipped by Microsoft: you copy the data locally and send the device back, and the data is loaded into Azure without using your network. AzCopy and Storage Explorer still transfer over the network. Azure File Sync keeps file servers in sync and also uses the network."
      },
      {
        "id": "normal_29",
        "category": "Storage",
        "q": "Before migrating, a company wants to discover its on-premises servers, check whether they're ready for Azure and estimate what running them there would cost. Which service should it use?",
        "a": [
          "Azure Data Box",
          "Azure Migrate",
          "Azure Arc",
          "Azure Advisor"
        ],
        "c": 1,
        "e": "Azure Migrate discovers on-premises servers, assesses their readiness, estimates Azure costs and then helps migrate them. Data Box moves large data volumes offline. Azure Arc manages servers where they are, without migrating them. Advisor gives recommendations for resources already running in Azure."
      },
      {
        "id": "normal_30",
        "category": "Storage",
        "q": "An administrator wants a nightly script that copies new files from a server to a Blob container using a command-line tool. Which tool fits best?",
        "a": [
          "Azure Storage Explorer",
          "Azure Data Box",
          "AzCopy",
          "Azure Migrate"
        ],
        "c": 2,
        "e": "AzCopy is a command-line utility for copying data to and from Azure Storage and is easy to schedule in scripts. Storage Explorer is a graphical desktop app. Data Box is an offline device for very large transfers. Azure Migrate assesses and migrates servers."
      },
      {
        "id": "normal_31",
        "category": "Storage",
        "q": "A team stores temporary build artifacts that can be regenerated at any time. It wants the cheapest redundancy option and accepts that a datacenter-wide outage could make the data unavailable. Which option should it choose?",
        "a": [
          "Zone-redundant (ZRS)",
          "Geo-zone-redundant (GZRS)",
          "Read-access geo-redundant (RA-GRS)",
          "Locally redundant (LRS)"
        ],
        "c": 3,
        "e": "LRS keeps three copies in a single datacenter. It's the cheapest option and accepts exactly this risk. ZRS spreads copies across availability zones and costs more. GZRS and RA-GRS also replicate to a second region, which is the most expensive protection and unnecessary for data that can be recreated."
      },
      {
        "id": "normal_32",
        "category": "Storage",
        "q": "An app's storage must stay available if one datacenter in the region fails, but the data must not leave that region. Which redundancy option should the company choose?",
        "a": [
          "Zone-redundant (ZRS)",
          "Locally redundant (LRS)",
          "Geo-redundant (GRS)",
          "Geo-zone-redundant (GZRS)"
        ],
        "c": 0,
        "e": "ZRS replicates data synchronously across three availability zones in one region, so it survives a datacenter outage without copying data to another region. LRS keeps all copies in one datacenter. GRS and GZRS also replicate to a secondary region, which the company doesn't want."
      },
      {
        "id": "normal_33",
        "category": "Storage",
        "q": "A company replicates storage to a secondary region. During a primary region outage, its reporting app must still be able to read the data without waiting for a failover. Which option fits?",
        "a": [
          "Geo-redundant storage (GRS)",
          "Read-access GRS (RA-GRS)",
          "Zone-redundant storage (ZRS)",
          "Locally redundant storage (LRS)"
        ],
        "c": 1,
        "e": "RA-GRS replicates to a secondary region and also allows reading the secondary copy at any time, so reads continue during a primary outage. With plain GRS the secondary copy can't be read until a failover. ZRS and LRS keep data in one region only."
      },
      {
        "id": "normal_34",
        "category": "Storage",
        "q": "Scanned contracts are opened only a few times a year but must open immediately when needed. The company wants a lower storage cost than the Cool tier. Which tier fits best?",
        "a": [
          "Hot",
          "Archive",
          "Cold",
          "Premium"
        ],
        "c": 2,
        "e": "The Cold tier is cheaper to store than Cool, keeps data online for immediate access, and suits data that is rarely accessed and kept at least 90 days. Hot costs the most to store. Archive is cheapest but offline: data must be rehydrated first, which takes hours. Premium is built for low latency, not for lower storage cost."
      },
      {
        "id": "normal_35",
        "category": "Storage",
        "q": "The legal department must keep closed case files for 10 years. They're almost never read, and waiting several hours to retrieve one is acceptable. Which tier minimizes storage cost?",
        "a": [
          "Cool",
          "Cold",
          "Premium",
          "Archive"
        ],
        "c": 3,
        "e": "Archive has the lowest storage cost and suits data that is rarely read and can wait hours for rehydration. Cool and Cold are online tiers with higher storage prices. Premium is the most expensive option, built for low latency."
      },
      {
        "id": "normal_36",
        "category": "Storage",
        "q": "Product images on a busy online shop are read thousands of times a day. Which access tier keeps the total cost lowest for this pattern?",
        "a": [
          "Hot",
          "Cool",
          "Cold",
          "Archive"
        ],
        "c": 0,
        "e": "Hot has the highest storage price but the lowest access price, so it's the cheapest overall for data read very often. Cool and Cold charge more per read and suit infrequent access. Archive data is offline and can't serve a website."
      },
      {
        "id": "normal_37",
        "category": "Database",
        "q": "A company's existing app uses SQL Server with stored procedures. It wants the database in Azure without managing the OS, patching or backups. Which service fits best?",
        "a": [
          "SQL Server on an Azure VM",
          "Azure SQL Database",
          "Azure Cosmos DB",
          "Azure Table Storage"
        ],
        "c": 1,
        "e": "Azure SQL Database is a fully managed (PaaS) database based on SQL Server: Microsoft handles patching and backups. SQL Server on an Azure VM would also work, but the customer manages the OS and database software. Cosmos DB is NoSQL, and Table Storage is a simple key-value store."
      },
      {
        "id": "normal_38",
        "category": "Database",
        "q": "A game stores player profiles and must give players on three continents very fast reads, with data replicated automatically between regions. Which database fits best?",
        "a": [
          "Azure SQL Database",
          "Azure Table Storage",
          "Azure Cosmos DB",
          "Azure Files"
        ],
        "c": 2,
        "e": "Azure Cosmos DB is a globally distributed NoSQL database: you add regions, data replicates automatically and reads are served from the nearest region with low latency. Azure SQL Database is relational and isn't built for multi-region low latency by default. Table Storage is a single-region key-value store, and Azure Files isn't a database."
      },
      {
        "id": "normal_39",
        "category": "Database",
        "q": "An IoT team stores readings as JSON, and every device type sends different fields. The team wants to query the data without defining a fixed schema. Which database fits best?",
        "a": [
          "Azure SQL Database",
          "Azure Database for MySQL",
          "Azure Disk Storage",
          "Azure Cosmos DB"
        ],
        "c": 3,
        "e": "Cosmos DB stores JSON documents with a flexible schema and lets you query them. Azure SQL Database and Azure Database for MySQL are relational and need a defined schema. Disk Storage provides VM disks, not a database."
      },
      {
        "id": "normal_40",
        "category": "Database",
        "q": "A company moves its database from SQL Server on its own hardware to Azure SQL Database. Who is now responsible for patching the database engine?",
        "a": [
          "Microsoft",
          "The customer",
          "Both equally",
          "The customer's cloud reseller"
        ],
        "c": 0,
        "e": "Azure SQL Database is PaaS, so Microsoft patches and updates the database engine and the OS beneath it. The customer remains responsible for its data, access and configuration. Patching isn't split equally, and a reseller doesn't operate the service."
      },
      {
        "id": "normal_41",
        "category": "Database",
        "q": "A WordPress site uses MySQL. The owner wants a managed MySQL database in Azure without changing the application. Which service fits best?",
        "a": [
          "Azure Cosmos DB",
          "Azure Database for MySQL",
          "Azure SQL Database",
          "SQL Server on a VM"
        ],
        "c": 1,
        "e": "Azure Database for MySQL is a managed service running the MySQL engine, so the app works without code changes. Azure SQL Database and SQL Server use a different engine. Cosmos DB is a NoSQL database."
      },
      {
        "id": "normal_42",
        "category": "Security",
        "q": "An employee's password leaked in a phishing attack, yet the attacker still couldn't sign in because a code from the employee's phone was required. Which feature stopped the attack?",
        "a": [
          "Single sign-on",
          "Microsoft Defender for Cloud",
          "Multifactor authentication",
          "Role-based access control"
        ],
        "c": 2,
        "e": "Multifactor authentication requires a second factor, such as a code or an approval on a phone, so a stolen password isn't enough. Single sign-on reduces the number of sign-ins but doesn't add a factor. RBAC controls what a signed-in user can do. Defender for Cloud assesses and protects resources, not sign-ins."
      },
      {
        "id": "normal_43",
        "category": "Security",
        "q": "A company runs servers in Azure, in AWS and on-premises. It wants one place to assess their security posture and get hardening recommendations for all of them. What should it use?",
        "a": [
          "Azure Policy",
          "Conditional Access",
          "Azure Advisor",
          "Microsoft Defender for Cloud"
        ],
        "c": 3,
        "e": "Microsoft Defender for Cloud assesses security posture (Secure Score), gives recommendations and detects threats across Azure, other clouds and on-premises. Azure Policy enforces rules on Azure resources. Advisor includes some security recommendations but isn't a multicloud security tool. Conditional Access controls sign-ins."
      },
      {
        "id": "normal_44",
        "category": "Security",
        "q": "Employees may sign in from the office with just a password, but sign-ins from outside the corporate network must also require MFA. What should be configured?",
        "a": [
          "Conditional Access",
          "Azure RBAC",
          "Single sign-on",
          "Azure Policy"
        ],
        "c": 0,
        "e": "Microsoft Entra Conditional Access evaluates signals such as location and device and can require MFA only under specific conditions. RBAC defines permissions on resources, not sign-in requirements. SSO lets users sign in once. Azure Policy governs resource configuration."
      },
      {
        "id": "normal_45",
        "category": "Security",
        "q": "A company designs its systems as if an attacker were already inside: it segments the network and encrypts internal traffic to limit the damage. Which Zero Trust principle is this?",
        "a": [
          "Verify explicitly",
          "Assume breach",
          "Use least privilege",
          "Trust the internal network"
        ],
        "c": 1,
        "e": "Assume breach means designing as if attackers are already inside, for example by segmenting networks and encrypting traffic to limit the blast radius. Verify explicitly means authenticating every request using all available signals. Least privilege limits each identity's permissions. Trusting the internal network is the old perimeter model that Zero Trust replaces."
      },
      {
        "id": "normal_46",
        "category": "Security",
        "q": "In the defense-in-depth model, a company encrypts its customer database at rest. Which layer does this control protect?",
        "a": [
          "Network",
          "Perimeter",
          "Data",
          "Physical security"
        ],
        "c": 2,
        "e": "Defense in depth has layers from physical security, identity and access, perimeter, network, compute and application out to data at the center. Encrypting a database protects the data layer. The network and perimeter layers deal with traffic and attacks like DDoS, and physical security covers access to datacenters."
      },
      {
        "id": "normal_47",
        "category": "Security",
        "q": "Employees complain about separate passwords for the HR portal, the expense app and Microsoft 365. The company wants them to sign in once and access all of these. What should it use?",
        "a": [
          "Multifactor authentication",
          "Conditional Access",
          "Microsoft Entra B2B",
          "Single sign-on"
        ],
        "c": 3,
        "e": "Single sign-on lets users sign in once with one Microsoft Entra identity and access many applications. MFA adds a verification step but doesn't reduce the number of sign-ins. Conditional Access sets conditions for access. Entra B2B is for external guest users."
      },
      {
        "id": "normal_48",
        "category": "Security",
        "q": "A consulting partner's staff need access to one internal Azure app. The company doesn't want to create and manage passwords for them; they should use their own work accounts. What should it use?",
        "a": [
          "Microsoft Entra B2B",
          "Customer sign-up (B2C)",
          "Microsoft Entra Domain Services",
          "Azure RBAC"
        ],
        "c": 0,
        "e": "Entra B2B collaboration invites external partners as guests who sign in with their own existing accounts. B2C-style customer identity is for consumer-facing apps where customers sign up. Entra Domain Services provides domain join and LDAP. RBAC assigns permissions but doesn't solve the identity problem."
      },
      {
        "id": "normal_49",
        "category": "Security",
        "q": "A company wants employees to sign in with Windows Hello or the Microsoft Authenticator app, so there's no password to steal or forget. Which authentication approach is this?",
        "a": [
          "Single sign-on",
          "Passwordless authentication",
          "Conditional Access",
          "Self-service password reset"
        ],
        "c": 1,
        "e": "Passwordless authentication replaces the password with something you have plus something you are or know, for example Windows Hello or Authenticator. SSO still relies on a sign-in, often with a password. Conditional Access sets rules for when access is allowed. Self-service password reset helps users reset passwords; it doesn't remove them."
      },
      {
        "id": "normal_50",
        "category": "Security",
        "q": "A legacy app in Azure needs domain join, Group Policy and Kerberos authentication, but the company doesn't want to deploy and patch its own domain controllers. What should it use?",
        "a": [
          "Microsoft Entra ID",
          "Microsoft Entra Connect",
          "Microsoft Entra Domain Services",
          "AD domain controllers on Azure VMs"
        ],
        "c": 2,
        "e": "Microsoft Entra Domain Services provides managed domain services (domain join, Group Policy, LDAP, Kerberos) without running domain controllers yourself. Entra ID alone doesn't offer traditional domain join with Kerberos and Group Policy. Entra Connect syncs identities from on-premises. Domain controllers on VMs would mean patching them yourself."
      },
      {
        "id": "normal_51",
        "category": "Governance",
        "q": "A user is assigned the Contributor role on a subscription. What access does the user have to the resource groups inside it?",
        "a": [
          "No access by default",
          "Reader on each group",
          "Only groups they create",
          "Contributor on all of them"
        ],
        "c": 3,
        "e": "Azure RBAC role assignments are inherited down the scope hierarchy: a role at the subscription applies to all resource groups and resources in it. It doesn't need to be assigned again per group, it isn't downgraded to Reader and it isn't limited to groups the user created."
      },
      {
        "id": "normal_52",
        "category": "Governance",
        "q": "To control costs, a company wants to stop anyone from creating VMs larger than a set of approved sizes, in every subscription. What should it use?",
        "a": [
          "Azure Policy",
          "Azure RBAC",
          "Resource locks",
          "Azure Advisor"
        ],
        "c": 0,
        "e": "Azure Policy can define allowed VM sizes and deny non-compliant deployments. RBAC controls who can create VMs, not which sizes. Resource locks prevent deleting or changing existing resources. Advisor only recommends."
      },
      {
        "id": "normal_53",
        "category": "Governance",
        "q": "A cleanup script run under an account with the Owner role sometimes deletes resources it shouldn't. A shared storage account must stay editable but impossible to delete until someone deliberately removes the protection. What should be applied?",
        "a": [
          "Azure Policy (Deny effect)",
          "CanNotDelete lock",
          "ReadOnly lock",
          "Reader role assignment"
        ],
        "c": 1,
        "e": "A CanNotDelete lock blocks deletion for everyone, Owners included, while changes stay allowed. A ReadOnly lock would also block the edits the team still needs. A Deny policy evaluates create and update requests against rules and isn't the tool for protecting one resource from deletion. A Reader role wouldn't stop the Owner account that runs the script."
      },
      {
        "id": "normal_54",
        "category": "Governance",
        "q": "An automation script should shut down every dev and test VM at night but leave production running. How can the company mark the VMs so the script can tell them apart?",
        "a": [
          "Resource locks",
          "Management groups",
          "Tags",
          "Availability sets"
        ],
        "c": 2,
        "e": "Tags are name-value pairs (for example environment=dev) that scripts, policies and cost reports can filter on. Resource locks prevent deletion or changes. Management groups organize subscriptions. Availability sets control VM placement."
      },
      {
        "id": "normal_55",
        "category": "Governance",
        "q": "A new cloud architect is planning the company's Azure hierarchy. Which order lists the levels from broadest to narrowest?",
        "a": [
          "Subscription › Management group › Resource group › Resource",
          "Resource group › Subscription › Management group › Resource",
          "Management group › Resource group › Subscription › Resource",
          "Management group › Subscription › Resource group › Resource"
        ],
        "c": 3,
        "e": "Management groups contain subscriptions, subscriptions contain resource groups, and resource groups contain resources. Policies and RBAC assigned at a higher level are inherited by the levels below."
      },
      {
        "id": "normal_56",
        "category": "Governance",
        "q": "A company wants to discover where sensitive data such as credit card numbers is stored across Azure, on-premises systems and SaaS apps, and classify it. What should it use?",
        "a": [
          "Microsoft Purview",
          "Azure Policy",
          "Microsoft Defender for Cloud",
          "Azure Monitor"
        ],
        "c": 0,
        "e": "Microsoft Purview is a data governance service that discovers, maps and classifies data across Azure, on-premises and SaaS sources. Azure Policy governs resource configuration. Defender for Cloud focuses on security posture and threats. Azure Monitor collects metrics and logs."
      },
      {
        "id": "normal_57",
        "category": "Governance",
        "q": "Two departments must receive separate Azure invoices and have separate spending limits. How should the company organize them?",
        "a": [
          "Separate resource groups",
          "Separate subscriptions",
          "Separate tags",
          "Separate regions"
        ],
        "c": 1,
        "e": "A subscription is a billing boundary: each one gets its own invoice and can have its own budgets and limits. Resource groups and tags help split costs in reports but still share one invoice. Regions are locations, not billing units."
      },
      {
        "id": "normal_58",
        "category": "Governance",
        "q": "A US federal agency needs Azure services in a physically isolated cloud instance operated only by screened US personnel. What should it use?",
        "a": [
          "A region pair in the US",
          "An availability zone",
          "A sovereign region",
          "A separate subscription"
        ],
        "c": 2,
        "e": "Sovereign regions such as Azure Government are physically and logically isolated instances of Azure for specific compliance needs. A region pair, an availability zone or a separate subscription are all part of the normal public Azure cloud."
      },
      {
        "id": "normal_59",
        "category": "Governance",
        "q": "To prove compliance with a security standard, a company must assign about 40 related policy definitions together and track them as one goal. What should it use?",
        "a": [
          "A management group",
          "A resource lock",
          "A role assignment",
          "A policy initiative"
        ],
        "c": 3,
        "e": "A policy initiative (policy set) groups related policy definitions so they're assigned and tracked together as one compliance goal. A management group is a scope where an initiative can be assigned, not a grouping of policies. Resource locks and role assignments don't evaluate compliance."
      },
      {
        "id": "normal_60",
        "category": "Governance",
        "q": "Developers have the Contributor role. Without removing that role, the company must stop them from creating resources outside the EU because of data-residency rules. What should it use?",
        "a": [
          "Azure Policy",
          "A resource lock",
          "Microsoft Purview",
          "Reader role instead"
        ],
        "c": 0,
        "e": "An Azure Policy with allowed locations denies deployments outside the EU regardless of the user's role. Switching to Reader would stop them from deploying anything at all. A resource lock protects existing resources, not where new ones are created. Purview governs data, not deployment locations."
      },
      {
        "id": "normal_61",
        "category": "Governance",
        "q": "An administrator applies a CanNotDelete lock to a resource group. What happens when a user with the Owner role tries to delete a VM inside that group?",
        "a": [
          "The VM is deleted",
          "Deletion is blocked",
          "Only the lock is removed",
          "A policy alert is raised"
        ],
        "c": 1,
        "e": "Locks are inherited by all resources in their scope and apply even to Owners, so deleting the VM is blocked until someone removes the lock. The lock isn't removed automatically, and locks don't raise policy alerts."
      },
      {
        "id": "normal_62",
        "category": "Compute",
        "q": "An administrator creates a new Azure VM. Besides the VM itself, which resource is required so that the VM can communicate with other resources?",
        "a": [
          "Public IP address",
          "Private DNS zone",
          "Virtual network",
          "Availability set"
        ],
        "c": 2,
        "e": "Every Azure VM connects through a network interface to a virtual network, which is a required resource. A public IP address is optional and only needed for direct internet access. A private DNS zone and an availability set are optional add-ons."
      },
      {
        "id": "normal_63",
        "category": "Compute",
        "q": "A startup wants to run code without provisioning or managing any servers, with automatic scaling and billing based only on executions. Which cloud computing concept describes this?",
        "a": [
          "IaaS",
          "Virtualization",
          "Vertical scaling",
          "Serverless computing"
        ],
        "c": 3,
        "e": "Serverless computing means the provider manages all servers, the app scales automatically and you pay only when code runs (for example Azure Functions). With IaaS you manage the VMs yourself. Virtualization is the technology for running many VMs on one host. Vertical scaling means making a single resource bigger."
      },
      {
        "id": "normal_64",
        "category": "Compute",
        "q": "A company deploys two VMs for a critical app and wants it to keep running even if one entire datacenter in the region fails. How should it place the VMs?",
        "a": [
          "In two availability zones",
          "In one availability set",
          "In two separate resource groups",
          "In two subnets of one VNet"
        ],
        "c": 0,
        "e": "Availability zones are physically separate datacenters within a region, so VMs in different zones survive the loss of one datacenter. An availability set only protects against rack and host failures inside one datacenter. Resource groups and subnets are logical groupings that say nothing about physical location."
      },
      {
        "id": "normal_65",
        "category": "Compute",
        "q": "A company hires 50 seasonal call-center workers who use their own laptops. They need a full Windows desktop with corporate apps, without company data stored on the laptops. What should it use?",
        "a": [
          "Azure App Service",
          "Azure Virtual Desktop",
          "Microsoft Entra Domain Services",
          "Point-to-site VPN"
        ],
        "c": 1,
        "e": "Azure Virtual Desktop streams a full Windows desktop and apps from Azure, so data stays in the cloud, not on the personal laptop. A point-to-site VPN only connects the laptop to the network; data would still be processed locally. Entra Domain Services provides domain services, not desktops. App Service hosts web apps."
      },
      {
        "id": "normal_66",
        "category": "Compute",
        "q": "A team packages its API as a container. It wants automatic scaling, including down to zero when idle, without creating or operating a Kubernetes cluster. Which service fits best?",
        "a": [
          "Azure Kubernetes Service",
          "Virtual Machine Scale Sets",
          "Azure Container Apps",
          "Azure Virtual Machines"
        ],
        "c": 2,
        "e": "Azure Container Apps is a serverless container platform: it scales containers automatically, even to zero, and Azure runs the underlying Kubernetes for you. AKS would require the team to operate a cluster. Scale Sets and plain VMs mean managing operating systems and container runtimes."
      },
      {
        "id": "normal_67",
        "category": "Compute",
        "q": "Developers want an app packaged with all its dependencies so it starts in seconds and runs the same on a laptop and in Azure, without a full guest OS per instance. Which compute type fits best?",
        "a": [
          "Virtual machines",
          "Serverless functions",
          "Availability sets",
          "Containers"
        ],
        "c": 3,
        "e": "Containers bundle an app with its dependencies, share the host OS kernel, start in seconds and run consistently in any environment. Virtual machines each include a full guest OS, so they're heavier and slower to start. Serverless functions run small pieces of code, not a packaged app with its own runtime. Availability sets are a VM placement feature."
      },
      {
        "id": "normal_68",
        "category": "Compute",
        "q": "A VM's operating system and installed software must survive a restart or a move to another physical host. Where does Azure store the VM's operating system?",
        "a": [
          "On a managed disk",
          "In an Azure file share",
          "In the virtual network",
          "In the resource group"
        ],
        "c": 0,
        "e": "A VM's operating system lives on an OS disk, a managed disk (Azure Disk Storage) that persists independently of the host. Azure Files provides SMB/NFS shares, not boot disks. A virtual network provides connectivity, and a resource group is only a logical container."
      },
      {
        "id": "normal_69",
        "category": "Compute",
        "q": "A company compares hosting options for an internal app and wants to avoid OS patching work. In which option would the company itself have to patch the operating system?",
        "a": [
          "Azure Container Instances",
          "Azure Virtual Machines",
          "Azure Functions",
          "Azure App Service"
        ],
        "c": 1,
        "e": "Virtual Machines are IaaS: Microsoft manages the physical host, but the customer patches and maintains the guest OS. In App Service, Functions and Container Instances the platform is managed by Azure, so Microsoft patches the OS underneath."
      },
      {
        "id": "normal_70",
        "category": "Compute",
        "q": "An architecture firm wants several designers to share one powerful GPU-enabled Windows session host, so it pays for fewer VMs than it has users. Which service supports this multi-session model?",
        "a": [
          "Virtual Machine Scale Sets",
          "Azure App Service",
          "Azure Virtual Desktop",
          "Azure Container Instances"
        ],
        "c": 2,
        "e": "Azure Virtual Desktop supports Windows multi-session, so several users share one session host VM, which reduces cost. Scale Sets run identical VMs but don't deliver user desktops. App Service hosts web apps and Container Instances runs containers; neither delivers a desktop."
      },
      {
        "id": "normal_71",
        "category": "Compute",
        "q": "A retailer has servers in its stores and in another cloud. It wants to see and govern them in the Azure portal with Azure Policy and tags, just like Azure resources. What should it use?",
        "a": [
          "Azure Virtual Desktop",
          "Azure Resource Manager",
          "Azure Migrate",
          "Azure Arc"
        ],
        "c": 3,
        "e": "Azure Arc projects servers, Kubernetes clusters and data services running outside Azure (on-premises or in other clouds) into Azure Resource Manager, so they can be governed with Policy, tags and RBAC. Azure Migrate moves workloads into Azure instead of managing them where they are. ARM alone only reaches Azure resources. Virtual Desktop delivers desktops."
      },
      {
        "id": "normal_72",
        "category": "Compute",
        "q": "A developer wants to publish a Python web API from GitHub, add a custom domain with TLS and let the platform scale it out, without touching any servers. What should they use?",
        "a": [
          "Azure App Service",
          "Azure Virtual Machines",
          "Azure Kubernetes Service",
          "Availability sets"
        ],
        "c": 0,
        "e": "App Service is a PaaS host for web apps and APIs, with built-in deployment from GitHub, custom domains, TLS and autoscaling. VMs and AKS could host the API but require managing servers or a cluster. Availability sets only control VM placement."
      },
      {
        "id": "normal_73",
        "category": "Monitoring",
        "q": "Users report that a web app's checkout page is slow and sometimes fails. Developers want request timings, failure rates and exceptions traced to the code. What should they use?",
        "a": [
          "Azure Service Health",
          "Application Insights",
          "Azure Advisor",
          "Activity log"
        ],
        "c": 1,
        "e": "Application Insights, part of Azure Monitor, tracks application performance: request durations, failures, dependencies and exceptions. Service Health reports Azure platform issues. Advisor gives recommendations. The Activity log records management operations, not app requests."
      },
      {
        "id": "normal_74",
        "category": "Monitoring",
        "q": "Logs from 200 VMs must be kept in one place, and an analyst wants to write KQL queries that correlate events across all of them. What should be set up?",
        "a": [
          "Azure Advisor",
          "Microsoft Purview",
          "Log Analytics workspace",
          "Azure Service Health"
        ],
        "c": 2,
        "e": "A Log Analytics workspace in Azure Monitor collects logs from many sources and lets you query them with KQL. Purview governs data; it doesn't analyze operational logs. Advisor gives recommendations, and Service Health reports platform incidents."
      },
      {
        "id": "normal_75",
        "category": "Monitoring",
        "q": "When a web app returns many HTTP 5xx errors, the on-call engineer must get an SMS within minutes. What should be configured?",
        "a": [
          "An Azure Advisor recommendation",
          "An Activity log export",
          "A Service Health alert",
          "An Azure Monitor alert"
        ],
        "c": 3,
        "e": "An Azure Monitor alert rule watches a metric or log condition, such as the 5xx count, and uses an action group to send an SMS or email or trigger automation. Service Health alerts cover Azure platform incidents, not your app's errors. Advisor recommendations aren't real-time, and exporting the Activity log doesn't notify anyone."
      },
      {
        "id": "normal_76",
        "category": "Monitoring",
        "q": "Several of a company's VMs became unreachable this morning. The admin wants to check whether Microsoft is reporting an incident in that region affecting the company's resources. Where should they look?",
        "a": [
          "Azure Service Health",
          "Azure Advisor",
          "Log Analytics",
          "Defender for Cloud"
        ],
        "c": 0,
        "e": "Azure Service Health shows Azure incidents, planned maintenance and health advisories that affect your subscriptions and regions. Advisor gives best-practice recommendations. Log Analytics queries your own logs. Defender for Cloud covers security."
      },
      {
        "id": "normal_77",
        "category": "Monitoring",
        "q": "An admin wants a chart of a VM's CPU usage over the last 24 hours, using data that Azure collects automatically without any extra setup. What should they use?",
        "a": [
          "Application Insights",
          "Azure Monitor metrics",
          "Defender for Cloud",
          "Azure Advisor"
        ],
        "c": 1,
        "e": "Azure Monitor collects platform metrics such as VM CPU automatically and can chart them in Metrics explorer. Application Insights requires instrumenting an application. Defender for Cloud focuses on security. Advisor gives recommendations, not time-series charts."
      },
      {
        "id": "normal_78",
        "category": "Monitoring",
        "q": "A production VM was stopped overnight and nobody admits to doing it. Which record shows who stopped it and when?",
        "a": [
          "Azure Service Health",
          "Application Insights",
          "Activity log",
          "Azure Advisor"
        ],
        "c": 2,
        "e": "The Activity log records management operations on resources, such as stopping a VM, including who did it and when. Service Health reports Azure-side incidents. Application Insights tracks app behavior. Advisor gives recommendations."
      },
      {
        "id": "normal_79",
        "category": "Management",
        "q": "A manager suspects the company pays for oversized, underused VMs and wants free, personalized suggestions to resize or shut them down. What should they check?",
        "a": [
          "Pricing calculator",
          "Azure Service Health",
          "Microsoft Purview",
          "Azure Advisor"
        ],
        "c": 3,
        "e": "Azure Advisor analyzes your resource usage and gives personalized recommendations, including resizing or shutting down underused VMs to save money. The pricing calculator estimates new deployments. Service Health reports platform incidents. Purview governs data."
      },
      {
        "id": "normal_80",
        "category": "Management",
        "q": "An admin is on a locked-down laptop where nothing can be installed, but must run Azure CLI commands right now. What should they use?",
        "a": [
          "Azure Cloud Shell",
          "Azure PowerShell module",
          "ARM template",
          "Azure Arc"
        ],
        "c": 0,
        "e": "Azure Cloud Shell is a browser-based shell with Azure CLI and Azure PowerShell preinstalled, so nothing needs to be installed locally. The PowerShell module would have to be installed. An ARM template defines resources; it isn't a shell. Azure Arc manages resources outside Azure."
      },
      {
        "id": "normal_81",
        "category": "Management",
        "q": "Whether an admin uses the Azure portal, Azure CLI or PowerShell, which service receives the request, authenticates it and creates the resources?",
        "a": [
          "Azure Cloud Shell",
          "Azure Resource Manager",
          "Microsoft Entra Domain Services",
          "Azure Arc"
        ],
        "c": 1,
        "e": "Azure Resource Manager is the deployment and management layer: every request from the portal, CLI, PowerShell or templates goes through it, which is why the results are consistent. Cloud Shell is just a place to run commands. Entra Domain Services provides domain services. Arc extends ARM to resources outside Azure."
      },
      {
        "id": "normal_82",
        "category": "Cost",
        "q": "A department has a fixed monthly Azure budget and wants an email when actual spending reaches 80 % of it. What should it use?",
        "a": [
          "Pricing calculator",
          "Azure Advisor",
          "Cost Management budget",
          "Azure Monitor alert"
        ],
        "c": 2,
        "e": "Cost Management lets you create budgets with alerts at thresholds such as 80 % of actual spend. The pricing calculator estimates costs before deployment. Advisor recommends savings but doesn't track a budget. Azure Monitor metric alerts watch resource metrics, not spending."
      },
      {
        "id": "normal_83",
        "category": "Cost",
        "q": "The same VM size costs less in one Azure region than in another. Which cost factor explains the difference?",
        "a": [
          "Resource type",
          "Subscription type",
          "Bandwidth",
          "Region"
        ],
        "c": 3,
        "e": "Prices differ by region because of local costs such as energy, taxes and demand, so location is a cost factor. Resource type matters too, but the VM size is the same here. Subscription type affects offers and allowances, not regional prices. Bandwidth is about data transfer."
      },
      {
        "id": "normal_84",
        "category": "Cost",
        "q": "The number of VMs didn't change, but the monthly bill grew after the app started sending much more data to users on the internet. Which cost factor caused this?",
        "a": [
          "Outbound data transfer",
          "Inbound data transfer",
          "Resource locks",
          "Resource groups"
        ],
        "c": 0,
        "e": "Data leaving Azure to the internet (egress) is billed, while inbound data transfer is generally free. Resource locks and resource groups don't cost anything. The growth therefore comes from outbound bandwidth."
      },
      {
        "id": "normal_85",
        "category": "Storage",
        "q": "Branch offices keep using their local Windows file servers, but the company wants all files centralized in Azure, with only frequently used files cached locally. What should it use?",
        "a": [
          "AzCopy",
          "Azure File Sync",
          "Azure Storage Explorer",
          "Azure Migrate"
        ],
        "c": 1,
        "e": "Azure File Sync syncs Windows file servers with an Azure file share and can tier rarely used files to the cloud while keeping frequently used files cached locally. AzCopy and Storage Explorer copy data but don't keep servers in sync. Azure Migrate moves whole servers to Azure."
      },
      {
        "id": "normal_86",
        "category": "Storage",
        "q": "A support engineer wants a graphical desktop tool to browse blob containers, upload a few files and manage file shares across several storage accounts. What should they use?",
        "a": [
          "AzCopy",
          "Azure Data Box",
          "Azure Storage Explorer",
          "Azure File Sync"
        ],
        "c": 2,
        "e": "Azure Storage Explorer is a free graphical desktop app for managing blobs, files, queues and tables across storage accounts. AzCopy does similar transfers from the command line. Data Box ships data offline, and File Sync keeps file servers synchronized."
      },
      {
        "id": "normal_87",
        "category": "Storage",
        "q": "An ordering website must hand off work to a separate processing service, so that orders aren't lost while the processor is temporarily down. Which storage service is designed for this?",
        "a": [
          "Table Storage",
          "Blob Storage",
          "Azure Files",
          "Queue Storage"
        ],
        "c": 3,
        "e": "Queue Storage holds messages until a consumer processes them, which decouples the website from the processor so nothing is lost while it's down. Table Storage stores structured entities, Blob Storage stores objects, and Azure Files provides file shares; none of them is a message queue."
      },
      {
        "id": "normal_88",
        "category": "Storage",
        "q": "Log files in Blob Storage are read often during their first month and almost never afterwards. The company wants them moved to a cheaper tier automatically as they age. What should it configure?",
        "a": [
          "Lifecycle management",
          "Azure Storage Explorer",
          "Geo-redundant storage",
          "Azure File Sync"
        ],
        "c": 0,
        "e": "Lifecycle management rules move blobs to a cooler tier, or delete them, based on age, with no manual work. Storage Explorer is a desktop tool for managing data by hand. GRS changes how data is replicated, not its access tier or price per GB. Azure File Sync syncs on-premises file servers with Azure Files."
      },
      {
        "id": "normal_89",
        "category": "Compute",
        "q": "In a Kubernetes-based app, one container crashes at night. The team wants the platform to detect it and start a replacement automatically, without paging anyone. Which Azure service provides this orchestration?",
        "a": [
          "Container Instances",
          "Azure Kubernetes Service",
          "Azure Virtual Desktop",
          "Azure Functions"
        ],
        "c": 1,
        "e": "AKS runs Kubernetes, which continuously compares the desired and actual state and replaces failed containers automatically (self-healing). Container Instances runs standalone containers without that orchestration layer. Functions runs event-driven code, and Virtual Desktop delivers desktops."
      },
      {
        "id": "normal_90",
        "category": "Compute",
        "q": "A company runs 30 identical VMs for a rendering farm. It wants to manage them as one group, apply the same configuration to all of them and change the instance count on a schedule. What should it use?",
        "a": [
          "Availability sets",
          "A management group",
          "VM Scale Sets",
          "Azure Virtual Desktop"
        ],
        "c": 2,
        "e": "Virtual Machine Scale Sets manage identical VMs as one resource: one configuration, central updates and scaling by schedule or metric. Availability sets only spread VMs across fault and update domains. A management group organizes subscriptions for governance. Azure Virtual Desktop delivers user desktops."
      },
      {
        "id": "normal_91",
        "category": "Networking",
        "q": "A company keeps its on-premises Active Directory but wants employees to sign in to Microsoft 365 and Azure with the same username and password. What should it use to synchronize the identities to the cloud?",
        "a": [
          "Microsoft Entra Domain Services",
          "Azure VPN Gateway",
          "Microsoft Entra B2B",
          "Microsoft Entra Connect"
        ],
        "c": 3,
        "e": "Microsoft Entra Connect synchronizes users from on-premises Active Directory to Microsoft Entra ID, so employees keep one identity. Entra Domain Services provides managed domain services (domain join, LDAP) in Azure and doesn't sync from on-premises. A VPN gateway connects networks, not identities. Entra B2B invites external partner users."
      },
      {
        "id": "normal_92",
        "category": "Networking",
        "q": "An office wants a site-to-site VPN to Azure. Besides the VPN gateway in Azure, what must exist on the office side?",
        "a": [
          "A compatible VPN device",
          "An ExpressRoute circuit",
          "A private DNS zone",
          "A VPN client on each PC"
        ],
        "c": 0,
        "e": "A site-to-site VPN needs a VPN gateway in Azure and a compatible VPN device (with a public IP) at the office to terminate the tunnel. An ExpressRoute circuit is a different connection type. A VPN client on each PC is used for point-to-site. A private DNS zone is unrelated to the tunnel."
      },
      {
        "id": "normal_93",
        "category": "Networking",
        "q": "Peering between two VNets fails because both use the address space 10.0.0.0/16. What is the reason?",
        "a": [
          "They are in different regions",
          "Their address spaces overlap",
          "Peering requires a VPN gateway",
          "They lack network security groups"
        ],
        "c": 1,
        "e": "VNets can only be peered when their IP address spaces don't overlap, and here both use 10.0.0.0/16. Peering works across regions, doesn't need a VPN gateway and doesn't require NSGs."
      },
      {
        "id": "normal_94",
        "category": "Networking",
        "q": "A team wants the same set of security rules to apply to all current and future VMs in a subnet, without configuring each VM separately. What should it do?",
        "a": [
          "Assign an NSG to each VM's NIC",
          "Create a private endpoint",
          "Associate an NSG with the subnet",
          "Peer the subnet with another VNet"
        ],
        "c": 2,
        "e": "An NSG associated with a subnet applies its rules to all resources in that subnet, including VMs added later. NSGs on individual network interfaces must be maintained per VM. A private endpoint gives a service a private IP, and peering connects VNets instead of filtering traffic."
      },
      {
        "id": "normal_95",
        "category": "Networking",
        "q": "A storage account has public network access disabled, but VMs in the company VNet still need to use it. What makes this possible?",
        "a": [
          "A public IP address",
          "A point-to-site VPN",
          "A network security group",
          "A private endpoint"
        ],
        "c": 3,
        "e": "A private endpoint gives the storage account a private IP in the VNet, so VMs reach it privately even with public access disabled. A public IP is for internet access. A point-to-site VPN connects individual devices to a VNet, and an NSG filters traffic but can't create a path to the service."
      },
      {
        "id": "normal_96",
        "category": "Networking",
        "q": "An app's admin interface runs on a VM and must accept connections only from the company's office IP range, not from the rest of the internet. What is the simplest control?",
        "a": [
          "An NSG rule for the office IP range",
          "A private DNS zone for the admin site",
          "A strong administrator password policy",
          "Microsoft Entra B2B"
        ],
        "c": 0,
        "e": "An NSG inbound rule that allows only the office IP range blocks every other source at the network level. A private DNS zone hides the name but doesn't block connections by IP. A strong password still lets anyone attempt to connect. Entra B2B is for inviting external users."
      },
      {
        "id": "normal_97",
        "category": "Database",
        "q": "A vendor's software requires SQL Server plus an agent installed on the same Windows server, so the team needs access to the OS. Which option fits best?",
        "a": [
          "Azure SQL Database",
          "SQL Server on an Azure VM",
          "Azure Cosmos DB",
          "SQL Managed Instance"
        ],
        "c": 1,
        "e": "SQL Server on an Azure VM is IaaS: the team gets full OS access to install the agent next to the database. Azure SQL Database and SQL Managed Instance are PaaS, so the OS isn't accessible. Cosmos DB is a NoSQL database."
      },
      {
        "id": "normal_98",
        "category": "Governance",
        "q": "A marketing campaign uses a web app, a database and a storage account for three months. Afterwards, the team wants to remove everything in a single step. How should it set them up?",
        "a": [
          "Give all resources one tag",
          "One subscription per resource",
          "Put them in one resource group",
          "Apply a CanNotDelete lock"
        ],
        "c": 2,
        "e": "Deleting a resource group deletes all the resources in it, so giving the campaign its own resource group allows one-step cleanup. A tag only labels resources. One subscription per resource is unnecessary overhead. A CanNotDelete lock would block deletion."
      },
      {
        "id": "normal_99",
        "category": "Networking",
        "q": "A small business with a tight budget needs an encrypted connection from its single office to Azure and can tolerate variable internet performance. Which option fits best?",
        "a": [
          "ExpressRoute",
          "VNet peering",
          "Point-to-site VPN",
          "Site-to-site VPN connection"
        ],
        "c": 3,
        "e": "A site-to-site VPN uses the existing internet connection, is cheap and quick to set up, and encrypts traffic; variable performance is acceptable here. ExpressRoute costs more and requires a provider. Point-to-site on every PC is harder to manage for a whole office. VNet peering connects Azure VNets only."
      },
      {
        "id": "normal_100",
        "category": "Cloud concepts",
        "q": "A retailer's finance team wants to shift IT spending from large upfront hardware purchases to a recurring monthly cost that follows actual usage, so capital isn't tied up in servers. Which cloud characteristic are they using?",
        "a": [
          "Consumption-based model",
          "Economies of scale",
          "Vertical scaling",
          "Capital expenditure"
        ],
        "c": 0,
        "e": "The consumption-based model means paying only for what you use, which turns upfront CapEx into ongoing operational expense (OpEx). Economies of scale explain why the provider's prices are lower, not how the company's spending pattern changes. Vertical scaling is about resource size. CapEx is exactly the upfront spending the team wants to avoid."
      },
      {
        "id": "normal_101",
        "category": "Cloud concepts",
        "q": "A budgeting team compares hosting an application on-premises versus in Azure and wants to include not just server cost but also power, cooling, staff time and maintenance over several years. What are they calculating?",
        "a": [
          "Return on investment (ROI)",
          "Total cost of ownership",
          "Economies of scale",
          "Capital expenditure (CapEx)"
        ],
        "c": 1,
        "e": "Total cost of ownership (TCO) captures the full cost of running infrastructure over its lifetime, including indirect costs like power, cooling and staff, not just the price of hardware. ROI measures the financial return on an investment. Economies of scale explain provider pricing. CapEx is only the upfront cost, a part of TCO."
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
        "q": "A gaming company's VM-based backend is maxed out on CPU during peak hours. Instead of replacing the VM with a bigger one, it puts several identical VMs behind a load balancer to share the traffic. Which scaling approach did it choose?",
        "a": [
          "Horizontal scaling",
          "Vertical scaling",
          "Elasticity",
          "High availability"
        ],
        "c": 0,
        "e": "Adding more machines of the same size to share the load is horizontal scaling (scaling out). Vertical scaling would mean resizing the existing VM. Elasticity refers to scaling automatically with demand, which isn't described here; this was a manual architecture choice. High availability is about uptime, not how capacity is added."
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
        "q": "A company moves its email from an on-premises server to Microsoft 365 (SaaS). Under the shared responsibility model, what does the company still remain responsible for?",
        "a": [
          "Patching the operating system",
          "Maintaining the physical servers",
          "Updating the application code",
          "Its data and user access"
        ],
        "c": 3,
        "e": "Even in SaaS, the customer always keeps responsibility for its own data and for controlling who can access it. In a SaaS service like Microsoft 365, Microsoft handles the OS, the physical servers and the application code."
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
        "q": "An analytics team needs 200 VMs for a six-hour overnight job and none for the rest of the day. It pays only for the six hours used. Which cloud model makes this cost-effective?",
        "a": [
          "Capital expenditure",
          "Consumption-based model",
          "Reserved capacity",
          "Fixed-price hosting"
        ],
        "c": 1,
        "e": "With the consumption-based model the team pays only for the resources it uses, for as long as it uses them, so a short burst of 200 VMs costs just six hours. CapEx would mean buying that capacity upfront. Reserved capacity is a commitment to steady, long-term usage. Fixed-price hosting charges the same regardless of use."
      }
    ],
    "heroic": [
      {
        "id": "heroic_0",
        "category": "Cloud",
        "q": "An online shop has a steady baseline load all year and a tenfold spike every November and December. Finance wants the lowest total cost without buying hardware for the peak and without risking outages during sales. Which approach fits best?",
        "a": [
          "Reserved baseline plus pay-as-you-go autoscaling",
          "Reservations sized for the peak, all year",
          "Pay-as-you-go for everything, no reservations",
          "Spot VMs for both the baseline and the peak"
        ],
        "c": 0,
        "e": "Reserving the predictable baseline gets the discount where usage is steady, and pay-as-you-go autoscaling covers the seasonal peak only while it lasts. Reserving for the peak means paying for idle capacity ten months a year. Pure pay-as-you-go works but gives up the reservation discount on the constant baseline. Spot VMs can be evicted at any time, which risks outages during sales."
      },
      {
        "id": "heroic_1",
        "category": "Cloud",
        "q": "A company must keep a licensing-locked system on servers in its own datacenter, but builds all new customer apps in Azure and connects the two. Which cloud model is this, and who patches the operating system of the on-premises servers?",
        "a": [
          "Multi-cloud; the company's IT patches them",
          "Hybrid cloud; the customer patches",
          "Hybrid cloud; Microsoft patches them",
          "Private cloud; Microsoft patches them"
        ],
        "c": 1,
        "e": "Combining on-premises servers with a public cloud is hybrid cloud, and servers in your own datacenter are entirely your responsibility, including OS patching. Multi-cloud means using several public cloud providers, which is not the case here. Microsoft has no responsibility for hardware or software in a customer's own datacenter. A private cloud alone would not include the Azure apps, and Microsoft still would not patch those servers."
      },
      {
        "id": "heroic_2",
        "category": "Reliability",
        "q": "A company deploys its critical app to two Azure regions for disaster recovery. It wants Microsoft to avoid rolling out planned platform updates to both regions at once and to prioritize recovery of one of them during a broad outage. What should it choose?",
        "a": [
          "Two availability zones in one region",
          "Two regions in different geographies",
          "Two regions that form a region pair",
          "A sovereign region plus a public region"
        ],
        "c": 2,
        "e": "Region pairs receive planned updates one region at a time, and one region of each pair is prioritized for recovery in a broad outage. Two availability zones are in the same region, so a regional disaster affects both. Regions in different geographies are not a pair, so they get no coordinated updates or recovery priority. Sovereign regions are isolated clouds for government or legal needs, not a disaster-recovery pairing."
      },
      {
        "id": "heroic_3",
        "category": "Governance",
        "q": "A company has 40 subscriptions under one management group, and new subscriptions are added every month. It must stop every team, including subscription Owners, from creating the most expensive VM sizes, with no per-subscription setup. What should it do?",
        "a": [
          "Assign a custom RBAC role in each subscription",
          "Put a ReadOnly lock on every subscription",
          "Set a Cost Management budget on the management group",
          "Assign an allowed-SKU policy at the management group"
        ],
        "c": 3,
        "e": "A policy assigned at the management group is inherited by every current and future subscription below it and denies the restricted sizes even for Owners. Custom RBAC roles would need setting up per subscription, and Owners could change them. A ReadOnly lock would block every change, not just expensive VM sizes. A budget only sends alerts when spending crosses a threshold; it does not block deployments."
      },
      {
        "id": "heroic_4",
        "category": "Governance",
        "q": "An external vendor, already invited as a guest in your tenant, must read the configuration and logs of one web app for two weeks. They must not see the other apps in the same resource group or change anything. What should you assign?",
        "a": [
          "Reader role on that web app resource",
          "Reader role on the whole resource group",
          "Contributor role on that web app",
          "A CanNotDelete lock on the web app"
        ],
        "c": 0,
        "e": "Scoping the Reader role to the single resource gives read-only access to that app and nothing else. Reader on the resource group would also expose the other apps in it. Contributor allows changes, which the vendor must not make. A lock prevents deletion but grants no access at all."
      },
      {
        "id": "heroic_5",
        "category": "Cost",
        "q": "Finance wants a monthly cost breakdown per project. Several projects share one subscription, some even share resource groups, and moving resources or restructuring subscriptions is not allowed. Which approach gives the breakdown?",
        "a": [
          "Group costs by resource group in Cost Management",
          "Tag resources by project; group costs by tag",
          "Move each project to its own resource group",
          "Review Azure Advisor cost recommendations"
        ],
        "c": 1,
        "e": "Project tags on each resource let Cost Management group and filter costs by project even when projects share a resource group. Grouping by resource group mixes the projects that share a group. Moving each project to its own group would work but is the restructuring that is not allowed. Advisor suggests savings; it does not break costs down by project."
      },
      {
        "id": "heroic_6",
        "category": "Storage",
        "q": "A photo app stores millions of images that browsers load directly by URL. New photos are viewed often for about a month, then rarely, but even old photos must open instantly when someone views them. Which storage setup fits?",
        "a": [
          "Blob Storage, hot then archive tier",
          "Azure Files share on the cool tier",
          "Blob Storage, hot then cool tier",
          "Managed disks attached to the web VMs"
        ],
        "c": 2,
        "e": "Blob Storage serves objects over HTTP URLs, and the cool tier lowers storage cost for rarely read data while keeping it online. The archive tier is offline and needs hours of rehydration before a photo could be read. Azure Files provides SMB/NFS shares for mounting, not object storage for millions of web images. Managed disks attach to individual VMs and are not reachable by browsers through URLs."
      },
      {
        "id": "heroic_7",
        "category": "Storage",
        "q": "An order service writes orders faster than the billing service can process them, and billing is sometimes offline for maintenance. No order may be lost, each order is a small message processed once, and the services must stay decoupled. Which storage service connects them?",
        "a": [
          "Azure Table Storage",
          "Azure Files",
          "Azure Blob Storage",
          "Azure Queue Storage"
        ],
        "c": 3,
        "e": "Queue Storage holds messages until a consumer retrieves them, so billing can catch up after delays or downtime. Table Storage stores structured key-value entities but has no message-queuing behavior. Azure Files offers shared file systems, not message handoff between services. Blob Storage stores objects but would need custom logic to track which orders were processed."
      },
      {
        "id": "heroic_8",
        "category": "Networking",
        "q": "Developers access a storage account from VMs in a VNet. Security requires that the account is unreachable from the internet and that traffic from the VNet reaches it through a private IP address inside the VNet. What should the team configure?",
        "a": [
          "Private endpoint, public access off",
          "NSG rule on the VMs' subnet",
          "Point-to-site VPN Gateway in the VNet",
          "Peering to the storage account"
        ],
        "c": 0,
        "e": "A private endpoint gives the storage account a private IP in the VNet, and disabling public network access removes the internet path. An NSG filters the VMs' traffic but leaves the account's public endpoint open. A point-to-site VPN connects individual client computers to the VNet and does not change the account's public exposure. Peering connects two VNets; a storage account is not a VNet and cannot be peered."
      },
      {
        "id": "heroic_9",
        "category": "Compute",
        "q": "A team deploys a Node.js web app several times a day. It wants built-in autoscaling and no OS patching, but the app must run continuously to hold long-lived WebSocket connections. Which hosting option fits best?",
        "a": [
          "Azure Functions, Consumption plan",
          "An Azure App Service web app",
          "Virtual Machine Scale Sets",
          "Azure Container Instances"
        ],
        "c": 1,
        "e": "App Service runs web apps on a managed platform with autoscaling and keeps them running continuously, so the team never patches an OS. Functions on the Consumption plan are event-driven and can scale to zero, which suits short executions, not constantly open connections. Scale sets autoscale, but the team would still patch and manage the VM operating systems. Container Instances avoid OS management but provide no built-in autoscaling for a web app."
      },
      {
        "id": "heroic_10",
        "category": "Security",
        "q": "A security lead wants one service that scores the security posture of all Azure subscriptions, recommends fixes for misconfigured VMs and storage accounts, alerts on active threats, and also covers on-premises servers connected through Azure Arc. Which service fits?",
        "a": [
          "Azure Policy compliance",
          "Microsoft Entra ID Protection",
          "Microsoft Defender for Cloud",
          "Microsoft Purview"
        ],
        "c": 2,
        "e": "Defender for Cloud scores security posture, recommends fixes and detects threats across Azure, on-premises (via Arc) and other clouds. Azure Policy audits and enforces rules you define but gives no posture score or threat alerts. Entra ID Protection detects risky sign-ins and users, not misconfigured VMs or storage. Microsoft Purview governs and classifies data, not the security configuration of VMs."
      },
      {
        "id": "heroic_11",
        "category": "Networking",
        "q": "A bank needs a connection from its datacenter to Azure that never travels over the public internet and has predictable latency. Its auditors also require the link to stay up if one of the physical connections fails. Which solution fits?",
        "a": [
          "Active-active site-to-site VPN Gateway",
          "Point-to-site VPN for each server",
          "Global VNet peering to the bank's datacenter",
          "ExpressRoute via a connectivity provider"
        ],
        "c": 3,
        "e": "ExpressRoute provides a private connection through a connectivity provider that bypasses the public internet, and each circuit includes two redundant connections. An active-active VPN is resilient but still travels over the public internet. Point-to-site VPN connects individual devices over the internet, not a whole datacenter. VNet peering connects Azure VNets only and cannot reach an on-premises datacenter."
      },
      {
        "id": "heroic_12",
        "category": "Networking",
        "q": "Forty employees work from home on laptops and need encrypted access to VMs in an Azure VNet. There is no office network to connect, and the VMs must not get public IP addresses. Which connection fits?",
        "a": [
          "Point-to-site VPN through a VPN Gateway",
          "Site-to-site VPN through a VPN Gateway",
          "ExpressRoute circuit to each home",
          "Public endpoints restricted by NSG rules"
        ],
        "c": 0,
        "e": "Point-to-site VPN connects individual devices to a VNet through an encrypted tunnel, which suits home workers without an office network. Site-to-site VPN connects a whole on-premises network through a VPN device, which these employees do not have. ExpressRoute is a dedicated circuit for sites, not for individual homes. Public endpoints would need public IP addresses, which are not allowed."
      },
      {
        "id": "heroic_13",
        "category": "Storage",
        "q": "A storage account must keep data available if one datacenter in the region fails. Regulation forbids copies outside the country's single Azure region, and the workload needs a premium block blob account. Which redundancy option fits?",
        "a": [
          "Locally redundant storage (LRS)",
          "Zone-redundant storage (ZRS)",
          "Geo-redundant storage (GRS)",
          "Geo-zone-redundant storage (GZRS)"
        ],
        "c": 1,
        "e": "ZRS copies data synchronously across three availability zones in one region, survives a datacenter failure and is supported by premium block blob accounts. LRS keeps all copies in a single datacenter, so it does not survive that datacenter failing. GRS replicates to a second region, which breaks the single-region requirement. GZRS also copies to a secondary region and is not available for premium accounts."
      },
      {
        "id": "heroic_14",
        "category": "Storage",
        "q": "Accounting documents must be kept for 10 years and are read only during audits, which are always announced a week ahead. The company wants the lowest possible storage cost. How should the blobs be stored?",
        "a": [
          "Cool tier as the account default",
          "Archive tier as the account default",
          "Archive tier set on each blob",
          "Cold tier set on each blob"
        ],
        "c": 2,
        "e": "Archive is the cheapest tier for rarely read data, rehydration within hours fits audits announced a week ahead, and it is set on individual blobs. Cool is an online tier and costs more to store than archive. An account's default access tier cannot be archive; archive is only set per blob. Cold is cheaper than cool but still costs more to store than archive."
      },
      {
        "id": "heroic_15",
        "category": "Identity",
        "q": "Employees sign in to Microsoft Entra ID once each morning with MFA, but must type a password again for the CRM and the intranet, which still use their own user databases. What removes the extra prompts without weakening security?",
        "a": [
          "A Conditional Access policy for both apps",
          "Passwordless sign-in for all employees",
          "Microsoft Entra Domain Services for both apps",
          "Integrate both apps with Entra ID for SSO"
        ],
        "c": 3,
        "e": "Connecting the apps to Entra ID for single sign-on lets one authenticated session, already protected by MFA, open both apps. Conditional Access decides when to allow or challenge a sign-in but does not merge separate app logins. Passwordless changes how users sign in to Entra ID, yet apps with their own user databases would still ask for credentials. Entra Domain Services provides a managed domain for legacy LDAP or Kerberos apps, not single sign-on for apps with their own accounts."
      },
      {
        "id": "heroic_16",
        "category": "Identity",
        "q": "A company wants employees to stop using passwords entirely, yet every sign-in must still combine two different factor types: something they have and something they are or know. Which option meets this?",
        "a": [
          "Windows Hello for Business",
          "Password plus a code sent by SMS",
          "SSO with one strong password",
          "Password plus security questions"
        ],
        "c": 0,
        "e": "Windows Hello for Business is passwordless and combines the device (something you have) with a biometric or PIN (something you are or know). A password plus an SMS code is MFA but still relies on a password. SSO reduces sign-in prompts, but the single sign-in still uses a password. Security questions are something you know, like the password, so this is neither passwordless nor two factor types."
      },
      {
        "id": "heroic_17",
        "category": "Identity",
        "q": "Thirty consultants from a partner company need access to one internal app for six months. They already have work accounts in their own company's Microsoft Entra tenant, and your IT team wants no extra passwords to manage. What should you use?",
        "a": [
          "New member accounts in your own tenant",
          "Microsoft Entra B2B collaboration guests",
          "Microsoft Entra Domain Services accounts",
          "Microsoft Entra Connect synchronization"
        ],
        "c": 1,
        "e": "B2B collaboration invites the consultants as guests who sign in with their own organization's accounts, so you manage no passwords. Member accounts in your tenant would mean new credentials to manage and remove later. Domain Services provides a managed domain for legacy protocols, not partner access. Entra Connect synchronizes your own on-premises AD with your tenant, not another company's users."
      },
      {
        "id": "heroic_18",
        "category": "Governance",
        "q": "An audit requires every storage account across 12 subscriptions to accept only HTTPS traffic. New non-compliant accounts must be blocked at deployment, and the existing ones must be listed so the team can fix them. What should be used?",
        "a": [
          "A ReadOnly lock on each subscription",
          "Microsoft Defender for Cloud recommendations",
          "Azure Policy assigned at a management group",
          "A custom RBAC role in each subscription"
        ],
        "c": 2,
        "e": "Azure Policy denies new non-compliant deployments and reports existing non-compliant resources, and assigning it at a management group covers all 12 subscriptions. A ReadOnly lock blocks every change, including fixing the accounts. Defender for Cloud can flag insecure settings, but it does not block new deployments on its own. RBAC controls who can act, not which configuration a resource must have."
      },
      {
        "id": "heroic_19",
        "category": "DevOps",
        "q": "A team rebuilds the same network, VMs and storage in test and production. It wants a version-controlled file that describes the desired end state, can be redeployed repeatedly without creating duplicates, and is processed by Azure Resource Manager. What should it use?",
        "a": [
          "Azure CLI scripts run from Cloud Shell",
          "Azure portal deployments by hand",
          "Azure Policy initiatives",
          "ARM templates or Bicep files"
        ],
        "c": 3,
        "e": "ARM templates and Bicep are declarative infrastructure as code: they describe the end state, live in version control, and redeploying them is idempotent. CLI scripts are imperative step-by-step commands that need extra logic to avoid duplicates. Portal deployments by hand are not version controlled and are error-prone to repeat. Policy initiatives enforce rules on resources but do not deploy them."
      },
      {
        "id": "heroic_20",
        "category": "Monitoring",
        "q": "A web app's response time sometimes spikes, and the team only learns about it from customers. They want a notification within minutes whenever average response time exceeds two seconds, whether or not Azure itself has an incident. What should they set up?",
        "a": [
          "An Azure Monitor metric alert",
          "An Azure Service Health alert",
          "An Azure Advisor recommendation digest",
          "A Resource Health alert"
        ],
        "c": 0,
        "e": "An Azure Monitor metric alert fires when a metric such as response time crosses a threshold and notifies the team through an action group. Service Health alerts cover Azure platform incidents and maintenance, not your app's response time. Advisor digests summarize recommendations periodically and are not real-time threshold alerts. Resource Health reports whether the resource is available, not whether it is slow."
      },
      {
        "id": "heroic_21",
        "category": "Security",
        "q": "After a breach, an architect proposes MFA for identities, NSGs between subnets, patched VMs and encrypted data. She stresses that each control must slow an attacker down even after the outer controls have already failed. Which principle does this describe?",
        "a": [
          "Zero Trust",
          "Defense in depth",
          "Least privilege",
          "Shared responsibility"
        ],
        "c": 1,
        "e": "Defense in depth stacks independent security layers, from identity and network to compute and data, so one failed layer does not expose the data. Zero Trust means verifying every request explicitly and assuming breach, not specifically stacking layers. Least privilege limits each identity to the access it needs, which is only one of these controls. Shared responsibility describes which security tasks belong to the provider and which to the customer."
      },
      {
        "id": "heroic_22",
        "category": "Migration",
        "q": "Before moving 300 on-premises VMware VMs, a company needs their real utilization, the dependencies between them, right-sized Azure VM recommendations and a monthly cost estimate, all from the same service that will later replicate them. What should it use first?",
        "a": [
          "Pricing calculator",
          "Azure Advisor",
          "Azure Migrate",
          "Azure Data Box"
        ],
        "c": 2,
        "e": "Azure Migrate discovers on-premises servers, maps dependencies, recommends Azure sizes with cost estimates and then migrates them. The pricing calculator estimates costs only from configurations entered by hand, without measuring the servers. Advisor analyzes resources already running in Azure, not on-premises VMware VMs. Data Box ships large data volumes offline but does not assess servers."
      },
      {
        "id": "heroic_23",
        "category": "Hybrid",
        "q": "A company keeps its on-premises Active Directory for file servers but moves email and new SaaS apps to Microsoft 365 and Microsoft Entra ID. Employees must use the same username and password in both environments. What should it deploy?",
        "a": [
          "Microsoft Entra Domain Services",
          "Azure Arc-enabled servers",
          "Microsoft Entra B2B collaboration",
          "Microsoft Entra Connect"
        ],
        "c": 3,
        "e": "Entra Connect synchronizes users and password hashes from on-premises AD to Entra ID, so employees use one identity in both places. Domain Services provides a managed domain in Azure, not synchronization from your own domain controllers. Arc-enabled servers bring servers under Azure management but do not sync user identities. B2B collaboration is for guests from other organizations, not your own employees."
      },
      {
        "id": "heroic_24",
        "category": "Governance",
        "q": "A production resource group must be protected so that nobody, not even an Owner, can delete it or anything in it. The team must still be able to update app settings and scale the VMs inside. What should be applied?",
        "a": [
          "CanNotDelete lock on the resource group",
          "ReadOnly lock on the resource group",
          "Reader role for all users but Owners",
          "CanNotDelete lock on each VM separately"
        ],
        "c": 0,
        "e": "A CanNotDelete (Delete) lock on the resource group is inherited by everything in it and blocks deletion even for Owners, while updates stay allowed. A ReadOnly lock would also block updating settings and scaling. Reader roles would stop non-Owners from updating, and Owners could still delete. Locks on the VMs alone would leave the group and its other resources deletable."
      },
      {
        "id": "heroic_25",
        "category": "Security",
        "q": "A company moves an internal app from its own servers to Azure App Service, a PaaS offering. Which set of responsibilities stays entirely with the company after the move?",
        "a": [
          "Its data, user accounts and OS patching",
          "Its data, user accounts and access rights",
          "Physical hosts, network and app runtime",
          "OS patching, network controls and data"
        ],
        "c": 1,
        "e": "In every service model the customer keeps responsibility for its data, devices, and accounts and identities, including who has access. In PaaS Microsoft patches the operating system, so OS patching is no longer the company's task. Physical hosts and the datacenter network are always Microsoft's, and the App Service runtime is managed by Microsoft. That last set again wrongly keeps OS patching with the company."
      },
      {
        "id": "heroic_26",
        "category": "Networking",
        "q": "A head office needs a private connection to Azure that never crosses the public internet and has predictable bandwidth. A small branch office needs encrypted access to the same VNet within days, on a tight budget. Which combination fits?",
        "a": [
          "Head office: VPN Gateway; branch: ExpressRoute",
          "Head office: VNet peering; branch: VPN Gateway",
          "Head office: ExpressRoute; branch: VPN Gateway",
          "Head office: ExpressRoute; branch: VNet peering"
        ],
        "c": 2,
        "e": "ExpressRoute is a private, dedicated link with predictable bandwidth, and a VPN Gateway gives an encrypted tunnel over the existing internet connection quickly and cheaply. Swapping them gives the branch a costly, slow-to-provision line and sends head-office traffic over the internet. VNet peering connects Azure VNets to each other, so it cannot connect the head office's datacenter. Peering likewise cannot connect the branch office's on-premises network."
      },
      {
        "id": "heroic_27",
        "category": "Reliability",
        "q": "Two VMs run a legacy app in a region that does not offer availability zones. The team wants to avoid both VMs going down together because of a rack power failure or because Azure reboots hosts during planned maintenance. What should it use?",
        "a": [
          "A zone-redundant storage account",
          "One availability zone per VM",
          "A single VM with Premium SSD",
          "An availability set for both VMs"
        ],
        "c": 3,
        "e": "An availability set spreads VMs across fault domains (separate power and network) and update domains (rebooted at different times), so both VMs do not fail together. Zone-redundant storage protects data, not the VMs themselves. Availability zones would help, but this region does not offer them. A single VM, even with Premium SSD, is still a single point of failure."
      },
      {
        "id": "heroic_28",
        "category": "DevOps",
        "q": "An admin on a locked-down laptop cannot install software, but today she must run Azure CLI and Azure PowerShell commands against several subscriptions while signed in with her Entra ID account. What should she use?",
        "a": [
          "Azure Cloud Shell in the browser",
          "Azure CLI installed on the laptop",
          "ARM templates in the Azure portal",
          "Azure Arc on the laptop"
        ],
        "c": 0,
        "e": "Cloud Shell runs in the browser with Azure CLI and Azure PowerShell preinstalled and uses the signed-in account, so nothing has to be installed. Installing the CLI locally is not possible on the locked-down laptop. ARM templates deploy resources declaratively but are not a shell for running commands. Arc brings servers under Azure management; it does not provide a command-line environment."
      },
      {
        "id": "heroic_29",
        "category": "Storage",
        "q": "A team needs one storage account that holds blobs, file shares, queues and tables, supports geo-redundant replication and lets it set hot, cool or archive tiers on blobs. Which account type fits?",
        "a": [
          "Premium block blob account",
          "Standard general-purpose v2",
          "Premium file share account",
          "Premium page blob account"
        ],
        "c": 1,
        "e": "Standard general-purpose v2 supports blobs, files, queues and tables, every redundancy option including geo-redundancy, and blob access tiers. Premium block blob accounts store only block and append blobs, with LRS or ZRS. Premium file share accounts hold only Azure Files shares. Premium page blob accounts hold only page blobs, such as unmanaged VM disks."
      },
      {
        "id": "heroic_30",
        "category": "Storage",
        "q": "A reporting app reads data from a storage account. If the primary region becomes unavailable, the app must keep reading from the secondary region without waiting for a failover, and the primary copies must survive a single zone outage. Which redundancy fits?",
        "a": [
          "Geo-zone-redundant storage (GZRS)",
          "Read-access GRS (RA-GRS)",
          "Read-access GZRS (RA-GZRS)",
          "Zone-redundant storage (ZRS)"
        ],
        "c": 2,
        "e": "RA-GZRS keeps zone-redundant copies in the primary region and lets apps read the secondary copy at any time. GZRS has the same copies, but the secondary is readable only after a failover. RA-GRS allows secondary reads but keeps the primary copies in one datacenter, so it does not survive a zone outage. ZRS keeps data in one region only."
      },
      {
        "id": "heroic_31",
        "category": "Storage",
        "q": "Every night a Linux server must copy several gigabytes of new log files to Blob Storage with a scheduled script that runs unattended, without any user interface. The office has a fast internet connection. Which tool fits?",
        "a": [
          "Azure Storage Explorer",
          "Azure File Sync agent",
          "Azure Data Box Disk",
          "AzCopy in a cron job"
        ],
        "c": 3,
        "e": "AzCopy is a command-line tool that copies files to Blob Storage and fits unattended scheduled scripts on Linux. Storage Explorer is a graphical app for managing storage by hand, not unattended nightly jobs. The File Sync agent runs on Windows Server and syncs file shares with Azure Files, not logs to Blob Storage. Data Box Disk ships data offline, which makes no sense for a few gigabytes a night over a fast link."
      },
      {
        "id": "heroic_32",
        "category": "Storage",
        "q": "Several Linux VMs must mount the same shared file system over NFS at the same time. The team does not want to run its own file server VM, and no on-premises Windows server is involved. Which option fits?",
        "a": [
          "An Azure Files NFS share",
          "Azure File Sync to the VMs",
          "A managed disk on each VM",
          "Blob Storage with AzCopy"
        ],
        "c": 0,
        "e": "Azure Files offers fully managed shares that many VMs mount at once, including NFS shares for Linux on premium file share accounts. File Sync caches Azure file shares on Windows Server and does not apply to Linux VMs. A managed disk attaches to a single VM rather than acting as one shared file system. AzCopy copies data into Blob Storage but gives the VMs no mounted file system."
      },
      {
        "id": "heroic_33",
        "category": "Storage",
        "q": "A company must move 60 TB of archived video into Blob Storage within two weeks. Its internet connection would need about two months for the transfer, and the data must stay encrypted while in transit. Which option fits?",
        "a": [
          "AzCopy over the internet link",
          "Azure Data Box appliance",
          "Azure File Sync to a share",
          "A new ExpressRoute circuit"
        ],
        "c": 1,
        "e": "Data Box is a rugged, encrypted appliance shipped to the company, filled locally and returned to Microsoft for upload, which beats a two-month network transfer. AzCopy over the existing link would still take about two months. File Sync synchronizes over the same network, with the same bandwidth limit. A new ExpressRoute circuit takes weeks to provision and is a costly permanent link for a one-time move."
      },
      {
        "id": "heroic_34",
        "category": "Storage",
        "q": "A storage account keeps project files in the hot tier. Files older than 60 days are opened only about twice a year, but then they must open within seconds. Which tier gives the lowest storage cost for those older files?",
        "a": [
          "Cool tier",
          "Archive tier",
          "Cold tier",
          "Premium tier"
        ],
        "c": 2,
        "e": "Cold is an online tier with lower storage cost than cool, meant for rarely accessed data that is still needed instantly. Cool is also online but costs more to store than cold. Archive is cheaper still but offline, so files would need hours of rehydration. Premium is a performance tier for low latency at a higher price, the opposite of what rarely used files need."
      },
      {
        "id": "heroic_35",
        "category": "Networking",
        "q": "VNet A is peered with VNet B, and VNet B is peered with VNet C. VMs in A cannot reach VMs in C. All three VNets are in Azure, and traffic must stay private on the Microsoft backbone with low latency. What should the team do?",
        "a": [
          "Create a private DNS zone for all three",
          "Connect A and C with ExpressRoute",
          "Assign public IPs to the VMs in C",
          "Peer VNet A directly with VNet C"
        ],
        "c": 3,
        "e": "VNet peering is not transitive, so A and C need their own peering, which keeps traffic private on the Microsoft backbone. A private DNS zone resolves names but creates no network path. ExpressRoute connects on-premises networks to Azure, not two Azure VNets. Public IPs would route traffic through public endpoints instead of the private path."
      },
      {
        "id": "heroic_36",
        "category": "Networking",
        "q": "In one VNet, the web subnet must accept HTTPS from the internet, while the database subnet must accept traffic only from the web subnet on port 1433. Which control implements both rules?",
        "a": [
          "NSG rules on the two subnets",
          "A private DNS zone for the VNet",
          "VNet peering between the two subnets",
          "Azure DDoS Protection on the VNet"
        ],
        "c": 0,
        "e": "Network security groups filter traffic by source, destination, port and protocol, so one allows HTTPS from the internet and the other allows only port 1433 from the web subnet. A private DNS zone resolves names and filters no traffic. Subnets in one VNet already communicate, so peering does not apply and filters nothing. DDoS Protection mitigates volumetric attacks but does not set per-subnet port rules."
      },
      {
        "id": "heroic_37",
        "category": "Networking",
        "q": "An app VNet in West Europe must talk to a database VNet in North Europe over private IP addresses with low latency. The team wants no VPN gateways and no traffic over the public internet. What should it configure?",
        "a": [
          "A VNet-to-VNet VPN connection",
          "Global virtual network peering",
          "An ExpressRoute circuit",
          "Public endpoints with NSG rules"
        ],
        "c": 1,
        "e": "Global VNet peering connects VNets in different regions over the Microsoft backbone with private IPs and no gateway. A VNet-to-VNet VPN also works but needs VPN gateways and adds encryption overhead and latency. ExpressRoute connects on-premises networks to Azure, not two Azure VNets. Public endpoints would put the traffic on the internet path that must be avoided."
      },
      {
        "id": "heroic_38",
        "category": "Networking",
        "q": "A team tries to peer a new VNet with an existing one, but the operation fails. Both VNets use the address space 10.1.0.0/16, and the team needs private, low-latency connectivity between them. What must change?",
        "a": [
          "Use a VNet-to-VNet VPN instead of peering",
          "Link both VNets to one private DNS zone",
          "Give one VNet a non-overlapping range",
          "Put both VNets into one resource group"
        ],
        "c": 2,
        "e": "VNets with overlapping address spaces cannot be peered, so one VNet must be re-addressed to a range that does not overlap. A VNet-to-VNet VPN has the same requirement for non-overlapping ranges. A private DNS zone resolves names but does not fix an address conflict. Resource groups are management containers and have no effect on routing or peering."
      },
      {
        "id": "heroic_39",
        "category": "Networking",
        "q": "VMs in two peered VNets must resolve each other by names such as db01.corp.internal. The names must never be resolvable from the internet, and the team does not want to run its own DNS servers. What should it use?",
        "a": [
          "An Azure DNS public zone for corp.internal",
          "DNS servers running on two Azure VMs",
          "Public IP DNS name labels on each VM",
          "A Private DNS zone linked to both VNets"
        ],
        "c": 3,
        "e": "A private DNS zone linked to both VNets provides name resolution only inside those VNets, with no DNS servers to run. A public zone would make the names resolvable from the internet. DNS servers on VMs would work but are the self-managed option the team wants to avoid. Public IP DNS labels give internet-resolvable Azure names, not private names in the team's own domain."
      },
      {
        "id": "heroic_40",
        "category": "Compute",
        "q": "A retailer runs a stateless web front end on identical Windows VMs. During sales the load triples and must be absorbed without anyone resizing machines, and capacity must also survive the failure of one datacenter in the region. What should it use?",
        "a": [
          "VM Scale Sets spread across availability zones",
          "An availability set with VMs resized during sales",
          "One larger VM with zone-redundant storage",
          "Azure Container Instances in one zone"
        ],
        "c": 0,
        "e": "Scale sets add and remove identical VMs automatically, and spreading them across availability zones keeps capacity if one datacenter fails. An availability set only spreads VMs across racks in one datacenter and does not add VMs by itself. One larger VM is vertical scaling and still a single point of failure. Container Instances run individual containers rather than autoscaling Windows VMs, and one zone does not survive a datacenter outage."
      },
      {
        "id": "heroic_41",
        "category": "Compute",
        "q": "A team runs a dozen microservices in containers. It wants automatic scaling driven by HTTP traffic, including scaling to zero overnight, but has no Kubernetes skills and does not want to manage clusters. Which service fits best?",
        "a": [
          "Azure Kubernetes Service",
          "Azure Container Apps",
          "Azure Container Instances",
          "Virtual Machine Scale Sets"
        ],
        "c": 1,
        "e": "Container Apps runs containerized microservices with automatic, traffic-based scaling, including to zero, and hides the cluster management. AKS gives full Kubernetes control, but the team would have to run and understand the cluster. Container Instances run single containers quickly but offer no built-in autoscaling for a set of microservices. Scale sets scale VMs, leaving the team to manage the OS and the container runtime."
      },
      {
        "id": "heroic_42",
        "category": "Compute",
        "q": "A nightly job runs for about four minutes to build a report from files in Blob Storage. The team wants to pay nothing while it is idle, write only the code, and let Azure provision and scale whatever runs it. Which option fits?",
        "a": [
          "A Windows VM started by a schedule",
          "An App Service web app, always on",
          "Azure Functions with a timer trigger",
          "A container instance that always runs"
        ],
        "c": 2,
        "e": "Azure Functions is serverless: a timer trigger runs the code on schedule, and on a Consumption plan you pay only for executions. A scheduled VM still needs OS management and pays for its disks while idle. An always-on web app keeps paying for its App Service plan all day. A container instance that always runs is billed for every second, including the idle hours."
      },
      {
        "id": "heroic_43",
        "category": "Cloud",
        "q": "A startup is unsure its product will survive the first year. It wants to avoid buying servers, pay only for the resources it actually uses, and be able to shut everything down at short notice. Which combination of characteristics addresses this?",
        "a": [
          "CapEx spending with consumption-based pricing",
          "OpEx spending with three-year reservations",
          "CapEx spending with a private cloud",
          "OpEx spending with consumption-based pricing"
        ],
        "c": 3,
        "e": "Operational expenditure means no upfront hardware purchase, and consumption-based pricing charges only for resources used, which can stop at any time. CapEx is the upfront purchase of servers the startup wants to avoid. Three-year reservations commit the startup to paying for capacity even if the product ends. A private cloud on its own hardware is a capital investment that cannot be ended at short notice."
      },
      {
        "id": "heroic_44",
        "category": "Cloud",
        "q": "A hospital group runs virtualization with self-service provisioning on its own hardware, used only by its own departments. Later it adds Azure for public-facing apps and connects both environments. How are the two stages classified?",
        "a": [
          "Private cloud, then hybrid cloud",
          "Public cloud, then multi-cloud",
          "On-premises only, then multi-cloud",
          "Private cloud, then multi-cloud"
        ],
        "c": 0,
        "e": "Cloud capabilities on hardware used by a single organization form a private cloud, and connecting it with a public cloud makes a hybrid cloud. It was never a public cloud, because the hardware served only one organization. Self-service provisioning goes beyond plain on-premises hosting, and one public provider is not multi-cloud. Multi-cloud means using several public cloud providers, while this is a private cloud plus one public cloud."
      },
      {
        "id": "heroic_45",
        "category": "Cost",
        "q": "Each project in a shared subscription has its own resource group. Project managers must see only their own project's costs in Cost Management and must not be able to change any resources. What should you assign?",
        "a": [
          "Cost Management Reader on the subscription",
          "Cost Management Reader per resource group",
          "Contributor per resource group",
          "Billing Reader on the billing account"
        ],
        "c": 1,
        "e": "Cost Management Reader scoped to a project's resource group shows that group's costs only and allows no resource changes. The same role on the subscription would show every project's costs. Contributor allows changing resources, which managers must not do. Billing Reader at the billing account exposes billing data for the whole organization."
      },
      {
        "id": "heroic_46",
        "category": "Cost",
        "q": "A company compares running the same app in a nearby region or in a cheaper distant region. Either way, users download about 30 TB per month from the app, and uploads are small. Which pair of cost factors decides the comparison?",
        "a": [
          "Region pricing plus inbound data transfer",
          "Resource locks plus outbound data transfer",
          "Region pricing and outbound data transfer",
          "Subscription count and inbound data transfer"
        ],
        "c": 2,
        "e": "Service prices differ by region, and outbound data transfer is billed per GB, with rates that depend on the source region. Inbound data transfer into Azure is generally free, so small uploads do not change the comparison. Resource locks protect resources and have no cost. The number of subscriptions does not change the price of the resources themselves."
      },
      {
        "id": "heroic_47",
        "category": "Cost",
        "q": "A team lead wants an email when the subscription's spending reaches 80 % of the monthly plan and another one at 100 %. No resources may be stopped or blocked automatically. What should be configured?",
        "a": [
          "An Azure Monitor metric alert",
          "An Azure Policy with a cost rule",
          "An Azure Advisor cost digest",
          "A budget in Cost Management"
        ],
        "c": 3,
        "e": "A Cost Management budget sends alerts at thresholds such as 80 % and 100 % of the planned amount and does not stop resources on its own. Monitor metric alerts watch resource metrics like CPU, not subscription spending. Azure Policy controls resource configuration and has no spending thresholds. Advisor digests list cost recommendations, not alerts against a planned amount."
      },
      {
        "id": "heroic_48",
        "category": "Reliability",
        "q": "A web tier on VMs spread across availability zones has a 99.99 % SLA, and it depends on a managed data service that also has a 99.99 % SLA. Both must be up for the app to work. What is the approximate composite SLA of the app?",
        "a": [
          "99.98 %",
          "99.99 %",
          "99.999 %",
          "99.9 %"
        ],
        "c": 0,
        "e": "Services that depend on each other multiply their SLAs: 0.9999 × 0.9999 ≈ 0.9998, so about 99.98 %. 99.99 % ignores that a failure of either service breaks the app. 99.999 % would need extra redundancy that raises availability above each component, which this chain does not have. 99.9 % is far lower than the product of two 99.99 % SLAs."
      },
      {
        "id": "heroic_49",
        "category": "Reliability",
        "q": "An app must keep running if one datacenter in its region fails. If the whole region is lost, a few hours of downtime are acceptable, but the data in its storage account must still be recoverable. Which design meets this at the lowest cost?",
        "a": [
          "Availability set VMs with GRS storage",
          "Zone-spread VMs with GZRS storage",
          "Zone-spread VMs with ZRS storage",
          "Two active regions with RA-GZRS storage"
        ],
        "c": 1,
        "e": "VMs across availability zones survive a datacenter failure, and GZRS keeps zone-redundant copies in the primary region plus an asynchronous copy in the secondary region. An availability set protects only against rack failures inside one datacenter, and GRS keeps the primary copies in a single datacenter. ZRS keeps every copy in one region, so a regional loss would lose the data. Two active regions with RA-GZRS also works but costs more than needed when hours of downtime are acceptable."
      },
      {
        "id": "heroic_50",
        "category": "Governance",
        "q": "Central IT wants security rules that every current and future subscription inherits and that local teams cannot remove. Each team may still add stricter rules for its own resource groups. Where should central IT assign its policies?",
        "a": [
          "On each team's resource group",
          "In each subscription by its Owner",
          "On a management group above them",
          "As tags on every subscription"
        ],
        "c": 2,
        "e": "Policies assigned at a management group are inherited by all subscriptions and resource groups below it, and teams with rights only at lower scopes cannot remove them. Assigning on each resource group would let teams with Owner rights there change or remove them. Subscription Owners could edit or delete assignments made at their own scope. Tags only label resources and enforce nothing."
      },
      {
        "id": "heroic_51",
        "category": "Governance",
        "q": "An auditor asks who changed the rules of a production NSG last month and when. No extra logging or diagnostic settings were configured, and the answer is needed today. Where will the team find it?",
        "a": [
          "Azure Service Health history",
          "Application Insights traces",
          "Azure Advisor recommendations",
          "The Azure Activity Log"
        ],
        "c": 3,
        "e": "The Activity Log records control-plane operations such as changing NSG rules, including who made them and when, and keeps 90 days without extra setup. Service Health history lists Azure platform incidents, not your own changes. Application Insights traces application requests, not changes to network resources. Advisor offers recommendations and records no change history."
      },
      {
        "id": "heroic_52",
        "category": "Governance",
        "q": "Regulation requires customer-data resources to be created only in EU regions. A team must be blocked when it tries to deploy a storage account in East US, and existing resources outside the EU must be reported. What should be used?",
        "a": [
          "Azure Policy with allowed locations",
          "Microsoft Purview data classification",
          "An Azure sovereign region",
          "A ReadOnly lock on the subscription"
        ],
        "c": 0,
        "e": "The built-in allowed-locations policy denies deployments outside the listed regions and reports existing resources that are out of compliance. Purview classifies and governs data but does not block deployments by region. Sovereign regions are isolated clouds for specific governments, not a way to keep resources inside the EU. A ReadOnly lock would block all changes, not just non-EU deployments."
      },
      {
        "id": "heroic_53",
        "category": "Security",
        "q": "Developers hold the Owner role on the production subscription. They still need to deploy and update resources, but they must no longer be able to grant access to anyone else. Which role should replace Owner?",
        "a": [
          "Reader role",
          "Contributor role",
          "User Access Administrator",
          "Owner with a Delete lock"
        ],
        "c": 1,
        "e": "Contributor can create and manage all resources but cannot assign roles, which applies least privilege. Reader cannot deploy or update anything. User Access Administrator manages access but cannot deploy resources, the reverse of what is needed. Owner with a Delete lock would still let developers grant access to others."
      },
      {
        "id": "heroic_54",
        "category": "Security",
        "q": "A company drops the idea that its corporate network is trusted. Every request is now checked using identity, device and location, users get only the access they need, and the network is segmented as if an attacker were already inside. Which model is this?",
        "a": [
          "Defense-in-depth model",
          "Shared responsibility model",
          "The Zero Trust model",
          "Perimeter-based security"
        ],
        "c": 2,
        "e": "Zero Trust's principles are verify explicitly, use least-privilege access and assume breach, exactly as described. Defense in depth layers several controls but does not by itself drop trust in the internal network. The shared responsibility model divides security duties between Microsoft and the customer. Perimeter-based security trusts the internal network, which this company has abandoned."
      },
      {
        "id": "heroic_55",
        "category": "Governance",
        "q": "A compliance team must find where personal data such as passport numbers is stored across Azure storage, on-premises SQL Server and Microsoft 365, classify it automatically and see one map of the whole data estate. Which service fits?",
        "a": [
          "Microsoft Defender for Cloud",
          "Azure Policy",
          "Azure Monitor Log Analytics",
          "Microsoft Purview"
        ],
        "c": 3,
        "e": "Microsoft Purview scans and classifies sensitive data across Azure, on-premises and Microsoft 365 and builds a unified data map. Defender for Cloud protects workloads and their configuration, not a catalog of personal data. Azure Policy enforces resource settings and does not scan data contents. Log Analytics queries collected logs and does not classify stored data."
      },
      {
        "id": "heroic_56",
        "category": "Reliability",
        "q": "A load test shows an app copes with ten times normal traffic only after an admin adds VMs by hand, and the extra VMs then keep running until someone removes them. Which cloud benefit is the app not yet using?",
        "a": [
          "Elasticity through autoscaling",
          "Vertical scaling of each VM",
          "High availability across zones",
          "Predictable reserved pricing"
        ],
        "c": 0,
        "e": "Elasticity means capacity grows and shrinks automatically with demand, which autoscaling provides instead of manual changes. Vertical scaling makes VMs bigger and would still need manual action here. High availability keeps the app running through failures but does not adjust capacity to load. Reserved pricing makes costs predictable but does nothing for changing load."
      },
      {
        "id": "heroic_57",
        "category": "Cost",
        "q": "Before deploying anything, an architect wants to compare the monthly cost of two designs: VMs in one region versus App Service in another, including storage and bandwidth. Nothing exists in Azure or on-premises yet. Which tool fits?",
        "a": [
          "Cost Management cost analysis",
          "Azure pricing calculator",
          "Azure Advisor cost tab",
          "Azure Migrate assessment"
        ],
        "c": 1,
        "e": "The pricing calculator estimates costs for planned configurations before anything is deployed and lets you compare options. Cost analysis reports costs of resources that already exist and incur charges. Advisor recommends savings for resources already running. Migrate assessment sizes and prices existing on-premises servers, and none exist here."
      },
      {
        "id": "heroic_58",
        "category": "Storage",
        "q": "A legacy app runs on three Windows VMs. It needs one shared folder that all three VMs mount at the same time over SMB, plus a separate disk attached to each VM for its own operating system. Which pair of storage services fits?",
        "a": [
          "Blob Storage and managed disks",
          "Azure Files and Queue Storage",
          "Azure Files and managed disks",
          "Managed disks and Table Storage"
        ],
        "c": 2,
        "e": "Azure Files provides SMB shares that several VMs mount at once, and managed disks are the block storage volumes attached to each VM. Blob Storage is object storage reached over HTTP, not an SMB share the VMs mount. Queue Storage passes messages and cannot act as a VM disk. Table Storage stores key-value entities and is neither a share nor a disk."
      },
      {
        "id": "heroic_59",
        "category": "Storage",
        "q": "A company in Germany needs its storage data copied to a second region hundreds of kilometres away, but the copy must stay within Germany's geography. It does not need to read the copy unless the primary region fails. Which option fits?",
        "a": [
          "ZRS in one German region",
          "RA-GZRS to a pair outside Germany",
          "LRS with daily AzCopy to a second region",
          "GRS, using the Germany region pair"
        ],
        "c": 3,
        "e": "GRS copies data asynchronously to the paired region, and the German regions are paired with each other, so the copy stays in Germany. ZRS spreads copies across the zones of one region only, not hundreds of kilometres away. The secondary of RA-GZRS is always the paired region, so a pair outside Germany cannot be chosen, and read access is not needed anyway. LRS with AzCopy copies is a manual snapshot process, not storage redundancy."
      },
      {
        "id": "heroic_60",
        "category": "Storage",
        "q": "An IoT app writes billions of small sensor readings, and each reading is read back by device ID and timestamp. It needs no joins or complex queries, and storage must be as cheap as possible. Which Azure Storage service fits?",
        "a": [
          "Azure Table Storage",
          "Azure Queue Storage",
          "Azure Files",
          "Azure Disk Storage"
        ],
        "c": 0,
        "e": "Table Storage is a low-cost NoSQL key-value store for huge numbers of structured entities read back by key, without joins. Queue Storage holds messages for one-time processing, not records read back later by key. Azure Files offers file shares, which would need custom file formats for billions of readings. Disk Storage provides block volumes for VMs, not a store queried by key."
      },
      {
        "id": "heroic_61",
        "category": "Storage",
        "q": "A partner's on-premises servers upload files to a storage account over the internet from two fixed public IP addresses. All other sources must be blocked, and the partner has no VPN or ExpressRoute connection. What should be configured?",
        "a": [
          "A private endpoint for the partner",
          "Storage firewall allowing the two IPs",
          "An NSG attached to the storage account",
          "A Private DNS zone for the account"
        ],
        "c": 1,
        "e": "The storage account's public endpoint can be restricted with firewall rules that allow only the partner's two public IP addresses. A private endpoint lives inside an Azure VNet, which the partner cannot reach without VPN or ExpressRoute. NSGs attach to subnets and network interfaces, not to a storage account. A private DNS zone only resolves names and blocks no traffic."
      },
      {
        "id": "heroic_62",
        "category": "Storage",
        "q": "A branch office must move 60 TB of archived video into Blob Storage once. Its internet link is 50 Mbps, so an online copy would take months. Afterwards, staff will only occasionally browse a few files. What should the team use for the initial transfer?",
        "a": [
          "AzCopy over the internet",
          "Azure File Sync agent",
          "Azure Data Box (80 TB)",
          "Azure Storage Explorer"
        ],
        "c": 2,
        "e": "Data Box is a physical device Microsoft ships to you: 60 TB over a 50 Mbps link would take more than three months, while Data Box moves it offline in days. AzCopy is the right tool for online transfers, but this link is far too slow. File Sync keeps a Windows file server in sync with Azure Files, not a one-time move to Blob Storage. Storage Explorer is a graphical tool for occasional browsing, which staff can use after the move."
      },
      {
        "id": "heroic_63",
        "category": "Networking",
        "q": "A company connects its datacenter to Azure with ExpressRoute. It wants a cheaper backup path that takes over automatically if the ExpressRoute provider fails, without paying for a second dedicated circuit. What should be added?",
        "a": [
          "A second dedicated ExpressRoute circuit",
          "Global VNet peering to on-premises",
          "Point-to-site VPN for the servers",
          "A site-to-site VPN as failover"
        ],
        "c": 3,
        "e": "A site-to-site VPN over the internet can coexist with ExpressRoute and serve as a lower-cost failover path. A second ExpressRoute circuit is exactly the extra dedicated circuit the company wants to avoid. VNet peering connects Azure VNets and cannot reach the on-premises datacenter. Point-to-site VPN connects individual clients, not the whole datacenter network."
      },
      {
        "id": "heroic_64",
        "category": "Networking",
        "q": "Departments have VNets in different subscriptions of the same tenant and region. Their VMs must communicate privately with low latency and no gateway costs, while each department keeps managing its own VNet. What should be configured?",
        "a": [
          "VNet peering across the subscriptions",
          "Merging all VNets into one subscription",
          "VNet-to-VNet VPN gateway connections",
          "Public endpoints with NSG rules"
        ],
        "c": 0,
        "e": "VNet peering works across subscriptions, keeps traffic private on the Microsoft backbone with low latency, and needs no gateway. Merging everything into one subscription would take away each department's separate management. VNet-to-VNet VPN connections need VPN gateways, which add cost and latency. Public endpoints would send traffic over the internet instead of a private path."
      },
      {
        "id": "heroic_65",
        "category": "Networking",
        "q": "A company's ExpressRoute circuit carries its traffic to Azure. An auditor asks two things: is the traffic encrypted by ExpressRoute itself, and does it cross the public internet? Which answer is correct?",
        "a": [
          "Encrypted by default; not over the internet",
          "Not encrypted by default; not over the internet",
          "Encrypted by default; partly over the internet",
          "Not encrypted by default; partly over the internet"
        ],
        "c": 1,
        "e": "ExpressRoute is a private connection that does not cross the public internet, but it does not encrypt traffic by default; encryption such as IPsec or MACsec must be added. Claiming it is encrypted by default is wrong, because its privacy comes from the dedicated path. ExpressRoute traffic never travels partly over the public internet. The last option gets encryption right but wrongly claims an internet path."
      },
      {
        "id": "heroic_66",
        "category": "Compute",
        "q": "A company with 200 call-center agents wants each agent's Windows desktop and apps to run in Azure, reachable from cheap thin clients, with several agents sharing one VM to save cost. Which service fits?",
        "a": [
          "Windows VMs, one per agent",
          "Azure App Service",
          "Azure Virtual Desktop",
          "Azure Container Instances"
        ],
        "c": 2,
        "e": "Azure Virtual Desktop delivers Windows desktops and apps from Azure and supports multi-session Windows, so several users share one VM. One VM per agent works but costs far more and needs more management. App Service hosts web apps, not full Windows desktops. Container Instances run containers, not interactive desktops."
      },
      {
        "id": "heroic_67",
        "category": "DevOps",
        "q": "An admin changes a VM in the Azure portal while a colleague changes the same VM with Azure PowerShell. Both requests are authenticated, checked against RBAC and applied consistently. Which component makes this possible?",
        "a": [
          "Azure Cloud Shell sessions",
          "Azure Policy engine",
          "Microsoft Entra Connect",
          "Azure Resource Manager"
        ],
        "c": 3,
        "e": "Every request from the portal, PowerShell, CLI or templates goes through Azure Resource Manager, which authenticates it, checks RBAC and applies it consistently. Cloud Shell is only one place to run PowerShell or CLI, and it also sends requests to Resource Manager. Azure Policy evaluates resource settings but is not the layer that receives and executes every request. Entra Connect synchronizes on-premises identities and does not handle resource requests."
      },
      {
        "id": "heroic_68",
        "category": "DevOps",
        "q": "A template defines a VNet, a storage account and a VM that needs both. The team wants Azure to work out the order, create independent resources in parallel and report one result for the whole deployment. What provides this?",
        "a": [
          "An ARM template deployment",
          "A Bash script in Cloud Shell",
          "An Azure Policy initiative",
          "Manual steps in the Azure portal"
        ],
        "c": 0,
        "e": "Resource Manager reads a template's dependencies, deploys independent resources in parallel and tracks the deployment as one operation. A Bash script runs commands in the order written, so ordering and parallelism are up to the author. A policy initiative groups policy rules and does not deploy resources. Manual portal steps are sequential and give no single deployment result."
      },
      {
        "id": "heroic_69",
        "category": "Monitoring",
        "q": "Logs from 50 VMs and several apps are already sent to Azure Monitor. An engineer wants to query them together, for example failed sign-ins per server in the last hour, and save the query for a dashboard. Which feature fits?",
        "a": [
          "Azure Advisor recommendations",
          "Log Analytics queries",
          "Metrics explorer charts",
          "Azure Service Health view"
        ],
        "c": 1,
        "e": "Log Analytics stores collected logs in a workspace and lets you query across sources with Kusto Query Language, then pin results to dashboards. Advisor gives recommendations and does not query logs. Metrics explorer charts numeric metrics, not detailed log records like sign-in events. Service Health shows Azure platform incidents, not your servers' logs."
      },
      {
        "id": "heroic_70",
        "category": "Monitoring",
        "q": "Many customers report outages. The team must find out whether a Microsoft platform incident affects the specific services and regions the company uses, and it wants advance notice of planned maintenance there. Where should it look?",
        "a": [
          "The public Azure status page",
          "Azure Resource Health",
          "Azure Service Health",
          "Azure Monitor Log Analytics"
        ],
        "c": 2,
        "e": "Service Health is personalized to the services and regions you use and covers incidents, planned maintenance and health advisories, with alerts. The public status page shows broad incidents for everyone, not a view tailored to your subscriptions. Resource Health reports the health of individual resources, not platform incidents or planned maintenance. Log Analytics queries your own logs and does not report Microsoft incidents."
      },
      {
        "id": "heroic_71",
        "category": "Migration",
        "q": "Three months after moving servers with Azure Migrate, several VMs run below 5 % CPU. The team wants Azure to recommend specific smaller sizes based on that real usage, together with the expected savings. Which tool fits?",
        "a": [
          "Azure Migrate",
          "Pricing calculator",
          "Service Health",
          "Azure Advisor"
        ],
        "c": 3,
        "e": "Advisor analyzes the actual utilization of running VMs and recommends resizing or shutting down underused ones, with estimated savings. Azure Migrate assesses servers before migration, not Azure VMs after it. The pricing calculator only estimates configurations you enter yourself. Service Health reports platform incidents, not sizing advice."
      },
      {
        "id": "heroic_72",
        "category": "Hybrid",
        "q": "A retailer runs Kubernetes clusters in its stores and at another public cloud provider. It wants to see them all in Azure and apply Azure Policy to them, while keeping them where they are instead of rebuilding them in AKS. What should it use?",
        "a": [
          "Azure Arc-enabled Kubernetes",
          "Azure Kubernetes Service (AKS)",
          "Azure Container Apps",
          "Azure Lighthouse delegation"
        ],
        "c": 0,
        "e": "Azure Arc-enabled Kubernetes connects clusters running anywhere to Azure, so they appear as Azure resources and can be governed with Azure Policy. AKS would require rebuilding the clusters in Azure. Container Apps is a managed Azure service for running containers, not a way to manage existing clusters. Lighthouse delegates access to other Azure tenants, not to clusters outside Azure."
      },
      {
        "id": "heroic_73",
        "category": "Identity",
        "q": "All administrators already use MFA. The security team now wants admin sign-ins from unmanaged devices or from outside the EU to be blocked, while regular employees keep signing in as they do today. Which feature implements this?",
        "a": [
          "A scoped Azure RBAC role",
          "A Conditional Access policy",
          "An Azure Policy allowed-locations rule",
          "Passwordless sign-in for admin accounts"
        ],
        "c": 1,
        "e": "Conditional Access evaluates signals such as role, device state and location at sign-in and can block access for a targeted group. An RBAC role controls what a signed-in identity may do on resources, not where it may sign in from. Azure Policy's allowed locations restricts the regions where resources are deployed, not where users sign in. Passwordless sign-in changes how users authenticate but does not block sign-ins by device or location."
      },
      {
        "id": "heroic_74",
        "category": "Architecture",
        "q": "A company creates a resource group in West Europe. It then deploys a new storage account into that group but chooses North Europe as the account's location. Where is the data in that storage account stored?",
        "a": [
          "In West Europe, the group's region",
          "In the management group's region",
          "In North Europe, its own region",
          "In the tenant's home region"
        ],
        "c": 2,
        "e": "A resource's data lives in the region chosen for that resource; the resource group's location only stores the group's metadata. The group's West Europe location does not move the account's data there. Management groups have no region and do not decide where data is stored. The tenant's location does not decide where individual resources keep their data."
      },
      {
        "id": "heroic_75",
        "category": "Cloud",
        "q": "A company runs its HR system on Azure VMs and uses Microsoft 365 for email. An auditor asks who is responsible for patching the operating systems behind each service. Which statement is correct?",
        "a": [
          "Microsoft patches both, as both run in its datacenters",
          "The company patches both, as it owns both subscriptions",
          "The company patches the VMs; Microsoft patches email",
          "Microsoft patches the VMs; the company patches email"
        ],
        "c": 2,
        "e": "On IaaS VMs the customer is responsible for the guest operating system, while in SaaS such as Microsoft 365 the provider manages the whole platform. Running in Microsoft datacenters does not make Microsoft responsible for a customer's VM operating system. Owning the subscriptions gives the company no access to patch Microsoft 365's servers. The last option reverses both responsibilities."
      },
      {
        "id": "heroic_76",
        "category": "Cloud",
        "q": "A CFO wants monthly cloud bills that can be forecast and tracked, and the CTO wants consistent app performance no matter how many customers sign up. Which single cloud benefit covers both concerns?",
        "a": [
          "Reliability",
          "Scalability",
          "Security and governance",
          "Predictability"
        ],
        "c": 3,
        "e": "Predictability covers both cost predictability (forecasting and tracking spend) and performance predictability (consistent performance through autoscaling and load balancing). Reliability is about recovering from failures, not forecasting bills. Scalability helps performance under load but says nothing about forecasting costs. Security and governance cover policies and compliance, not costs or performance."
      },
      {
        "id": "heroic_77",
        "category": "Cloud",
        "q": "A CFO prefers paying for usage instead of buying servers. The architect notes that one workload runs at constant load 24/7, so committing to three years of capacity would cost less. Which statement reconciles both views?",
        "a": [
          "Both are OpEx; reservations cut steady-use cost",
          "A reservation is CapEx, so cloud benefits are lost",
          "Pay-as-you-go is always cheaper than commitment",
          "Constant load should move to owned hardware"
        ],
        "c": 0,
        "e": "A reservation still pays for a service rather than owning hardware, so it remains operational expenditure while lowering the price of constant usage. A reservation is not a capital purchase of servers, and the other cloud benefits remain. Pay-as-you-go is the most flexible option but usually costs more than a reservation for constant use. Moving to owned hardware turns the cost back into CapEx and gives up cloud benefits that reservations keep."
      },
      {
        "id": "heroic_78",
        "category": "Cloud",
        "q": "Team A runs one app on AWS and another on Azure and has no on-premises servers. Team B keeps servers in its own datacenter and connects them to Azure. How are the two setups classified?",
        "a": [
          "Team A: hybrid cloud; Team B: multi-cloud",
          "Team A: multi-cloud; Team B: hybrid cloud",
          "Team A: hybrid cloud; Team B: hybrid cloud",
          "Team A: multi-cloud; Team B: private cloud"
        ],
        "c": 1,
        "e": "Using several public cloud providers is multi-cloud, and combining your own datacenter with a public cloud is hybrid cloud. Swapping the labels reverses both definitions. Team A has no on-premises infrastructure, so its setup is not hybrid. Team B's servers are connected to Azure, so its setup is hybrid, not a private cloud alone."
      },
      {
        "id": "heroic_79",
        "category": "Cloud models",
        "q": "A team needs small pieces of code that run only when a file is uploaded, scale to zero when idle and are billed per execution. A colleague suggests a classic PaaS web app instead. Why is serverless the better fit?",
        "a": [
          "PaaS web apps cannot react to events",
          "Serverless gives full control of the OS",
          "A web app plan is billed even when idle",
          "PaaS requires managing the VMs underneath"
        ],
        "c": 2,
        "e": "A PaaS web app runs on an App Service plan that is billed while provisioned, even without traffic, whereas serverless functions scale to zero and bill per execution. PaaS apps can react to events too, so that is not the difference. Serverless gives less control of the OS, not more. PaaS does not require managing the underlying VMs; Microsoft manages them."
      },
      {
        "id": "heroic_80",
        "category": "Cloud",
        "q": "A provider's SLA promises 99.99 % availability for an app. A reviewer says this number alone does not prove the app keeps running when a server fails. Which statement best supports the reviewer?",
        "a": [
          "99.99 % is impossible without redundancy",
          "SLAs never apply to cloud-hosted apps",
          "Fault tolerance is measured by the same SLA",
          "An SLA is a promise, not a design"
        ],
        "c": 3,
        "e": "An SLA is a contractual availability commitment with credits if it is missed; it does not describe how the system handles a failure, which is what fault tolerance means. High uptime can also come from quick recovery, so it is not impossible without redundancy. Azure SLAs do apply to cloud services and define their availability commitments. Fault tolerance is an architectural property, not something an SLA percentage measures."
      },
      {
        "id": "heroic_81",
        "category": "Monitoring",
        "q": "Users say an Azure web app is slow, but VM CPU and memory look normal. The team needs to see which page requests and database calls are slow and wants to be notified automatically when the failure rate rises. Which combination fits?",
        "a": [
          "VM insights with metric alerts on CPU",
          "Application Insights with Azure Monitor alerts",
          "Azure Service Health with activity log alerts",
          "Azure Advisor performance recommendations"
        ],
        "c": 1,
        "e": "Application Insights traces requests, dependency calls and failures inside the app, and an Azure Monitor alert can fire on its failure-rate metric. VM insights shows guest OS performance, which already looks normal, not individual page requests. Service Health reports Azure platform incidents and maintenance, not slowness in your own code. Advisor gives periodic optimization tips and does not trace requests or send failure-rate alerts."
      },
      {
        "id": "heroic_82",
        "category": "Cost",
        "q": "A company will run several Windows Server VMs at constant load, 24/7, for the next three years. It already owns Windows Server licenses with active Software Assurance. Which combination lowers the compute bill the most without risking interruptions?",
        "a": [
          "Spot VMs with Azure Hybrid Benefit",
          "Reservations with pay-as-you-go licensing",
          "Reservations with Azure Hybrid Benefit",
          "Autoscaling with Azure Hybrid Benefit"
        ],
        "c": 2,
        "e": "A reservation discounts steady, predictable usage for a 1- or 3-year term, and Azure Hybrid Benefit reuses the owned licenses so you do not pay for Windows again. Spot VMs are cheap but can be evicted at any time, which risks interruptions. Pay-as-you-go licensing pays for Windows a second time despite the owned licenses. Autoscaling saves money only when load varies, and this load is constant."
      },
      {
        "id": "heroic_83",
        "category": "Hybrid",
        "q": "A company keeps Linux servers in its own datacenter and VMs at another cloud provider. Without migrating them, it wants to see them in the Azure portal, assign RBAC on them and audit them with the same Azure Policy rules as its Azure VMs. What should it use?",
        "a": [
          "Azure Migrate appliance",
          "Site-to-site VPN Gateway",
          "Azure Lighthouse",
          "Azure Arc-enabled servers"
        ],
        "c": 3,
        "e": "Azure Arc projects servers outside Azure into Azure Resource Manager, so they appear in the portal and accept RBAC and Azure Policy. The Azure Migrate appliance discovers and assesses servers for moving them into Azure, not for managing them where they are. A site-to-site VPN only provides network connectivity and adds no management. Azure Lighthouse delegates management of other Azure tenants, not of servers outside Azure."
      },
      {
        "id": "heroic_84",
        "category": "Cloud",
        "q": "A legacy order system keeps session state in memory, so it can only ever run as a single instance. Its VM now reaches 100 % CPU at peak hours, and redesigning the app is not an option this year. How should it be scaled?",
        "a": [
          "Scale up the VM to a larger size",
          "Scale out with more instances",
          "Add an availability set",
          "Move it to another region"
        ],
        "c": 0,
        "e": "Vertical scaling (scaling up) adds CPU and memory to the single instance, which fits an app that cannot run on several instances. Scaling out adds instances, which this single-instance app cannot use. An availability set improves resilience across racks but adds no capacity to the one VM. Another region changes the location, not the VM's capacity."
      },
      {
        "id": "heroic_85",
        "category": "Cloud",
        "q": "An architect explains the manageability benefit of the cloud to a new manager. Which of these examples is management of the cloud, as opposed to management in the cloud?",
        "a": [
          "Resources scale automatically with demand",
          "Admins deploy resources with templates",
          "Engineers use the CLI to update VMs",
          "The team views resources in the portal"
        ],
        "c": 0,
        "e": "Management of the cloud covers what the platform does for you, such as scaling automatically, monitoring and replacing failing resources. Deploying with templates is management in the cloud, done through the tools you use. Using the CLI is also management in the cloud. Viewing and managing resources in the portal is management in the cloud as well."
      },
      {
        "id": "heroic_86",
        "category": "Cloud",
        "q": "A bank moves workloads to Azure PaaS. Microsoft now applies operating system patches, and the bank uses templates and policies so every new resource meets its internal standards and regulatory rules. Which cloud benefit does this illustrate?",
        "a": [
          "Scalability and elasticity",
          "Security and governance",
          "Cost predictability",
          "High availability"
        ],
        "c": 1,
        "e": "Provider-managed patching plus templates and policies that enforce standards and compliance illustrate the security and governance benefit. Scalability and elasticity concern adjusting capacity, not compliance. Cost predictability is about forecasting spending. High availability is about keeping services running, not meeting regulatory rules."
      },
      {
        "id": "heroic_87",
        "category": "Cloud",
        "q": "A team picks a design whose SLA guarantees the app stays accessible with minimal downtime even when individual components fail, although its capacity stays fixed. Which cloud benefit is the team prioritizing?",
        "a": [
          "Elastic compute capacity",
          "Horizontal scalability",
          "Cost predictability",
          "High availability"
        ],
        "c": 3,
        "e": "High availability means keeping a service accessible with minimal downtime despite component failures, usually backed by an SLA. Elastic capacity changes resources with demand, but this design keeps capacity fixed. Horizontal scalability adds instances for more load, which is not the stated goal. Cost predictability concerns forecasting spending, not uptime."
      },
      {
        "id": "heroic_88",
        "category": "Cloud",
        "q": "A team stores 2 TB in Blob Storage for three months and runs a VM only during office hours, then deletes everything. It paid for the gigabytes stored, the transactions and the VM's running hours, and pays nothing afterwards. Which model is this?",
        "a": [
          "Consumption-based model",
          "Capital expenditure model",
          "Reserved capacity model",
          "Fixed monthly subscription"
        ],
        "c": 0,
        "e": "In the consumption-based model you pay only for what you use, such as gigabytes stored, transactions and VM running hours, and nothing once resources are deleted. Capital expenditure means buying infrastructure upfront. Reserved capacity commits you to a term regardless of actual use. A fixed monthly subscription charges the same amount regardless of usage."
      },
      {
        "id": "heroic_89",
        "category": "Cloud",
        "q": "A defense contractor must own its servers, keep them in a building it controls and decide exactly which hardware runs each workload, while still offering its departments self-service VM provisioning. Which cloud model fits?",
        "a": [
          "Public cloud",
          "Private cloud",
          "Hybrid cloud",
          "Multi-cloud"
        ],
        "c": 1,
        "e": "A private cloud runs on infrastructure owned and controlled by one organization while still offering cloud-style self-service. A public cloud runs on the provider's hardware in its datacenters, which the contractor cannot own or control. Hybrid cloud adds a public cloud, which the requirements do not include. Multi-cloud uses several public providers, again on hardware the contractor does not own."
      },
      {
        "id": "heroic_90",
        "category": "Cloud",
        "q": "A design studio runs its rendering farm in its own datacenter. Before big deadlines, demand exceeds local capacity, so extra render jobs temporarily run on Azure VMs, which are removed once the deadline passes. What is this approach called?",
        "a": [
          "Multi-cloud failover setup",
          "Private cloud scale-up",
          "Hybrid cloud bursting",
          "Public cloud migration"
        ],
        "c": 2,
        "e": "Cloud bursting is a hybrid pattern in which workloads run on-premises and overflow into a public cloud when local capacity runs out. Multi-cloud failover means switching between several public providers after a failure. Scaling up the private cloud would mean buying more local hardware. A migration moves workloads permanently, while here the Azure capacity is temporary."
      },
      {
        "id": "heroic_91",
        "category": "Cloud",
        "q": "Developers want to upload code that runs whenever a message arrives, with no servers to provision, automatic scaling and billing only while the code executes. A new hire asks how serverless works. Which statement is correct?",
        "a": [
          "No servers are involved at any point",
          "Developers patch the runtime themselves",
          "Billing is per reserved VM instance",
          "Servers exist, but Azure manages them"
        ],
        "c": 3,
        "e": "Serverless still runs on servers, but the provider provisions, scales and maintains them, so developers supply only code. Saying no servers exist at all is a common misconception. In serverless the provider maintains the runtime, not the developers. Serverless bills per execution and resources consumed, not per reserved VM."
      },
      {
        "id": "heroic_92",
        "category": "Cloud",
        "q": "A company runs web servers on Azure VMs. Its auditor asks who must configure the network security group rules and the firewall inside the guest operating system. Which party is responsible in this IaaS model?",
        "a": [
          "The customer configures both",
          "Microsoft configures both",
          "Microsoft the NSG, the customer the OS",
          "The customer the NSG, Microsoft the OS"
        ],
        "c": 0,
        "e": "In IaaS the customer controls the network controls and the guest operating system, including NSG rules and the OS firewall. Microsoft secures the physical network and hosts, not the customer's NSG rules or guest OS settings. NSG rules are the customer's settings in IaaS, so Microsoft does not configure them. The guest OS of an IaaS VM is the customer's to configure and patch."
      },
      {
        "id": "heroic_93",
        "category": "Cloud",
        "q": "A company rents rack space in a colocation datacenter for a monthly fee and buys its own servers to install there, depreciating them over five years. How are these two costs classified?",
        "a": [
          "Rent is CapEx; servers are OpEx",
          "Rent is OpEx; servers are CapEx",
          "Both are OpEx, paid over time",
          "Both are CapEx, as assets"
        ],
        "c": 1,
        "e": "A monthly rental fee for a service is operational expenditure, while buying servers that are depreciated over years is capital expenditure. Swapping them reverses the definitions. The servers are an upfront asset purchase, not a pay-as-you-go cost, even though they are depreciated over time. Rent buys no asset, so it is not capital expenditure."
      },
      {
        "id": "heroic_94",
        "category": "Cloud",
        "q": "A stateless API runs on two small VMs that share the incoming traffic. Traffic is expected to grow fivefold, and the team wants to add capacity without any downtime, including the restarts that resizing a VM causes. What should it do?",
        "a": [
          "Scale up both VMs to larger sizes",
          "Move the VMs to an availability set",
          "Scale out by adding more VM instances",
          "Switch to reserved VM instances"
        ],
        "c": 2,
        "e": "Scaling out adds instances alongside the existing ones without restarting the existing ones, which suits a stateless API. Scaling up requires resizing, which restarts each VM. An availability set improves resilience to rack failures but adds no capacity. Reservations change the price, not the capacity."
      },
      {
        "id": "heroic_95",
        "category": "Cloud",
        "q": "A media company deploys its app in three Azure regions on different continents. When a hurricane takes one region offline, users are automatically served from the other two. Which cloud benefit does this design mainly rely on?",
        "a": [
          "Elasticity through autoscaling",
          "Predictability of performance",
          "Governance through Azure Policy",
          "Reliability from global reach"
        ],
        "c": 3,
        "e": "Reliability is the ability to recover from failures and keep working, and the cloud's global footprint lets an app run in several regions so one region's loss does not stop it. Elasticity adjusts capacity to demand, not to a regional disaster. Performance predictability is about consistent response times under load. Governance through Azure Policy enforces standards, not recovery from outages."
      },
      {
        "id": "heroic_96",
        "category": "Cloud models",
        "q": "A company must move a 15-year-old app to Azure within a month. The app depends on a custom Windows registry setting and a third-party agent installed on the server, and its code cannot be changed. Which service type fits?",
        "a": [
          "IaaS virtual machines",
          "PaaS App Service",
          "SaaS replacement",
          "Serverless functions"
        ],
        "c": 0,
        "e": "IaaS VMs give full control of the operating system, so custom registry settings and third-party agents keep working without code changes. App Service does not allow installing arbitrary agents or changing the host's registry. A SaaS replacement would mean abandoning the app rather than moving it. Serverless functions would require rewriting the app as event-driven code."
      },
      {
        "id": "heroic_97",
        "category": "Cloud models",
        "q": "A team builds a new web API. It wants to choose the language and framework and simply deploy its code, while Microsoft handles the operating system, patching and load balancing of the hosts. Which service model and example fit?",
        "a": [
          "IaaS, such as Azure Virtual Machines",
          "PaaS, such as Azure App Service",
          "SaaS, such as Microsoft 365",
          "IaaS, such as VM Scale Sets"
        ],
        "c": 1,
        "e": "PaaS such as App Service lets developers deploy their own code and framework while Microsoft manages the OS, patching and host infrastructure. IaaS VMs leave the OS and patching to the team. SaaS like Microsoft 365 is a finished application, not a platform for custom APIs. Scale sets are still IaaS, so the team would manage the VMs' operating systems."
      },
      {
        "id": "heroic_98",
        "category": "Cloud models",
        "q": "A 40-person sales team needs a CRM by next week. It has no developers, wants to pay per user per month, and expects the vendor to handle hosting, updates and backups. Which service model fits?",
        "a": [
          "Platform as a service (PaaS)",
          "Infrastructure as a service (IaaS)",
          "Software as a service (SaaS)",
          "A private cloud CRM deployment"
        ],
        "c": 2,
        "e": "SaaS delivers a finished application licensed per user, with the vendor responsible for hosting, updates and backups. PaaS would require developers to build or deploy the CRM. IaaS would leave the team installing and maintaining the CRM on VMs. A private cloud deployment needs the team's own infrastructure and administrators."
      },
      {
        "id": "heroic_99",
        "category": "Cloud models",
        "q": "Testers need many short-lived environments with specific OS versions and full administrator rights. Each environment must be ready in minutes and deleted after its test run so that nothing is paid afterwards. Which approach fits?",
        "a": [
          "SaaS test-management subscription",
          "Reserved VMs for three years",
          "PaaS web apps without OS access",
          "IaaS VMs created and deleted on demand"
        ],
        "c": 3,
        "e": "IaaS VMs give full OS control and administrator rights, and with consumption pricing they cost nothing once deleted. A SaaS test-management tool does not provide custom OS environments. Three-year reservations commit to capacity that short-lived environments do not need. PaaS web apps hide the OS, so testers would not get administrator rights."
      },
      {
        "id": "heroic_100",
        "category": "Cloud models",
        "q": "A company uses IaaS for one app, PaaS for another and SaaS for email. Its auditor asks which responsibility stays with the company in all three service models. Which one is it?",
        "a": [
          "Its information and data",
          "Operating system patching",
          "Network controls",
          "Physical datacenter security"
        ],
        "c": 0,
        "e": "Information and data, devices, and accounts and identities are always the customer's responsibility in every cloud service model. OS patching belongs to the customer only in IaaS. Network controls belong to the customer in IaaS but move to Microsoft in SaaS. Physical datacenter security is always Microsoft's responsibility."
      },
      {
        "id": "heroic_101",
        "category": "Cloud models",
        "q": "A payroll company wants to sell its software to other firms over the internet without managing any servers. It will host the app on Azure App Service. Which model does the payroll company use, and which do its customers use?",
        "a": [
          "It uses SaaS; customers use PaaS",
          "It uses PaaS; customers use SaaS",
          "It uses IaaS; customers use PaaS",
          "It and its customers use PaaS"
        ],
        "c": 1,
        "e": "The payroll company builds on App Service, a PaaS offering, and its customers use the finished payroll software as SaaS. Swapping the models reverses who builds and who consumes. App Service is PaaS, not IaaS, and the customers deploy nothing themselves. Customers only use the finished app, so they are not using PaaS."
      },
      {
        "id": "heroic_102",
        "category": "Reliability",
        "q": "An architect pins a VM to availability zone 1 and puts its data on ZRS storage. When zone 1 fails, the storage stays available but the VM does not. Which statement explains this?",
        "a": [
          "The VM is zone-redundant; ZRS storage is zonal",
          "Both are zonal, but storage fails over faster",
          "The VM is zonal; ZRS storage is zone-redundant",
          "ZRS copies data to a paired region"
        ],
        "c": 2,
        "e": "A zonal resource is pinned to one zone and fails with it, while a zone-redundant resource such as ZRS storage is replicated across zones and survives one zone's failure. The second option reverses the two labels. ZRS is zone-redundant, not zonal, so it does not fail with a single zone. ZRS keeps its copies across zones in one region, not in a paired region."
      },
      {
        "id": "heroic_103",
        "category": "Reliability",
        "q": "A team needs the highest VM connectivity SLA that Microsoft offers for a two-VM web tier in a region with availability zones, using standard VM features only. How should it deploy the two VMs?",
        "a": [
          "In one availability set",
          "As one VM with Premium SSD",
          "In a single availability zone",
          "Across two availability zones"
        ],
        "c": 3,
        "e": "Two or more VMs across availability zones carry the highest VM SLA, 99.99 %. An availability set gives 99.95 %, because all VMs are still in one datacenter. A single VM with Premium SSD has a lower SLA of 99.9 %. Two VMs in a single zone fail together if that zone fails."
      },
      {
        "id": "heroic_104",
        "category": "Reliability",
        "q": "A compliance team wants disaster-recovery copies far enough away that one natural disaster is unlikely to hit both locations, yet inside the same geography for data residency. Which Azure concept is designed around exactly these two goals?",
        "a": [
          "Azure region pairs",
          "Availability zones",
          "Availability sets",
          "Sovereign regions"
        ],
        "c": 0,
        "e": "Region pairs are two regions in the same geography, usually hundreds of kilometres apart, so one disaster is unlikely to hit both while data stays in the geography. Availability zones are close together within one region, so a large disaster could affect all of them. Availability sets protect against rack failures within one datacenter. Sovereign regions are isolated Azure instances for specific governments, not disaster-recovery pairs."
      },
      {
        "id": "heroic_105",
        "category": "Reliability",
        "q": "An app runs active-active in two regions, and users are sent to whichever region is up. Each regional deployment has a 99.9 % SLA, the regions fail independently, and the routing layer can be ignored. What is the approximate combined availability?",
        "a": [
          "About 99.8 %",
          "About 99.9999 %",
          "About 99.9 %",
          "About 99.95 %"
        ],
        "c": 1,
        "e": "With two independent copies in parallel, the app is down only if both fail: 1 − (0.001 × 0.001) ≈ 99.9999 %. Multiplying the SLAs (about 99.8 %) applies to services that must all work, not to redundant copies. 99.9 % ignores the second region entirely. 99.95 % understates how much a second independent region adds."
      },
      {
        "id": "heroic_106",
        "category": "Reliability",
        "q": "A manager believes an availability zone is simply one building. An architect corrects her. Which description of an availability zone is accurate?",
        "a": [
          "One datacenter shared by several regions",
          "A group of racks inside one datacenter",
          "Datacenters with own power, cooling and network",
          "A pair of regions hundreds of km apart"
        ],
        "c": 2,
        "e": "An availability zone is a physically separate location within a region, made up of one or more datacenters with independent power, cooling and networking. A datacenter is not shared by regions, and each zone belongs to exactly one region. A group of racks in one building describes fault domains in an availability set. A pair of distant regions describes a region pair."
      },
      {
        "id": "heroic_107",
        "category": "Reliability",
        "q": "An internal app may be down for up to a day after a regional disaster, and the budget is tight. Its data is already replicated to the paired region, and the infrastructure is defined in templates. Which disaster-recovery design fits?",
        "a": [
          "Run full active-active copies in both regions",
          "Spread the VMs across availability zones only",
          "Keep everything in one region with LRS",
          "Redeploy in the paired region after a disaster"
        ],
        "c": 3,
        "e": "When a day of downtime is acceptable, redeploying from templates in the paired region, using the replicated data, is the cheapest design that still survives a regional disaster. Active-active copies recover instantly but double the running cost. Availability zones protect against datacenter failures, not the loss of the whole region. One region with LRS has no copy outside the region to recover from."
      },
      {
        "id": "heroic_108",
        "category": "Reliability",
        "q": "A company needs zone redundancy for a new app and the lowest latency for users in one specific country. Its architect assumes every Azure region offers availability zones. What must be checked before choosing the region?",
        "a": [
          "That the region supports availability zones",
          "That the region has a sovereign twin",
          "That the region holds three availability sets",
          "That the subscription is in that region"
        ],
        "c": 0,
        "e": "Not every Azure region has availability zones; regions that do have at least three, so zone support must be confirmed first. Sovereign regions are separate clouds for governments and have nothing to do with zone support. Availability sets can be created in any region, so they say nothing about zones. Subscriptions are not tied to a region, so that check is meaningless."
      },
      {
        "id": "heroic_109",
        "category": "Identity",
        "q": "A company lifts an old app onto Azure VMs. The app authenticates users with LDAP and Kerberos and needs domain-joined servers, but the company does not want to deploy or patch domain controllers in Azure. What should it use?",
        "a": [
          "Microsoft Entra ID alone",
          "Microsoft Entra Domain Services",
          "Microsoft Entra Connect",
          "Microsoft Entra B2B collaboration"
        ],
        "c": 1,
        "e": "Entra Domain Services provides a managed domain with LDAP, Kerberos and domain join, without domain controllers to deploy or patch. Entra ID alone uses modern web protocols and offers no LDAP, Kerberos or domain join for servers. Entra Connect synchronizes on-premises AD to Entra ID but provides no domain services in Azure. B2B collaboration gives guest access to external users."
      },
      {
        "id": "heroic_110",
        "category": "Identity",
        "q": "A security team reviews proposed sign-in methods. Which combination counts as genuine multifactor authentication, because it combines two different factor categories?",
        "a": [
          "Password plus a memorized security PIN",
          "Password plus answers to security questions",
          "Password plus a code from an authenticator app",
          "Two different passwords for one sign-in"
        ],
        "c": 2,
        "e": "A password is something you know, and an authenticator app code proves something you have, so the factors come from two categories. A memorized PIN used as an extra secret is still something you know. Security questions are also something you know. Two passwords are two knowledge factors, which is not multifactor authentication."
      },
      {
        "id": "heroic_111",
        "category": "Identity",
        "q": "Factory workers share computers, may not carry phones on the production floor, and keep forgetting complex passwords. The company wants phishing-resistant, passwordless sign-in for them. Which method fits?",
        "a": [
          "Microsoft Authenticator app",
          "Windows Hello for Business",
          "SMS one-time codes",
          "FIDO2 security keys"
        ],
        "c": 3,
        "e": "FIDO2 security keys are portable hardware keys that give phishing-resistant, passwordless sign-in on shared computers without a phone. The Authenticator app needs a phone, which workers cannot carry. Windows Hello for Business is tied to a user's own device, which fits poorly with shared computers. SMS codes need a phone and still sit on top of a password."
      },
      {
        "id": "heroic_112",
        "category": "Identity",
        "q": "Employees may read company email on personal phones, but the HR app must open only on devices that are enrolled and marked compliant. Users must not be blocked from email. Which feature enforces this per app?",
        "a": [
          "Conditional Access with device compliance",
          "Azure Policy that requires compliant devices",
          "MFA required for every sign-in",
          "An RBAC role scoped to the HR app"
        ],
        "c": 0,
        "e": "A Conditional Access policy can target only the HR app and grant access only from compliant, managed devices, leaving email untouched. Azure Policy governs Azure resources, not the devices users sign in from. MFA proves the user's identity but says nothing about the state of the device. An RBAC role controls actions on Azure resources, not device conditions at sign-in."
      },
      {
        "id": "heroic_113",
        "category": "Identity",
        "q": "A retailer launches a loyalty app where millions of customers sign up themselves, many with existing Google or Facebook accounts. Customer identities must stay separate from the employee directory. Which Microsoft Entra capability fits?",
        "a": [
          "B2B collaboration in the employee tenant",
          "Microsoft Entra External ID for customers",
          "Microsoft Entra Domain Services",
          "Microsoft Entra Connect sync"
        ],
        "c": 1,
        "e": "Entra External ID for customers is built for customer-facing apps, with self-service sign-up, social identity providers and a directory separate from employees. B2B collaboration invites business partners as guests into the employee tenant, mixing them with the workforce directory. Domain Services provides a managed domain for legacy protocols, not customer sign-up. Entra Connect synchronizes on-premises employee accounts to Entra ID."
      },
      {
        "id": "heroic_114",
        "category": "Identity",
        "q": "Fifteen operators need the same rights to restart VMs in two resource groups, and the team changes every few months. Admins want to add or remove people without editing role assignments each time. What should they do?",
        "a": [
          "Assign the role to each user directly",
          "Give every operator the Owner role",
          "Assign the role to an Entra group",
          "Put a lock on the resource groups"
        ],
        "c": 2,
        "e": "Assigning the role once to a Microsoft Entra group means membership changes automatically change who has access. Assigning the role to each user means editing assignments every time the team changes. The Owner role grants far more than restarting VMs, breaking least privilege. A lock restricts deletion or changes and grants nobody any rights."
      },
      {
        "id": "heroic_115",
        "category": "Migration",
        "q": "A company ends a research project and must hand 90 TB of results stored in Blob Storage to a partner that has only a slow internet connection. The data must leave Azure quickly and securely. Which option fits?",
        "a": [
          "AzCopy download over the link",
          "Azure File Sync to the partner",
          "Azure Migrate replication",
          "A Data Box export order"
        ],
        "c": 3,
        "e": "Data Box also supports export: Microsoft copies data from Azure Storage onto the encrypted device and ships it out. AzCopy over a slow link would take far too long for 90 TB. File Sync syncs file shares over the network, so it hits the same bandwidth limit. Azure Migrate moves servers into Azure, not data out of it."
      },
      {
        "id": "heroic_116",
        "category": "Migration",
        "q": "A company moves 40 on-premises VMs to Azure. Each server may be offline only for a short switchover window, so changes must keep replicating to Azure until the switch. Which service handles the replication and the final switch?",
        "a": [
          "Azure Migrate server migration",
          "Azure Data Box offline transfer",
          "AzCopy copying the VM files",
          "Azure Arc-enabled servers"
        ],
        "c": 0,
        "e": "Azure Migrate's server migration replicates VMs continuously to Azure and lets you cut over in a short window. Data Box ships a one-time offline copy, so changes made after shipping would be lost. Copying VM files with AzCopy gives no ongoing replication or managed cutover. Arc manages servers where they are and does not migrate them."
      },
      {
        "id": "heroic_117",
        "category": "Migration",
        "q": "Before moving 60 ASP.NET web apps from on-premises IIS servers, a company wants to know which ones can run on Azure App Service without changes and which need fixes first. Which tool provides this assessment?",
        "a": [
          "Azure Advisor",
          "Azure Migrate",
          "Pricing calculator",
          "Defender for Cloud"
        ],
        "c": 1,
        "e": "Azure Migrate discovers web apps on IIS servers and assesses whether they are ready for App Service, flagging what needs changing. Advisor reviews resources that already run in Azure. The pricing calculator estimates costs from configurations you enter but checks no compatibility. Defender for Cloud assesses security posture, not migration readiness."
      },
      {
        "id": "heroic_118",
        "category": "Migration",
        "q": "A 70 TB media archive must move to Azure, and editors keep adding a few gigabytes per day during the move. The internet link is too slow for the bulk data but fine for the daily changes. Which plan fits?",
        "a": [
          "AzCopy for everything over the link",
          "Data Box Disk shipped every day",
          "Data Box for the bulk, AzCopy for changes",
          "Azure Migrate for the media files"
        ],
        "c": 2,
        "e": "Data Box moves the large initial volume offline, and AzCopy over the network handles the small daily changes. AzCopy alone would take too long for 70 TB on a slow link. Shipping a disk every day is slow, costly and unnecessary for a few gigabytes. Azure Migrate migrates servers, not loose media files."
      },
      {
        "id": "heroic_119",
        "category": "Compute",
        "q": "Once a week, a containerized script converts video files for about 20 minutes. It needs no orchestration, no web endpoint and no VM management, and it should cost nothing between runs. Which option fits best?",
        "a": [
          "Azure Kubernetes Service (AKS)",
          "An always-on App Service plan",
          "A Windows VM that keeps running",
          "Azure Container Instances"
        ],
        "c": 3,
        "e": "Container Instances start a single container on demand without VMs or orchestration and bill only while it runs. AKS adds a cluster to manage, which one weekly task does not need. An always-on App Service plan keeps charging between runs. A VM kept running costs money all week and needs OS management."
      },
      {
        "id": "heroic_120",
        "category": "Storage",
        "q": "A team moves 5 TB of old logs to the archive tier to save money, then learns after 30 days that the data must be deleted. Which extra charge will the deletion trigger, and why?",
        "a": [
          "An early deletion fee for the rest of 180 days",
          "A rehydration fee for reading data back first",
          "No fee, because archive has no minimum period",
          "A fee for the rest of a 30-day minimum period"
        ],
        "c": 0,
        "e": "Archive has a 180-day minimum storage period, so deleting after 30 days incurs an early deletion charge for the remaining 150 days. Deleting does not require reading the data back, so no rehydration is needed. Archive does have a minimum period, unlike the hot tier. A 30-day minimum applies to the cool tier, not to archive."
      },
      {
        "id": "heroic_121",
        "category": "Governance",
        "q": "To prepare for an ISO 27001 audit, a team must apply about 100 related policy definitions to several subscriptions and track compliance with all of them as a single unit. What should it assign?",
        "a": [
          "100 separate policy assignments",
          "A policy initiative",
          "A management group lock",
          "A custom RBAC role"
        ],
        "c": 1,
        "e": "A policy initiative groups many policy definitions so they are assigned and reported on as one unit, and built-in initiatives exist for standards such as ISO 27001. Separate assignments work but must be managed and tracked one by one. Locks prevent deletion or changes and do not evaluate compliance. An RBAC role controls permissions, not resource compliance."
      },
      {
        "id": "heroic_122",
        "category": "Governance",
        "q": "Every new resource group must carry a CostCenter tag. Deployments without the tag must fail, and the rule must apply automatically across all current and future subscriptions. What should be configured?",
        "a": [
          "A tag added to the root management group",
          "A Cost Management budget per subscription",
          "A require-tag policy at a management group",
          "A ReadOnly lock on each subscription"
        ],
        "c": 2,
        "e": "A policy that requires the tag denies non-compliant resource groups, and assigning it at a management group covers every subscription below it. Tags are not inherited down the hierarchy, so tagging a higher level neither tags new resource groups nor blocks untagged ones. Budgets track spending and cannot require tags. A ReadOnly lock would block all deployments, not just untagged ones."
      },
      {
        "id": "heroic_123",
        "category": "Governance",
        "q": "A Contributor on a subscription must scale a VM, but a ReadOnly lock set at subscription level blocks the change. She then tries to remove the lock herself and fails. Why, and who can remove it?",
        "a": [
          "Locks can't be removed; the VM must be redeployed",
          "Only Microsoft support can remove subscription locks",
          "She needs the Reader role to remove it",
          "Contributors can't manage locks; an Owner can"
        ],
        "c": 3,
        "e": "Managing locks requires Microsoft.Authorization/locks permissions, which Owner and User Access Administrator have but Contributor does not. Locks can be removed by anyone with those permissions, so nothing has to be redeployed. Microsoft support is not needed, because authorized users in the tenant remove locks themselves. The Reader role has even fewer permissions than Contributor and cannot manage locks."
      },
      {
        "id": "heroic_124",
        "category": "Governance",
        "q": "A subscription is moved from the Dev management group to the Prod management group. Prod has stricter policies and different role assignments than Dev. What happens to the subscription's inherited settings?",
        "a": [
          "It inherits Prod's policies and roles",
          "It keeps Dev's policies until redeployed",
          "It keeps both groups' policies",
          "Only new resources get Prod's policies"
        ],
        "c": 0,
        "e": "Policies and role assignments are inherited from the hierarchy, so after the move the subscription gets Prod's settings and loses those inherited from Dev. Inheritance follows the new position; nothing waits for a redeployment. A subscription has one parent, so it cannot inherit from both groups. Existing resources are also evaluated against Prod's policies, not just new ones."
      },
      {
        "id": "heroic_125",
        "category": "Governance",
        "q": "A team lead decides that developers may create VMs in the test resource group, but no VM there may ever exceed four vCPUs, whoever creates it. Which pair of tools implements both parts of the rule?",
        "a": [
          "Azure Policy for who; RBAC for which sizes",
          "RBAC for who; Azure Policy for which sizes",
          "Locks for who; Azure Policy for which sizes",
          "RBAC for who; locks for which sizes"
        ],
        "c": 1,
        "e": "RBAC grants developers the right to create VMs in the group, and Azure Policy restricts the allowed VM sizes for everyone. Policy does not grant permissions, and RBAC cannot limit VM sizes. Locks block deletion or changes and do not grant anyone the right to create VMs. Locks cannot restrict VM sizes either."
      },
      {
        "id": "heroic_126",
        "category": "Governance",
        "q": "A company wants development and production costs on separate invoices, and developers must get Contributor rights in development without any inherited access to production. What is the simplest structure?",
        "a": [
          "Separate resource groups in one subscription",
          "Separate regions in one subscription",
          "Separate subscriptions for dev and prod",
          "Separate tags on shared resources"
        ],
        "c": 2,
        "e": "Subscriptions are both a billing boundary and an access boundary, so each gets its own invoice and its own role assignments. Resource groups can split access but share one subscription's invoice, and roles at subscription level would reach both. Regions are locations and separate neither billing nor access. Tags help report costs but do not separate invoices or permissions."
      },
      {
        "id": "heroic_127",
        "category": "Governance",
        "q": "An allowed-locations policy that blocks non-compliant deployments is assigned to a subscription that already has 20 VMs in a now-forbidden region. What happens to those existing VMs?",
        "a": [
          "Azure deletes them automatically within a day",
          "Azure migrates them to an allowed region",
          "They are stopped until someone moves them",
          "They keep running but show as non-compliant"
        ],
        "c": 3,
        "e": "Azure Policy evaluates existing resources and marks them non-compliant, while the blocking applies only to new or updated deployments. Policy does not delete existing resources. Policy does not move resources between regions. Policy does not stop running VMs."
      },
      {
        "id": "heroic_128",
        "category": "Cost",
        "q": "To save money over a long holiday, a team stops and deallocates its VMs in the portal. The next invoice still shows charges related to those VMs. What is still being billed?",
        "a": [
          "Managed disks and static public IPs",
          "Compute hours at a reduced idle rate",
          "OS licenses for the stopped time",
          "Inbound data to the stopped VMs"
        ],
        "c": 0,
        "e": "Deallocating stops compute charges, but storage such as managed disks and static public IP addresses are still billed. Deallocated VMs incur no compute charge at all, reduced or otherwise. Windows license costs are part of the compute price, which stops with deallocation. Inbound data transfer is generally free, and stopped VMs receive none anyway."
      },
      {
        "id": "heroic_129",
        "category": "Cost",
        "q": "A team deploys a third-party firewall appliance from Azure Marketplace. Finance sees two cost lines for it on the Azure invoice and asks why. Which statement explains this?",
        "a": [
          "Marketplace items are always free to deploy",
          "Azure bills both the VM and the vendor's software",
          "The vendor sends a separate invoice only",
          "The firewall is billed as Azure support"
        ],
        "c": 1,
        "e": "Paid Marketplace solutions carry the vendor's software charge on top of the Azure infrastructure they run on, and both appear on the Azure invoice. Many Marketplace items are not free; paid offers add the vendor's price. Purchases through Marketplace are billed on the Azure invoice rather than only by the vendor. A firewall appliance is not an Azure support plan."
      },
      {
        "id": "heroic_130",
        "category": "Cost",
        "q": "This month's Azure bill is 40 % higher than last month's. The finance lead wants to see which services and resource groups caused the increase, day by day, using data that Azure already has. What should she use?",
        "a": [
          "The Azure pricing calculator",
          "Azure Service Health history",
          "Cost analysis in Cost Management",
          "Azure Advisor cost recommendations"
        ],
        "c": 2,
        "e": "Cost analysis breaks actual costs down by service, resource group, tag and day, so the cause of the increase becomes visible. The pricing calculator estimates planned configurations, not past spending. Service Health reports platform incidents, not costs. Advisor recommends savings but does not explain which services drove a past increase."
      },
      {
        "id": "heroic_131",
        "category": "Cost",
        "q": "A three-week hackathon created dozens of VMs, disks, public IPs and a storage account, all in one resource group. Now that it has ended, finance wants every related charge to stop immediately. What is the simplest action?",
        "a": [
          "Stop and deallocate the VMs",
          "Set a budget of zero euros",
          "Remove all role assignments",
          "Delete the resource group"
        ],
        "c": 3,
        "e": "Deleting the resource group deletes every resource in it, so all related charges stop. Deallocating the VMs stops compute, but disks, public IPs and storage keep costing money. A budget only alerts on spending and stops nothing. Removing role assignments changes who has access, not what is billed."
      },
      {
        "id": "heroic_132",
        "category": "Cost",
        "q": "A company whose developers have Visual Studio subscriptions runs many non-production environments that must not be evicted at random. It wants discounted rates for them without any long-term commitment. What should it use?",
        "a": [
          "An Azure Dev/Test subscription offer",
          "Three-year reservations for the VMs",
          "Spot VMs for all test environments",
          "A Free account for each developer"
        ],
        "c": 0,
        "e": "Dev/Test offers give discounted rates, such as no Windows license charge, for non-production workloads of Visual Studio subscribers without a long-term commitment. Reservations require a one- or three-year commitment. Spot VMs can be evicted at any time, which these environments must avoid. Free accounts are time- and credit-limited trials, not a basis for ongoing team environments."
      },
      {
        "id": "heroic_133",
        "category": "Cost",
        "q": "A lab subscription must not overspend. When forecast spending reaches 100 % of the monthly budget, an automated process should shut down the lab VMs without anyone acting. How can this be set up?",
        "a": [
          "A ReadOnly lock that activates at the limit",
          "A budget alert that triggers an action group",
          "An Azure Policy deny rule based on cost",
          "An Advisor recommendation set to auto-apply"
        ],
        "c": 1,
        "e": "Budget alerts can call an action group, which can start automation such as shutting down VMs when a threshold is reached. Locks do not switch on based on spending. Azure Policy evaluates resource properties, not costs. Advisor recommendations are suggestions and are not applied automatically at a budget threshold."
      },
      {
        "id": "heroic_134",
        "category": "Cost",
        "q": "A team keeps 200 TB of intermediate files that can be regenerated from source data within a day. The account currently uses GRS. How can the team cut storage cost the most while keeping protection against a single disk failure?",
        "a": [
          "Change redundancy to RA-GRS",
          "Change redundancy to GZRS",
          "Change redundancy to LRS",
          "Keep GRS with a CanNotDelete lock"
        ],
        "c": 2,
        "e": "LRS keeps three copies in one datacenter, which protects against disk failures at the lowest cost, and losing the region is acceptable for data that can be regenerated. RA-GRS costs more than GRS because it adds read access to the secondary. GZRS is more expensive still. Keeping GRS with a lock does not change the storage price."
      },
      {
        "id": "heroic_135",
        "category": "Monitoring",
        "q": "A company wants to know when its public website stops responding from the point of view of users in Europe, Asia and America, even at night when no real users visit, and to be alerted. Which feature fits?",
        "a": [
          "Azure Resource Health checks",
          "Service Health region alerts",
          "VM heartbeat queries in Log Analytics",
          "App Insights availability tests"
        ],
        "c": 3,
        "e": "Application Insights availability tests probe the site on a schedule from locations around the world and alert when it stops responding, even without real traffic. Resource Health reports whether the Azure resource itself is healthy, not what users in different regions see. Service Health covers Azure platform incidents, not your site's reachability. VM heartbeats show that a VM is alive, not that the website answers visitors."
      },
      {
        "id": "heroic_136",
        "category": "Monitoring",
        "q": "When a critical alert fires, the on-call engineer must get an SMS and a phone call, and the ticketing system must receive the details through its webhook. This should be defined once and reused by many alerts. What should be configured?",
        "a": [
          "An Azure Monitor action group",
          "A Log Analytics workspace",
          "A Service Health advisory",
          "A Cost Management budget"
        ],
        "c": 0,
        "e": "An action group defines notifications such as SMS, voice calls and email plus actions such as webhooks, and many alert rules can reuse it. A Log Analytics workspace stores logs but sends no notifications. A Service Health advisory is a platform notice, not a reusable set of notifications. A budget tracks spending and is not a notification target for other alerts."
      },
      {
        "id": "heroic_137",
        "category": "Monitoring",
        "q": "One VM was unreachable for 20 minutes last night, and no region-wide incident was reported. The team wants to know whether that specific VM was down because of an Azure platform problem or something they did. Where should they look?",
        "a": [
          "Azure status page",
          "Azure Resource Health",
          "Azure Advisor",
          "Service Health incidents"
        ],
        "c": 1,
        "e": "Resource Health shows the health history of an individual resource and whether downtime came from the platform or a user-initiated action. The status page lists only broad incidents affecting many customers. Advisor offers recommendations, not a health history. Service Health incidents cover region- or service-wide events, and none was reported."
      },
      {
        "id": "heroic_138",
        "category": "Monitoring",
        "q": "An architect wants a free, built-in review of all subscriptions that flags reliability risks, such as single VMs without redundancy, together with security, performance and cost recommendations, without installing anything. What should she use?",
        "a": [
          "Azure Service Health advisories",
          "Microsoft Purview data map",
          "Azure Advisor recommendations",
          "Azure Monitor alert rules"
        ],
        "c": 2,
        "e": "Advisor analyzes your configuration and usage and gives recommendations in reliability, security, performance, operational excellence and cost. Service Health advisories announce Azure platform issues, not risks in your own design. Purview maps and classifies data, not VM redundancy. Alert rules notify you when conditions occur but do not review your architecture."
      },
      {
        "id": "heroic_139",
        "category": "Monitoring",
        "q": "An engineer needs near real-time charts of CPU percentage for 30 VMs and an alert within about a minute when it exceeds 90 %. Detailed event records are not needed. Which type of Azure Monitor data fits best?",
        "a": [
          "Log Analytics logs",
          "Application traces",
          "Activity log entries",
          "Platform metrics"
        ],
        "c": 3,
        "e": "Metrics are lightweight numeric values collected at regular intervals, ideal for near real-time charts and fast alerts on CPU. Logs hold detailed records for complex queries and arrive with more delay than metrics. Application traces describe code execution, not VM CPU. The Activity Log records management operations, not performance counters."
      },
      {
        "id": "heroic_140",
        "category": "Monitoring",
        "q": "A company monitors its Azure VMs with Azure Monitor. It wants the same performance data, logs and alerts for 100 servers in its own datacenter, managed as Azure resources, without moving them. Which combination fits?",
        "a": [
          "Azure Arc plus the Azure Monitor agent",
          "Azure Migrate plus Azure Advisor",
          "VPN Gateway plus Service Health",
          "Azure Policy plus Resource Health"
        ],
        "c": 0,
        "e": "Arc-enabled servers make on-premises machines Azure resources, and the Azure Monitor agent sends their performance data and logs to Azure Monitor for the same alerts. Azure Migrate is for moving servers, and Advisor reviews Azure resources. A VPN provides network connectivity, and Service Health reports platform incidents. Policy collects no performance data, and Resource Health covers the platform health of Azure resources."
      },
      {
        "id": "heroic_141",
        "category": "Monitoring",
        "q": "Security wants an alert whenever more than 20 failed sign-ins to Linux servers occur within 10 minutes. The data already sits in a Log Analytics workspace, and the condition needs a query over log records. Which alert type fits?",
        "a": [
          "A metric alert",
          "A log search alert",
          "An activity log alert",
          "A Service Health alert"
        ],
        "c": 1,
        "e": "Log search alerts run a query against Log Analytics on a schedule and fire when the result meets a condition, such as a count of failed sign-ins. Metric alerts watch numeric metrics, while failed sign-in records are log data. Activity log alerts react to Azure control-plane events, not sign-ins inside a server. Service Health alerts cover Azure platform incidents."
      },
      {
        "id": "heroic_142",
        "category": "Monitoring",
        "q": "The operations team wants to be notified immediately whenever anyone deletes a resource in the production subscription, whatever the resource type. Deletions themselves must stay possible, and no extra logging should be needed. What should it create?",
        "a": [
          "A metric alert on resource count",
          "A CanNotDelete lock on the subscription",
          "An activity log alert on delete operations",
          "An Advisor alert for deleted resources"
        ],
        "c": 2,
        "e": "The Activity Log records delete operations automatically, and an activity log alert notifies the team whenever one occurs. There is no standard metric that counts all resources in a subscription. A lock would block deletions, which must stay possible, and it sends no notification. Advisor alerts are about new recommendations, not deletions."
      },
      {
        "id": "heroic_143",
        "category": "Hybrid",
        "q": "A company has 200 SQL Server instances on its own servers. It wants one inventory of them in the Azure portal, with Azure tags, RBAC and Microsoft Defender protection, without moving any databases. What should it use?",
        "a": [
          "Azure SQL Managed Instance",
          "Azure Migrate database assessment",
          "Azure Data Box for the databases",
          "SQL Server enabled by Azure Arc"
        ],
        "c": 3,
        "e": "Azure Arc projects on-premises SQL Server instances into Azure, giving inventory, tags, RBAC and Defender protection where they run. SQL Managed Instance would require moving the databases into Azure. A Migrate assessment prepares a migration rather than managing the instances in place. Data Box transfers data offline and manages nothing."
      },
      {
        "id": "heroic_144",
        "category": "Hybrid",
        "q": "On-premises users reach Azure over a site-to-site VPN. A storage account now has a private endpoint and public access is disabled, but on-premises clients still resolve its name to the public IP and fail. What is missing?",
        "a": [
          "DNS resolution of the private endpoint name",
          "A second private endpoint on-premises",
          "VNet peering to the on-premises network",
          "An ExpressRoute circuit instead of VPN"
        ],
        "c": 0,
        "e": "Clients must resolve the account's name to the private endpoint's IP, which requires the private DNS zone's records to be reachable from on-premises, for example through DNS forwarding. Private endpoints are created in Azure VNets, not on-premises. Peering connects VNets and cannot target an on-premises network. ExpressRoute changes the connection type but not how the name resolves."
      },
      {
        "id": "heroic_145",
        "category": "Hybrid",
        "q": "A company keeps its VMware vSphere environment on-premises, but developers should create and manage VMs there through the Azure portal with Azure RBAC, just like Azure VMs. What should it use?",
        "a": [
          "Azure VMware Solution",
          "Azure Arc-enabled VMware vSphere",
          "Azure Migrate VMware replication",
          "Azure Virtual Desktop host pools"
        ],
        "c": 1,
        "e": "Arc-enabled VMware vSphere connects an on-premises vCenter to Azure so its VMs can be created and managed from the portal with Azure RBAC. Azure VMware Solution runs VMware in Azure datacenters, which means moving the environment rather than keeping it on-premises. Migrate replication moves VMware VMs into Azure. Azure Virtual Desktop delivers desktops and does not manage vSphere."
      },
      {
        "id": "heroic_146",
        "category": "DevOps",
        "q": "A team finds ARM template JSON hard to read and review. It wants a shorter, declarative language with the same capabilities that is still deployed through Azure Resource Manager. What should it adopt?",
        "a": [
          "Azure CLI scripts",
          "PowerShell scripts",
          "Bicep templates",
          "Policy definitions"
        ],
        "c": 2,
        "e": "Bicep is a declarative language with simpler syntax than ARM JSON; Bicep files are compiled to ARM templates and deployed through Resource Manager. Azure CLI scripts are imperative commands, not a declarative template language. PowerShell scripts are imperative as well. Policy definitions describe rules for resources and deploy no infrastructure."
      },
      {
        "id": "heroic_147",
        "category": "Management",
        "q": "A team lead wants one screen in the Azure portal showing CPU charts of key VMs, the cost of the project's resource group and recent alerts, shared with the whole team, without building a separate app. What should she create?",
        "a": [
          "A Log Analytics workspace",
          "A Cloud Shell script",
          "An Azure Advisor digest",
          "A shared portal dashboard"
        ],
        "c": 3,
        "e": "Azure portal dashboards combine tiles from different resources, such as metric charts, cost views and alerts, and can be shared with the team. A Log Analytics workspace stores log data but is not itself a shared overview screen. A Cloud Shell script prints text output instead of a persistent shared view. An Advisor digest emails recommendations and shows no charts or alerts."
      },
      {
        "id": "heroic_148",
        "category": "DevOps",
        "q": "Someone changed a production VNet's settings by hand, and it now differs from the approved ARM template kept in source control. The team wants to bring it back to the approved state with minimal effort and risk. What should it do?",
        "a": [
          "Redeploy the approved template",
          "Recreate the VNet by hand in the portal",
          "Apply a ReadOnly lock to the VNet",
          "Assign a policy initiative to the VNet"
        ],
        "c": 0,
        "e": "Because templates are declarative and idempotent, redeploying the approved template returns the VNet to the defined state. Recreating it by hand is slow and repeats the risk of manual changes. A ReadOnly lock would only freeze the current wrong state. A policy initiative audits or enforces rules but does not redeploy the approved configuration."
      },
      {
        "id": "heroic_149",
        "category": "DevOps",
        "q": "A Linux build server runs nightly Bash scripts that create and delete test resources in Azure. The scripts run unattended, and the team prefers Bash syntax to PowerShell cmdlets. Which tool should the scripts call?",
        "a": [
          "Azure PowerShell in Cloud Shell",
          "Azure CLI installed on the server",
          "The Azure portal in a browser",
          "Azure Storage Explorer app"
        ],
        "c": 1,
        "e": "Azure CLI runs on Linux, is called from Bash scripts and can run unattended on the build server. Azure PowerShell uses cmdlets, which the team wants to avoid, and Cloud Shell is an interactive browser session, not a nightly scheduler. The portal is an interactive graphical interface. Storage Explorer manages storage only and cannot create other resources."
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
      "q": "A company buys new server hardware every three years, even when much of it sits idle. After moving to Azure it pays monthly only for the compute it uses. How has its spending changed?",
      "a": [
        "From CapEx to OpEx",
        "From OpEx to CapEx",
        "From CapEx to TCO",
        "From OpEx to TCO"
      ],
      "c": 0,
      "e": "Buying hardware upfront is capital expenditure (CapEx), while paying monthly for what you consume is operational expenditure (OpEx). OpEx to CapEx is the reverse direction, typical of buying hardware instead of renting it. CapEx to TCO is wrong because TCO is a way of comparing total costs, not a type of spending. OpEx to TCO is wrong for the same reason."
    },
    {
      "id": "exam_1",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company moves its email and document collaboration to a SaaS suite. Microsoft now runs the application, the operating system and the datacenters. Which responsibility still stays fully with the company?",
      "a": [
        "Patching the application's code",
        "Accounts, identities and data access",
        "Securing the physical network",
        "Updating the host operating system"
      ],
      "c": 1,
      "e": "In every service model the customer keeps responsibility for its data, devices, and accounts and identities. In SaaS the provider patches the application code itself. Physical network security is always the provider's job in the cloud. The host operating system is also managed by the provider in SaaS."
    },
    {
      "id": "exam_2",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "An online shop's traffic jumps tenfold during a six-hour sale. Azure adds web servers automatically during the peak and removes them afterwards. Which cloud benefit does this show?",
      "a": [
        "Reliability",
        "Governance",
        "Scalability",
        "High availability"
      ],
      "c": 2,
      "e": "Scalability is the ability to add or remove resources to match demand, here automatically by scaling out and back in. Reliability is about recovering from failures and continuing to function. Governance is about enforcing standards and policies on resources. High availability is about minimizing downtime, not about following changes in demand."
    },
    {
      "id": "exam_3",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company's contract promises customers that its ordering app will be reachable 99.95% of the time. Which cloud benefit must its Azure design deliver to keep that promise?",
      "a": [
        "Cost predictability",
        "Vertical scaling",
        "Data governance",
        "High availability"
      ],
      "c": 3,
      "e": "High availability means keeping a service accessible with as little downtime as possible, usually expressed as an uptime percentage in an SLA. Cost predictability is about forecasting spending. Vertical scaling adds power to one resource and does not by itself guarantee uptime. Data governance controls how data is classified and used."
    },
    {
      "id": "exam_4",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company wants its system to recover from failures and keep functioning, so it spreads its workload across several Azure regions around the world. Which cloud benefit is this?",
      "a": [
        "Reliability",
        "Manageability",
        "Predictability",
        "Elasticity"
      ],
      "c": 0,
      "e": "Reliability is the ability of a system to recover from failures and continue to function, and the cloud's decentralized, global design supports it. Manageability is about how easily resources are managed and monitored. Predictability is about forecasting cost and performance. Elasticity is about automatically matching resources to demand."
    },
    {
      "id": "exam_5",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A hospital keeps patient records on servers in its own datacenter but runs its appointment booking website in Azure, and the two systems exchange data. Which deployment model is this?",
      "a": [
        "Private cloud",
        "Hybrid cloud",
        "Public cloud",
        "Multi-cloud"
      ],
      "c": 1,
      "e": "Hybrid cloud combines on-premises (private) infrastructure with public cloud resources that work together. A private cloud alone would keep everything in the hospital's own environment. Public cloud alone would run both systems in Azure. Multi-cloud means using two or more public cloud providers."
    },
    {
      "id": "exam_6",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "After an acquisition, a company runs some workloads in Azure and others with a second public cloud provider. It has no datacenter of its own. Which deployment model describes this?",
      "a": [
        "Hybrid cloud",
        "Private cloud",
        "Multi-cloud",
        "Sovereign cloud"
      ],
      "c": 2,
      "e": "Multi-cloud means using services from two or more public cloud providers. Hybrid cloud requires on-premises or private infrastructure, which this company does not have. A private cloud is used by a single organization, usually in its own datacenter. Sovereign clouds are isolated Azure instances for governments, not a mix of providers."
    },
    {
      "id": "exam_7",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A defense contractor builds a cloud environment in its own datacenter. Its teams get self-service virtual machines, but no other organization shares the hardware. Which deployment model is this?",
      "a": [
        "Public cloud",
        "Hybrid cloud",
        "Multi-cloud",
        "Private cloud"
      ],
      "c": 3,
      "e": "A private cloud is cloud infrastructure used by a single organization, often in its own datacenter, with cloud-style self-service. Public cloud runs on provider-owned hardware shared by many customers. Hybrid cloud would combine this environment with a public cloud. Multi-cloud means using several public cloud providers."
    },
    {
      "id": "exam_8",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A finance team wants the Azure bill to follow actual usage each month, with no commitment and nothing paid for capacity that sits unused. Which pricing approach fits?",
      "a": [
        "Pay-as-you-go pricing",
        "A three-year reservation",
        "A fixed annual license",
        "A one-year savings plan"
      ],
      "c": 0,
      "e": "Pay-as-you-go (consumption-based) pricing charges only for what you actually use, with no commitment. A three-year reservation gives a discount in exchange for a long commitment. A fixed annual license is paid regardless of usage. A savings plan also requires committing to a fixed hourly spend."
    },
    {
      "id": "exam_9",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A reporting VM runs out of memory every month-end. The team resizes it from 8 GB to 32 GB of RAM instead of adding more VMs. What kind of scaling is this?",
      "a": [
        "Scaling out (horizontal)",
        "Scaling up (vertical)",
        "Scaling in (horizontal)",
        "Scaling down (vertical)"
      ],
      "c": 1,
      "e": "Increasing the resources of an existing machine, such as RAM or CPU, is vertical scaling up. Scaling out adds more instances instead of making one larger. Scaling in removes instances. Scaling down reduces the size of a machine, the opposite of what happened."
    },
    {
      "id": "exam_10",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company moves its existing servers to Azure as virtual machines without changing the apps. It wants to keep managing the operating systems itself. Which cloud service type is this?",
      "a": [
        "PaaS",
        "SaaS",
        "IaaS",
        "FaaS"
      ],
      "c": 2,
      "e": "Running your own VMs in the cloud and managing their operating systems is Infrastructure as a Service, the type with the most customer control. In PaaS the provider manages the operating system and you only deploy apps. In SaaS you simply use a finished application. FaaS (serverless functions) runs individual pieces of code with no servers to manage."
    },
    {
      "id": "exam_11",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Developers want to deploy their web code to Azure without managing operating systems, patches or runtime installation, but they still write and own the application. Which service type fits?",
      "a": [
        "Infrastructure as a Service",
        "Software as a Service",
        "On-premises hosting",
        "Platform as a Service"
      ],
      "c": 3,
      "e": "In PaaS the provider manages the OS, patches and runtime, while you deploy and own the application code. IaaS would leave the operating system and patching with the developers. SaaS delivers a finished application, so there would be no own code to deploy. On-premises hosting means running and patching your own servers."
    },
    {
      "id": "exam_12",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A small firm wants a ready-to-use CRM that staff open in a browser. It does not want to install, host or update any part of the software. Which service type is this?",
      "a": [
        "Software as a Service",
        "Platform as a Service",
        "Infrastructure as a Service",
        "Private cloud hosting"
      ],
      "c": 0,
      "e": "SaaS delivers a complete application that users simply sign in to, while the provider hosts and updates everything. PaaS would require the firm to build and deploy its own application. IaaS would require installing and maintaining the CRM on virtual machines. Private cloud hosting means running the software on the firm's own dedicated infrastructure."
    },
    {
      "id": "exam_13",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A team wants to run code only when a message arrives, with no servers to provision and no charge while nothing is running. Which cloud computing model is this?",
      "a": [
        "Virtual machine hosting",
        "Serverless computing",
        "Reserved capacity",
        "Private cloud"
      ],
      "c": 1,
      "e": "Serverless computing runs code in response to events, with the provider managing all servers and billing only for execution. Virtual machine hosting requires you to provision servers that are charged while running. Reserved capacity is a pricing commitment, not a model where idle time is free. A private cloud runs on dedicated infrastructure that you pay for even when idle."
    },
    {
      "id": "exam_14",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company compares keeping its own datacenter with moving to the public cloud. Which is a trade-off it accepts by choosing the public cloud?",
      "a": [
        "Higher upfront hardware investment",
        "Slower provisioning of new servers",
        "Less control over physical hardware",
        "Capacity that is hard to change"
      ],
      "c": 2,
      "e": "In the public cloud the provider owns and runs the hardware, so the customer has less direct physical control. A higher upfront investment is a trait of on-premises, not of the cloud. Provisioning in the cloud is faster, not slower. Cloud capacity can be changed on demand, unlike a fixed datacenter."
    },
    {
      "id": "exam_15",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A team hosts its web app on Azure App Service. A security audit asks who must patch the web server's operating system and who must fix a vulnerability in the team's own application code. What is the correct split?",
      "a": [
        "Customer: OS; Microsoft: app code",
        "Customer: both OS and app code",
        "Microsoft: both OS and app code",
        "Microsoft: OS; customer: app code"
      ],
      "c": 3,
      "e": "In PaaS such as App Service, Microsoft patches the operating system and platform, while the customer stays responsible for its own application code. The reversed split puts each task on the wrong side. The customer patches the OS only in IaaS, not in App Service. Microsoft does not fix the customer's own code, even in PaaS."
    },
    {
      "id": "exam_16",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company wants every new cloud resource to follow its corporate standards, with built-in templates and automatic auditing that flags anything non-compliant. Which cloud benefit is this?",
      "a": [
        "Governance",
        "Elasticity",
        "Reliability",
        "Scalability"
      ],
      "c": 0,
      "e": "Governance in the cloud means using templates, policies and auditing to keep resources compliant with corporate standards. Elasticity is automatic matching of resources to demand. Reliability is recovering from failures. Scalability is adding or removing resources as load changes."
    },
    {
      "id": "exam_17",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "On the AZ-900 exam, manageability is split into management of the cloud and management in the cloud. Which example describes management of the cloud rather than in the cloud?",
      "a": [
        "Managing resources through the Azure portal",
        "Automatic scaling and alerts from metrics",
        "Running scripts with Azure CLI or PowerShell",
        "Calling the Azure REST API from a tool"
      ],
      "c": 1,
      "e": "Management of the cloud means managing the resources themselves, for example scaling automatically and getting alerts based on metrics. Using the Azure portal is management in the cloud, through a web interface. Azure CLI and PowerShell scripts are also ways of managing in the cloud. Calling the REST API is a programmatic way of managing in the cloud."
    },
    {
      "id": "exam_18",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company runs a Windows Server virtual machine in Azure (IaaS). Under the shared responsibility model, which task belongs to the company?",
      "a": [
        "Patching the hypervisor",
        "Replacing failed disks",
        "Patching the guest OS",
        "Securing the datacenter"
      ],
      "c": 2,
      "e": "In IaaS the customer manages the guest operating system, including installing its security updates. The hypervisor is part of the host infrastructure that Microsoft maintains. Failed physical disks are replaced by Microsoft. Physical datacenter security is Microsoft's responsibility in every cloud service model."
    },
    {
      "id": "exam_19",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "One team wants maximum control over security settings, including the OS configuration. Another team wants the provider to apply OS patches for them. Which service types match the two teams?",
      "a": [
        "PaaS for control; IaaS for patching",
        "SaaS for control; PaaS for patching",
        "PaaS for control; SaaS for patching",
        "IaaS for control; PaaS for patching"
      ],
      "c": 3,
      "e": "IaaS gives the most control, including over the OS, while in PaaS the provider patches the OS for you. PaaS for control with IaaS for patching swaps the two, since IaaS leaves patching to the customer. SaaS for control fails because SaaS offers the least control of all service types. PaaS for control fails because PaaS hides the OS configuration from the customer."
    },
    {
      "id": "exam_20",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Before a launch, a company uses Azure tools to forecast its monthly spending and relies on autoscaling so performance stays steady under the expected load. Which cloud benefit is this?",
      "a": [
        "Predictability",
        "Governance",
        "Manageability",
        "High availability"
      ],
      "c": 0,
      "e": "Predictability covers both cost predictability (forecasting spend) and performance predictability (keeping performance steady with tools like autoscaling). Governance is about enforcing standards and policies. Manageability is about how resources are managed and monitored. High availability is about minimizing downtime, not forecasting cost."
    },
    {
      "id": "exam_21",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "Which list orders the cloud service types from the MOST customer responsibility to the LEAST?",
      "a": [
        "SaaS, PaaS, IaaS",
        "IaaS, PaaS, SaaS",
        "PaaS, IaaS, SaaS",
        "IaaS, SaaS, PaaS"
      ],
      "c": 1,
      "e": "IaaS leaves the most to the customer (OS, apps, data), PaaS less (apps and data), and SaaS the least (mainly data, identities and access). SaaS, PaaS, IaaS is the reverse order, from least to most. PaaS before IaaS is wrong, because IaaS also makes the customer manage the operating system. Putting SaaS in the middle is wrong, because SaaS leaves the customer the least to manage."
    },
    {
      "id": "exam_22",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A small business has no servers of its own and needs extra compute only during unpredictable bursts. It wants capacity added without manual steps and to pay for it only while it is used. Which combination fits?",
      "a": [
        "Autoscaling with a three-year reservation",
        "Manual scaling with pay-as-you-go pricing",
        "Autoscaling with pay-as-you-go pricing",
        "Manual scaling with a three-year reservation"
      ],
      "c": 2,
      "e": "Autoscaling adds capacity automatically for the bursts, and pay-as-you-go charges only while it runs. A three-year reservation commits to paying for capacity even when it is not used. Manual scaling with pay-as-you-go still needs a person to add capacity each time. Manual scaling with a reservation fails on both requirements."
    },
    {
      "id": "exam_23",
      "track": "cloudConcepts",
      "category": "Cloud concepts",
      "q": "A company builds a private cloud in its own datacenter so teams can self-provision VMs. Compared with using Azure, which statement about its costs is accurate?",
      "a": [
        "It removes all hardware maintenance costs",
        "It turns all spending into pure OpEx",
        "It is billed per minute of VM usage",
        "It requires upfront CapEx for hardware"
      ],
      "c": 3,
      "e": "A private cloud runs on hardware the company buys and owns, which is an upfront capital expense (CapEx). The company still pays to maintain, power and cool that hardware. Spending does not become pure OpEx, because the equipment is purchased. Per-minute billing for VM usage is a public cloud consumption model, not how owned hardware is paid for."
    },
    {
      "id": "exam_24",
      "track": "coreServices",
      "category": "Compute",
      "q": "A company must move a legacy Windows app to Azure quickly. The app needs a custom kernel-mode driver and specific registry settings, and the vendor will not change the code. Which service should host it?",
      "a": [
        "Azure Virtual Machines",
        "Azure App Service",
        "Azure Container Apps",
        "Azure Virtual Desktop"
      ],
      "c": 0,
      "e": "Only a virtual machine gives full control of the operating system, which a custom kernel-mode driver and registry changes require. App Service is PaaS and does not let you install drivers on the underlying OS. Container Apps runs containers on a managed platform without access to the host kernel. Azure Virtual Desktop delivers desktops to users and is not meant for hosting a server app."
    },
    {
      "id": "exam_25",
      "track": "coreServices",
      "category": "Compute",
      "q": "A web agency hosts many customer websites written in .NET, Java and Node.js. It wants a managed platform with built-in autoscaling and no servers to patch. Which service fits?",
      "a": [
        "Azure Virtual Desktop",
        "Azure App Service",
        "Azure Functions",
        "Azure Virtual Machines"
      ],
      "c": 1,
      "e": "App Service is a managed PaaS for web apps and APIs in many languages, with autoscaling and no OS patching. Azure Virtual Desktop delivers remote desktops, not website hosting. Azure Functions runs short event-driven code rather than hosting full websites. Virtual Machines would leave the agency patching the servers."
    },
    {
      "id": "exam_26",
      "track": "coreServices",
      "category": "Compute",
      "q": "Each time an image is uploaded to a storage account, a small piece of code must create a thumbnail. Between uploads nothing should run or be billed. Which service fits?",
      "a": [
        "Azure App Service",
        "Azure Virtual Machines",
        "Azure Functions",
        "Azure VM Scale Sets"
      ],
      "c": 2,
      "e": "Azure Functions is serverless: code runs when an event such as a blob upload triggers it, and the Consumption plan bills only for execution. An App Service plan is billed while it runs, even with no uploads. Virtual machines are billed while running and must be managed. VM scale sets scale whole VMs and are not designed to run a small piece of code per event."
    },
    {
      "id": "exam_27",
      "track": "coreServices",
      "category": "Compute",
      "q": "A team runs dozens of containerized microservices. It needs the full Kubernetes API and control over cluster configuration, but wants Azure to manage the control plane. Which service fits?",
      "a": [
        "Azure Container Apps",
        "Azure Container Instances",
        "Azure App Service",
        "Azure Kubernetes Service"
      ],
      "c": 3,
      "e": "AKS is managed Kubernetes: Azure runs the control plane while the team keeps full access to the Kubernetes API and cluster settings. Container Apps runs microservices on a managed platform but hides the Kubernetes API. Container Instances runs single containers without orchestration. App Service hosts web apps and is not a Kubernetes cluster."
    },
    {
      "id": "exam_28",
      "track": "coreServices",
      "category": "Compute",
      "q": "An app runs on identical VMs. The company wants Azure to add identical VMs automatically when CPU load rises and remove them again when the load drops. What should it use?",
      "a": [
        "VM scale sets",
        "Availability sets",
        "Resource groups",
        "Region pairs"
      ],
      "c": 0,
      "e": "Virtual Machine Scale Sets manage a group of identical VMs and can add or remove instances automatically based on load. Availability sets spread VMs across fault and update domains but do not add VMs. Resource groups only organize resources. Region pairs are about disaster recovery between regions."
    },
    {
      "id": "exam_29",
      "track": "coreServices",
      "category": "Storage",
      "q": "A streaming service stores millions of video files and thumbnails that apps read over HTTP. The data has no fixed structure and keeps growing. Which storage service fits?",
      "a": [
        "Azure Files",
        "Azure Blob Storage",
        "Azure managed disks",
        "Azure Queue Storage"
      ],
      "c": 1,
      "e": "Blob Storage is object storage for massive amounts of unstructured data such as video and images, accessed over HTTP/HTTPS. Azure Files provides SMB/NFS file shares for apps that expect a network drive. Managed disks are block storage attached to a single VM. Queue Storage stores messages between application components, not media files."
    },
    {
      "id": "exam_30",
      "track": "coreServices",
      "category": "Storage",
      "q": "A company retires its on-premises file server. Office PCs must keep mapping the share as a network drive over SMB, and IT wants no file server VM to patch. Which option fits?",
      "a": [
        "A Blob Storage container",
        "A managed disk on a VM",
        "An Azure Files share",
        "An Azure File Sync server"
      ],
      "c": 2,
      "e": "Azure Files provides fully managed file shares that clients map over SMB, so no file server VM is needed. A Blob Storage container is accessed over HTTP and is not mapped as an SMB drive. A managed disk would need a VM acting as a file server, which IT wants to avoid. Azure File Sync keeps a Windows file server on-premises, which the company is retiring."
    },
    {
      "id": "exam_31",
      "track": "coreServices",
      "category": "Storage",
      "q": "Audit logs must be kept for seven years and are read perhaps once a year. A retrieval delay of several hours is acceptable. Which option gives the lowest storage cost?",
      "a": [
        "Cold access tier",
        "Cool access tier",
        "Premium block blobs",
        "Archive access tier"
      ],
      "c": 3,
      "e": "Archive is the cheapest tier for data that is rarely read and can wait hours to be rehydrated. The Cold tier is cheaper than Cool but more expensive to store than Archive. The Cool tier suits data read about monthly and costs more to store than Cold or Archive. Premium block blobs offer low latency at the highest storage price."
    },
    {
      "id": "exam_32",
      "track": "coreServices",
      "category": "Storage",
      "q": "A developer must copy 2 TB of blobs from a storage account in one region to a storage account in another region by running a command in Cloud Shell. Which tool fits?",
      "a": [
        "AzCopy",
        "Data Box",
        "File Sync",
        "Robocopy"
      ],
      "c": 0,
      "e": "AzCopy is a command-line utility that copies data between storage accounts, including across regions, and it is available in Cloud Shell. Data Box is a physical device for offline transfers into Azure, not between two storage accounts. Azure File Sync synchronizes Windows file servers with Azure Files shares. Robocopy copies between file paths and cannot copy between Blob Storage accounts."
    },
    {
      "id": "exam_33",
      "track": "coreServices",
      "category": "Storage",
      "q": "A company's backup data must survive the loss of an entire Azure region. No app needs to read the copy in the secondary region unless Microsoft fails over. Which option meets this at the lowest cost?",
      "a": [
        "Zone-redundant storage",
        "Geo-redundant storage",
        "Locally redundant storage",
        "Read-access geo-redundant storage"
      ],
      "c": 1,
      "e": "GRS copies data to the paired secondary region, so it survives a regional outage, and it costs less than read-access options. ZRS spreads copies across zones in one region, so it does not survive the loss of the whole region. LRS keeps all copies in a single datacenter. RA-GRS also survives a regional outage, but you pay extra for read access the company does not need."
    },
    {
      "id": "exam_34",
      "track": "coreServices",
      "category": "Networking",
      "q": "VMs in a VNet in West Europe must talk to VMs in another VNet in North Europe using private IP addresses over the Microsoft backbone. What should be configured?",
      "a": [
        "A private endpoint",
        "An NSG rule",
        "VNet peering",
        "A DNS zone"
      ],
      "c": 2,
      "e": "VNet peering connects two virtual networks, even across regions, so resources communicate with private IPs over the Microsoft backbone. A private endpoint gives a PaaS service a private IP in one VNet and does not connect two VNets. An NSG rule filters traffic but cannot create a connection between networks. A DNS zone resolves names and does not route traffic between VNets."
    },
    {
      "id": "exam_35",
      "track": "coreServices",
      "category": "Networking",
      "q": "A bank needs a link from its datacenter to Azure with predictable latency and more bandwidth than its internet line. Compliance forbids the traffic from crossing the public internet, even when encrypted. What should the bank use?",
      "a": [
        "Site-to-site VPN Gateway",
        "Point-to-site VPN",
        "Global VNet peering",
        "Azure ExpressRoute"
      ],
      "c": 3,
      "e": "ExpressRoute is a private connection through a connectivity provider that does not travel over the public internet and offers more consistent latency and bandwidth. A site-to-site VPN encrypts traffic but still sends it across the internet. A point-to-site VPN connects individual devices over the internet, not a whole datacenter. VNet peering connects Azure virtual networks to each other, not an on-premises site."
    },
    {
      "id": "exam_36",
      "track": "coreServices",
      "category": "Networking",
      "q": "A few consultants work from home and need encrypted access from their laptops to VMs in an Azure VNet. The company has no office network to connect. What should it set up?",
      "a": [
        "Point-to-site VPN",
        "Site-to-site VPN",
        "Azure ExpressRoute",
        "VNet peering"
      ],
      "c": 0,
      "e": "A point-to-site VPN connects individual devices to an Azure VNet over an encrypted tunnel across the internet. A site-to-site VPN connects a whole on-premises network, which the company does not have. ExpressRoute is a private circuit for datacenters and offices via a connectivity provider. VNet peering connects Azure VNets to each other, not laptops."
    },
    {
      "id": "exam_37",
      "track": "coreServices",
      "category": "Networking",
      "q": "A subnet with web servers should accept inbound traffic only on port 443 from the internet and deny everything else. What should be associated with the subnet?",
      "a": [
        "A private endpoint",
        "A network security group",
        "An Azure DNS zone",
        "A virtual network gateway"
      ],
      "c": 1,
      "e": "A network security group contains allow and deny rules by port, protocol, source and destination, and can be associated with a subnet. A private endpoint gives a PaaS service a private IP and does not filter ports. An Azure DNS zone hosts name records and does not block traffic. A virtual network gateway connects networks via VPN or ExpressRoute rather than filtering inbound ports."
    },
    {
      "id": "exam_38",
      "track": "coreServices",
      "category": "Networking",
      "q": "A storage account must be reachable only from VMs in the company's VNet. Public network access will be disabled, and traffic should use a private IP address inside the VNet. What should be added?",
      "a": [
        "VNet peering",
        "A public endpoint with HTTPS",
        "A private endpoint",
        "A point-to-site VPN"
      ],
      "c": 2,
      "e": "A private endpoint gives the storage account a private IP inside the VNet, so traffic stays private and public access can be turned off. VNet peering connects two VNets but does not give a PaaS service a private address. A public endpoint is exactly what the company wants to disable, even with HTTPS. A point-to-site VPN connects individual devices to the VNet, not the storage account itself."
    },
    {
      "id": "exam_39",
      "track": "coreServices",
      "category": "Networking",
      "q": "A company plans to host the DNS zone for its domain in Azure DNS. Which statement about Azure DNS is accurate?",
      "a": [
        "It registers and sells new domain names",
        "It replaces the need for a public IP address",
        "It only resolves names inside one VNet",
        "It hosts zones but does not register domains"
      ],
      "c": 3,
      "e": "Azure DNS hosts DNS zones and records, but you cannot buy a domain name through it; registration happens with a domain registrar. Registering and selling new domain names is therefore not something Azure DNS does. DNS maps names to addresses and does not replace public IP addresses. Azure DNS hosts public zones for the internet as well as private zones, so it is not limited to one VNet."
    },
    {
      "id": "exam_40",
      "track": "coreServices",
      "category": "Networking",
      "q": "A VNet has two subnets: one for web VMs and one for database VMs. No custom routes or NSGs have been added yet. Can the web VMs reach the database VMs over private IP addresses?",
      "a": [
        "Yes, subnets in one VNet can communicate by default",
        "No, each subnet is isolated until peering is set up",
        "No, a VPN gateway is required between subnets",
        "Yes, but only after a public IP is assigned"
      ],
      "c": 0,
      "e": "By default, resources in different subnets of the same VNet can reach each other over private IPs through Azure's system routes. Peering connects different VNets, not subnets inside one VNet. A VPN gateway connects external networks or other VNets and is not needed between subnets. Public IP addresses are for internet access and are not needed for private traffic inside the VNet."
    },
    {
      "id": "exam_41",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Whether an admin uses the Azure portal, Azure CLI, PowerShell or an SDK, every create or update request goes through the same Azure layer. What is it?",
      "a": [
        "Microsoft Entra ID",
        "Azure Resource Manager",
        "Azure Service Health",
        "Azure Cloud Shell"
      ],
      "c": 1,
      "e": "Azure Resource Manager (ARM) is the deployment and management layer that receives every request from the portal, CLI, PowerShell and SDKs. Microsoft Entra ID authenticates the user but does not create resources. Service Health reports Azure incidents and maintenance. Cloud Shell is just one of the tools that sends requests to ARM."
    },
    {
      "id": "exam_42",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A team must create the same network, VMs and storage in dev, test and production, with no drift between them and the definition kept in version control. Which approach fits?",
      "a": [
        "Manual setup in the Azure portal",
        "A separate subscription per environment",
        "Infrastructure as code (ARM templates)",
        "Resource locks on each environment"
      ],
      "c": 2,
      "e": "Infrastructure as code with ARM templates defines resources in files that can be versioned and deployed identically to every environment. Manual setup in the portal is error-prone and leads to drift. Separate subscriptions isolate environments but do not make their contents identical. Resource locks prevent deletion or changes but do not create anything."
    },
    {
      "id": "exam_43",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A company deploys its app to a region and to that region's pair. Which behaviour of Azure region pairs helps it during platform maintenance and large outages?",
      "a": [
        "Both regions in a pair are updated at the same time",
        "Paired regions sit on different continents",
        "Every service copies its data to the pair automatically",
        "Updates roll out to one region of a pair at a time"
      ],
      "c": 3,
      "e": "Azure rolls out planned updates to one region of a pair at a time and prioritizes recovering one region of each pair in a broad outage. Updating both regions at once is exactly what pairing is designed to avoid. Paired regions are usually in the same geography, such as two regions in Europe, not on different continents. Replication to the pair happens only for services you configure, such as GRS storage, not for every service automatically."
    },
    {
      "id": "exam_44",
      "track": "coreServices",
      "category": "Architecture",
      "q": "An online booking system must stay up if a single datacenter in Sweden Central fails. Moving the workload to another region is not allowed for legal reasons. How should its VMs be deployed?",
      "a": [
        "Across Availability Zones",
        "Across a region pair",
        "In one availability set",
        "In two resource groups"
      ],
      "c": 0,
      "e": "Availability Zones are physically separate datacenters within one region, so spreading VMs across them survives a datacenter failure without leaving the region. A region pair would place workloads in a second region, which is not allowed. An availability set protects against rack and update failures but stays inside one datacenter. Resource groups only organize resources and give no physical separation."
    },
    {
      "id": "exam_45",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A team builds a short-lived test environment with a VM, a database and a storage account. When the test ends, it wants to delete all three in one step. How should it organize them?",
      "a": [
        "Under one tag value",
        "In one resource group",
        "In one availability set",
        "In one management group"
      ],
      "c": 1,
      "e": "Resources in one resource group share a lifecycle, and deleting the group deletes everything in it. A tag labels resources, but there is no single built-in delete-by-tag step. An availability set is for VM resilience and cannot hold a database or storage account. Management groups contain subscriptions, not individual resources."
    },
    {
      "id": "exam_46",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A company has 12 subscriptions for different business units. It wants one policy assignment and one role assignment to apply to all of them, including subscriptions created later. What should it use?",
      "a": [
        "A resource group containing the subscriptions",
        "A tag applied to every subscription",
        "A management group above the subscriptions",
        "One Microsoft Entra group per subscription"
      ],
      "c": 2,
      "e": "Management groups sit above subscriptions, and policy and role assignments made on them are inherited by every subscription beneath, including new ones. A resource group lives inside a subscription and cannot contain subscriptions. Tags label resources but do not carry policy or role assignments. Entra groups define who gets access, but they would still need assignments on each subscription."
    },
    {
      "id": "exam_47",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A company has Windows and Linux servers in its own datacenter and at another cloud provider. It wants to manage them from the Azure portal and apply Azure Policy to them. Which service fits?",
      "a": [
        "Azure Migrate",
        "Azure Monitor",
        "Azure DNS",
        "Azure Arc"
      ],
      "c": 3,
      "e": "Azure Arc projects servers outside Azure into Azure Resource Manager, so they can be managed in the portal and governed with Azure Policy. Azure Migrate assesses and moves servers into Azure rather than managing them where they are. Azure Monitor can collect their telemetry but cannot apply Azure Policy to them. Azure DNS hosts domain records and does not manage servers."
    },
    {
      "id": "exam_48",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Two departments share one Microsoft Entra tenant. Each needs its own Azure invoice, and admins of one department should not reach the other's resources by default. What should the company create?",
      "a": [
        "A separate subscription per department",
        "A separate resource group per department",
        "A separate region per department",
        "A separate tag per department"
      ],
      "c": 0,
      "e": "A subscription is both a billing boundary (its own invoice) and an access-control boundary. Resource groups organize resources inside one subscription and share its invoice. A region is a physical location and does not separate billing or access. Tags help split cost reports but do not create separate invoices or block access."
    },
    {
      "id": "exam_49",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A team builds a new microservice that must run the same way on developer laptops, in testing and in Azure. It needs no OS-level access and should scale without managing servers. Which option fits best?",
      "a": [
        "A Windows VM per environment",
        "Containers on Azure Container Apps",
        "A VM scale set with custom images",
        "Azure Virtual Desktop host pools"
      ],
      "c": 1,
      "e": "Containers package the app with its dependencies so it runs identically everywhere, and Container Apps scales them without servers to manage. A VM per environment means maintaining separate operating systems and risks differences between environments. A VM scale set still requires managing VM images and operating systems. Azure Virtual Desktop host pools deliver desktops to users, not microservices."
    },
    {
      "id": "exam_50",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Which statement about Azure regions and Availability Zones is accurate?",
      "a": [
        "A zone is a group of regions within one geography",
        "All zones of a region share one power supply",
        "Zones are separate datacenters within a region",
        "A zone can stretch across two paired regions"
      ],
      "c": 2,
      "e": "Availability Zones are physically separate locations, each made up of one or more datacenters, inside a single region. A group of regions in one geography is called a geography, not a zone. Each zone has independent power, cooling and networking. Zones belong to one region and do not stretch across paired regions."
    },
    {
      "id": "exam_51",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Call-center staff use personal tablets and home PCs. The company wants them to get a managed Windows desktop with company apps, while no company data is stored on the devices. Which service fits?",
      "a": [
        "Azure App Service",
        "Point-to-site VPN",
        "Microsoft Entra ID",
        "Azure Virtual Desktop"
      ],
      "c": 3,
      "e": "Azure Virtual Desktop delivers Windows desktops and apps from Azure to any device, keeping data in the cloud rather than on the device. App Service hosts web apps but does not provide a full Windows desktop. A point-to-site VPN connects a device to a network, so data could still end up on the device. Microsoft Entra ID handles sign-in, not desktop delivery."
    },
    {
      "id": "exam_52",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A company launches a service for customers in mainland China. It must use the Azure cloud that is run locally by a Chinese operator and kept separate from global Azure. Which option fits?",
      "a": [
        "Azure operated by 21Vianet",
        "Azure Government",
        "Azure East Asia region",
        "Availability Zones in Asia"
      ],
      "c": 0,
      "e": "Azure in mainland China is a sovereign cloud operated by 21Vianet and physically separated from global Azure. Azure Government is the sovereign cloud for US government agencies, not for China. The East Asia region belongs to global Azure, not to the separately operated cloud in mainland China. Availability Zones add resilience inside a region but do not change who operates the cloud."
    },
    {
      "id": "exam_53",
      "track": "coreServices",
      "category": "Architecture",
      "q": "Two VMs run an older app that must stay in a single datacenter. The company wants to avoid both VMs going down together during a rack failure or planned host maintenance. What should it use?",
      "a": [
        "A region pair",
        "An availability set",
        "A resource lock",
        "Two resource groups"
      ],
      "c": 1,
      "e": "An availability set spreads VMs across fault domains (separate racks) and update domains (separate maintenance batches) within one datacenter. A region pair would move a workload to a second region, which is a disaster recovery design. A resource lock blocks deletion or changes but does not prevent outages. Resource groups organize resources and do not influence physical placement."
    },
    {
      "id": "exam_54",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A standard ASP.NET web app is moving to Azure. It needs no OS access, must scale out automatically during peaks, and the team does not want to patch any servers. Which hosting option fits best?",
      "a": [
        "Azure Virtual Machines",
        "VM scale sets",
        "Azure App Service",
        "Azure Virtual Desktop"
      ],
      "c": 2,
      "e": "App Service is a managed platform for web apps that scales out automatically and patches the OS for you. Virtual Machines would leave OS patching with the team. VM scale sets also autoscale, but the team would still manage and patch the VM images. Azure Virtual Desktop delivers desktops to users, not web app hosting."
    },
    {
      "id": "exam_55",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A data team needs to run a single container for 20 minutes each night to process a file. It needs no orchestration and no VM to manage, and should pay only while the container runs. Which service fits?",
      "a": [
        "Azure Kubernetes Service",
        "Azure Virtual Machines",
        "Azure Virtual Desktop",
        "Azure Container Instances"
      ],
      "c": 3,
      "e": "Container Instances runs a single container on demand without orchestration or VMs, billed per second while it runs. AKS adds a Kubernetes cluster, which is unnecessary orchestration for one container. A virtual machine would have to be managed and patched. Azure Virtual Desktop delivers user desktops, not batch processing."
    },
    {
      "id": "exam_56",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A film studio must move 400 TB of footage to Azure Blob Storage within a month. Uploading it over its internet line would take many months. Which option fits?",
      "a": [
        "Azure Data Box",
        "AzCopy over the internet",
        "Azure File Sync",
        "Azure Migrate"
      ],
      "c": 0,
      "e": "Data Box is a physical device that Microsoft ships to you: you copy the data locally and send it back for upload into Azure Storage, avoiding the slow network. AzCopy would still send 400 TB over the slow internet line. Azure File Sync synchronizes file servers with Azure Files over the network, so it has the same bandwidth problem. Azure Migrate focuses on assessing and migrating servers and apps, not shipping bulk data offline."
    },
    {
      "id": "exam_57",
      "track": "coreServices",
      "category": "Architecture",
      "q": "A migration team wants one central hub in Azure to track the move of its on-premises servers, databases and web apps, from the first inventory through to the cutover. Which service provides this hub?",
      "a": [
        "Azure Advisor",
        "Azure Migrate",
        "Pricing calculator",
        "Azure Data Box"
      ],
      "c": 1,
      "e": "Azure Migrate is the central hub for discovering, assessing and migrating on-premises servers, databases and web apps to Azure. Azure Advisor gives recommendations for resources that already run in Azure. The Pricing calculator estimates costs but does not track migrations. Data Box transfers large amounts of data offline and does not track servers or apps."
    },
    {
      "id": "exam_58",
      "track": "securityGovernance",
      "category": "Identity",
      "q": "An organization creates new hires only in its on-premises Active Directory. Their accounts must then appear in Microsoft Entra ID automatically so they can open Azure and Microsoft 365 apps. What provides this?",
      "a": [
        "Microsoft Entra Domain Services",
        "Microsoft Entra External ID",
        "Microsoft Entra Connect",
        "Conditional Access"
      ],
      "c": 2,
      "e": "Microsoft Entra Connect synchronizes accounts from on-premises Active Directory to Microsoft Entra ID, so new hires appear in the cloud automatically. Entra Domain Services provides managed domain features such as Kerberos and Group Policy in Azure, not syncing from on-premises. External ID is for guests and customers from outside the organization. Conditional Access decides when sign-ins are allowed but does not create or sync accounts."
    },
    {
      "id": "exam_59",
      "track": "securityGovernance",
      "category": "Identity",
      "q": "A company's MFA policy must combine two different types of authentication factor. Which sign-in combination meets this requirement?",
      "a": [
        "Password plus a security question",
        "Password plus a memorized PIN",
        "Fingerprint plus a face scan",
        "Password plus a phone app code"
      ],
      "c": 3,
      "e": "A password is something you know and a code from a phone app is something you have, so they are two different factor types. A security question is also something you know, like the password. A memorized PIN is again something you know. A fingerprint and a face scan are both something you are, so they count as the same factor type."
    },
    {
      "id": "exam_60",
      "track": "securityGovernance",
      "category": "Identity",
      "q": "A company wants sign-ins from outside the EU to require MFA, while sign-ins from the office network do not, decided automatically at each sign-in. Which feature fits?",
      "a": [
        "Conditional Access",
        "Azure Policy",
        "Network security groups",
        "Azure RBAC roles"
      ],
      "c": 0,
      "e": "Conditional Access evaluates signals such as location at every sign-in and can require MFA only when the conditions match. Azure Policy governs resource configurations, not user sign-ins. Network security groups filter network traffic to Azure resources, not sign-ins to the identity service. RBAC roles decide what a user may do after signing in, not how the sign-in is verified."
    },
    {
      "id": "exam_61",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "An external auditor must view all resources in the Finance resource group but must not see anything else in the subscription or change anything. What should be assigned?",
      "a": [
        "Reader role on the subscription",
        "Reader role on the resource group",
        "A ReadOnly lock on the resource group",
        "An Azure Policy on the resource group"
      ],
      "c": 1,
      "e": "Azure RBAC with the Reader role scoped to the resource group gives view-only access to exactly those resources. Reader on the subscription would expose every resource in the subscription. A ReadOnly lock blocks changes for everyone but does not grant the auditor any access. Azure Policy controls resource configuration rules and does not give users access."
    },
    {
      "id": "exam_62",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "Due to data-residency rules, no one may create resources outside West Europe and North Europe, even with Owner rights. What should be used to enforce this?",
      "a": [
        "Azure RBAC",
        "Resource locks",
        "Azure Policy",
        "Microsoft Purview"
      ],
      "c": 2,
      "e": "Azure Policy can deny the creation of resources in locations that are not allowed, regardless of the user's role. RBAC controls who can act, so an Owner could still pick any region. Resource locks protect existing resources from deletion or changes and do not restrict regions. Microsoft Purview governs and classifies data rather than blocking resource deployments."
    },
    {
      "id": "exam_63",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A security team wants one continuously updated number that shows how well its Azure environment follows security best practices, plus a list of steps to raise it. What should it use?",
      "a": [
        "Advisor Score in Azure Advisor",
        "Compliance view in Azure Policy",
        "Service Health in the portal",
        "Secure Score in Defender for Cloud"
      ],
      "c": 3,
      "e": "Secure Score in Microsoft Defender for Cloud measures security posture as a single number and lists recommendations that improve it. Advisor Score rates best practices across cost, reliability and more, and is not the dedicated security posture measure. Azure Policy compliance shows which resources meet assigned policies, without an overall security score. Service Health reports Azure incidents, not your security posture."
    },
    {
      "id": "exam_64",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A company applies defense in depth. It uses NSGs to limit communication between subnets, denies traffic by default and restricts inbound internet access. Which layer do these controls belong to?",
      "a": [
        "Network layer",
        "Perimeter layer",
        "Compute layer",
        "Application layer"
      ],
      "c": 0,
      "e": "In defense in depth, the network layer limits communication between resources, denies traffic by default and restricts inbound internet access, which is what these NSG rules do. The perimeter layer protects the edge of the network, for example against DDoS attacks. The compute layer secures the VMs themselves, for example through patching and endpoint protection. The application layer focuses on secure code and keeping secrets out of the app."
    },
    {
      "id": "exam_65",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A company runs some workloads as IaaS, some as PaaS and some as SaaS. For which responsibility does it stay accountable in all three models?",
      "a": [
        "Maintaining the physical network hardware",
        "Its information, data and access",
        "Patching the virtualization hypervisor",
        "Updating the guest operating system"
      ],
      "c": 1,
      "e": "The customer is always accountable for its information and data, its devices, and its accounts and identities, in every service model. Physical network hardware is Microsoft's job in all three models. The hypervisor is part of the host that Microsoft manages. Guest OS updates are the customer's job only in IaaS; in PaaS and SaaS Microsoft handles them."
    },
    {
      "id": "exam_66",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A security team adopts three rules: verify every request explicitly, grant least-privilege access, and assume a breach has already happened. Which security model is this?",
      "a": [
        "The defense-in-depth model",
        "The shared responsibility model",
        "The Zero Trust model",
        "The perimeter model"
      ],
      "c": 2,
      "e": "Verify explicitly, use least privilege and assume breach are the three guiding principles of Zero Trust. Defense in depth is about layering several protections, not these three principles. The shared responsibility model splits duties between Microsoft and the customer. A perimeter model trusts everything inside the network, which Zero Trust rejects."
    },
    {
      "id": "exam_67",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A team lead must create and delete resources in the Marketing resource group and also grant colleagues access to it, but must not manage anything else in the subscription. Which assignment follows least privilege?",
      "a": [
        "Owner on the subscription",
        "Contributor on the resource group",
        "Owner on the management group",
        "Owner on the resource group"
      ],
      "c": 3,
      "e": "Owner can manage resources and grant access, and scoping it to the resource group keeps the rest of the subscription out of reach. Owner on the subscription gives the same rights across the whole subscription. Contributor on the resource group can manage resources but cannot grant access to others. A management group is an even broader scope than the subscription."
    },
    {
      "id": "exam_68",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A developer must create, change and delete resources in a subscription, but the company does not want her to grant access to anyone else. Which built-in role fits?",
      "a": [
        "Contributor",
        "Owner",
        "Reader",
        "User Access Administrator"
      ],
      "c": 0,
      "e": "Contributor can manage all resources but cannot assign roles to others. Owner could also grant access, which the company wants to prevent. Reader can only view resources. User Access Administrator can manage access but cannot create or change resources."
    },
    {
      "id": "exam_69",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "Consultants from a partner firm need access to a company's internal app. They should sign in with their own partner work accounts instead of new passwords issued by the company. Which feature fits?",
      "a": [
        "Microsoft Entra Connect sync",
        "Microsoft Entra B2B collaboration",
        "Microsoft Entra Domain Services",
        "Single sign-on with Entra ID"
      ],
      "c": 1,
      "e": "B2B collaboration invites external users as guests who sign in with their own organization's credentials. Entra Connect syncs the company's own on-premises accounts, not partner accounts. Entra Domain Services provides managed domain services for legacy apps. Single sign-on lets one sign-in cover many apps but does not by itself let outside users use their own accounts."
    },
    {
      "id": "exam_70",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A company runs servers in Azure, on-premises and in another cloud. It wants one service that assesses their security posture and alerts on threats across all three environments. Which service fits?",
      "a": [
        "Microsoft Entra ID Protection",
        "Azure Monitor Log Analytics",
        "Microsoft Defender for Cloud",
        "Azure Policy compliance"
      ],
      "c": 2,
      "e": "Defender for Cloud assesses security posture and provides threat protection across Azure, on-premises and other clouds. Entra ID Protection focuses on risky sign-ins and identities, not server posture. Log Analytics stores and queries logs but does not assess security posture by itself. Azure Policy compliance shows rule violations, not threat alerts."
    },
    {
      "id": "exam_71",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "For data governance, a company needs a single map of all its data sources across Azure, on-premises and SaaS, showing how data flows between systems. Which service provides this?",
      "a": [
        "Azure Policy",
        "Defender for Cloud",
        "Azure Monitor",
        "Microsoft Purview"
      ],
      "c": 3,
      "e": "Microsoft Purview provides a unified data map with data lineage across Azure, on-premises and SaaS sources. Azure Policy evaluates resource configurations, not where data flows. Defender for Cloud focuses on security posture and threat protection. Azure Monitor collects metrics and logs about resource performance, not a data map."
    },
    {
      "id": "exam_72",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "An engineer is given the Contributor role on a subscription. Later, a new resource group with a storage account is created in that subscription. What can the engineer do with the storage account?",
      "a": [
        "Manage it, because the role is inherited",
        "Nothing until a role is assigned on the group",
        "View it only, as inheritance grants Reader",
        "Manage it only after an Owner approves"
      ],
      "c": 0,
      "e": "Role assignments are inherited from a scope down to every resource group and resource below it, including ones created later. No new assignment on the resource group is needed. Inheritance keeps the same role; it does not downgrade it to Reader. RBAC has no approval step, so the inherited Contributor role applies immediately."
    },
    {
      "id": "exam_73",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A team asks how Azure RBAC and Azure Policy differ when governing who may deploy which VM sizes. Which statement is accurate?",
      "a": [
        "RBAC: which settings are allowed; Policy: who can act",
        "RBAC: who can act; Policy: which settings are allowed",
        "Both control only who can act, at different scopes",
        "Policy grants access; RBAC audits resource settings"
      ],
      "c": 1,
      "e": "RBAC decides which users can perform actions, while Azure Policy decides which resource configurations, such as VM sizes, are allowed. Swapping the two describes each tool's job backwards. Policy does not control who can act, so the two tools are not two scopes of the same thing. Policy does not grant access, and RBAC does not audit settings."
    },
    {
      "id": "exam_74",
      "track": "securityGovernance",
      "category": "Governance",
      "q": "A governance lead explains the difference between a policy definition and a policy initiative. Which statement is accurate?",
      "a": [
        "A definition is a group of initiatives",
        "An initiative assigns RBAC roles to users",
        "An initiative is a group of policy definitions",
        "An initiative locks resources against deletion"
      ],
      "c": 2,
      "e": "A policy initiative (policy set) groups several policy definitions so they can be assigned and evaluated together. The hierarchy is the other way round: definitions are grouped into initiatives, not initiatives into definitions. Assigning roles to users is the job of RBAC, not Azure Policy. Protecting resources against deletion is done with resource locks."
    },
    {
      "id": "exam_75",
      "track": "securityGovernance",
      "category": "Identity",
      "q": "Employees complain about signing in separately to the HR portal, the expense app and Microsoft 365. The company wants one sign-in with Microsoft Entra ID to give access to all of them. Which capability is this?",
      "a": [
        "Conditional Access",
        "Passwordless sign-in",
        "Multifactor authentication",
        "Single sign-on (SSO)"
      ],
      "c": 3,
      "e": "Single sign-on lets one sign-in with Entra ID give access to many applications. Conditional Access decides under which conditions a sign-in is allowed, not how many sign-ins are needed. Passwordless sign-in replaces the password with another method, but without SSO users would still sign in to each app. Multifactor authentication adds verification steps rather than reducing sign-ins."
    },
    {
      "id": "exam_76",
      "track": "managementMonitoring",
      "category": "Cost",
      "q": "A team lead wants a warning before month-end if spending is on track to exceed a planned amount, based on forecasted rather than only actual cost. Nothing should be blocked. What should be set up?",
      "a": [
        "A budget with a forecast alert",
        "An Azure Policy deny rule",
        "An Azure Monitor metric alert",
        "An Advisor cost recommendation"
      ],
      "c": 0,
      "e": "Cost Management budgets can alert on forecasted as well as actual spending, warning early without stopping resources. An Azure Policy deny rule blocks deployments instead of warning about spending. Azure Monitor metric alerts react to resource metrics such as CPU, not costs. Azure Advisor suggests savings but does not watch a planned amount."
    },
    {
      "id": "exam_77",
      "track": "managementMonitoring",
      "category": "Cost",
      "q": "An admin wants Azure to review the VMs that already run and point out which ones are barely used and could be resized or shut down to save money. Which service does this?",
      "a": [
        "Pricing calculator",
        "Azure Advisor",
        "Azure Migrate",
        "Azure Policy"
      ],
      "c": 1,
      "e": "Azure Advisor analyzes how existing resources are used and recommends actions such as resizing or shutting down underused VMs. The Pricing calculator estimates costs before deployment and does not look at running VMs. Azure Migrate assesses on-premises servers for migration. Azure Policy enforces rules but does not analyze utilization."
    },
    {
      "id": "exam_78",
      "track": "managementMonitoring",
      "category": "Cost",
      "q": "A database server VM runs 24/7 and will keep running for at least three more years. The company wants the biggest discount in exchange for a long commitment. Which option fits?",
      "a": [
        "Pay-as-you-go pricing",
        "Spot Virtual Machines",
        "A three-year reservation",
        "A one-year reservation"
      ],
      "c": 2,
      "e": "A three-year reservation gives the largest discount for a steady workload in exchange for the commitment. Pay-as-you-go has no commitment and no discount. Spot VMs are cheap but can be evicted at any time, which does not suit a server that must run 24/7. A one-year reservation also gives a discount, but a smaller one than three years."
    },
    {
      "id": "exam_79",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "An architect plans to deploy 10 new VMs and a storage account in Azure next month. Before deploying anything, she needs an estimated monthly cost for that exact configuration. Which tool fits?",
      "a": [
        "Azure TCO calculator",
        "Cost Management + Billing",
        "Azure Migrate assessment",
        "Azure Pricing calculator"
      ],
      "c": 3,
      "e": "The Pricing calculator estimates the monthly cost of a specific set of Azure resources before they are deployed. The TCO calculator compares running on-premises with moving to Azure, rather than pricing a new configuration. Cost Management + Billing analyzes the costs of resources that already run. An Azure Migrate assessment estimates costs for existing on-premises servers being moved, not for new resources."
    },
    {
      "id": "exam_80",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "Finance wants to split the monthly Azure bill by project and by environment, such as Project: Atlas and Environment: Prod, across many resource groups. What should be applied to the resources?",
      "a": [
        "Resource tags",
        "Resource locks",
        "Policy initiatives",
        "Management groups"
      ],
      "c": 0,
      "e": "Tags are name/value pairs on resources that let Cost Management group and filter costs by project or environment. Resource locks prevent deletion or changes and carry no reporting data. Policy initiatives group policy rules; they can require tags but do not label costs themselves. Management groups organize subscriptions, not individual resources across resource groups."
    },
    {
      "id": "exam_81",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "Admins must keep changing the configuration of a production database, but nobody, not even an Owner, should be able to delete it by accident. What should be applied?",
      "a": [
        "A ReadOnly lock",
        "A CanNotDelete lock",
        "The Reader role for admins",
        "An Azure Policy audit rule"
      ],
      "c": 1,
      "e": "A CanNotDelete (Delete) lock lets authorized users read and modify a resource but blocks its deletion for everyone, including Owners, until the lock is removed. A ReadOnly lock would also block the configuration changes the admins need. The Reader role would stop admins from changing the database at all. An audit policy only reports on resources and does not prevent deletion."
    },
    {
      "id": "exam_82",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "An operations team wants to be notified by SMS whenever average CPU on a VM stays above 85% for ten minutes. What should it create?",
      "a": [
        "A Cost Management budget alert",
        "An Advisor recommendation",
        "An Azure Monitor alert rule",
        "A Service Health alert"
      ],
      "c": 2,
      "e": "Azure Monitor alert rules watch metrics such as CPU and notify through action groups by SMS, email or other channels. Budget alerts react to spending, not CPU load. Advisor recommendations are periodic suggestions, not real-time notifications. Service Health alerts tell you about Azure incidents and maintenance, not about your VM's CPU."
    },
    {
      "id": "exam_83",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "After an outage, an engineer wants to query event and diagnostic logs from several VMs and correlate what happened in the hour before the failure. Which tool fits?",
      "a": [
        "Azure Advisor",
        "Service Health",
        "Metrics explorer",
        "Log Analytics"
      ],
      "c": 3,
      "e": "Log Analytics in Azure Monitor lets you write queries over logs collected from many resources to investigate an incident. Azure Advisor gives best-practice recommendations rather than querying logs. Service Health shows Azure platform incidents, not your VMs' own events. Metrics explorer charts numeric metrics but does not query detailed event logs."
    },
    {
      "id": "exam_84",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "An IT team wants to know when an Azure outage or planned maintenance affects the specific regions and services it uses, and to get alerts for this. The public status page is too general. What should it use?",
      "a": [
        "Azure Service Health",
        "Azure Monitor metric alerts",
        "Azure Advisor",
        "Microsoft Defender for Cloud"
      ],
      "c": 0,
      "e": "Service Health gives a personalized view of Azure incidents, planned maintenance and health advisories for the services and regions you use, with alerts. Metric alerts watch your resources' own metrics, not Azure platform incidents. Azure Advisor gives recommendations, not outage notifications. Defender for Cloud covers security posture and threats, not service outages."
    },
    {
      "id": "exam_85",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "A consultant on a borrowed laptop must run Azure CLI and PowerShell commands against a subscription without installing anything locally. Which option fits?",
      "a": [
        "Azure Virtual Desktop",
        "Azure Cloud Shell",
        "Azure Advisor",
        "Azure portal dashboard"
      ],
      "c": 1,
      "e": "Cloud Shell is a browser-based shell with Azure CLI and PowerShell preinstalled and authenticated, so nothing has to be installed locally. Azure Virtual Desktop could provide a desktop, but the tools would still have to be installed on it. Azure Advisor gives recommendations and does not run commands. Portal dashboards display tiles and charts but cannot run CLI or PowerShell commands."
    },
    {
      "id": "exam_86",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "An app has a web tier and a database tier, each with a 99.9% SLA, and the app is down whenever either tier is down. What is the approximate composite SLA of the app?",
      "a": [
        "99.99%",
        "99.9%",
        "99.8%",
        "99.95%"
      ],
      "c": 2,
      "e": "When an app depends on both tiers, you multiply their SLAs: 0.999 × 0.999 ≈ 0.998, so about 99.8%. 99.99% would need redundant copies, not a chain of dependencies. 99.9% ignores that a failure in either tier takes the app down. 99.95% is higher than either tier alone, which a chain of dependencies cannot reach."
    },
    {
      "id": "exam_87",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "Developers want to see their web app's response times, failed requests, exceptions and calls to external dependencies, rather than the health of the VMs underneath. Which feature fits?",
      "a": [
        "Azure Monitor VM insights",
        "Azure Service Health",
        "Azure Advisor",
        "Application Insights"
      ],
      "c": 3,
      "e": "Application Insights monitors application performance, including response times, failures, exceptions and dependency calls. VM insights focuses on the health and performance of the virtual machines underneath. Service Health reports Azure platform incidents. Azure Advisor gives best-practice recommendations, not live application telemetry."
    },
    {
      "id": "exam_88",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "A company prices the same VM size and storage in two Azure regions within one subscription and gets different monthly totals, although usage is identical. Which cost factor explains the difference?",
      "a": [
        "Resource prices vary by region",
        "The SLA differs between regions",
        "Data traffic within each region",
        "The subscription offer type"
      ],
      "c": 0,
      "e": "Azure prices can differ between regions because of local costs, taxes and demand, so the same resources cost different amounts in different locations. The SLA for a VM depends on its configuration, not on the region's price. Traffic within a region cannot explain it, because usage is identical in both estimates. The subscription offer type is the same for both estimates, so it cannot explain the difference."
    },
    {
      "id": "exam_89",
      "track": "managementMonitoring",
      "category": "Management",
      "q": "A company wants to be warned when spending passes a set amount and also to get suggestions on how to cut costs before that happens. Which pairing of tools covers both needs?",
      "a": [
        "Advisor for warnings; budgets for suggestions",
        "Budgets for warnings; Advisor for suggestions",
        "Policy for warnings; Advisor for suggestions",
        "Budgets for warnings; Migrate for suggestions"
      ],
      "c": 1,
      "e": "Cost Management budgets send alerts when spending crosses a threshold, and Azure Advisor recommends specific savings. Advisor does not watch a spending threshold, and budgets do not give recommendations. Azure Policy enforces resource rules and cannot alert on spending. Azure Migrate assesses servers for migration rather than suggesting savings for running resources."
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
