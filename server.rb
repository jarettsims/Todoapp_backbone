require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'pry'
require_relative './db/connection'
require_relative './lib/todo'

after do
	ActiveRecord::Base.connection.close
end

get '/' do
	File.read('./views/index.html')
end

get '/todos' do
	Todo.all.to_json
end