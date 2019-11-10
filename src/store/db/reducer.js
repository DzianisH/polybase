const initialState = Object.freeze({
    groups: [
        {
            name: 'name 1',
            children: [
                {
                    name: 'name 1.1'
                },
                {
                    name: 'name 1.2'
                }
            ]
        },
        {
            name: 'name 2',
            children: [
                {
                    name: 'name 2.1'
                }
            ]
        },
        {
            name: 'name 3',
            children: [
                {
                    name: 'name 3.1'
                },
                {
                    name: 'name 3.2',
                    children: [
                        {
                            name: 'name name 3.2.1'
                        },
                        {
                            name: 'name name 3.2.2'
                        }
                    ]
                },
                {
                    name: 'name 3.3',
                    children: [
                        {
                            name: 'name 3.3.1'
                        }
                    ]
                }
            ]
        }
    ]
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
