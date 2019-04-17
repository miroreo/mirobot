if(command === "tba") {
    var teamNum = args[0];
    var options = {
        host: tbaBaseURL,
        path: `/api/v3/team/frc${teamNum}`,
        method: 'GET',
        headers: {
            'X-TBA-Auth-Key': process.env.TBAAUTH, 
            'User-Agent': `Mirobot Discord Bot (${bot.user.username})`
        }
    };
    var tbaResponse = ' ';
    https.get(options,function(res){
        console.log("Connected to TBA");
        var body = ' ';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(done){
            tbaResponse = JSON.parse(body);
            console.log(tbaResponse.nickname);
        });
    });
    const embedm = {
      "title": "Team 1002",
      "url": "https://www.thebluealliance.com/team/1002",
      "color": 407960,
      "fields": [
        {
          "name": "Nickname",
          "value": "The CircuitRunners"
        },
        {
          "name": "Location",
          "value": "Marietta, Georgia, USA"
        },
        {
          "name": "Rookie Year",
          "value": "2003"
        },
        {
          "name": "Website",
          "value": "https://www.circuitrunners.com"
        }
      ],
      description: "test"
    };
    message.channel.send({embedm});
  }