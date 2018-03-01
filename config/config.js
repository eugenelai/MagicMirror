/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "61.93.255.170", "10.0.1.23", "210.6.86.209"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "middle_center"
		},
		{
			module: "calendar",
			header: "calendar",
			position: "top_left",
			config: {
				excludedEvents: ['AL', 'Team Meeting', 'TRIWA'],
				maximumEntries: 7,
				calendars: [
					{
						symbol: "user-circle",
						url: "https://calendar.google.com/calendar/ical/eugenelai%40gmail.com/public/basic.ics"
					},
          {
						symbol: "calendar",
						url: "https://calendar.google.com/calendar/ical/en-gb.hong_kong%23holiday%40group.v.calendar.google.com/public/basic.ics"
					},
          {
						symbol: "briefcase",
						url: "https://calendar.google.com/calendar/ical/503s5nc5diqu6eer6n2kr132lhbjh1oi%40import.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Hong Kong",
				locationID: "1819729",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "a99d3245bd14f4d9ef3389a4d31b6873",
				degreeLabel: true,
				onlyTemp: true
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			config: {
				location: "Hong Kong",
				locationID: "1819729",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "a99d3245bd14f4d9ef3389a4d31b6873",
				roundTemp: true,
				maxNumberOfDays: 15,
				showRainAmount: true,
				colored: true
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
    {
  		module: 'MMM-Wunderlist-Enhanced',
  		position: 'bottom_left',	// This can be any of the regions. Best results in left or right regions.
  		config: {
  			// See 'Configuration options' for more information.
                          accessToken: "6b7e988ae9366faba5248e9cec23b0c5e66e0a4bccbbed24402d1053c0e6",  //example token
                          clientID: "f64e4c4080614ab3aab0",   //example clientID
                          lists: ["To Buy","To Do", "Projects"],
													interval: 60
  		}
    },
    {
  		module: 'MMM-SystemStats',
  		position: 'bottom_right', // This can be any of the regions.
  		classes: 'small bright', // Add your own styling. Optional.
      header: 'System Stats', // This is optional
  		config: {
  			updateInterval: 10000,
  			animationSpeed: 0,
  			align: 'right', // align labels
  		}
    },
    {
      module: 'MMM-homeassistant-sensors',
      position: 'bottom_right',
      config: {
        url: 'https://eugenelai.duckdns.org/api/states?api_password=xxx',
        prettyName : 'true',
        stripName: 'true',
        values: ["sensor.cpu_temperature", "sensor.living_room_temperature", "sensor.living_room_humidity", "sensor.bedroom_temperature", "sensor.bedroom_humidity"]
      }
    },
		{
		module: 'MMM-PIR-Sensor',
		config: {
			sensorPIN: 4,
			powerSavingDelay: 3600
		}
	}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
