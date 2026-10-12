import frappe
from frappe.model.document import Document


class PracticeProject(Document):
    def validate(self):
        if not self.project_name:
            frappe.throw('Project Name is required')

        if self.budget and self.budget < 0:
            frappe.throw('Budget cannot be negative')
