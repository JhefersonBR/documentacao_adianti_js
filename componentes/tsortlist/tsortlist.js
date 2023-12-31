/** @module TSortList */


function tsortlist_start( id, connect, change_action, limit ) {
    $( id ).sortable({
        connectWith: connect,
        tolerance: "pointer",
        start: function(event,ui){
            ui.item.data('index',ui.item.index());
            ui.item.data('parenta',this.id);
        },
        receive: function(event, ui) {
            if (limit > 0)
            {
                if ($(this).children().length > limit) {
                    $(ui.sender).sortable('cancel');
                    return;
                }
            }
            
            var sourceList = ui.sender;
            var targetList = $(this);
            targetListName = this.getAttribute('itemname');
            document.getElementById(ui.item.attr('id') + '_input').name = targetListName + '[]';
            
            // between lists, force to the end (vertical x horizontal)
            if (ui.item.css('display') !== targetList.attr('itemdisplay')) { 
                ui.item.css('display', targetList.attr('itemdisplay'));
                detached = ui.item.detach();
                $(targetList).append(detached);
            }
        },
        deactivate: change_action,
    }).disableSelection();
}

function tsortlist_enable_field(form_name, field) {
    setTimeout(function(){ $('form[name='+form_name+'] [itemname='+field+']').sortable('enable') },1);
}

function tsortlist_disable_field(form_name, field) {
    setTimeout(function(){ $('form[name='+form_name+'] [itemname='+field+']').sortable('disable') },1);    
}

function tsortlist_clear_field(form_name, field) {
    setTimeout(function(){ $('form[name='+form_name+'] [itemname='+field+']').empty( ) },1);    
}