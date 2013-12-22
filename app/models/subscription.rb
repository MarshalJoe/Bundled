class Subscription < ActiveRecord::Base
	belongs_to :user

	def next_month_total
		@subscriptions.each do |sub|
			@@month_total += sub.fee
		end
		return @@month_total
	end




end
