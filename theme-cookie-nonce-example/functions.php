<?php

function ourAssets() {
  wp_enqueue_script('my-main-js', get_theme_file_uri('/index.js'), NULL, '1.0', true);
  wp_localize_script('my-main-js', 'myData', array(
    'sky' => 'blue',
    'grass' => 'green',
    'nonce' => wp_create_nonce('wp_rest')
  ));
}

add_action('wp_enqueue_scripts', 'ourAssets');