# Module: Remote Image Slideshow
The `MMM-RemoteImageSlideshow` module is designed to display images, one at a time on a fixed interval, from a list of URLs. The image heights and widths can be fixed.

## Dependencies / Requirements

This module requires no special dependencies.

## Operation

This module will take in a list of URLs, one or more, pointing image files. The module will display those images in either alphabetical or random order, across either each path one at time or across all the paths at once. Once all the images have been shown, it will loop back and start again.

Extra configurations include setting the amount of time an image is shown for, and using a fixed image height and/or width.


## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-RemoteImageSlideshow',
		position: 'bottom_left',
		config: {
			imagePaths: ['http://example.com/image1.png','http://example.com/image2.png']
		}
	}	
]
````

## Configuration options

The following properties can be configured:

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>	
		<tr>
			<td><code>imagePaths</code></td>
			<td>Array value containing strings. Each string should be an URL to an image file.<br>
				<br><b>Example:</b> <code>['modules/MMM-ImageSlideshow/example1']</code>
				<br>This value is <b>REQUIRED</b>
			</td>
		</tr>		
		<tr>
			<td><code>slideshowSpeed</code></td>
			<td>Integer value, the length of time to show one image before switching to the next, in milliseconds.<br>
				<br><b>Example:</b> <code>6000</code>
				<br><b>Default value:</b> <code>10000</code>
				<br>This value is <b>OPTIONAL</b>
			</td>
		</tr>
		<tr>
			<td><code>delayUntilRestart</code></td>
			<td>Integer value, the length of time to restart the slideshow after the last image has been shown, in milliseconds. The module will go blank will waits to restart. This value defaults to zero, meaning no delay until restarting.<br>
				<br><b>Example:</b> <code>6000</code>
				<br><b>Default value:</b> <code>0</code>
				<br>This value is <b>OPTIONAL</b>
			</td>
		</tr>		
		<tr>
			<td><code>fixedImageWidth</code></td>
			<td>Integer value, sets a fixed pixel width for all the images to be shown. If set to 0, the image's actual width is used.<br>
				<br><b>Example:</b> <code>250</code>
				<br><b>Default value:</b> <code>0</code>
				<br>This value is <b>OPTIONAL</b>
			</td>
		</tr>
		<tr>
			<td><code>fixedImageHeight</code></td>
			<td>Integer value, sets a fixed pixel height for all the images to be shown. If set to 0, the image's actual height is used.<br>
				<br><b>Example:</b> <code>300</code>
				<br><b>Default value:</b> <code>0</code>
				<br>This value is <b>OPTIONAL</b>
			</td>
		</tr>        
    </tbody>
</table>

## Credits
Taken from Adam Moses MMM-ImageSlideShow https://github.com/AdamMoses-GitHub/MMM-ImageSlideshow