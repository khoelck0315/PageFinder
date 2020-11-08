# PageFinder
Simple add-on to leverage built-in browser Find function.

Lets say you have a page with a lot of content, and you want to add a simple interface for the user to be able to find what they're looking for.  This lightweight plugin is perfect for that.  It will automatically add all the needed elements to your page, and you can customize the look by changing the CSS file.  Here's how to add it:

In your HTML page, add the following script block inside of the parent element you wish to attach the search button to:
<script>
    const searchButton = new PageFinder(<Name of parent class>, <Text to display on search button>, <Prompt to be displayed with search box>);
</script>
 
 
So, if you had a contact list page, and wanted the search button to appear insde of a DIV with a class "finder", you would add:
<div class="finder">
  <script>
      const searchButton = new PageFinder('finder', 'Find Contact', 'Search by name or address');
      //Optionally, add a back to top button
      PageFinder.addTopButton();
  </script>
</div>

The class also contains the static method PageFinder.addTopButton(), which will add a "Back to Top" button that automatically appears when the page is scrolled past the top.  Default scrollY is 300, but simply pass the desired scrollY display point of the button to the addTopButton method to change that.

So, add the script block, link the css and js files in the head, and you're ready!
