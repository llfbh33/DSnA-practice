const objs = [
    { name: "George" },
    { name: "Karen" },
    { name: "Cody" },
    { name: "Sarah" },
    { name: "Smith" }
  ];


  const lessThan = (objs) => {
    for (let i = 0; i < objs.length; i++) {
        console.log(objs[i].name < "Karen")
        console.log(objs[i].name)
    }
  }

  console.log(lessThan(objs))
