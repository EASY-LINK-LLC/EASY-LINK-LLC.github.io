// Setup
$("#selectCPU option:first")
  .prop("selected", "selected")
  .prop("disabled", "disabled");
$("#selectRAM option:first")
  .prop("selected", "selected")
  .prop("disabled", "disabled");
$("#selectHDD0 option:first")
  .prop("selected", "selected")
  .prop("disabled", "disabled");
$("#selectHDD1 option:first")
  .prop("selected", "selected")
  .prop("disabled", "disabled");
$("#selectHDD2 option:first")
  .prop("selected", "selected")
  .prop("disabled", "disabled");
$("#selectHDD3 option:first")
  .prop("selected", "selected")
  .prop("disabled", "disabled");
$("#selectRaid option:first")
  .prop("selected", "selected")
  .prop("disabled", "disabled");
$("#selectBW option:first")
  .prop("selected", "selected")
  .prop("disabled", "disabled");
$("#selectIP option:first")
  .prop("selected", "selected")
  .prop("disabled", "disabled");
$("#selectDDoS option:first")
  .prop("selected", "selected")
  .prop("disabled", "disabled");

// Data
const cpu = [
  ["ATOM D525", 40],
  ["E3-1230v2", 100],
  ["E3-1230v3", 110],
  ["E3-1230v6", 150],
  ["Dual E5-2620v3", 220],
];
const ram = [
  ["4GB", 0],
  ["16GB", 10],
  ["32GB", 20],
  ["64GB", 40],
  ["128GB", 80],
  ["256GB", 160],
];
const hdd = [
  ["500GB HDD", 0],
  ["256GB SSD", 15],
  ["512GB SSD", 20],
  ["1TB SSD", 30],
  ["1TB HDD", 15],
  ["2TB HDD", 20],
];
const raid = [
  ["No RAID", 0],
  ["LSI RAID-0", 20],
  ["LSI RAID-1", 20],
  ["LSI RAID-5", 20],
  ["LSI RAID-10", 20],
];
const bandwidth = [
  ["100Mbps Unmetered", 50],
  ["1Gbps Unmetered", 200],
  ["5Gbps Unmetered", 800],
  ["10Gbps Unmetered", 1500],
];
const ipAddress = [
  ["/30 (1)", 0],
  ["/29 (5)", 8],
  ["/28 (13)", 16],
  ["/27 (29)", 32],
  ["/26 (61)", 64],
  ["/25 (125)", 128],
  ["/24 (253)", 256],
];
const firewall = [
  ["20Gbps Protection", 120],
  ["40Gbps Protection", 140],
  ["50Gbps Protection", 150],
  ["100Gbps Protection", 200],
];
const os = [
  ["Self-Install", 0],
  ["Linux", 0],
  ["Windows Server STD", 100],
];
// select options
for (var k in cpu) {
  var select = document.getElementById("selectCPU");
  var el = document.createElement("option");
  el.text = cpu[k][0];
  el.value = cpu[k][1];
  select.appendChild(el);
}
for (var k in ram) {
  var select = document.getElementById("selectRAM");
  var el = document.createElement("option");
  el.text = ram[k][0];
  el.value = ram[k][1];
  select.appendChild(el);
}
for (var k in hdd) {
  var select = document.getElementById("selectHDD0");
  var el = document.createElement("option");
  el.text = hdd[k][0];
  el.value = hdd[k][1];
  select.appendChild(el);

  var select = document.getElementById("selectHDD1");
  var el = document.createElement("option");
  el.text = hdd[k][0];
  el.value = hdd[k][1];
  select.appendChild(el);

  var select = document.getElementById("selectHDD2");
  var el = document.createElement("option");
  el.text = hdd[k][0];
  el.value = hdd[k][1];
  select.appendChild(el);

  var select = document.getElementById("selectHDD3");
  var el = document.createElement("option");
  el.text = hdd[k][0];
  el.value = hdd[k][1];
  select.appendChild(el);
}
for (var k in raid) {
  var select = document.getElementById("selectRaid");
  var el = document.createElement("option");
  el.text = raid[k][0];
  el.value = raid[k][1];
  select.appendChild(el);
}
for (var k in bandwidth) {
  var select = document.getElementById("selectBW");
  var el = document.createElement("option");
  el.text = bandwidth[k][0];
  el.value = bandwidth[k][1];
  select.appendChild(el);
}
for (var k in ipAddress) {
  var select = document.getElementById("selectIP");
  var el = document.createElement("option");
  el.text = ipAddress[k][0];
  el.value = ipAddress[k][1];
  select.appendChild(el);
}
for (var k in firewall) {
  var select = document.getElementById("selectDDoS");
  var el = document.createElement("option");
  el.text = firewall[k][0];
  el.value = firewall[k][1];
  select.appendChild(el);
}
for (var k in os) {
  var select = document.getElementById("selectOS");
  var el = document.createElement("option");
  el.text = os[k][0];
  el.value = os[k][1];
  select.appendChild(el);
}

