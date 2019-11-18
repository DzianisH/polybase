module.exports = {
    selectedNode: {},
    nodes: [
        {
            name: 'RDBSM',
            fullName: 'Relational databases',
            summary: 'Relational DBMS usualy used when it requires ACID transactions and fluent query language.',
            dataModel: 'relational',
            description: 'descr for sql dbs',
            children: [
                {
                    database: true,
                    name: 'MySQL',
                    summary: 'Widely used open source RDBMS',
                    dataModel: 'Relational DBMS',
                    secondaryDataModel: 'Document store',
                    description: 'MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation). In 2010, when Oracle acquired Sun, Widenius forked the open-source MySQL project to create MariaDB.',
                    cap: 'AC',
                    persistanceType: 'B-Tree',
                    license: 'GPLv2 or proprietary',
                    openSource: true,
                    website: 'https://www.mysql.com/',
                    docs: 'https://dev.mysql.com/doc/',
                    partitioninMethod: 'Horizontal partitioning, sharding with MySQL Cluster or MySQL Fabric',
                    replicationMethod: 'Master-master & master-slave replication',
                    features: ['Secondary index', 'Concurrency', 'Durability', 'In-memory storing avility', 'ACID', 'Immediate Consistency']
                },
                {
                    database: true,
                    name: 'Oracle',
                    fullName: 'Oracle Database',
                    summary: 'Widely used RDBMS',
                    dataModel: 'Relational DBMS',
                    secondaryDataModel: 'Document store, Graph DBMS, RDF store',
                    description: 'Oracle Database (commonly referred to as Oracle RDBMS or simply as Oracle) is a proprietary multi-model database management system produced and marketed by Oracle Corporation.',
                    cap: 'AC',
                    persistanceType: 'B-Tree',
                    license: 'Proprietary',
                    website: 'https://www.oracle.com/database/',
                    docs: 'https://docs.oracle.com/en/database/',
                    partitioninMethod: 'Horizontal partitioning',
                    replicationMethod: 'Master-master & master-slave replication',
                    features: ['Secondary index', 'Concurrency', 'Durability', 'In-memory storing avility', 'ACID', 'Immediate Consistency']
                },
                {
                    database: true,
                    name: 'Postgre',
                    fullName: 'PostgreSQL',
                    summary: 'Widely used open source RDBMS',
                    dataModel: 'Relational DBMS',
                    secondaryDataModel: 'Document store',
                    description: 'PostgreSQL, also known as Postgres, is a free and open-source RDBMS emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server, and is also available for Linux, FreeBSD, OpenBSD, and Windows.',
                    cap: 'AC',
                    persistanceType: 'B-Tree',
                    license: 'PostgreSQL License',
                    openSource: true,
                    website: 'https://www.postgresql.org/',
                    docs: 'https://www.postgresql.org/docs/manuals/',
                    partitioninMethod: 'Partitioning by range, list and (since PostgreSQL 11) by hash',
                    replicationMethod: 'Master-master & master-slave replication',
                    features: ['Secondary index', 'Concurrency', 'Durability', 'ACID', 'Immediate Consistency']
                }
            ]
        },
        {
            name: 'Document',
            fullName: 'Document oriented databases',
            summary: 'docs summary',
            dataModel: 'document',
            description: 'descr for docs',
            children: [
                {
                    database: true,
                    name: 'MongoDB',
                    summary: 'One of the most popular document stores available both as a fully managed cloud service and for deployment on self-managed infrastructure',
                    dataModel: 'Document store',
                    secondaryDataModel: 'Search engine',
                    description: 'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).',
                    cap: 'CP',
                    persistanceType: '??',
                    license: 'Various',
                    openSource: true,
                    website: 'https://www.mongodb.com/',
                    docs: 'https://docs.mongodb.com/manual/',
                    partitioninMethod: 'Sharding',
                    replicationMethod: 'Master-slave replication',
                    features: ['Secondary index', 'Concurrency', 'Durability', 'Map-Reduce', 'In-memory storing avility', 'Eventual & Immediate consistancy', 'ACID']
                }
            ]
        },
        {
            name: 'Column stores',
            fullName: 'Wide column stores',
            summary: 'kv summary',
            dataModel: 'Wide column store',
            description: 'descr for cols',
            children: [
                {
                    database: true,
                    name: 'Cassandra',
                    summary: 'Wide-column store based on ideas of BigTable and DynamoDB.',
                    dataModel: 'Wide column store',
                    description: 'Apache Cassandra is a free and open-source, distributed, wide column store, NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. Cassandra offers robust support for clusters spanning multiple datacenters, with asynchronous masterless replication allowing low latency operations for all clients.',
                    cap: 'AP',
                    persistanceType: '??log based??',
                    license: 'Apache License 2.0',
                    openSource: true,
                    website: 'http://cassandra.apache.org/',
                    docs: 'https://docs.mongodb.com/manual/',
                    partitioninMethod: 'Sharding',
                    replicationMethod: 'Eventual & Immidiate consistancy',
                    features: ['Concurrency', 'Durability', 'Map-Reduce']
                }
            ]
        }
    ]
};
