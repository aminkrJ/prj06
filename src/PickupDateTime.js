<h4 class="text-slab">
            Pickup Date and Time
          </h4>


<div class="mb-2 bg-faded p-3 rounded" id="">
            <DatePicker
                    selected={this.state.deliveryAt}
                    onChange={this.handleDeliveryDateChange.bind(this)}
                    locale="en-au"
          name="delivery_time"
          class="form-control"
      //minTime={moment().hours(9).minutes(0)}
      //maxTime={moment().hours(17).minutes(0)}
                    //showTimeSelect
                    //timeIntervals={60}
                    className="form-control"
                    dateFormat="LL"
                    minDate={moment()}
                    filterDate={this.isWeekday}
                />
          <div class="mt-2 px-4">
            <DeliveryTime onDeliveryTimeChange={this.onDeliveryTimeChange.bind(this)} value="12PM - 14PM" start={12} end={14} deliveryAt={this.state.deliveryAt} />
            <DeliveryTime onDeliveryTimeChange={this.onDeliveryTimeChange.bind(this)} value="15PM - 17PM" start={17} end={19} deliveryAt={this.state.deliveryAt} />
            <div class="text-danger">{this.state.errors ? this.state.errors['delivery_time'] : null}</div>
          </div>
          </div>

