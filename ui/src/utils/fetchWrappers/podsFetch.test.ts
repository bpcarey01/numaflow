import {useFetch} from "./fetch";
import {renderHook} from "@testing-library/react";
import {usePodsFetch} from "./podsFetch";

jest.mock("../fetchWrappers/fetch");
const mockedUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

describe("podsFetch test", () => {
    const data = [{
        "metadata": {
            "name": "simple-pipeline-input-0-rwodz",
            "namespace": "dataflow-system",
            "uid": "c94e36e7-8f2e-4360-8632-aa2d687b55bf",
            "resourceVersion": "212930",
            "creationTimestamp": "2022-05-08T23:05:55Z",
            "labels": {
                "app.kubernetes.io/component": "vertex",
                "app.kubernetes.io/managed-by": "vertex-controller",
                "app.kubernetes.io/part-of": "dataflow",
                "dataflow.ossanalytics.io/pipeline-name": "simple-pipeline",
                "dataflow.ossanalytics.io/vertex-name": "input"
            },
            "annotations": {
                "dataflow.ossanalytics.io/hash": "d74587edee2e4e4213b34de9a4ccaf7ab2c9c4fd43da04b9b143db2b993e3977",
                "dataflow.ossanalytics.io/replica": "0"
            },
            "ownerReferences": [{
                "apiVersion": "dataflow.ossanalytics.io/v1alpha1",
                "kind": "Vertex",
                "name": "simple-pipeline-input",
                "uid": "1e784c78-4249-4bba-ad04-001bec246ca2",
                "controller": true,
                "blockOwnerDeletion": true
            }],
            "managedFields": [{
                "manager": "dataflow",
                "operation": "Update",
                "apiVersion": "v1",
                "time": "2022-05-08T23:05:55Z",
                "fieldsType": "FieldsV1",
                "fieldsV1": {
                    "f:metadata": {
                        "f:annotations": {
                            ".": {},
                            "f:dataflow.ossanalytics.io/hash": {},
                            "f:dataflow.ossanalytics.io/replica": {}
                        },
                        "f:labels": {
                            ".": {},
                            "f:app.kubernetes.io/component": {},
                            "f:app.kubernetes.io/managed-by": {},
                            "f:app.kubernetes.io/part-of": {},
                            "f:dataflow.ossanalytics.io/pipeline-name": {},
                            "f:dataflow.ossanalytics.io/vertex-name": {}
                        },
                        "f:ownerReferences": {
                            ".": {},
                            "k:{\"uid\":\"1e784c78-4249-4bba-ad04-001bec246ca2\"}": {
                                ".": {},
                                "f:apiVersion": {},
                                "f:blockOwnerDeletion": {},
                                "f:controller": {},
                                "f:kind": {},
                                "f:name": {},
                                "f:uid": {}
                            }
                        }
                    }, "f:spec": {
                        "f:containers": {
                            "k:{\"name\":\"main\"}": {
                                ".": {},
                                "f:args": {},
                                "f:env": {
                                    ".": {},
                                    "k:{\"name\":\"DATAFLOW_ISBS_CONFIG\"}": {".": {}, "f:name": {}, "f:value": {}},
                                    "k:{\"name\":\"DATAFLOW_ISBS_JETSTREAM_PASSWORD\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:valueFrom": {".": {}, "f:secretKeyRef": {".": {}, "f:key": {}, "f:name": {}}}
                                    },
                                    "k:{\"name\":\"DATAFLOW_ISBS_JETSTREAM_TLS_ENABLED\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:value": {}
                                    },
                                    "k:{\"name\":\"DATAFLOW_ISBS_JETSTREAM_URL\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:value": {}
                                    },
                                    "k:{\"name\":\"DATAFLOW_ISBS_JETSTREAM_USER\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:valueFrom": {".": {}, "f:secretKeyRef": {".": {}, "f:key": {}, "f:name": {}}}
                                    },
                                    "k:{\"name\":\"DATAFLOW_NAMESPACE\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:valueFrom": {
                                            ".": {},
                                            "f:fieldRef": {".": {}, "f:apiVersion": {}, "f:fieldPath": {}}
                                        }
                                    },
                                    "k:{\"name\":\"DATAFLOW_PIPELINE_NAME\"}": {".": {}, "f:name": {}, "f:value": {}},
                                    "k:{\"name\":\"DATAFLOW_POD\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:valueFrom": {
                                            ".": {},
                                            "f:fieldRef": {".": {}, "f:apiVersion": {}, "f:fieldPath": {}}
                                        }
                                    },
                                    "k:{\"name\":\"DATAFLOW_REPLICA\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:valueFrom": {
                                            ".": {},
                                            "f:fieldRef": {".": {}, "f:apiVersion": {}, "f:fieldPath": {}}
                                        }
                                    },
                                    "k:{\"name\":\"DATAFLOW_VERTEX_NAME\"}": {".": {}, "f:name": {}, "f:value": {}},
                                    "k:{\"name\":\"DATAFLOW_VERTEX_OBJECT\"}": {".": {}, "f:name": {}, "f:value": {}},
                                    "k:{\"name\":\"GODEBUG\"}": {".": {}, "f:name": {}}
                                },
                                "f:image": {},
                                "f:imagePullPolicy": {},
                                "f:livenessProbe": {
                                    ".": {},
                                    "f:failureThreshold": {},
                                    "f:httpGet": {".": {}, "f:path": {}, "f:port": {}, "f:scheme": {}},
                                    "f:initialDelaySeconds": {},
                                    "f:periodSeconds": {},
                                    "f:successThreshold": {},
                                    "f:timeoutSeconds": {}
                                },
                                "f:name": {},
                                "f:readinessProbe": {
                                    ".": {},
                                    "f:failureThreshold": {},
                                    "f:httpGet": {".": {}, "f:path": {}, "f:port": {}, "f:scheme": {}},
                                    "f:initialDelaySeconds": {},
                                    "f:periodSeconds": {},
                                    "f:successThreshold": {},
                                    "f:timeoutSeconds": {}
                                },
                                "f:resources": {".": {}, "f:requests": {".": {}, "f:cpu": {}, "f:memory": {}}},
                                "f:terminationMessagePath": {},
                                "f:terminationMessagePolicy": {},
                                "f:volumeMounts": {
                                    ".": {},
                                    "k:{\"mountPath\":\"/var/run/dataflow\"}": {
                                        ".": {},
                                        "f:mountPath": {},
                                        "f:name": {}
                                    }
                                }
                            }
                        },
                        "f:dnsPolicy": {},
                        "f:enableServiceLinks": {},
                        "f:hostname": {},
                        "f:initContainers": {
                            ".": {},
                            "k:{\"name\":\"init\"}": {
                                ".": {},
                                "f:args": {},
                                "f:env": {
                                    ".": {},
                                    "k:{\"name\":\"DATAFLOW_ISBS_CONFIG\"}": {".": {}, "f:name": {}, "f:value": {}},
                                    "k:{\"name\":\"DATAFLOW_ISBS_JETSTREAM_PASSWORD\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:valueFrom": {".": {}, "f:secretKeyRef": {".": {}, "f:key": {}, "f:name": {}}}
                                    },
                                    "k:{\"name\":\"DATAFLOW_ISBS_JETSTREAM_TLS_ENABLED\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:value": {}
                                    },
                                    "k:{\"name\":\"DATAFLOW_ISBS_JETSTREAM_URL\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:value": {}
                                    },
                                    "k:{\"name\":\"DATAFLOW_ISBS_JETSTREAM_USER\"}": {
                                        ".": {},
                                        "f:name": {},
                                        "f:valueFrom": {".": {}, "f:secretKeyRef": {".": {}, "f:key": {}, "f:name": {}}}
                                    },
                                    "k:{\"name\":\"DATAFLOW_PIPELINE_NAME\"}": {".": {}, "f:name": {}, "f:value": {}},
                                    "k:{\"name\":\"GODEBUG\"}": {".": {}, "f:name": {}}
                                },
                                "f:image": {},
                                "f:imagePullPolicy": {},
                                "f:name": {},
                                "f:resources": {".": {}, "f:requests": {".": {}, "f:cpu": {}, "f:memory": {}}},
                                "f:terminationMessagePath": {},
                                "f:terminationMessagePolicy": {}
                            }
                        },
                        "f:restartPolicy": {},
                        "f:schedulerName": {},
                        "f:securityContext": {},
                        "f:subdomain": {},
                        "f:terminationGracePeriodSeconds": {},
                        "f:volumes": {
                            ".": {},
                            "k:{\"name\":\"var-run-dataflow\"}": {
                                ".": {},
                                "f:emptyDir": {".": {}, "f:medium": {}},
                                "f:name": {}
                            }
                        }
                    }
                }
            }, {
                "manager": "k3s",
                "operation": "Update",
                "apiVersion": "v1",
                "time": "2022-05-08T23:06:19Z",
                "fieldsType": "FieldsV1",
                "fieldsV1": {
                    "f:status": {
                        "f:conditions": {
                            "k:{\"type\":\"ContainersReady\"}": {
                                ".": {},
                                "f:lastProbeTime": {},
                                "f:lastTransitionTime": {},
                                "f:status": {},
                                "f:type": {}
                            },
                            "k:{\"type\":\"Initialized\"}": {
                                ".": {},
                                "f:lastProbeTime": {},
                                "f:lastTransitionTime": {},
                                "f:status": {},
                                "f:type": {}
                            },
                            "k:{\"type\":\"Ready\"}": {
                                ".": {},
                                "f:lastProbeTime": {},
                                "f:lastTransitionTime": {},
                                "f:status": {},
                                "f:type": {}
                            }
                        },
                        "f:containerStatuses": {},
                        "f:hostIP": {},
                        "f:initContainerStatuses": {},
                        "f:phase": {},
                        "f:podIP": {},
                        "f:podIPs": {".": {}, "k:{\"ip\":\"10.42.0.249\"}": {".": {}, "f:ip": {}}},
                        "f:startTime": {}
                    }
                }
            }]
        }, "spec": {
            "volumes": [{
                "name": "var-run-dataflow",
                "emptyDir": {"medium": "Memory"}
            }, {
                "name": "kube-api-access-4l2lp",
                "projected": {
                    "sources": [{
                        "serviceAccountToken": {
                            "expirationSeconds": 3607,
                            "path": "token"
                        }
                    }, {
                        "configMap": {
                            "name": "kube-root-ca.crt",
                            "items": [{"key": "ca.crt", "path": "ca.crt"}]
                        }
                    }, {
                        "downwardAPI": {
                            "items": [{
                                "path": "namespace",
                                "fieldRef": {"apiVersion": "v1", "fieldPath": "metadata.namespace"}
                            }]
                        }
                    }], "defaultMode": 420
                }
            }],
            "initContainers": [{
                "name": "init",
                "image": "docker.artifactory.a.intuit.com/oss-analytics/dataflow/service/dataflow:latest",
                "args": ["isbs-buffer-validate", "--isbs-type=jetstream", "--buffers=dataflow-system-simple-pipeline-input-preproc", "--buffers=dataflow-system-simple-pipeline-preproc-infer", "--buffers=dataflow-system-simple-pipeline-infer-train", "--buffers=dataflow-system-simple-pipeline-train-train-1", "--buffers=dataflow-system-simple-pipeline-train-1-train-output", "--buffers=dataflow-system-simple-pipeline-infer-postproc", "--buffers=dataflow-system-simple-pipeline-postproc-log-output", "--buffers=dataflow-system-simple-pipeline-postproc-publisher"],
                "env": [{
                    "name": "DATAFLOW_PIPELINE_NAME",
                    "value": "simple-pipeline"
                }, {"name": "GODEBUG"}, {
                    "name": "DATAFLOW_ISBS_CONFIG",
                    "value": "eyJqZXRzdHJlYW0iOnsidXJsIjoibmF0czovL2lzYnMtZGVmYXVsdC1qcy1zdmMuZGF0YWZsb3ctc3lzdGVtLnN2Yy5jbHVzdGVyLmxvY2FsOjQyMjIiLCJhdXRoIjp7InVzZXIiOnsibmFtZSI6ImlzYnMtZGVmYXVsdC1qcy1jbGllbnQtYXV0aCIsImtleSI6ImNsaWVudC1hdXRoLXVzZXIifSwicGFzc3dvcmQiOnsibmFtZSI6ImlzYnMtZGVmYXVsdC1qcy1jbGllbnQtYXV0aCIsImtleSI6ImNsaWVudC1hdXRoLXBhc3N3b3JkIn19LCJidWZmZXJDb25maWciOiJjb25zdW1lcjpcbiAgYWNrd2FpdDogNjBzXG4gIG1heGFja3BlbmRpbmc6IDIwMDAwXG5zdHJlYW06XG4gIGR1cGxpY2F0ZXM6IDYwc1xuICBtYXhhZ2U6IDE2OGhcbiAgbWF4Ynl0ZXM6IC0xXG4gIG1heG1zZ3M6IDUwMDAwXG4gIHJlcGxpY2FzOiAzXG4gIHJldGVudGlvbjogMVxuIn19"
                }, {
                    "name": "DATAFLOW_ISBS_JETSTREAM_URL",
                    "value": "nats://isbs-default-js-svc.dataflow-system.svc.cluster.local:4222"
                }, {
                    "name": "DATAFLOW_ISBS_JETSTREAM_TLS_ENABLED",
                    "value": "false"
                }, {
                    "name": "DATAFLOW_ISBS_JETSTREAM_USER",
                    "valueFrom": {"secretKeyRef": {"name": "isbs-default-js-client-auth", "key": "client-auth-user"}}
                }, {
                    "name": "DATAFLOW_ISBS_JETSTREAM_PASSWORD",
                    "valueFrom": {
                        "secretKeyRef": {
                            "name": "isbs-default-js-client-auth",
                            "key": "client-auth-password"
                        }
                    }
                }],
                "resources": {"requests": {"cpu": "100m", "memory": "128Mi"}},
                "volumeMounts": [{
                    "name": "kube-api-access-4l2lp",
                    "readOnly": true,
                    "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }],
                "terminationMessagePath": "/dev/termination-log",
                "terminationMessagePolicy": "File",
                "imagePullPolicy": "Always"
            }],
            "containers": [{
                "name": "main",
                "image": "docker.artifactory.a.intuit.com/oss-analytics/dataflow/service/dataflow:latest",
                "args": ["processor", "--type=source", "--isbs-type=jetstream"],
                "env": [{
                    "name": "DATAFLOW_NAMESPACE",
                    "valueFrom": {"fieldRef": {"apiVersion": "v1", "fieldPath": "metadata.namespace"}}
                }, {
                    "name": "DATAFLOW_POD",
                    "valueFrom": {"fieldRef": {"apiVersion": "v1", "fieldPath": "metadata.name"}}
                }, {
                    "name": "DATAFLOW_REPLICA",
                    "valueFrom": {
                        "fieldRef": {
                            "apiVersion": "v1",
                            "fieldPath": "metadata.annotations['dataflow.ossanalytics.io/replica']"
                        }
                    }
                }, {"name": "DATAFLOW_PIPELINE_NAME", "value": "simple-pipeline"}, {
                    "name": "DATAFLOW_VERTEX_NAME",
                    "value": "input"
                }, {
                    "name": "DATAFLOW_VERTEX_OBJECT",
                    "value": "eyJtZXRhZGF0YSI6eyJuYW1lIjoic2ltcGxlLXBpcGVsaW5lLWlucHV0IiwibmFtZXNwYWNlIjoiZGF0YWZsb3ctc3lzdGVtIiwiY3JlYXRpb25UaW1lc3RhbXAiOm51bGx9LCJzcGVjIjp7Im5hbWUiOiJpbnB1dCIsInNvdXJjZSI6eyJnZW5lcmF0b3IiOnsicnB1IjoyNTAsImR1cmF0aW9uIjoiMXMiLCJtc2dTaXplIjo4fX0sImxpbWl0cyI6eyJyZWFkQmF0Y2hTaXplIjoxMDAsImJ1ZmZlck1heExlbmd0aCI6MTAwMDAsImJ1ZmZlclVzYWdlTGltaXQiOjgwfSwicGlwZWxpbmVOYW1lIjoic2ltcGxlLXBpcGVsaW5lIiwiaW50ZXJTdGVwQnVmZmVyU2VydmljZU5hbWUiOiIiLCJyZXBsaWNhcyI6MCwidG9WZXJ0aWNlcyI6W3sibmFtZSI6InByZXByb2MiLCJjb25kaXRpb25zIjpudWxsfV19LCJzdGF0dXMiOnsicGhhc2UiOiIiLCJyZXBsaWNhcyI6MCwibGFzdFNjYWxlZEF0IjpudWxsfX0="
                }, {"name": "GODEBUG"}, {
                    "name": "DATAFLOW_ISBS_CONFIG",
                    "value": "eyJqZXRzdHJlYW0iOnsidXJsIjoibmF0czovL2lzYnMtZGVmYXVsdC1qcy1zdmMuZGF0YWZsb3ctc3lzdGVtLnN2Yy5jbHVzdGVyLmxvY2FsOjQyMjIiLCJhdXRoIjp7InVzZXIiOnsibmFtZSI6ImlzYnMtZGVmYXVsdC1qcy1jbGllbnQtYXV0aCIsImtleSI6ImNsaWVudC1hdXRoLXVzZXIifSwicGFzc3dvcmQiOnsibmFtZSI6ImlzYnMtZGVmYXVsdC1qcy1jbGllbnQtYXV0aCIsImtleSI6ImNsaWVudC1hdXRoLXBhc3N3b3JkIn19LCJidWZmZXJDb25maWciOiJjb25zdW1lcjpcbiAgYWNrd2FpdDogNjBzXG4gIG1heGFja3BlbmRpbmc6IDIwMDAwXG5zdHJlYW06XG4gIGR1cGxpY2F0ZXM6IDYwc1xuICBtYXhhZ2U6IDE2OGhcbiAgbWF4Ynl0ZXM6IC0xXG4gIG1heG1zZ3M6IDUwMDAwXG4gIHJlcGxpY2FzOiAzXG4gIHJldGVudGlvbjogMVxuIn19"
                }, {
                    "name": "DATAFLOW_ISBS_JETSTREAM_URL",
                    "value": "nats://isbs-default-js-svc.dataflow-system.svc.cluster.local:4222"
                }, {
                    "name": "DATAFLOW_ISBS_JETSTREAM_TLS_ENABLED",
                    "value": "false"
                }, {
                    "name": "DATAFLOW_ISBS_JETSTREAM_USER",
                    "valueFrom": {"secretKeyRef": {"name": "isbs-default-js-client-auth", "key": "client-auth-user"}}
                }, {
                    "name": "DATAFLOW_ISBS_JETSTREAM_PASSWORD",
                    "valueFrom": {
                        "secretKeyRef": {
                            "name": "isbs-default-js-client-auth",
                            "key": "client-auth-password"
                        }
                    }
                }],
                "resources": {"requests": {"cpu": "100m", "memory": "128Mi"}},
                "volumeMounts": [{
                    "name": "var-run-dataflow",
                    "mountPath": "/var/run/dataflow"
                }, {
                    "name": "kube-api-access-4l2lp",
                    "readOnly": true,
                    "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
                }],
                "livenessProbe": {
                    "httpGet": {"path": "/healthz", "port": 2469, "scheme": "HTTPS"},
                    "initialDelaySeconds": 3,
                    "timeoutSeconds": 1,
                    "periodSeconds": 3,
                    "successThreshold": 1,
                    "failureThreshold": 3
                },
                "readinessProbe": {
                    "httpGet": {"path": "/readyz", "port": 2469, "scheme": "HTTPS"},
                    "initialDelaySeconds": 3,
                    "timeoutSeconds": 1,
                    "periodSeconds": 3,
                    "successThreshold": 1,
                    "failureThreshold": 3
                },
                "terminationMessagePath": "/dev/termination-log",
                "terminationMessagePolicy": "File",
                "imagePullPolicy": "Always"
            }],
            "restartPolicy": "Always",
            "terminationGracePeriodSeconds": 30,
            "dnsPolicy": "ClusterFirst",
            "serviceAccountName": "default",
            "serviceAccount": "default",
            "nodeName": "k3d-k3s-default-server-0",
            "securityContext": {},
            "hostname": "simple-pipeline-input-0",
            "subdomain": "simple-pipeline-input-headless",
            "schedulerName": "default-scheduler",
            "tolerations": [{
                "key": "node.kubernetes.io/not-ready",
                "operator": "Exists",
                "effect": "NoExecute",
                "tolerationSeconds": 300
            }, {
                "key": "node.kubernetes.io/unreachable",
                "operator": "Exists",
                "effect": "NoExecute",
                "tolerationSeconds": 300
            }],
            "priority": 0,
            "enableServiceLinks": true,
            "preemptionPolicy": "PreemptLowerPriority"
        }, "status": {
            "phase": "Running",
            "conditions": [{
                "type": "Initialized",
                "status": "True",
                "lastProbeTime": null,
                "lastTransitionTime": "2022-05-08T23:06:15Z"
            }, {
                "type": "Ready",
                "status": "True",
                "lastProbeTime": null,
                "lastTransitionTime": "2022-05-08T23:06:19Z"
            }, {
                "type": "ContainersReady",
                "status": "True",
                "lastProbeTime": null,
                "lastTransitionTime": "2022-05-08T23:06:19Z"
            }, {
                "type": "PodScheduled",
                "status": "True",
                "lastProbeTime": null,
                "lastTransitionTime": "2022-05-08T23:05:55Z"
            }],
            "hostIP": "172.19.0.2",
            "podIP": "10.42.0.249",
            "podIPs": [{"ip": "10.42.0.249"}],
            "startTime": "2022-05-08T23:05:55Z",
            "initContainerStatuses": [{
                "name": "init",
                "state": {
                    "terminated": {
                        "exitCode": 0,
                        "reason": "Completed",
                        "startedAt": "2022-05-08T23:05:59Z",
                        "finishedAt": "2022-05-08T23:06:14Z",
                        "containerID": "containerd://d1b71a730feebce224b2f83920f0792148e377a6d86091552e3897c6f45e9c6c"
                    }
                },
                "lastState": {},
                "ready": true,
                "restartCount": 0,
                "image": "docker.artifactory.a.intuit.com/oss-analytics/dataflow/service/dataflow:latest",
                "imageID": "docker.artifactory.a.intuit.com/oss-analytics/dataflow/service/dataflow@sha256:cd23616d04fe4c1366b015a8f1e0e05b7875d3541b8fcf93ee20ad3febe56f64",
                "containerID": "containerd://d1b71a730feebce224b2f83920f0792148e377a6d86091552e3897c6f45e9c6c"
            }],
            "containerStatuses": [{
                "name": "main",
                "state": {"running": {"startedAt": "2022-05-08T23:06:16Z"}},
                "lastState": {},
                "ready": true,
                "restartCount": 0,
                "image": "docker.artifactory.a.intuit.com/oss-analytics/dataflow/service/dataflow:latest",
                "imageID": "docker.artifactory.a.intuit.com/oss-analytics/dataflow/service/dataflow@sha256:cd23616d04fe4c1366b015a8f1e0e05b7875d3541b8fcf93ee20ad3febe56f64",
                "containerID": "containerd://fd7143440df96dcd78e45a59143a63c2fa4b425b29f0e5ae9e27de06197b504a",
                "started": true
            }],
            "qosClass": "Burstable"
        }
    }]
    it("pods return", () => {
        mockedUseFetch.mockReturnValue({data: data, error: false, loading: false})
        const {result} = renderHook(() => usePodsFetch("dataflow-system", "simple-pipeline", "input"))
    })

    it("pods loading", () => {
        mockedUseFetch.mockReturnValue({data: data, error: false, loading: true});
        const {result} = renderHook(() => usePodsFetch("dataflow-system", "simple-pipeline", "input"))
        expect(result.current.loading).toBeTruthy()
    })

    it("pods error", () => {
        mockedUseFetch.mockReturnValue({data: data, error: true, loading: false})
        const {result} = renderHook(() => usePodsFetch("dataflow-system", "simple-pipeline", "input"))
        expect(result.current.error).toBeTruthy()
    })
})
