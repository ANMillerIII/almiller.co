S3

#

Highly available
Durability (safety/non-corrupted)

99.95% - 99.99% 
Tiered storage
Lifecycle management
Versioning
Server-side encryption
Access Control Lists (ACL)
S3 bucket policies
Not OS/DB
5 TB file in size
Unlimited storage
Key, Value, version ID, metadata
Universal namespace

## Storage Classes

- Standard - >= 3 AZs, 99.9% availability, 11 9's of durability, frequent access, most general
- Standard-infrequent accesss (rapid access when needed but infrequent) - fee to access, retrieval
- S3 One Zone-infrequent access - S3-IA redundant within single AZ
- Glacier - cheap, infrequent access, long-term data archive, 1-min to 12 hr retrieval, deep - 12 hour defaults
- Intelligent tiering - frequent, infrequent

## Security S3

Private bucket
Bucket owner
ACL - object level, fine-grained
S3 Access log - 
Policies are applied at bucket level
Tags

AWS policy generator

### Encryption

Server side

Encryption at rest - encrypted on disk
SSE-S3 - S3 managed keys AES-256-bit
SSE-KMS - AWS KMS
SSE-C - customer keys

Client side encryption

How to enforce SSE

From console
X-amz-server-side-encryption: AES256 or KMS in PUT request header


CORS to access resources from cross-buckets

## CloudFront

Edge locations
Origin
CDN
S3 Transfer acceleration
Optimized
Edge locations are PUTable

TTL time to live 


Encryption in transit - SSL/TLS, HTTPS



Relational Database Service (RDS)

## Relational database

Rows (records), columns (fields)
Online Transaction Processing (OLTP)
SQL Server, Oracle, MySQL, MariaDB, Amazon Aurora (PostSQL/MySQL), PostgreSQL
Multi-AZ
Failover capability
Automated backups


2 methods to backup RDS

Database snapshot

Automated backup
	enabled by default
	creates daily backups
	point in time recovery (1-35 day retention)
	full daily backup (transaction logs)
	recovery process
	Stored in S3
	Free storage equal to size of RDS database
	Defined backup window (latency for a few seconds)
	Restored version is always a new RDS instance and new DNS endpoint

Database snapshot
	Not deleted even after RDS instance deleted

Encryption at rest
Enable encryption at creation time
Encryption done with AWS Key Management Service KMS (AES-256) encrypt
Encrypts all underlying storage (automated backups, snapshots, logs, read replicas
Can't enable encryption on unencrypted RDS DB instance
So to encrypt it --> create snapshot of unencrypted instance --> create encrypted snapshot --> database restore

Multi-AZ - Exact copy in another AZ for disaster recovery

Read Replica - read-only copy of database in any AZ, increase/scale performance




Hosted Zone
Alias - route traffic to zone apex
A record - route traffic to resource w/IPv4



## ElastiCache

Good for read-heavy, changing

- In-memory cache (key value)
- Improves database performance
- Good for read-heavy
Memory is faster than disk
Cluster

Not good for heavy write, or OLAP (Online Analytical Processing, Redshift)

### Memcached

Basic caching
No persistance, multi-AZ, or failover

### Redis

Persistence, replication, multi-AZ, failover
Ranking, complex data types

Systems Manager Parameter Store

Passwords, secrets, etc.

Passwords, database connection strings, etc.

EC2

EC2 is like a VM

## EC2 Pricing Options

#### On Demand
- Low cost
- Flexibility
- Short-term, spiky/uninterruptable
- proof of concept

#### Reserved

- Predictbale usage
- Specific capacity requirements
- Up front payment
- 72% discount
- Standard/Convertable (can change instance type)
- Scheduled 

#### Spot

- Flexible start/end
- Only feasible at low compute prices
- Urgent need for large amounts of additional capacity


#### Dedication


- Non-multi-tenant
- can be on demand or reserved
- Compliance
- Licensing

### Savings Plans

72% on AWS compute regardless to instance type/region - 1 - 3 year commitment
Flexible, not just EC2

Use AWS cost estimator


## Instance Types

Hardward
Capability
Requirements

General purpose
Storage optimized
Grouped in instance families

Putty for windows

Ssh 

Chmod 400 

## Elastic Block Storage (EBS) Volumes

Storage volumes that can be attached to EC2 instances

Production workloads
Highly available

General Purpose SSD (gp2)

Balanced price/performance
3 IOPS per GB, max of 16,000 IOPS per volume
Gp2 volumes < 1 TB burst to 3,000 IOPS
Boost, not latency sensitive

Provisioned IOPS SSD (io1)

High-performance
Latency sensitive
64,000 IOPs per volume, 50 IOPs/GB
Use if need more than 16,000 IOPS
 
Provisioned IOPS SSD (io2) is more durable/performant
99.999% durability (99.9 for io1)

Throughput optimized HDD (st1)

Low-cost HDD volume
ETL, data, data warehousing, log processing
Not boot volume

Cold HDD (sc1)

Lowest cost

IOPS

Measures number of read/write operations
Metric for low-latency, transactional
Io2!

Throughput

MB/s
Large datasets


Encrypted snapshot - if you create EBS volumes from encrypted snapshot then will get encrypted volume


Elastic Load Balancer

### Application Load Balancer

HTTP and HTTPS
Operate at Layer 7 of OSI model (application-aware)

7-layer model (OSI)

Application
Presentation
Session
Transport
Network
Data Link
Physical

X-Forwarded-For Header

Identify originating IP address of client connecting through a load balancer
Load balancer will obsfucate public IP 

504 gateway timeout gateway timeout


Bottstrap scripts

Yum
#!/bin/bash
Yum update
Systemctl

TTL

Least Privelige
Use groups

AWS CLI Pagination

1,0000 default page size
--page-size option
--max-items return less

Roles are preferred 
Don't hard code credentials
Policy updates are immediate


### Network Load Balancer

TCP

### Classic

Both















IAM

## IAM Summary

IAM is global 

Access keys

Users are assigned `access key ID` and `secret access key` on creation, viewable once, only for aws-cli not console (programatic)

Multi-factor authentication (MFA)

Password rotation policies

Users

Groups

Group users and policies

Roles

Policies

