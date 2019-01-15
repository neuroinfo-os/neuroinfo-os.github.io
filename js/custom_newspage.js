(function() {
    var
        container   = document.getElementById( 'news-body' ),
        imgs        = container.getElementsByTagName( 'img' ),
        alt, size, div, caption, captionText;

    for( var i = 0, l = imgs.length; i < l; i++ ) {
        alt = imgs[i].getAttribute( 'alt' );
        size = alt.match( /^((big|small)\: ?)?(.+?)$/i );
        alt = size[3];
        if ( size[2] ) {
            size = size[2].toLowerCase();
            
            div = document.createElement( 'div' );
            div.className = 'image-container';
            imgs[i].parentNode.insertBefore( div, imgs[i] );
            div.appendChild( imgs[i] );

            if( size == 'small' )
                div.className += ' constrained';

            if( size == 'big' )
                div.className += ' unconstrained';
            
            captionText = document.createTextNode( alt );

            caption = document.createElement( 'div' );
            caption.className = 'caption';
            div.appendChild( caption );

            caption.appendChild( captionText );
        } else {
            div = document.createElement( 'div' );
            div.className = 'image-container-wide';
            imgs[i].parentNode.insertBefore( div, imgs[i] );
            div.appendChild( imgs[i] )
            div.className += ' unconstrained';

            captionText = document.createTextNode( alt );
            
            caption = document.createElement( 'div' );
            caption.className = 'caption'
            div.appendChild( caption )
            caption.appendChild( captionText )
        }
        
    }
})()