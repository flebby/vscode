/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Emitter, Event } from 'vs/base/common/event';
import { StickyScrollWidgetState } from './stickyScrollWidget';

class StickyWidgetEventHandlerImpl {

	private state: StickyScrollWidgetState | undefined = undefined;

	private readonly onStickyWidgetChangeEmitter = new Emitter<StickyScrollWidgetState>();
	public readonly onStickyWidgetChange: Event<StickyScrollWidgetState> = this.onStickyWidgetChangeEmitter.event;

	public fireWidgetState(state: StickyScrollWidgetState): void {
		if (this.state === state) {
			return;
		}
		this.state = state;
		this.onStickyWidgetChangeEmitter.fire(this.state);
	}
}

export const StickyWidgetEventHandler = new StickyWidgetEventHandlerImpl();