// summary updated
function updateServerOption() {
  // // reset all if CPU changed

  // CPU
  var selectedCPU = document.getElementById("selectCPU");
  selectedCPUPrice = selectedCPU.value;
  selectedCPUDesc = selectedCPU[selectedCPU.selectedIndex].text;
  // RAM
  var selectedRAM = document.getElementById("selectRAM");
  selectedRAMDesc = selectedRAM[selectedRAM.selectedIndex].text;

  selectedRAM.selectedIndex == 0
    ? (selectedRAMPrice = 0)
    : (selectedRAMPrice = selectedRAM.value);

  // HDD0
  var selectedHDD0 = document.getElementById("selectHDD0");
  selectedHDD0Desc = selectedHDD0[selectedHDD0.selectedIndex].text;

  if (selectedHDD0.selectedIndex == 0) {
    selectedHDD0Price = 0;
  } else {
    selectedHDD0Price = selectedHDD0.value;
  }
  // HDD1
  selectedHDD1 = document.getElementById("selectHDD1");
  selectedHDD1Desc = selectedHDD1[selectedHDD1.selectedIndex].text;

  if (selectedHDD1.selectedIndex == 0) {
    selectedHDD1Price = 0;
  } else {
    selectedHDD1Price = selectedHDD1.value;
  }

  // HDD2
  selectedHDD2 = document.getElementById("selectHDD2");
  selectedHDD2Desc = selectedHDD2[selectedHDD2.selectedIndex].text;

  if (selectedHDD2.selectedIndex == 0) {
    selectedHDD2Price = 0;
  } else {
    selectedHDD2Price = selectedHDD2.value;
  }

  // HDD3
  selectedHDD3 = document.getElementById("selectHDD3");
  selectedHDD3Desc = selectedHDD3[selectedHDD3.selectedIndex].text;

  if (selectedHDD3.selectedIndex == 0) {
    selectedHDD3Price = 0;
  } else {
    selectedHDD3Price = selectedHDD3.value;
  }

  // raid
  selectedRaid = document.getElementById("selectRaid");
  selectedRaidDesc = selectedRaid[selectedRaid.selectedIndex].text;

  if (selectedRaid.selectedIndex == 0) {
    selectedRaidPrice = 0;
  } else {
    selectedRaidPrice = selectedRaid.value;
  }

  // Bandwidth
  selectedBW = document.getElementById("selectBW");
  selectedBWDesc = selectedBW[selectedBW.selectedIndex].text;

  if (selectedBW.selectedIndex == 0) {
    selectedBWPrice = 0;
  } else {
    selectedBWPrice = selectedBW.value;
  }

  // IP
  selectedIP = document.getElementById("selectIP");
  selectedIPDesc = selectedIP[selectedIP.selectedIndex].text;

  if (selectedIP.selectedIndex == 0) {
    selectedIPPrice = 0;
  } else {
    selectedIPPrice = selectedIP.value;
  }

  // OS
  selectedOS = document.getElementById("selectOS");
  selectedOSDesc = selectedOS[selectedOS.selectedIndex].text;

  if (selectedOS.selectedIndex == 0) {
    selectedOSPrice = 0;
  } else {
    selectedOSPrice = selectedOS.value;
  }

  // DDoS
  selectedDDoS = document.getElementById("selectDDoS");
  selectedDDoSDesc = selectedDDoS[selectedDDoS.selectedIndex].text;

  if (selectedDDoS.selectedIndex == 0) {
    selectedDDoSPrice = 0;
  } else {
    selectedDDoSPrice = selectedDDoS.value;
  }

  // display hard drive in order
  if (selectedCPU.selectedIndex === 0) {
    $("#selectHDD0").show();
    $("#selectHDD1").hide();
    $("#selectHDD2").hide();
    $("#selectHDD3").hide();
    $("#selectRaid").hide();
  } else if (selectedCPU.selectedIndex == 1 && selectedHDD1.selectedIndex > 0) {
    $("#selectHDD0").show();
    $("#selectHDD1").show();
    $("#selectHDD2").hide();
    $("#selectHDD3").hide();
    $("#selectRaid").show();
  } else if (selectedCPU.selectedIndex != 1 && selectedHDD1.selectedIndex > 0) {
    $("#selectHDD0").show();
    $("#selectHDD1").show();
    $("#selectHDD2").show();
    $("#selectHDD3").hide();
    $("#selectRaid").show();
  } else {
    $("#selectHDD0").show();
    $("#selectHDD1").hide();
    $("#selectHDD2").hide();
    $("#selectHDD3").hide();
    $("#selectRaid").hide();
  }

  // hard drive
  if (selectedHDD0.selectedIndex > 0) {
    $("#selectHDD1").show();
  }
  if (selectedHDD2.selectedIndex > 0) {
    $("#selectHDD3").show();
  }

  // option for atom
  if (selectedCPU.selectedIndex === 1) {
    $("#selectRAM").find("option:gt(1)").prop("disabled", "disabled");
    $("#selectHDD0").find("option:gt(4)").prop("disabled", "disabled");
    $("#selectHDD1").find("option:gt(4)").prop("disabled", "disabled");
    $("#selectRaid").find("option:gt(3)").prop("disabled", "disabled");
    $("#selectIP").find("option:gt(3)").prop("disabled", "disabled");
    $("#selectBW").find("option:gt(2)").prop("disabled", "disabled");
  }
  // e3 series
  if (
    selectedCPU.selectedIndex === 2 ||
    selectedCPU.selectedIndex === 3 ||
    selectedCPU.selectedIndex === 4
  ) {
    $("#selectRAM").find("option:eq(1)").prop("disabled", "disabled");
    $("#selectRAM").find("option:gt(3)").prop("disabled", "disabled");
    $("#selectHDD0").find("option:eq(1)").prop("disabled", "disabled");
    $("#selectHDD1").find("option:eq(1)").prop("disabled", "disabled");
    $("#selectHDD2").find("option:eq(1)").prop("disabled", "disabled");
    $("#selectHDD3").find("option:eq(1)").prop("disabled", "disabled");
  }
  // dual e5-2620
  if (selectedCPU.selectedIndex === 5) {
    $("#selectRAM").find("option:eq(1)").prop("disabled", "disabled");
    $("#selectHDD0").find("option:eq(1)").prop("disabled", "disabled");
    $("#selectHDD1").find("option:eq(1)").prop("disabled", "disabled");
    $("#selectHDD2").find("option:eq(1)").prop("disabled", "disabled");
    $("#selectHDD3").find("option:eq(1)").prop("disabled", "disabled");
  }

  // calcuate
  var recurringPrice =
    parseFloat(selectedCPUPrice) +
    parseFloat(selectedRAMPrice) +
    parseFloat(selectedHDD0Price) +
    parseFloat(selectedHDD1Price) +
    parseFloat(selectedHDD2Price) +
    parseFloat(selectedHDD3Price) +
    parseFloat(selectedRaidPrice) +
    parseFloat(selectedBWPrice) +
    parseFloat(selectedIPPrice) +
    parseFloat(selectedOSPrice) +
    parseFloat(selectedDDoSPrice);

  // display
  var getConfig = document.getElementById("configurationSummary");
  var price =
    "<label>CPU:</label>" +
    selectedCPUDesc +
    "<br>" +
    "<label>RAM:</label>" +
    selectedRAMDesc +
    "<br>" +
    "<label>HDD:</label>" +
    selectedHDD0Desc +
    "<br>" +
    selectedHDD1Desc +
    "<br>" +
    selectedHDD2Desc +
    "<br>" +
    selectedHDD3Desc +
    "<br>" +
    "<label>RAID:</label>" +
    selectedRaidDesc +
    "<br>" +
    "<label>Bandwidth:</label>" +
    selectedBWDesc +
    "<br>" +
    "<label>IPv4:</label>" +
    selectedIPDesc +
    "<br>" +
    "<label>OS:</label>" +
    selectedOSDesc +
    "<br>" +
    "<label>Firewall:</label>" +
    selectedDDoSDesc +
    "<br><h4>Total:</h4> " +
    '<a href="#" onclick="sendMail();">$' +
    recurringPrice +
    '/Month <i class="fa fa-shopping-cart fa-lg"></i></a>';

  getConfig.innerHTML = price;
}

// send email function
function sendMail() {
  let email = "sales@easylinkserver.com";
  let subject = "[EL] Custome Order";
  let body = $("#configurationSummary").text() + $("#websitePrice").text();
  let matilTo =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  location.href = matilTo;
}
