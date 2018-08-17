/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    PanelBody,
    PanelRow,
    TextControl,
} = wp.components;
const {
    InspectorControls,
} = wp.editor;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { text, level, css_class }, setAttributes } = this.props;

        return (
          <InspectorControls>
              <PanelBody>
                 <TextControl
                     label={ __( 'Button Text', 'pbrocks-wclvpa' ) }
                     help={ __( 'Text for checkout button', 'pbrocks-wclvpa' ) }
                     value={ text }
                     onChange={ text => setAttributes( { text } ) }
                 />
              </PanelBody>
              <PanelBody>
                 <TextControl
                     label={ __( 'Level ID', 'pbrocks-wclvpa' ) }
                     help={ __( 'Level id to check out', 'pbrocks-wclvpa' ) }
                     value={ level }
                     onChange={ level => setAttributes( { level } ) }
                 />
              </PanelBody>
              <PanelBody>
                 <TextControl
                     label={ __( 'CSS Class', 'pbrocks-wclvpa' ) }
                     help={ __( 'Additional Styling for Button', 'pbrocks-wclvpa' ) }
                     value={ css_class }
                     onChange={ css_class => setAttributes( { css_class } ) }
                 />
              </PanelBody>
          </InspectorControls>
        );
    }
}
