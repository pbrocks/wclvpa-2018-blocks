<?php
/**
 * Plugin Name: WCLVPA 2018 Blocks
 * Plugin URI: https://www.paidmembershipspro.com
 * Description: Sample of WordPress blocks built using the new Blocks API, currently codenamed Gutenberg; emphasis on when and why to use PHP.
 * Version: 1.2
 * Author: WCLVPA & pbrocks
 * Author URI: https://www.paidmSample of WordPress blocks built using the new Blocks API, currently codenamed Gutenberg; emphasis on when and why to use PHP.embershipspro.com
 * Text Domain: pbrocks-wclvpa
 * Domain Path: /languages
 */

namespace WCLVPA;

defined( 'ABSPATH' ) || die( 'File cannot be accessed directly' );

require_once( 'blocks/blocks.php' );

add_filter( 'block_categories', __NAMESPACE__ . '\place_blocks_in_panel', 10, 2 );
function place_blocks_in_panel( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'wclvpa',
				'title' => __( 'Amazing WCLVPA Blocks', 'pbrocks-wclvpa' ),
			),
		)
	);
}

/**
 * TODO: i18n
 */

/**
 * TODO: Autoloader
 */
