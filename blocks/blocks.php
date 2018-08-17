<?php
/**
 * Enqueues blocks in editor and dynamic blocks
 *
 * @package blocks
 */
namespace WCLVPA\Blocks;

defined( 'ABSPATH' ) || die( 'File cannot be accessed directly' );

/**
 * Dynamic Block Requires
 */
require_once( 'checkout-button/block.php' );


/**
 * Enqueue block editor only JavaScript and CSS
 */
function wclvpa_block_editor_scripts() {

	// Make paths variables so we don't write em twice.
	$block_path = 'js/editor.blocks.js';
	$style_path = 'css/blocks.editor.css';

	// Enqueue the bundled block JS file.
	wp_enqueue_script(
		'wclvpa-blocks-js',
		plugins_url( $block_path, dirname( __FILE__ ) ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ],
		filemtime( plugin_dir_path( dirname( __FILE__ ) ) . $block_path )
	);

	// Enqueue optional editor only styles.
	wp_enqueue_style(
		'wclvpa-editor-css',
		plugins_url( $style_path, dirname( __FILE__ ) ),
		[ 'wp-blocks' ],
		filemtime( plugin_dir_path( dirname( __FILE__ ) ) . $style_path )
	);

}

// Hook scripts function into block editor hook.
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\wclvpa_block_editor_scripts' );


/**
 * Enqueue front end and editor JavaScript and CSS
 */
function wclvpa_block_scripts() {
	$block_path = 'js/frontend.blocks.js';
	$style_path = 'css/blocks.style.css';

	// Enqueue the bundled block JS file.
	wp_enqueue_script(
		'wclvpa-blocks-frontend-js',
		plugins_url( $block_path, dirname( __FILE__ ) ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ],
		filemtime( plugin_dir_path( dirname( __FILE__ ) ) . $block_path )
	);

	// Enqueue frontend and editor block styles.
	wp_enqueue_style(
		'wclvpa-blocks-css',
		plugins_url( $style_path, dirname( __FILE__ ) ),
		[ 'wp-blocks' ],
		filemtime( plugin_dir_path( dirname( __FILE__ ) ) . $style_path )
	);

}

// Hook scripts function into block editor hook.
add_action( 'enqueue_block_assets', __NAMESPACE__ . '\wclvpa_block_scripts' );
