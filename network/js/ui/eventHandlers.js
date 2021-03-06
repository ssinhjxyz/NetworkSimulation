
var onEdit = function(){
		hideResultsAndEditor();
		$('.links').removeClass('active');
		$('#editLink').addClass('active');
		$('#editor').show();
}

var onChangeTopology = function(){
		hideResultsAndEditor();
		$('.links').removeClass('active');
		$('#changeTopologyLink').addClass('active');
		$('#changeTopology').show();
}

var onSetPriority = function(){
		hideResultsAndEditor();
		$('.links').removeClass('active');
		$('#setPriorityLink').addClass('active');
		$('#setPriority').show();
}


var onChangeTopologyCheckbox = function(checkbox){
	if(checkbox.checked){
		ChangeTopology = true;
		UpdateTopologyfromUI();
	}
	else{
		ChangeTopology = false;
		Topology = DefaultTopology;
	}
}


var hideResultsAndEditor = function(){
	$('div.results').hide();
	$('#editor').hide();
	$('#changeTopology').hide();
	$('#setPriority').hide();
}

var onSummary = function(){
		hideResultsAndEditor();
		$('.summary').show();
		$('.links').removeClass('active');
		$('#summaryLink').addClass('active');
}


var onInterPacket = function(){
		hideResultsAndEditor();
		$('.interPacket').show();
		$('.links').removeClass('active');
		$('#interPacketLink').addClass('active');
}


var onQueueDelay = function(){
		hideResultsAndEditor();
		$('.queueDelay').show();
		$('.links').removeClass('active');
		$('#queueDelayLink').addClass('active');
}


var onCollisions = function(){
		hideResultsAndEditor();
		$('.collisions').show();
		$('.links').removeClass('active');
		$('#collisionsLink').addClass('active');
}


var onE2EDelay = function(){
		hideResultsAndEditor();
		$('.e2eDelay').show();
		$('.links').removeClass('active');
		$('#e2eDelayLink').addClass('active');
}


var onPathTrace = function(){
		hideResultsAndEditor();
		$('.pathTrace').show();
		$('.links').removeClass('active');
		$('#pathTraceLink').addClass('active');
}


var onPacketDelays = function(){
		hideResultsAndEditor();
		$('.packetDelays').show();
		$('.links').removeClass('active');
		$('#packetDelaysLink').addClass('active');
}


var onEventLog = function(){	
		hideResultsAndEditor();
		$('.eventLog').show();
		$('.links').removeClass('active');
		$('#eventLogLink').addClass('active');
}

