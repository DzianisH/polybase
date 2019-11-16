module.exports = {
    nodes: [
        {
            id: 1,
            name: 'name1',
            children: [
                {
                    id: 11,
                    name: 'name 1.1'
                },
                {
                    id: 12,
                    name: 'name 1.2'
                }
            ]
        },
        {
            id: 2,
            name: 'name 2',
            children: [
                {
                    id: 21,
                    name: 'name 2.1'
                }
            ]
        },
        {
            id: 3,
            name: 'name 3',
            children: [
                {
                    id: 31,
                    name: 'name 3.1'
                },
                {
                    id: 32,
                    name: 'name 3.2',
                    children: [
                        {
                            id: 321,
                            name: 'name 3.2.1'
                        },
                        {
                            id: 322,
                            name: 'name 3.2.2'
                        }
                    ]
                },
                {
                    id: 33,
                    name: 'name 3.3',
                    children: [
                        {
                            id: 331,
                            name: 'name 3.3.1'
                        }
                    ]
                }
            ]
        }
    ]
};
