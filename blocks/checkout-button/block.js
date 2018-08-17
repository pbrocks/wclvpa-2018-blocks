/**
 * Block: WCLVPA Checkout Button
 *
 * Add a styled link to the WCLVPA checkout page for a
 * specific level.
 *
 */
 /**
  * Block dependencies
  */
 import './style.scss';
 import classnames from 'classnames';
 import Inspector from './inspector';
 /**
  * Internal block libraries
  */
 const { __ } = wp.i18n;
 const {
    registerBlockType,
    BlockControls,
} = wp.blocks;
const {
    PanelBody,
    TextControl,
} = wp.components;

const {
    InspectorControls,
} = wp.editor;

 /**
  * Register block
  */
 export default registerBlockType(
     'wclvpa/checkout-button',
     {
         title: __( 'PMPro Checkout Button', 'pbrocks-wclvpa' ),
         description: __( 'Let users check out for a level.', 'pbrocks-wclvpa' ),
         category: 'wclvpa',
         icon: 'migrate',
         keywords: [
             __( 'buy', 'pbrocks-wclvpa' ),
             __( 'level', 'pbrocks-wclvpa' ),
         ],
         supports: {
         },
         attributes: {
             text: {
                 type: 'string',
                 default: 'Enroll Me NOW!!',
             },
             css_class: {
                 type: 'string',
                 default: 'wp-block-pbrocks-wclvpa-checkout-button',
             },
             level: {
                  type: 'integer'
             }
         },
         edit: props => {
             const { attributes: { text, level, css_class}, className, setAttributes, isSelected } = props;
             return [
                isSelected && <Inspector { ...{ setAttributes, ...props} } />,
                <div
                    className={ className }
                >
                  <a class={css_class} >{text}</a>
                </div>,
                isSelected && <div>
                  <br/>
                   <TextControl
                       label={ __( 'Checkout Button Text', 'pbrocks-wclvpa' ) }
                       value={ text }
                       onChange={ text => setAttributes( { text } ) }
                   />
                   <TextControl
                       label={ __( 'Level ID for this button', 'pbrocks-wclvpa' ) }
                       value={ level }
                       onChange={ level => setAttributes( { level } ) }
                   />
                   <TextControl
                       label={ __( 'CSS Class applied to button', 'pbrocks-wclvpa' ) }
                       value={ css_class }
                       onChange={ css_class => setAttributes( { css_class } ) }
                   />
                   </div>,
            ];
         },
         save() {
           return null;
         },
       }
 );
