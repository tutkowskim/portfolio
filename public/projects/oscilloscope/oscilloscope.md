#### Oscilloscope
For my senior design project at Milwaukee School of Engineering I worked with four other talented engineering students to build a pocket oscilloscope. The oscilloscope was designed to acquire the signal using a custom analog to digital converter, a trigger circuit to start the collection, a memory buffer to hold the waveform, and lastly a PC application to display the waveform.

<br><br>
<div style="display: flex; justify-content: center;">
  <figure>
    <img src="/projects/oscilloscope/prototype.png" style="width: 100%; max-width: 400px;" />
    <figcaption style="text-align: center;">Prototype</figcaption>
  </figure>
</div>
<br><br>

There are three tasks which must be accomplished by analog circuitry before the input signal reaches the delta sigma modulator. First the input channel must be configured as a oscilloscope input, as opposed to a function generator output. This task is performed by four discrete transistors near the analog input. When the port mode output of the FPGA is low the P-type transistor allows the signal from the BNC connector to pass through.
<br><br>
The next task is to add a user adjustable offset to signal. This is done with the voltage source and voltage divider connected to the negative signal input. This voltage divider circuit has a digital potentiometer as the resistance to ground which allows the user to adjust the offset.
<br><br>
Finally an adjustable voltage scale factor is provided by the op-amp circuit near the output of the circuit. This op-amp circuit is configured as a non-inverting amplifier with a digital potentiometer as the feedback resistance. This configuration allows the gain of the oscilloscope to be controlled by the FPGA.

<br><br>
<div style="display: flex; justify-content: center;">
  <figure>
    <img src="/projects/oscilloscope/input-signal-circuit.png" style="width: 100%; max-width: 400px;" />
    <figcaption style="text-align: center;">Input Circuit</figcaption>
  </figure>
</div>
<br><br>

The analog to digital conversion in our system was implemented using existing FPGA resources rather than a dedicated ADC chip. This was done using a technique called delta sigma modulation. A delta sigma modulator converts an analog signal into a one bit stream of digital pulses. The one bit stream follows the level of the of the analog signal by using a feedback loop to remove error from the coarse quantization Since this process adds high frequency noise digital filter will need to be used to remove this quantization noise. The digital filtering will also be used to adjust the sample rate and increase the bit width of the data.
<br><br>
After modulation the one bit digital signal is fed into a 256 tap 8 bit hamming filter designed using the Matplotlib and Numpy libraries in python which allows the VHDL description to be generated automatically. A few important optimizations where made to the structure of the digital filter. First the one bit input of the filter allows eight bit wide two to one multiplexers to be used to implement the multiplication function in this filter. This provides a significant size saving over a true multiplier. Additionally the filter is implemented in a transposed form which has a pipelined structure allowing the filter to be run at higher speeds.


<br><br>
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem;">
  <figure>
    <img src="/projects/oscilloscope/delta-sigma-modulation.png" style="width: 100%; max-width: 400px; max-height:200px;" />
    <figcaption style="text-align: center;">Delta Sigma Modulation Waveforms</figcaption>
  </figure>
  <figure>
    <img src="/projects/oscilloscope/delta-sigma-modulation-logic.png" style="width: 100%; max-width: 400px; max-height:200px;" />
    <figcaption style="text-align: center;">Delta Sigma Modulation Circuit</figcaption>
  </figure>
</div>
<br><br>

The trigger circuit causes the oscilloscope to start collecting values from the analog to digital converter once the waveform reaches a specific voltage for a configured period of time.

<br><br>
<div style="display: flex; justify-content: center;">
  <figure>
    <img src="/projects/oscilloscope/analog-trigger-circuit.png" style="width: 100%; max-width: 400px;" />
    <figcaption style="text-align: center;">Trigger Circuit</figcaption>
  </figure>
</div>
<br><br>

Once the waveform is collected it is held in a buffer until the USB controller finishes sending it over to the PC application.

<br><br>
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem;">
  <figure>
    <img src="/projects/oscilloscope/example-input.png" style="width: 100%; max-width: 400px;" />
    <figcaption style="text-align: center;">Sample Input</figcaption>
  </figure>
  <figure>
    <img src="/projects/oscilloscope/example-output.png" style="width: 100%; max-width: 400px;" />
    <figcaption style="text-align: center;">Rendered Output</figcaption>
  </figure>
</div>
<br><br>