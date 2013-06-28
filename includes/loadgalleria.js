// Load the classic theme
Galleria.loadTheme('/includes/galleria.classic.min.js');

// Enable lightbox
Galleria.configure({ lightbox: true });

// Initialize Galleria
Galleria.run('.autoplay', { autoplay: 5000 });
Galleria.run('.galleria');

// Add fullscreen mode
Galleria.ready(function() {
  var gallery = this;
  this.addElement('fscr');
  this.appendChild('stage','fscr');
  var fscr = this.$('fscr')
  .click(function() { gallery.toggleFullscreen();});
  this.addIdleState(this.get('fscr'), { opacity:0 });
});
