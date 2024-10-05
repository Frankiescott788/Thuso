const users = [
    {
      userId: "U001",
      name: "John Doe",
      location: "Polokwane",
      availability: "online",
      interactions: 120,
      obstaclesDetected: 85,
      successRate: 94,
      averageResponseTime: 1.2
    },
    {
      userId: "U002",
      name: "Mary Smith",
      location: "Pretoria",
      availability: "offline",
      interactions: 98,
      obstaclesDetected: 60,
      successRate: 89,
      averageResponseTime: 1.5
    },
    {
      userId: "U003",
      name: "Lebo Mokoena",
      location: "Johannesburg",
      availability: "online",
      interactions: 145,
      obstaclesDetected: 100,
      successRate: 91,
      averageResponseTime: 1.1
    },
    {
      userId: "U004",
      name: "Jane Adams",
      location: "Cape Town",
      availability: "offline",
      interactions: 110,
      obstaclesDetected: 70,
      successRate: 87,
      averageResponseTime: 1.4
    },
    {
      userId: "U005",
      name: "Peter Ndaba",
      location: "Durban",
      availability: "online",
      interactions: 160,
      obstaclesDetected: 120,
      successRate: 95,
      averageResponseTime: 1.0
    },
    {
      userId: "U006",
      name: "Sihle Ngwenya",
      location: "Pretoria",
      availability: "online",
      interactions: 50,
      obstaclesDetected: 40,
      successRate: 85,
      averageResponseTime: 1.3
    },
    {
      userId: "U007",
      name: "Alice Lebogang",
      location: "Polokwane",
      availability: "offline",
      interactions: 90,
      obstaclesDetected: 65,
      successRate: 88,
      averageResponseTime: 1.6
    },
    {
      userId: "U008",
      name: "Joseph Thabang",
      location: "Johannesburg",
      availability: "online",
      interactions: 130,
      obstaclesDetected: 90,
      successRate: 92,
      averageResponseTime: 1.2
    },
    {
      userId: "U009",
      name: "Thembi Mokoena",
      location: "Durban",
      availability: "online",
      interactions: 180,
      obstaclesDetected: 150,
      successRate: 96,
      averageResponseTime: 1.1
    },
    {
      userId: "U010",
      name: "David Mutale",
      location: "Pretoria",
      availability: "offline",
      interactions: 115,
      obstaclesDetected: 95,
      successRate: 90,
      averageResponseTime: 1.3
    },
    {
      userId: "U011",
      name: "Susan Mbele",
      location: "Polokwane",
      availability: "online",
      interactions: 100,
      obstaclesDetected: 80,
      successRate: 91,
      averageResponseTime: 1.2
    },
    {
      userId: "U012",
      name: "Isaac Maluleka",
      location: "Johannesburg",
      availability: "offline",
      interactions: 70,
      obstaclesDetected: 55,
      successRate: 86,
      averageResponseTime: 1.4
    },
    {
      userId: "U013",
      name: "Lerato Kgatle",
      location: "Cape Town",
      availability: "online",
      interactions: 95,
      obstaclesDetected: 65,
      successRate: 88,
      averageResponseTime: 1.5
    },
    {
      userId: "U014",
      name: "Thando Mbatha",
      location: "Durban",
      availability: "offline",
      interactions: 105,
      obstaclesDetected: 85,
      successRate: 89,
      averageResponseTime: 1.4
    },
    {
      userId: "U015",
      name: "Nomvula Dlamini",
      location: "Pretoria",
      availability: "online",
      interactions: 125,
      obstaclesDetected: 100,
      successRate: 93,
      averageResponseTime: 1.1
    },
    {
      userId: "U016",
      name: "Sipho Zulu",
      location: "Polokwane",
      availability: "offline",
      interactions: 150,
      obstaclesDetected: 110,
      successRate: 92,
      averageResponseTime: 1.3
    },
    {
      userId: "U017",
      name: "Linda Tshabalala",
      location: "Johannesburg",
      availability: "online",
      interactions: 135,
      obstaclesDetected: 95,
      successRate: 90,
      averageResponseTime: 1.2
    },
    {
      userId: "U018",
      name: "Khanyisile Mokoena",
      location: "Cape Town",
      availability: "offline",
      interactions: 80,
      obstaclesDetected: 60,
      successRate: 87,
      averageResponseTime: 1.5
    },
    {
      userId: "U019",
      name: "Nhlanhla Ntuli",
      location: "Durban",
      availability: "online",
      interactions: 160,
      obstaclesDetected: 130,
      successRate: 94,
      averageResponseTime: 1.1
    },
    {
      userId: "U020",
      name: "Busi Maseko",
      location: "Pretoria",
      availability: "online",
      interactions: 140,
      obstaclesDetected: 115,
      successRate: 93,
      averageResponseTime: 1.2
    },
    {
      userId: "U021",
      name: "Vusi Madonsela",
      location: "Polokwane",
      availability: "offline",
      interactions: 170,
      obstaclesDetected: 140,
      successRate: 95,
      averageResponseTime: 1.0
    },
    {
      userId: "U022",
      name: "Zodwa Khumalo",
      location: "Johannesburg",
      availability: "online",
      interactions: 110,
      obstaclesDetected: 85,
      successRate: 89,
      averageResponseTime: 1.3
    },
    {
      userId: "U023",
      name: "Gugu Moloi",
      location: "Cape Town",
      availability: "offline",
      interactions: 95,
      obstaclesDetected: 70,
      successRate: 88,
      averageResponseTime: 1.4
    },
    {
      userId: "U024",
      name: "Siphesihle Nkosi",
      location: "Durban",
      availability: "online",
      interactions: 130,
      obstaclesDetected: 100,
      successRate: 92,
      averageResponseTime: 1.1
    },
    {
      userId: "U025",
      name: "Thato Molefe",
      location: "Pretoria",
      availability: "offline",
      interactions: 155,
      obstaclesDetected: 120,
      successRate: 93,
      averageResponseTime: 1.2
    },
    {
      userId: "U026",
      name: "Mpumi Dube",
      location: "Polokwane",
      availability: "online",
      interactions: 175,
      obstaclesDetected: 140,
      successRate: 96,
      averageResponseTime: 1.0
    },
    {
      userId: "U027",
      name: "Nomsa Sithole",
      location: "Johannesburg",
      availability: "offline",
      interactions: 100,
      obstaclesDetected: 75,
      successRate: 88,
      averageResponseTime: 1.4
    }
]

export { users }