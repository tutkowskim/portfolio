#### Nerf Blaster
Nerf gun battles are not only a fun toy for kids, but can also be fun in office environments used for team building and comradery. However, if you’re working remotely you may not be able to join in on the spontaneous events which this project solves! While this project is meant for purely entertainment purposes, it also explores concepts that could be applied to more real world applications. For instance the aiming, firing, and automatic target tracking of the nerf gun could be applied directly to projects defense contractors are working on simplifying by switching out the nerf gun. The image detection and target tracking can also be used in a much wider range of applications. Another application the target tracking could be used in is for video surveillance. Imagine there is a high security zone or workstation in an office, which contains sensitive materials for a business or government. A surveillance camera could be mounted similarly as the nerf gun and track visitors as they move through a room and if they enter a restricted area the system could alert the appropriate authorities.

<br>

To build the robotic nerf blaster I placed a hose clamp over the trigger, so that the blaster would be stuck in “slam fire” which is a firing mode outlined on the blaster’s instruction manual where if the trigger is held down you can pull back the cocking mechanism to rapidly fire. Then I automated the manual action of cocking the device by attaching a linear actuator to the cocking mechanism. In order to aim the device it was mounted onto two servos where one controlled the vertical axis and the other controlled the horizontal axis. Lastly a camera was mounted on the sights, so that a user could remotely aim the device.

<br>
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem;">
  <figure>
    <img src="/projects/nerf-blaster/nerf-blaster-top-view.jpeg" style="width: 100%; max-width: 225px; max-height:300px;" />
    <figcaption class="MuiTypography-root MuiTypography-caption" style="text-align: center;">Nerf Blaster Top View</figcaption>
  </figure>
  <figure>
    <img src="/projects/nerf-blaster/nerf-blaster-side-view.jpeg" style="width: 100%; max-width: 225px; max-height:300px;" />
    <figcaption class="MuiTypography-root MuiTypography-caption" style="text-align: center;">Nerf Blaster Side View</figcaption>
  </figure>
</div>
<br>

I used a raspberry pi to control the physical devices that were attached to the nerf blaster. The camera was attached to the raspberry pi’s camera port, which is the port in the middle of the device, using a ribbon cable. The servos were each connected to a GPIO pin, power, and ground and controlled with a PWM signal. The linear actuator was controlled by a L298N Motor controller which communicated to the pi using two GPIO pins. If the GPIO pins were at different logic levels the motor would run and by inverting the logic levels the motor would run in the opposite direction.

<br>
<div style="display: flex; justify-content: center;">
  <figure>
    <img src="/projects/nerf-blaster/wire-diagram.jpeg" style="width: 100%; max-width:471px; max-height:229px;" />
    <figcaption class="MuiTypography-root MuiTypography-caption" style="text-align: center;">Wire Diagram</figcaption>
  </figure>
</div>
<br>

In order to power the device I used two buck converters, which first converted a standard 120V AC outlet to 12V DC to power the motor and then converted it to 5V DC which powered the raspberry pi. To connect the 5V power supply to the raspberry pi and make the other GPIO connections I soldered a prototype board together which exposed the connections. The prototype board has extra connections available, because I was originally planning on using limit switches to monitor the linear actuator, however the linear actuator I used had built in limit switches.

<br>
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem;">
  <figure>
    <img src="/projects/nerf-blaster/circuit.jpeg" style="width: 100%; max-width: 225px; max-height:300px;" />
    <figcaption class="MuiTypography-root MuiTypography-caption" style="text-align: center;">Circuit</figcaption>
  </figure>
  <figure>
    <img src="/projects/nerf-blaster/pin-out.jpeg" style="width: 100%; max-width: 225px; max-height:300px;" />
    <figcaption class="MuiTypography-root MuiTypography-caption" style="text-align: center;">Pinout</figcaption>
  </figure>
</div>
<br>

To control the physical GPIO pins and read the image data from the camera the raspberry PI was running a python program, which interacted with the physical pins and exposed them through a rest interface using flask allowing them to be controlled remotely. In addition to providing the rest endpoints to control the devices the flask server also served a static angular web application that a user could load to control the device, which I choose instead of react and vanilla HTML simply so that I could get to explore another web framework that I don’t use on a regular basis. Since the flask server is providing the angular application and the rest commands to control the nerf blaster the user can then control it remotely using a computer or even their phone!

<br>
<div style="display: flex; justify-content: center;">
  <figure>
    <img src="/projects/nerf-blaster/frontend.png" style="width: 100%; max-width: 215px; max-height:464px;" />
    <figcaption class="MuiTypography-root MuiTypography-caption" style="text-align: center;">Wire Diagram</figcaption>
  </figure>
</div>
<br>

The angular website allowed the user to control the nerf blaster by monitoring a video feed, orient the blaster using the joystick, enable/disable target tracking, and also start the firing sequence using buttons by calling the commands exposed through the rest endpoint. The image tracking works by using opencv to detect a user in a frame and shifts the servos to try and keep the center of the detected image in the center of the frame.