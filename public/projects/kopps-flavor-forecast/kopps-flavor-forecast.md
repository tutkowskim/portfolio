#### Kopps Flavor Forecast
Kopps is a popular custard shop in the Milwaukee area, which has special flavors daily which are posted on their website. However, there isn't a machine readable (api) for the data so I created a micro-service which scraps their HTML and returns the flavor forecast in HTML so that other applications can easily consume the data.


<br><br>
<div style="display: flex; justify-content: center;">
  <!-- note: Image is editable in draw.io -->
  <img src="/projects/kopps-flavor-forecast/kopps-flavor-forecast-diagram.png" style="width: 100%; max-width: 400px;" />
</div>
<br><br>

After creating the micro-service I added it into a discord bot, which responds to the command `!flavor-forecast` with the flavor forecast for the next three days so that I can easily access the information in a conversation.

<br><br>
<div style="display: flex; justify-content: center;">
  <img src="/projects/kopps-flavor-forecast/discord-flavor-forecast.png" style="width: 100%; max-width: 800px;" />
</div>
<br><br>

Additionally, I was learning iOS development at the time so I also created an iPhone app which calls the api to display the forecast and additionally if the user clicks on a flavor it will bring up the description.

<br><br>
<div style="display: flex; justify-content: center;">
  <img src="/projects/kopps-flavor-forecast/ios-flavor-forecast-list-view.png" style="width: 100%; max-width: 800px;" />
</div>
<br><br>


<br><br>
<div style="display: flex; justify-content: center;">
  <img src="/projects/kopps-flavor-forecast/ios-flavor-detail-view.png" style="width: 100%; max-width: 800px;" />
</div>
<br><br>
