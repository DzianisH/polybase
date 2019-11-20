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
                    cap : 'AC',
                    persistance: 'B-Tree',
                    license: 'GPLv2/Proprietary',
                    openSource: true,
                    website: 'https://www.mysql.com/',
                    docs: 'https://dev.mysql.com/doc/',
                    partitionin: 'Horizontal/Sharding with cluster/Fabric',
                    replication: 'Master-master/Master-slave',
                    consistency: 'Immediate',
                    transaction: 'ACID',
                    features: ['Secondary index', 'Concurrency', 'Durability', 'In-memory storing avility', 'ACID', 'Immediate Consistency'],
                    description: 'MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation). In 2010, when Oracle acquired Sun, Widenius forked the open-source MySQL project to create MariaDB.'
                },
                {
                    database: true,
                    name: 'Oracle',
                    fullName: 'Oracle Database',
                    summary: 'Widely used RDBMS',
                    dataModel: 'Relational DBMS',
                    secondaryDataModel: 'Document store/Graph DBMS/RDF store',
                    cap: 'AC',
                    persistance: 'B-Tree',
                    license: 'Proprietary',
                    website: 'https://www.oracle.com/database/',
                    docs: 'https://docs.oracle.com/en/database/',
                    partitionin: 'Horizontal',
                    replication: 'Master-master/Master-slave',
                    consistency: 'Immediate',
                    transaction: 'ACID',
                    features: ['Secondary index', 'Concurrency', 'Durability', 'In-memory storing avility', 'ACID', 'Immediate Consistency'],
                    description: 'Oracle Database (commonly referred to as Oracle RDBMS or simply as Oracle) is a proprietary multi-model database management system produced and marketed by Oracle Corporation.'
                },
                {
                    database: true,
                    name: 'Postgre',
                    fullName: 'PostgreSQL',
                    summary: 'Widely used open source RDBMS',
                    dataModel: 'Relational DBMS',
                    secondaryDataModel: 'Document store',
                    cap: 'AC',
                    persistance: 'B-Tree',
                    license: 'PostgreSQL',
                    openSource: true,
                    website: 'https://www.postgresql.org/',
                    docs: 'https://www.postgresql.org/docs/manuals/',
                    partitionin: 'By Range/Hash(v11+)/List',
                    replication: 'Master-master/Master-slave',
                    consistency: 'Immediate',
                    transaction: 'ACID',
                    features: ['Secondary index', 'Concurrency', 'Durability', 'ACID', 'Immediate Consistency'],
                    description: 'PostgreSQL, also known as Postgres, is a free and open-source RDBMS emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server, and is also available for Linux, FreeBSD, OpenBSD, and Windows.'
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
                    name: 'Mongo',
                    fullName: 'MongoDB',
                    summary: 'One of the most popular document stores available both as a fully managed cloud service and for deployment on self-managed infrastructure',
                    dataModel: 'Document store',
                    secondaryDataModel: 'Search engine',
                    cap: 'CP',
                    persistance: '??',
                    license: 'Various',
                    openSource: true,
                    website: 'https://www.mongodb.com/',
                    docs: 'https://docs.mongodb.com/manual/',
                    partitionin: 'Sharding',
                    replication: 'Master-slave',
                    consistency: 'Eventual/Immediate',
                    transaction: 'Multi-document ACID with snapshot isolation',
                    features: ['Secondary index', 'Concurrency', 'Durability', 'Map-Reduce', 'In-memory storing avility', 'Eventual & Immediate consistancy', 'ACID'],
                    description: 'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).'
                }
            ]
        },
        {
            name: 'Column stores',
            fullName: 'Wide column stores',
            summary: 'column summary',
            dataModel: 'Wide column store',
            description: 'description for column',
            children: [
                {
                    database: true,
                    name: 'Cassandra',
                    summary: 'Wide-column store based on ideas of BigTable and DynamoDB.',
                    dataModel: 'Wide column store',
                    cap: 'AP',
                    persistance: '??log based??',
                    license: 'Apache 2.0',
                    openSource: true,
                    website: 'http://cassandra.apache.org/',
                    docs: 'https://docs.mongodb.com/manual/',
                    partitionin: 'Sharding',
                    replication: 'Selectable factor',
                    consistency: 'Eventual/Immediate',
                    transaction: 'Record lvl ACID',
                    features: ['Concurrency', 'Durability', 'Map-Reduce'],
                    description: 'Apache Cassandra is a free and open-source, distributed, wide column store, NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. Cassandra offers robust support for clusters spanning multiple datacenters, with asynchronous masterless replication allowing low latency operations for all clients.'
                }
            ]
        }
    ]
};
