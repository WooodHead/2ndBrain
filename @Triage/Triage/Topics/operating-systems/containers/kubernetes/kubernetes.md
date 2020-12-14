# [Kubernetes](https://kubernetes.io/)

## Notes

- Kubernetes runs pods that contain 1 to n docker containers. So if you have your apps in the form of docker images you are ready to go.
- [The OpenShift guys like to make the analogy that Kubernetes is like Linux and that there are different distributions of it, OpenShift being one (like Red Hat).](https://www.reddit.com/r/devops/comments/94n994/for_those_of_you_who_use_kubernetes_how_the_hell/)
- [Interacting with kubernetes feels very different and in a lot of ways it's almost an operating system for a super computer. You sort of forget how many computers and vms or whatever are out there and kubernetes handles a lot of the implementation details for you. Installing a lot of apps to the cloud is as simple as typing 'helm install jenkins' and waiting 5 minutes.](https://www.reddit.com/r/investing/comments/92becj/is_amazon_undervalued_with_the_huge_aws_earnings/)
  - It's just a radically new way of dealing with 'the cloud'. And the thing that makes it especially threatening to aws is that it doesn't matter where it runs. Developing an app for kubernetes on aws or google cloud or azure or anything else is almost an identical experience. People are going to become very price sensitive because that's the only thing that distinguishes one kubernetes host from another (aside from the ease of installing a kubernetes cluster -- something which aws is fairly far behind on)
- In general, the right question to ask yourself when designing Pods is, “Will these containers work correctly if they land on different machines?” If the answer is “no,” a Pod is the correct grouping for the containers. If the answer is “yes,” multiple Pods is probably the correct solution.
- Ingress controller watches for `Ingress` resources in your cluster.
- [Kubernetes (or whatever other container scheduler) might feel like overkill, but if all they do is force you to adopt a container-centric / 12-factor way of building your applications it was worth trying them. And once you've adopted that workflow it's a no-brainer to go from a single node to a cluster which will dynamically allocate the workloads it runs.](https://news.ycombinator.com/item?id=18495697)
  - Running a small container cluster at work has even changed how I setup single-host projects in my spare time: I will build everything into a container, bind-mount whatever it might need, create a simple systemd unit that just runs / rms the docker container on start and stop. Bliss.
- [After a couple years on kubernetes, there is a simple joy to a deployment process that looks like "scp binary server: && ssh server systemctl restart service", and takes 5s to complete.](https://twitter.com/dave_universetf/status/1216791280505774080)

## Links

- [What happens when I type kubectl run](https://github.com/jamiehannaford/what-happens-when-k8s) ([HN](https://news.ycombinator.com/item?id=22785652))
- [Helm](https://helm.sh/) - Kubernetes package manager.
- [Kubernetes Security - Best Practice Guide](https://github.com/freach/kubernetes-security-best-practice)
- [kaniko](https://github.com/GoogleContainerTools/kaniko) - Build Container Images In Kubernetes.
- [Draft](https://github.com/azure/draft) - Streamlined Kubernetes Development.
- [Nix Kubernetes](https://github.com/xtruder/nix-kubernetes) - Kubernetes deployment manager written in Nix.
- [Knative Serving](https://github.com/knative/serving) - Kubernetes-based, scale-to-zero, request-driven compute.
- [Rancher](https://rancher.com/kubernetes/)
- [OpenShift](https://www.openshift.com/)
- [Portainer](https://portainer.io) - Lighter than Rancher (for Docker).
- [Kubernetes 101 (2018)](https://www.stavros.io/posts/kubernetes-101/)
- [node-problem-detector](https://github.com/kubernetes/node-problem-detector) - Aims to make various node problems visible to the upstream layers in cluster management stack.
- [go-kubectx](https://github.com/aca/go-kubectx) - 5x-10x faster alternative to kubectx. Uses client-go.
- [Kubernetes for Sysadmins – Kelsey Hightower (2016)](https://www.youtube.com/watch?v=HlAXp0-M6SY)
- [Kubernetes API conventions](https://github.com/kubernetes/community/blob/master/contributors/devel/api-conventions.md)
- [Kubeval](https://github.com/garethr/kubeval) - Validate your Kubernetes configuration files, supports multiple Kubernetes versions.
- [Let's encrypt with GKE instructions](https://github.com/ahmetb/gke-letsencrypt)
- [Kubernetes for personal projects? No thanks! (2018)](http://carlosrdrz.es/kubernetes-for-small-projects/)
- [Kubespy](https://github.com/pulumi/kubespy) - Tools for observing Kubernetes resources in real time, powered by Pulumi.
- [Terraform Kubernetes provider](https://github.com/terraform-providers/terraform-provider-kubernetes)
- [KubeContext](https://github.com/turkenh/KubeContext) - Menu Bar App for Managing Kubernetes Contexts on Mac.
- [Kubeapps](https://github.com/kubeapps/kubeapps) - Web-based UI for deploying and managing applications in Kubernetes clusters.
- [kubefwd](https://github.com/txn2/kubefwd) - Bulk port forwarding Kubernetes services for local development.
- [You might not need Kubernetes (2018)](https://blog.jessfraz.com/post/you-might-not-need-k8s/) - [HN](https://news.ycombinator.com/item?id=18495697)
- [Kubespray](https://github.com/kubernetes-incubator/kubespray) - Deploy a Production Ready Kubernetes Cluster.
- [Argo](https://github.com/argoproj/argo) - Container-native workflows for Kubernetes. ([Getting started](https://iamstoxe.com/posts/argo-getting-started/)) ([Templating](https://iamstoxe.com/posts/templating-with-argo/)) ([Argo Server](https://iamstoxe.com/posts/argo-server/))
- [Kazan](https://github.com/obmarg/kazan) - Kubernetes API client for Elixir.
- [Tilt](https://github.com/windmilleng/tilt) - Local Kubernetes development with no stress.
- [Maestro](https://github.com/maestrosdk/maestro) - Provides a declarative approach to building production-grade Kubernetes Operators covering the entire application lifecycle.
- [kail](https://github.com/boz/kail) - Kubernetes log viewer.
- [Kubernetes clusters for the hobbyist](https://github.com/hobby-kube/guide)
- [Virtual Kubelet](https://github.com/virtual-kubelet/virtual-kubelet) - Open source Kubernetes kubelet implementation.
- [Compose on Kubernetes](https://github.com/docker/compose-on-kubernetes) - Deploy applications described in Compose onto Kubernetes clusters.
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker - local clusters for testing Kubernetes.
- [Kubernetes Failure Stories](https://github.com/hjacobs/kubernetes-failure-stories) - Compilation of public failure/horror stories related to Kubernetes.
- [Garden](https://github.com/garden-io/garden) - Development engine for Kubernetes, containers and serverless functions.
- [Kubinception: using Kubernetes to run Kubernetes (2019)](https://www.ovh.com/fr/blog/kubinception-using-kubernetes-to-run-kubernetes/)
- [Kubernetes Authentication Example](https://github.com/pusher/k8s-auth-example) - Code is provided verbatim as an example of how to connect to an OIDC provider and authenticate users before configuring their kubeconfig.
- [PowerfulSeal](https://github.com/bloomberg/powerfulseal) - Adds chaos to your Kubernetes clusters, so that you can detect problems in your systems as early as possible.
- [Goldpinger](https://github.com/bloomberg/goldpinger) - Debugging tool for Kubernetes which tests and displays connectivity between nodes in the cluster.
- [k3s](https://github.com/ibuildthecloud/k3s) - Lightweight Kubernetes. Easy to install, half the memory, all in a binary less than 40mb.
- [Kubebuilder](https://github.com/kubernetes-sigs/kubebuilder) - SDK for building Kubernetes APIs using CRDs.
- [k9s](https://github.com/derailed/k9s) - Provides a curses based terminal UI to interact with your Kubernetes clusters.
- [Knative build](https://github.com/knative/build) - Kubernetes-native Build resource.
- [Kubernetes as an API standard (2019)](https://www.cloudatomiclab.com/rustyk8s/)
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Cerebral](https://github.com/containership/cerebral) - Kubernetes cluster autoscaler with pluggable metrics backends and scaling engines.
- [Skaffold](https://github.com/GoogleContainerTools/skaffold) - Easy and Repeatable Kubernetes Development.
- [Talos](https://github.com/autonomy/talos) - Modern Linux distribution for Kubernetes.
- [Kubernetes cleanup operator](https://github.com/lwolf/kube-cleanup-operator) - Kubernetes Operator to automatically delete completed Jobs and their Pods.
- [Click](https://github.com/databricks/click) - Command Line Interactive Controller for Kubernetes. Its purpose is to manage a large number of Kubernetes clusters/objects quickly and efficiently.
- [Kubectl Dashboard](https://github.com/bouk/kubectl-dashboard) - Sub-command for kubectl that will instantly make a Kubernetes dashboard available for you, without having to run anything in your cluster.
- [kustomize](https://github.com/kubernetes-sigs/kustomize) - Customization of kubernetes YAML configurations.
- [Kubewebhook](https://github.com/slok/kubewebhook) - Small Go framework to create external admission webhooks for Kubernetes.
- [Submariner](https://github.com/rancher/submariner) - Connect all your Kubernetes clusters, no matter where they are in the world.
- [Tekton Pipelines](https://github.com/tektoncd/pipeline) - Provides k8s-style resources for declaring CI/CD-style pipelines.
- [ko](https://github.com/google/ko) - Tool for building and deploying Golang applications to Kubernetes.
- [Maybe You Don't Need Kubernetes (2019)](https://endler.dev/2019/maybe-you-dont-need-kubernetes/) ([HN](https://news.ycombinator.com/item?id=22034291))
- [CLI for Amazon EKS](https://github.com/weaveworks/eksctl) - Simple CLI tool for creating clusters on EKS - Amazon's new managed Kubernetes service for EC2.
- [Kubernetes controller-runtime](https://github.com/kubernetes-sigs/controller-runtime) - Set of go libraries for building Controllers.
- [k3d](https://github.com/zeerorg/k3s-in-docker) - Lightweight alternative to KinD for local development.
- [Popeye](https://github.com/derailed/popeye) - Kubernetes cluster resource sanitizer.
- [Kubernetes Test Infrastructure](https://github.com/kubernetes/test-infra) - Test infrastructure for the Kubernetes project.
- [Katib](https://github.com/kubeflow/katib) - Hyperparameter Tuning on Kubernetes.
- [Kapitan](https://github.com/deepmind/kapitan) - Generic templated configuration management for Kubernetes, Terraform and other things.
- [How Airbnb Simplified the Kubernetes Workflow for 1000+ Engineers (2019)](https://www.infoq.com/news/2019/03/airbnb-kubernetes-workflow)
- [Boosting your kubectl productivity (2019)](https://learnk8s.io/blog/kubectl-productivity/)
- [Polaris](https://github.com/reactiveops/polaris) - Validation of best practices in your Kubernetes clusters.
- [qlkube](https://github.com/qlkube/qlkube) - GraphQL api for Kubernetes.
- [Typhoon](https://github.com/poseidon/typhoon) - Minimal and free Kubernetes distribution.
- [Kontemplate](https://github.com/tazjin/kontemplate) - Extremely simple Kubernetes resource templates.
- [OpenKruise/Kruise](https://github.com/openkruise/kruise) - Automate application workloads management on Kubernetes.
- [Monday](https://github.com/eko/monday) - Dev tool for microservice developers that run local applications and/or forward some others from Kubernetes or over SSH.
- [Ballista](https://github.com/andygrove/ballista) - PoC of distributed compute platform using Rust, Apache Arrow, and Kubernetes. [Article](https://andygrove.io/2019/07/announcing-ballista/)
- [Octant](https://github.com/vmware/octant) - Web-based, highly extensible platform for developers to better understand the complexity of Kubernetes clusters.
- [Pulumi](https://github.com/pulumi/pulumi) - Modern Infrastructure as Code - Create, deploy, and manage infrastructure on any cloud using your favorite language.
- [shipcat](https://github.com/Babylonpartners/shipcat) - Standardisation tool and security layer on top of kubernetes to config manage microservices.
- [Okteto](https://github.com/okteto/okteto) - Rapidly iterate and test your applications by developing directly in your Kubernetes cluster.
- [Fabrikate](https://github.com/microsoft/fabrikate) - Making GitOps with Kubernetes easier one component at a time.
- [Seldon Core](https://github.com/SeldonIO/seldon-core) - Machine Learning Deployment for Kubernetes.
- [Kubeval](https://github.com/instrumenta/kubeval) - Validate your Kubernetes configuration files, supports multiple Kubernetes versions.
- [Conftest](https://github.com/instrumenta/conftest) - Write tests against structured configuration data using the Open Policy Agent Rego query language.
- [Kuma](https://github.com/Kong/kuma) - Universal Control Plane for your Service Mesh. ([Web](https://kuma.io/))
- [Knative Eventing](https://github.com/knative/eventing) - Contains a work-in-progress eventing system that is designed to address a common need for cloud native development.
- [Navigator](https://github.com/jetstack/navigator) - Kubernetes extension for managing common stateful services on Kubernetes.
- [kube-aggregator](https://github.com/kubernetes/kube-aggregator) - Aggregator for Kubernetes-style API servers: dynamic registration, discovery summarization, secure proxy.
- [Kubernetes Networking: Behind the scenes (2019)](https://itnext.io/kubernetes-networking-behind-the-scenes-39a1ab1792bb)
- [Kubernetes Networking recommended reading list](https://github.com/nleiva/kubernetes-networking-links)
- [service-catalog](https://github.com/kubernetes-sigs/service-catalog) - Consume services in Kubernetes using the Open Service Broker API.
- [kuberNix](https://github.com/saschagrunert/kubernix) - Kubernetes development cluster bootstrapping with Nix packages.
- [Autoscaler](https://github.com/kubernetes/autoscaler) - Autoscaling components for Kubernetes.
- [Appsody](https://appsody.dev/) - Provides everything you need to iteratively develop applications, ready for deployment to Kubernetes environments.
- [Gitkube](https://github.com/hasura/gitkube) - Build and deploy docker images to Kubernetes using git push.
- [Announcing Kubernetes Off-The-Shelf (KOTS) Software (2019)](https://blog.replicated.com/announcing-kots/)
- [chaoskube](https://github.com/linki/chaoskube) - Periodically kills random pods in your Kubernetes cluster.
- [kube-state-metrics](https://github.com/kubernetes/kube-state-metrics) - Simple service that listens to the Kubernetes API server and generates metrics about the state of the objects.
- [Cloudflow](https://cloudflow.io/) - Enables you to quickly develop, orchestrate, and operate distributed streaming applications on Kubernetes.
- [Clusterlint](https://github.com/digitalocean/clusterlint) - Best practices checker for Kubernetes clusters.
- [An illustrated guide to Kubernetes Networking (2017)](https://itnext.io/an-illustrated-guide-to-kubernetes-networking-part-1-d1ede3322727)
- [Bank Vaults](https://github.com/banzaicloud/bank-vaults) - Umbrella project which provides various tools for Vault to make using and operating Hashicorp Vault easier.
- [RBAC Manager](https://github.com/FairwindsOps/rbac-manager) - Kubernetes operator that simplifies the management of Role Bindings and Service Accounts.
- [inlets-operator](https://github.com/inlets/inlets-operator) - Your private Kubernetes Service, with a public endpoint.
- [Chaos Mesh](https://github.com/pingcap/chaos-mesh) - Cloud-native Chaos Engineering platform that orchestrates chaos on Kubernetes environments.
- [Grafana Tanka](https://github.com/grafana/tanka) - Flexible, reusable and concise configuration for Kubernetes.
- [Kubernetes Best Practices: Blueprints for Building Successful Applications on Kubernetes (2019)](https://www.goodreads.com/book/show/50351477-kubernetes-best-practices)
- [PoC to write integration tests in Go with Kubernetes by Gianluca Arbezzano (2019)](https://www.youtube.com/watch?v=Dt-pQSNfXlM)
- [kubethanos](https://github.com/berkay-dincer/kubethanos) - Kills half of your randomly selected kubernetes pods.
- [k3c](https://github.com/ibuildthecloud/k3c) - Local container engine designed to fill the same gap Docker does in the Kubernetes ecosystem.
- [KubeNix](https://github.com/xtruder/kubenix) - Kubernetes resource builder using nix.
- [Postgres Operator](https://github.com/zalando/postgres-operator) - Creates and manages PostgreSQL clusters running in Kubernetes.
- [Contour](https://github.com/projectcontour/contour) - Kubernetes ingress controller using Lyft's Envoy proxy.
- [Roperator](https://github.com/psFried/roperator) - Lets you easily write Kubernetes Operators in Rust.
- [Krustlet](https://github.com/deislabs/krustlet) - Kubernetes Kubelet in Rust for running WASM. ([Article](https://deislabs.io/posts/introducing-krustlet/))
- [WaeaveWorks](https://www.weave.works/) - Operate and manage production ready Kubernetes with Weave Kubernetes Platform.
- [Gravity](https://github.com/gravitational/gravity) - Opinionated image-based Kubernetes packaging and management tools.
- [kubenav](https://github.com/kubenav/kubenav) - Navigator for your Kubernetes clusters right in your pocket.
- [Kyverno](https://github.com/nirmata/kyverno) - Kubernetes Native Policy Management.
- [Nirmata](https://www.nirmata.com/) - Unified management plane for all your Kubernetes clusters and workloads.
- [Deep Dive into Kubernetes Internals for Builders and Operators (2020)](https://www.youtube.com/watch?v=3KtEAa7_duA)
- [Rode](https://github.com/liatrio/rode) - Cloud native software supply chain.
- [kube-monkey](https://github.com/asobti/kube-monkey) - Implementation of Netflix's Chaos Monkey for Kubernetes clusters.
- [Crash Course in Kubernetes: blog series (2020)](https://blog.tilt.dev/2019/10/16/crash-course-kubernetes-overview.html)
- [Fabio](https://github.com/fabiolb/fabio) - Fast, modern, zero-conf load balancing HTTP(S) and TCP router for deploying applications managed by consul.
- [Rook](https://github.com/rook/rook) - Storage Orchestration for Kubernetes.
- [Solo](https://www.solo.io/) - Next generation API gateway to connect, secure and control traffic to any application on any infrastructure.
- [Gloo](https://github.com/solo-io/gloo) - Envoy-Powered API Gateway.
- [Keel](https://github.com/keel-hq/keel) - Kubernetes Operator to automate Helm, DaemonSet, StatefulSet & Deployment updates.
- [GLBC](https://github.com/kubernetes/ingress-gce) - Ingress controller for Google Cloud.
- [Kube Profefe](https://github.com/profefe/kube-profefe) - Continuous profiling made easy in Kubernetes with profefe.
- [Octant](https://github.com/vmware-tanzu/octant) - Web-based, highly extensible platform for developers to better understand the complexity of Kubernetes clusters.
- [Kubernetes Dashboard](https://github.com/kubernetes/dashboard) - General-purpose web UI for Kubernetes clusters.
- [Multi-tenancy](https://github.com/kubernetes-sigs/multi-tenancy) - Working place for multi-tenancy related proposals and prototypes.
- [Kubevious](https://github.com/kubevious/kubevious) - Application centric Kubernetes UI.
- [client-go](https://github.com/kubernetes/client-go) - Go client for Kubernetes.
- [Hubble](https://github.com/cilium/hubble) - Network, Service & Security Observability for Kubernetes.
- [NATS Streaming Operator](https://github.com/nats-io/nats-streaming-operator) - Operator for managing NATS Streaming clusters running on Kubernetes.
- [What is your favorite Kubernetes feature that nobody seems to know about? (2020)](https://www.reddit.com/r/kubernetes/comments/f9fque/what_is_your_favorite_kubernetes_feature_that/)
- [Advanced Persistence Threats: The Future of Kubernetes Attacks (2020)](https://www.youtube.com/watch?v=CH7S5rE3j8w)
- [Kubernetes Engine Samples](https://github.com/GoogleCloudPlatform/kubernetes-engine-samples)
- [How to use Open Virtual Networking with Kubernetes](https://github.com/ovn-org/ovn-kubernetes)
- [RBACSYNC](https://github.com/cruise-automation/rbacsync) - Automatically sync groups into Kubernetes RBAC.
- [Hub](https://github.com/cncf/hub) - Web-based application that enables finding, installing, and publishing packages and configurations for CNCF projects.
- [apiserver](https://github.com/kubernetes/apiserver) - Library for writing a Kubernetes-style API server.
- [Active-Monitor](https://github.com/keikoproj/active-monitor) - Kubernetes custom resource controller which enables deep cluster monitoring using Argo workflows.
- [kube-capacity](https://github.com/robscott/kube-capacity) - Simple CLI that provides an overview of the resource requests, limits, and utilization in a Kubernetes cluster.
- [Kubelive](https://github.com/ameerthehacker/kubelive) - kubectl tool reinvented to be more reactive and interactive.
- [Lens](https://github.com/lensapp/lens) - Kubernetes IDE. ([Web](https://k8slens.dev/))
- [Rancher Kubernetes Engine (RKE)](https://github.com/rancher/rke) - Extremely simple, lightning fast Kubernetes distribution that runs entirely within containers.
- [Prometheus Operator](https://github.com/coreos/prometheus-operator) - Creates/configures/manages Prometheus clusters atop Kubernetes.
- [Rudr](https://github.com/oam-dev/rudr) - Kubernetes Implementation of the Open Application Model.
- [k3sup](https://github.com/alexellis/k3sup) - Light-weight utility to get from zero to KUBECONFIG with k3s on any local or remote VM.
- [CRI-O](https://github.com/cri-o/cri-o) - OCI-based implementation of Kubernetes Container Runtime Interface.
- [Linkerd](https://github.com/linkerd/linkerd2) - Service mesh for Kubernetes and beyond. ([Web](https://linkerd.io/))
- [linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) - World's best service mesh proxy.
- [Predictive Horizontal Pod Autoscaler](https://github.com/jthomperoo/predictive-horizontal-pod-autoscaler)
- [Kubie](https://github.com/sbstp/kubie) - More powerful alternative to kubectx and kubens. ([Article](https://blog.sbstp.ca/introducing-kubie/))
- [Crossplane](https://github.com/crossplane/crossplane) - Open source control plane to manage your infrastructure and applications the Kubernetes way.
- [Kubernetes Network Policy Recipes](https://github.com/ahmetb/kubernetes-network-policy-recipes)
- [kube-prompt](https://github.com/c-bata/kube-prompt) - Interactive kubernetes client featuring auto-complete.
- [Kubernetes Custom Resource API Reference Docs generator](https://github.com/ahmetb/gen-crd-api-reference-docs)
- [oneinfra](https://github.com/oneinfra/oneinfra) - Kubernetes as a Service platform. It empowers you to provide or consume Kubernetes clusters at scale, on any platform or service provider.
- [Anthos — Driving business agility and efficiency (2020)](https://cloud.google.com/blog/topics/anthos/anthos-for-aws-is-now-ga) ([HN](https://news.ycombinator.com/item?id=22951790))
- [netshoot](https://github.com/nicolaka/netshoot) - Docker + Kubernetes network trouble-shooting swiss-army container.
- [Domesticating Kubernetes: Kubernetes as home server on bare metal in 150 minutes (2020)](https://blog.quickbird.uk/domesticating-kubernetes-d49c178ebc41) ([HN](https://news.ycombinator.com/item?id=23040030))
- [ktunnel](https://github.com/omrikiei/ktunnel) - Expose your local resources to kubernetes.
- [Kubeletctl](https://github.com/cyberark/kubeletctl) - Client for kubelet.
- [Coding a real-time dashboard for Kubernetes](https://learnk8s.io/real-time-dashboard)
- [Build a Graph of Kubernetes API Objects in Go (2020)](https://cybernetist.com/2020/05/05/build-a-graph-of-kubernetes-api-objects-in-go/)
- [Building a TODO API in Golang with Kubernetes (2020)](https://levelup.gitconnected.com/building-a-todo-api-in-golang-with-kubernetes-1ec593f85029)
- [Permission manager](https://github.com/sighupio/permission-manager) - Enables a super-easy and user-friendly RBAC management for Kubernetes.
- [kube-score](https://github.com/zegl/kube-score) - Tool that performs static code analysis of your Kubernetes object definitions.
- [k3s](https://github.com/rancher/k3d) - Lightweight Kubernetes distribution by Rancher.
- [10 common mistakes using kubernetes (2020)](https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/)
- [Goldilocks](https://github.com/FairwindsOps/goldilocks) - Get your resource requests "Just Right".
- [Lokomotive](https://github.com/kinvolk/lokomotive) - Open source Kubernetes distribution that ships pure upstream Kubernetes.
- [Amazon Elastic Kubernetes Service (Amazon EKS) Best Practices](https://github.com/aws/aws-eks-best-practices)
- [KFServing](https://github.com/kubeflow/kfserving) - Serverless Inferencing on Kubernetes.
- [kube-backup](https://github.com/pieterlange/kube-backup) - Kubernetes resource state sync to git.
- [Why is Kubernetes getting so popular? (2020)](https://stackoverflow.blog/2020/05/29/why-kubernetes-getting-so-popular/) ([HN](https://news.ycombinator.com/item?id=23354418))
- [Sloop](https://github.com/salesforce/sloop) - Kubernetes History Visualization.
- [microcks](https://github.com/microcks/microcks) - Kubernetes native tool for mocking and testing API and micro-services.
- [Weave Kubernetes System Control - wksctl](https://github.com/weaveworks/wksctl) - Allows simple creation of a Kubernetes cluster given a set of IP addresses and an SSH key.
- [stern](https://github.com/wercker/stern) - Multi pod and container log tailing for Kubernetes.
- [Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server) - Scalable, efficient source of container resource metrics for Kubernetes built-in autoscaling pipelines.
- [Source controller](https://github.com/fluxcd/source-controller) - Experimental source manager.
- [Cluster API](https://github.com/kubernetes-sigs/cluster-api) - Kubernetes project to bring declarative, Kubernetes-style APIs to cluster creation, configuration, and management.
- [Pulumi Kubernetes Resource Provider](https://github.com/pulumi/pulumi-kubernetes)
- [aws-k8s-tester](https://github.com/aws/aws-k8s-tester) - Set of utilities and libraries for "testing" Kubernetes on AWS.
- [Go FlagZ](https://github.com/mwitkow/go-flagz) - Dynamic, thread-safe flag variables that can be modified at runtime through etcd or Kubernetes.
- [Argo CD](https://github.com/argoproj/argo-cd) - Declarative Continuous Delivery for Kubernetes.
- [Kubernetes Basic Learning](https://github.com/knrt10/kubernetes-basicLearning) - Understand Kubernetes step by step. A simple repo for beginners.
- [arkade](https://github.com/alexellis/arkade) - Kubernetes apps for developers.
- [Continuous Deployment to Kubernetes with Gitea and Drone (2020)](https://christine.website/blog/drone-kubernetes-cd-2020-07-10)
- [Lobsters: What has your experience with Kubernetes been like? (2020)](https://lobste.rs/s/kx1jj4/what_has_your_experience_with_kubernetes)
- [Kubernetes External Secrets](https://github.com/godaddy/kubernetes-external-secrets) - Integrate external secret management systems with Kubernetes.
- [A single-node Kubernetes cluster without virtualization or a container registry (2020)](https://notes.eatonphil.com/a-single-node-kubernetes-cluster-without-virtualization-or-a-container-registry.html)
- [A Hacker’s Guide to Kubernetes Networking (2017)](https://thenewstack.io/hackers-guide-kubernetes-networking/)
- [Multi-Cluster Kubernetes and Service Mesh Patterns (2020)](https://www.solo.io/blog/webinar-recap-multi-cluster-kubernetes-and-service-mesh-patterns/)
- [Tools to use with the controller-runtime libraries](https://github.com/kubernetes-sigs/controller-tools)
- [How to Create Ephemeral Environments using Crossplane and ArgoCD? (2020)](https://www.infracloud.io/blogs/how-to-create-ephemeral-environments-using-crossplane-and-argocd/)
- [Gitpod](https://github.com/gitpod-io/gitpod) - Open-source Kubernetes application providing fully-baked, collaborative development environments in your browser - powered by VS Code. ([Article](https://www.gitpod.io/blog/opensource/))
- [HyScale](https://github.com/hyscale/hyscale) - Abstraction framework over Kubernetes. ([HN](https://news.ycombinator.com/item?id=24270669))
- [Kubernetes: Make your services faster by removing CPU limits (2020)](https://erickhun.com/posts/kubernetes-faster-services-no-cpu-limits/) ([HN](https://news.ycombinator.com/item?id=24351566))
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - Terraform module to create an Elastic Kubernetes (EKS) cluster and associated worker instances on AWS.
- [Kubernetes YAML Generator](https://k8syaml.com/) ([HN](https://news.ycombinator.com/item?id=24419441))
- [What we learned after a year on Kubernetes (2020)](https://about.gitlab.com/blog/2020/09/16/year-of-kubernetes/) ([HN](https://news.ycombinator.com/item?id=24498108)) ([Tweet](https://twitter.com/benskuhn/status/1306379191772946432))