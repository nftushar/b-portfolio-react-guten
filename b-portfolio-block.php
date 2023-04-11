<?php
/**
 * Plugin Name:       B Portfolio Block
 * Description:       B Portfolio Block plugin helps users display their work in a visually appealing way with customizable layouts and filtering options.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            b-Plugins
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       b-portfolio-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function create_block_b_portfolio_block_block_init() {
    register_block_type( __DIR__ . "/build", [
        "render_callback" => function ( $attributes ) {
            wp_enqueue_script('jquery');
            extract( $attributes );
            $blockClassName = 'bppb-projects-items ' . $className;
            ob_start(); ?>
            <div class="<?php echo esc_attr( $blockClassName ); ?>" id='b-projects-<?php echo esc_attr( $clientId ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

            <?php return ob_get_clean();
        }
    ] );
}
add_action( 'init', 'create_block_b_portfolio_block_block_init' );
