frappe.ui.form.on("Practice Project", {
    refresh(frm) {
        frm.add_custom_button("Show Message", () => {
         frappe.msgprint("This button works");
        });
    }
});// Copyright (c) 2026, Shivam Kumar and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Practice Project", {
// 	refresh(frm) {

// 	},
// });
