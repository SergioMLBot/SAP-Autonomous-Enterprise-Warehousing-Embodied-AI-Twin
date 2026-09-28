// Assisted Mode data, generated from assisted_mode_template 1.md: placeholders shown in
// "Empty Blanks" and the system values injected exactly as written by "Fill with System Data"
// (production order 1000524 / operation 0010, plant 0001). Regenerate from the template; do not edit by hand.
export const ASSISTED_FIELDS = Object.freeze({
 "Business Object": [
  {
   "label": "Production Order / Operation",
   "placeholder": "Enter production order number / operation",
   "value": "Production Order 1000524 / Operation 0010"
  },
  {
   "label": "Material",
   "placeholder": "Enter material code",
   "value": "HKE-SERIAL_QM"
  },
  {
   "label": "Plant",
   "placeholder": "Enter plant code",
   "value": "0001"
  }
 ],
 "Process": [
  {
   "label": null,
   "placeholder": "Describe the process context",
   "value": "Manufacturing Execution – Production Order Operation 0010"
  }
 ],
 "Exception Type": [
  {
   "label": null,
   "placeholder": "Enter exception type",
   "value": "Physical execution required for released production operation"
  }
 ],
 "Business Impact": [
  {
   "label": null,
   "placeholder": "Describe the business impact",
   "value": "Production of 2 EA of HKE-SERIAL_QM requires completion of operation 0010 at work center HKE00001."
  }
 ],
 "Urgency": [
  {
   "label": null,
   "placeholder": "Select or describe urgency level",
   "value": "Normal – execute according to production order schedule"
  }
 ],
 "Root Cause Candidates": [
  {
   "label": null,
   "placeholder": "List potential root causes",
   "value": "Production Order 1000524 is released (REL) and operation 0010 is assigned to work center HKE00001; physical execution of the operation is required to progress production."
  }
 ],
 "Physical Dependency": [
  {
   "label": null,
   "placeholder": "Describe physical dependencies",
   "value": "Operation 0010 is assigned to work center HKE00001 in plant 0001 and requires execution of the manufacturing operation on the assigned production resource."
  }
 ],
 "Physical Location": [
  {
   "label": null,
   "placeholder": "Enter plant / work center location",
   "value": "Plant 0001 / Work Center HKE00001"
  }
 ],
 "Required Outcome": [
  {
   "label": null,
   "placeholder": "Describe the required outcome",
   "value": "Successfully execute production operation 0010 for 2 EA and provide verifiable execution evidence for production confirmation."
  }
 ],
 "Available Resources": [
  {
   "label": "SAP Work Center",
   "placeholder": "Enter SAP work center",
   "value": "HKE00001"
  },
  {
   "label": "Machine Capacity Category",
   "placeholder": "Enter machine capacity category",
   "value": "001"
  },
  {
   "label": "Person Capacity Category",
   "placeholder": "Enter person capacity category",
   "value": "002"
  },
  {
   "label": "Supply Area",
   "placeholder": "Enter supply area",
   "value": "CB-PSA0001"
  }
 ],
 "Constraints": [
  {
   "label": "Production Order",
   "placeholder": "Enter production order",
   "value": "1000524"
  },
  {
   "label": "Material",
   "placeholder": "Enter material",
   "value": "HKE-SERIAL_QM"
  },
  {
   "label": "Plant",
   "placeholder": "Enter plant",
   "value": "0001"
  },
  {
   "label": "Operation",
   "placeholder": "Enter operation",
   "value": "0010"
  },
  {
   "label": "Operation ID",
   "placeholder": "Enter operation ID",
   "value": "00000001"
  },
  {
   "label": "Control Key",
   "placeholder": "Enter control key",
   "value": "PP01"
  },
  {
   "label": "Production Version",
   "placeholder": "Enter production version",
   "value": "FAI3"
  },
  {
   "label": "Routing",
   "placeholder": "Enter routing / counter",
   "value": "50000332 / Counter 1"
  },
  {
   "label": "Operation Quantity",
   "placeholder": "Enter quantity and unit",
   "value": "2 EA"
  }
 ],
 "Safety Requirements": [
  {
   "label": null,
   "placeholder": "Enter safety requirements",
   "value": "Execute only when the physical execution environment is confirmed safe. Robot must stop if required safety state, device state, or operating conditions cannot be verified."
  }
 ],
 "Authorization Requirements": [
  {
   "label": null,
   "placeholder": "Enter authorization requirements",
   "value": "Production Order 1000524 is released (REL). Physical execution requires authorization through the PhyX execution/approval gate before dispatching the mission."
  }
 ],
 "Evidence Requirements": [
  {
   "label": "Execution ID",
   "placeholder": "Enter execution ID reference",
   "value": "Production Order 1000524"
  },
  {
   "label": "Operation",
   "placeholder": "Enter operation reference",
   "value": "Operation 0010"
  },
  {
   "label": "Work Center",
   "placeholder": "Enter work center reference",
   "value": "Work Center HKE00001"
  },
  {
   "label": "Execution Timestamps",
   "placeholder": "Enter execution start/end timestamp",
   "value": "Execution start/end timestamp"
  },
  {
   "label": "Robot Execution Status",
   "placeholder": "Enter robot execution status",
   "value": "Robot execution status"
  },
  {
   "label": "Operation Result",
   "placeholder": "Enter operation result",
   "value": "Operation result"
  },
  {
   "label": "Sensor / Device Evidence",
   "placeholder": "Enter sensor or device evidence",
   "value": "Sensor/device evidence"
  },
  {
   "label": "Quality / Inspection Result",
   "placeholder": "Enter quality or inspection result where applicable",
   "value": "Quality/inspection result where applicable"
  },
  {
   "label": "SAP Confirmation Reference",
   "placeholder": "Enter SAP operation confirmation reference",
   "value": "SAP operation confirmation reference"
  }
 ],
 "Resolution Criteria": [
  {
   "label": null,
   "placeholder": "Enter resolution criteria",
   "value": "Operation 0010 is successfully executed for the required quantity of 2 EA, required physical evidence is captured and validated, and the corresponding SAP production operation can be confirmed."
  }
 ]
});
export const ASSISTED_CHECKS = Object.freeze({
 "isCausePhysical": {
  "label": "Is Cause Physical",
  "placeholder": "yes / no / unknown",
  "value": "yes"
 },
 "stateObservable": {
  "label": "State Observable",
  "placeholder": "yes / no / unknown",
  "value": "yes"
 },
 "suitableDeviceAvailable": {
  "label": "Suitable Device Available",
  "placeholder": "yes / no / unknown",
  "value": "yes"
 },
 "locationKnown": {
  "label": "Location Known",
  "placeholder": "yes / no / unknown",
  "value": "yes"
 },
 "actionSafe": {
  "label": "Action Safe",
  "placeholder": "yes / no / unknown",
  "value": "unknown"
 },
 "actionAuthorized": {
  "label": "Action Authorized",
  "placeholder": "yes / no / unknown",
  "value": "unknown"
 },
 "resolutionVerifiable": {
  "label": "Resolution Verifiable",
  "placeholder": "yes / no / unknown",
  "value": "yes"
 }
});
