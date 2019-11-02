FROM python:3.6

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code

RUN pip install pipenv

COPY Pipfile* ./

RUN pipenv lock --requirements > requirements.txt

RUN pip install --no-cache-dir -r /code/requirements.txt

COPY  . ./
