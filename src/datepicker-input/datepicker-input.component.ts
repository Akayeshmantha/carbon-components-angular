import {
	Component,
	Input,
	Output,
	EventEmitter,
	TemplateRef
} from "@angular/core";

@Component({
	selector: "ibm-date-picker-input",
	template: `
	<div class="bx--form-item">
		<div class="bx--date-picker"
			[ngClass]="{
				'bx--date-picker--single' : type === 'single',
				'bx--date-picker--range' : type === 'range',
				'bx--date-picker--light' : theme === 'light',
				'bx--skeleton' : skeleton
			}">
			<div class="bx--date-picker-container">
				<label [for]="id" class="bx--label">
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</label>
				<ibm-icon-calendar16
					*ngIf="type == 'single'"
					data-date-picker-icon
					class="bx--date-picker__icon"
					data-open>
				</ibm-icon-calendar16>
				<input
				    #dateInput
					*ngIf="!skeleton"
					autocomplete="off"
					type="text"
					class="bx--date-picker__input"
					[pattern]="pattern"
					[placeholder]="placeholder"
					data-date-picker-input
					[attr.data-input] = "type == 'single' || type == 'range' ?  '' : null"
					[id]= "id"
					[disabled]="disabled"
					[attr.data-invalid]="(invalid ? true : null)"
					(change) = "valueChange.emit(dateInput.value)"/>
					<div *ngIf="invalid" class="bx--form-requirement">
						<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
						<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
					</div>
			</div>
			<ibm-icon-calendar16
				*ngIf= "type == 'range' && hasIcon"
				data-date-picker-icon
				class="bx--date-picker__icon"
				data-open>
			</ibm-icon-calendar16>
		</div>
	</div>
	`
})
export class DatePickerInput {
	private static datePickerCount = 0;

	/**
	 * Select a calendar type for the `model`.
	 * Internal purposes only.
	 */
	@Input() type: "simple" | "single" | "range" = "simple";

	@Input() id = `datepicker-${DatePickerInput.datePickerCount++}`;

	@Input() hasIcon = false;

	@Input() label: string | TemplateRef<any>;

	@Input() placeholder = "mm/dd/yyyy";

	@Input() pattern = "\\d{1,2}/\\d{1,2}/\\d{4}";

	@Output() valueChange: EventEmitter<string> = new EventEmitter();

	@Input() theme: "light" | "dark" = "dark";

	@Input() disabled = false;

	@Input() invalid = false;

	@Input() invalidText: string | TemplateRef<any>;

	@Input() skeleton = false;

	protected isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
