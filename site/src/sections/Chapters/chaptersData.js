const chaptersData = [
  {
    area: "Area I",
    name: "It's a Mesh Out There",
    topics: [
      {
        name: "A world of multiple service meshes",
        type: "Foundational"
      },
      {
        name: "Pattern: Employing planes of a service mesh",
        type: "Foundational"
      },
      {
        name: "Pattern: How a service mesh empowers a Developer",
        type: "Foundational"
      },
      {
        name: "Pattern: How a service mesh empowers a service owner",
        type: "Foundational"
      },
      {
        name: "Pattern: How a service mesh empowers an Operator: Retry Budgets",
        type: "Foundational"
      },
    ]
  },
  {
    area: "Area II",
    name: "Patterns of Initialization and Deployment",
    topics: [
      {
        name: "Pattern: Expanding the Mesh to Brownfield Environments",
        type: "Workloads"
      },
      {
        name: "Pattern: How to get started with any service mesh; Local Deployment",
        type: "Deployment"
      },
      {
        name: "Pattern: Node Agents",
        type: "Deployment"
      },
      {
        name: "Pattern: Passive and Active Health Checking",
        type: "Deployment"
      },
      {
        name: "Pattern: Proxyless Service Mesh",
        type: "Deployment"
      },
      {
        name: "Pattern: Segmenting the Monolith (Strangler)",
        type: "Workloads"
      },
      {
        name: "Pattern: Sidecar Proxies",
        type: "Deployment"
      },
      {
        name: "Pattern: Workload Onboarding and Service Mesh Adoption",
        type: "Workloads"
      },
    ]
  },
  {
    area: "Area III",
    name: "Patterns of Configuration",
    topics: [
      {
        name: "Pattern: Advanced Traffic Routing",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Bulkheading with Resiliency",
        type: "Resiliency"
      },
      {
        name: "Pattern: Canary Deployments",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Chaos Engineering with a Service Mesh",
        type: "Resilience"
      },
      {
        name: "Pattern: Circuit Breaking",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Data plane extensibility",
        type: "Observability"
      },
      {
        name: "Pattern: Foundational Traffic Routing",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Incorporating Business Logic in your data plane (WASM)",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Ingress",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Load balancing Algs",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Local and Global Rate Limiting",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Protocol Aware Meshing",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Retries",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Service Mesh Adapter Pattern (Protocol conversion using WASM)",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Service Meshing at the Edge",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Timeouts",
        type: "Traffic Manangement"
      },
      {
        name: "Pattern: Transparently Proxying TLS",
        type: "Traffic Manangement"
      },
    ]
  },
  {
    area: "Area IV",
    name: "Patterns of Operation",
    topics: [
      {
        name: "Pattern: Advanced Data Plane Extensbility and Intelligence",
        type: "Troubleshooting"
      },
      {
        name: "Pattern: Applying Connection-level Authorization",
        type: "Security"
      },
      {
        name: "Pattern: Applying Request-level Authorization",
        type: "Security"
      },
      {
        name: "Pattern: Cloud bursting",
        type: "Scaling"
      },
      {
        name: "Pattern: Egress Gateways",
        type: "Security"
      },
      {
        name: "Pattern: Federation",
        type: "Scaling"
      },
      {
        name: "Pattern: Managing configuration change",
        type: "Troubleshooting"
      },
      {
        name: "Pattern: Multi-cluster failover",
        type: "Scaling"
      },
      {
        name: "Pattern: Using Envoy metrics",
        type: "Observability"
      },
      {
        name: "Pattern: Using Request Logs",
        type: "Observability"
      },
      {
        name: "Pattern: Using Traces",
        type: "Observability"
      },
      {
        name: "Pattern: Visualizing services",
        type: "Observability"
      },
      {
        name: "Pattern: Zero Trust: Securing in-cluster communication (mTLS) - Encryption",
        type: "Security"
      },
    ]
  },
  {
    area: "Area V",
    name: "Performance, Testing, and Debugging, Tuning, Troubleshooting",
    topics: [
      {
        name: "Pattern: Debugging the Control Plane",
        type: "Troubleshooting"
      },
      {
        name: "Pattern: Debugging the Data Plane",
        type: "Troubleshooting"
      },
      {
        name: "Pattern: How to use the Service Mesh as a Debugger",
        type: "Debugging"
      },
      {
        name: "Pattern: Managing the Performance of the Service Mesh",
        type: "Tuning / Performance"
      },
      {
        name: "Pattern: Managing the Performance of the Workloads",
        type: "Tuning / Performance"
      },
      {
        name: "Pattern: Methodologies of Performance Tuning and Testing",
        type: "Tuning / Performance"
      },
      {
        name: "Pattern: TAPing into your requests",
        type: "Debugging"
      },
      {
        name: "Pattern: Using the Service Mesh for Functional Testing",
        type: "Validating"
      }
    ]
  },
  {
    area: "Area VI",
    name: "Patterns in Practice: Employing Standards",
    topics: [
      {
        name: "Pattern: Baselining your workload performance",
        type: "Service Mesh Performance (SMP)"
      },
      {
        name: "Pattern: Common interface for integrating with service mesh functionality",
        type: "Service Mesh Interface (SMI)"
      },
      {
        name: "Pattern: Federating Service Catalogs",
        type: "Multi-Vendor Service Mesh Interoperation (Hamlet)"
      },
      {
        name: "Pattern: Gauging the value of your service mesh deployment",
        type: "Service Mesh Performance (SMP)"
      },
      {
        name: "Pattern: The need for abstracting the service mesh",
        type: "Service Mesh Interface (SMI)"
      }
    ]
  },
];

export default chaptersData;