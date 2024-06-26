import { InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, ToggleControl } from '@wordpress/components';

export default function BlockControls( { attributes, setAttributes } ) {
        
    const { showContent, showImage } = attributes;

    return (
        <InspectorControls key="setting">
            <Panel>
                <PanelBody title="My Reading List Settings">
                    <ToggleControl
                        label="Toggle Image"
                        checked={ showImage }
                        onChange={ (newValue) => { 
                            setAttributes( { showImage: newValue } ); 
                        } }
                    />
                    <ToggleControl
                        label="Toggle Content"
                        checked={ showContent }
                        onChange={ ( newValue ) => { 
                            setAttributes( { showContent: newValue } ); 
                        } }
                    />
                </PanelBody>
            </Panel>
        </InspectorControls> 
    );
}