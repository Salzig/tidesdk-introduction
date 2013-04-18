require 'rack'

run Rack::File.new('./')
