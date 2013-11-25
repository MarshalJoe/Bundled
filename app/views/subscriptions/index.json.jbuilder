json.array!(@subscriptions) do |subscription|
  json.extract! subscription, :name, :fee, :monthly, :annually
  json.url subscription_url(subscription, format: :json)
end
