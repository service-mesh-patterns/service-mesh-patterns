import pattern1 from "../../assets/images/patterns/service-mesh-adapter.svg";
import pattern2 from "../../assets/images/patterns/low-rate-limit.svg";
import pattern3 from "../../assets/images/patterns/circuit-breaker.svg";

const patternsData = [
  {
    title: "Circuit Breaker with Deadline",
    label: "Deployment",
    image: pattern1
  },
  {
    title: "Circuit Breaker",
    label: "Resilency",
    image: pattern2
  },
  {
    title: "Expanded Rate Limiter",
    label: "Traffic Management",
    image: pattern3
  },
  {
    title: "Path-based Routing",
    label: "Traffic Management",
    image: pattern1
  },
  {
    title: "Debugging Data Plane",
    label: "Troubleshooting",
    image: pattern1
  },
  {
    title: "Production Linkerd Deployment",
    label: "Deployment",
    image: pattern1
  },
  {
    title: "Time-based Canary",
    label: "Traffic Management",
    image: pattern1
  },
  {
    title: "Segregating traffic with policy",
    label: "Security",
    image: pattern1
  }
];

export default patternsData;