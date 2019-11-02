from django.db import models


class User(models.Model):
    """
    User Model
    """
    __USER_ROLE_CHOICES = (
        (1, 'Attendee'),
        (2, 'Volunteer'),
        (3, 'Presenter'),
        (4, 'Organizer'),
        (5, 'TeamLead')
    )

    id = models.AutoField(primary_key=True)

    role = models.PositiveSmallIntegerField(
        blank=False,
        choices=__USER_ROLE_CHOICES,
        default=1
    )

    username = models.CharField(
        max_length=50,
        unique=True
    )

    password = models.CharField(blank=False)

    def __init__(
            self,
            username: str,
            password: str,
            role: int) -> None:
        self.username = username
        self.password = hash(password)  # TODO: Make hashing safe
        self.role

    def reset_password(self, password, password_confirm):
        pass

    def confirm_password(self, password, password_confirm):
        pass


class Profile(models.Model):
    """
    Base Profile Class
    This can be extended for unique Role profiles
    """

    def __init__(self, fName: str, lName: str, email: str) -> None:
        self.first_name = fName
        self.last_name = lName
        self.email = email
