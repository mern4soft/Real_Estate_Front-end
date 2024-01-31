import React from 'react'

function dem() {


    let example1 = [
        {
            id:1,
            name:"name1",
            age:10,
            v:0
        },
        {
            id:2,
            name:"name2",
            age:20,
            v:0
        }
    ]

    let example2 = [
        {
            id:1,
            address:"name2",
            place:100,
            v:0

        },
        {
            id:2,
            address:"name2",
            place:200,
            v:0
        }
    ]


  return (
    <div>
        <Table data={example1} />
        <Table data={example2} />
      
    </div>
  )
}

export default dem
