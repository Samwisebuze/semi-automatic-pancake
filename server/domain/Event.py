import datetime


class Event(object):
    """
    constructor: 
    type of the datetime variable is datetime.datetime (not sure if it is right)
    not sure what tag is
    """
    def __init__(self, sDate: datetime.datetime, eDate: datetime.datetime, title: str, presenter: str, organizer; str, tags):
        self.startDate = sDate
        self.endDate = eDate
        self.title = title
        self.presenter = presenter
        self.organizer = organizer
        self.tags = tags
    
    def checkIn(user: User):
        """
        If scan is successful and user was not previously checkedin, check-in
        else don't
        """
        user.
